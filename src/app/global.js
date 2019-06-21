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
    let textInput = document.getElementById("textInput")
    let answerBttn = document.getElementById("chat-button")

    if(textInput){
      textInput.addEventListener('keydown', function(event){
        ConversationPanel.inputKeyDown(event, textInput)
      })
      textInput.addEventListener('change', function(){
        if (textInput.value != ''){
          answerBttn.disabled = false;
          console.log("false");
          
        }else{
          answerBttn.disabled = true;
          console.log("true")
        }
      })
      answerBttn.addEventListener('click', function(){
        ConversationPanel.clickEvent(event, textInput)
      })
    }

    if (chat_bttn) {
    // this is used to open and close chat box
      chat_bttn.addEventListener('click', function (){
        if(chat_cntnr.style.display === 'flex'){
          chat_cntnr.classList.remove("zoom-in")
          chat_cntnr.classList.add("zoom-out")
          setTimeout( ()=>{
            chat_cntnr.style.display = 'none'
          }, 300)
        }else{
          // enable the container
          chat_cntnr.classList.remove("zoom-out")
          chat_cntnr.classList.add('zoom-in')
          chat_cntnr.style.display = 'flex'
        }
      });
    }
  }// end of window onload
})();