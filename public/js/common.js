// The Common module is designed as an auxiliary module
// to hold functions that are used in multiple other modules
/* eslint no-unused-vars: "off" */

let Common = (function () {
  // Publicly accessible methods defined
  return {
    buildDomElement: buildDomElementFromJson,
    fireEvent: fireEvent,
    listForEach: listForEach
  };

  // Take in JSON object and build a DOM element out of it
  // (Limited in scope, cannot necessarily create arbitrary DOM elements)
  // JSON Example:
  //  {
  //    "tagName": "div",
  //    "text": "Hello World!",
  //    "className": ["aClass", "bClass"],
  //    "attributes": [{
  //      "name": "onclick",
  //      "value": "alert("Hi there!")"
  //    }],
  //    "children: [{other similarly structured JSON objects...}, {...}]
  //  }
  function buildDomElementFromJson(domJson) {
    // Create a DOM element with the given tag name
    let element = document.createElement(domJson.tagName);

    // Fill the "content" of the element
    if (domJson.text) {

      let regexExp = /https?:\/\/?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
      let regexExp2 = /https?:\/\/?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?#[a-z0-9]{1,22}/gi

      let link;

      if(domJson.text.match(regexExp)){
        link  = domJson.text.match(regexExp)
      }else if(domJson.text.match(regexExp2)){
        link  = domJson.text.match(regexExp2)
        console.log(link);
      }

      if(link && link.length){
        link.forEach(function(link_text){
          domJson.text = domJson.text.replace(link_text, '<a href="' + link_text+ '">' + "here" + '</a>')
        })
      }

      element.innerHTML = domJson.text;
    } else if (domJson.html) {
      element.insertAdjacentHTML('beforeend', domJson.html);
    }

    // Add classes to the element
    if (domJson.classNames) {
      for (let i = 0; i < domJson.classNames.length; i++) {
        element.classList.add(domJson.classNames[i]);
      }
    }
    // Add attributes to the element
    if (domJson.attributes) {
      for (let j = 0; j < domJson.attributes.length; j++) {
        let currentAttribute = domJson.attributes[j];
        element.setAttribute(currentAttribute.name, currentAttribute.value);
      }
    }
    // Add children elements to the element
    if (domJson.children) {
      for (let k = 0; k < domJson.children.length; k++) {
        let currentChild = domJson.children[k];
        element.appendChild(buildDomElementFromJson(currentChild));
      }
    }
    return element;
    
  }

  // Trigger an event to fire
  function fireEvent(element, event) {
    let evt = document.createEvent('HTMLEvents');
    evt.initEvent(event, true, true); // event type,bubbling,cancelable
    return !element.dispatchEvent(evt)
  }

  // A function that runs a for each loop on a List, running the callback function for each one
  function listForEach(list, callback) {
    for (let i = 0; i < list.length; i++) {
      callback.call(null, list[i]);
    }
  }
}());