require("../app.scss")

import {ConversationPanel} from "./conversation"

/* global ConversationPanel: true, PayloadPanel: true*/

// Other JS files required to be loaded first: apis.js, conversation.js, payload.js
(function() {
  // Initialize all modules
  ConversationPanel.init();

  window.onload = function(){
    let chat_bttn = document.getElementById("chatbox_bttn")
    let chat_cntnr = document.getElementById("chat-column")
    
    if (chat_bttn) {
    // this is used to open and close chat box
      chat_bttn.addEventListener('click', function (){
        if(chat_cntnr.style.display === 'flex'){
          // console.log("true")
          // disable the container
          chat_cntnr.style.display = 'none'
        }else{
          // enable the container
          chat_cntnr.style.display = 'flex'
          // console.log("false")
        }
      });

    }
  }// end of window onload
})();

