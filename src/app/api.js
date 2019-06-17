// The Api module is designed to handle all interactions with the server

let Api = (function() {
  let requestPayload;
  let responsePayload;
  let messageEndpoint = '/api/message';

  let sessionEndpoint = '/api/session';

  let sessionId = null;

  // Publicly accessible methods defined
  return {
    sendRequest: sendRequest,
    getSessionId: getSessionId,

    // The request/response getters/setters are defined here to prevent internal methods
    // from calling the methods without any of the callbacks that are added elsewhere.
    getRequestPayload: function() {
      return requestPayload;
    },
    setRequestPayload: function(newPayloadStr) {
      requestPayload = JSON.parse(newPayloadStr);
    },
    getResponsePayload: function() {
      return responsePayload;
    },
    setResponsePayload: function(newPayloadStr) {
      responsePayload = JSON.parse(newPayloadStr);
    },
    setErrorPayload: function() {
    }
  };

  function getSessionId(callback) {
    let http = new XMLHttpRequest();
    http.open('GET', sessionEndpoint, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onreadystatechange = function () {
      if (http.readyState === XMLHttpRequest.DONE) {
        let res = JSON.parse(http.responseText);
        sessionId = res.session_id;
        callback();
      }
    };
    http.send();
  }

  // Send a message request to the server
  function sendRequest(text, context) {
    // Build request payload
    let payloadToWatson = {
      session_id: sessionId
    };

    payloadToWatson.input = {
      message_type: 'text',
      text: text,
    };

    if (context) {
      payloadToWatson.context = context;
    }

    // Built http request
    let http = new XMLHttpRequest();
    http.open('POST', messageEndpoint, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onreadystatechange = function() {
      if (http.readyState === XMLHttpRequest.DONE && http.status === 200 && http.responseText) {
        Api.setResponsePayload(http.responseText);
      } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        Api.setErrorPayload({
          'output': {
            'generic': [
              {
                'response_type': 'text',
                'text': 'I\'m having trouble connecting to the server, please refresh the page'
              }
            ],
          }
        });
      }
    };

    let params = JSON.stringify(payloadToWatson);
    // Stored in variable (publicly visible through Api.getRequestPayload)
    // to be used throughout the application
    if (Object.getOwnPropertyNames(payloadToWatson).length !== 0) {
      Api.setRequestPayload(params);
    }

    // Send request
    http.send(params);
  }
}());
