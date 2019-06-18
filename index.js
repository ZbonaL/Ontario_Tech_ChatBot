/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require('dotenv').config({silent: true});


let express = require('express'); // app server
let bodyParser = require('body-parser'); // parser for post requests
let AssistantV2 = require('watson-developer-cloud/assistant/v2'); // watson sdk

let app = express();

// Bootstrap application settings
app.use(express.static('./dist')); // load UI from public folder
app.use(bodyParser.json());

// Create the service wrapper

let assistant = new AssistantV2({
  version: '2019-02-28'
});

let newContext = {
  global : {
    system : {
      turn_count : 1
    }
  }
};

// Endpoint to be call from the client side
app.post('/api/message', function (req, res) {
  let assistantId = process.env.ASSISTANT_ID || '<assistant-id>';
  if (!assistantId || assistantId === '<assistant-id>>') {
    return res.json({
      'output': {
        'text': 'The app has not been configured with a <b>ASSISTANT_ID</b> environment letiable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/assistant-simple">README</a> documentation on how to set this letiable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/assistant-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
      }
    });
  }
  let contextWithAcc = (req.body.context) ? req.body.context : newContext;

  if (req.body.context) {
    contextWithAcc.global.system.turn_count += 1;
  }

  //console.log(JSON.stringify(contextWithAcc, null, 2));

  let textIn = '';

  if(req.body.input) {
    textIn = req.body.input.text;
  }

  let payload = {
    assistant_id: assistantId,
    session_id: req.body.session_id,
    context: contextWithAcc,
    input: {
      message_type : 'text',
      text : textIn,
      options : {
        return_context : true
      }
    }
  };

  // Send the input to the assistant service
  assistant.message(payload, function (err, data) {
    if (err) {
      const status = (err.code  !== undefined && err.code > 0)? err.code : 500;
      return res.status(status).json(err);
    }

    return res.json(data);
  });
});

app.get('/api/session', function (req, res) {
  assistant.createSession({
    assistant_id: process.env.ASSISTANT_ID || '{assistant_id}',
  }, function (error, response) {
    if (error) {
      return res.send(error);
    } else {
      return res.send(response);
    }
  });
});



var port = process.env.PORT || 3000;

app.listen(port, function() {
  // eslint-disable-next-line
  console.log('Server running on port: %d', port);
});

// module.exports = app;