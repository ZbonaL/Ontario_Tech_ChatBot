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
    let closeBttn = document.getElementById("close-chat")

    textInput.value = ''

    if(textInput){
      textInput.addEventListener('keydown', function(event){
        ConversationPanel.inputKeyDown(event, textInput)
      })
      textInput.addEventListener('keyup', function(){
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
          close_chat(chat_cntnr,textInput)
        }else{
          // enable the container
          enable_chat(chat_cntnr)
        }
      });
    }

    if(closeBttn){
      closeBttn.addEventListener('click', function(){
        if(chat_cntnr.style.display === 'flex'){
          close_chat(chat_cntnr, textInput)
        }else{
          enable_chat(chat_cntnr)
        }
      })
    }
  }// end of window onload

  function close_chat(element, textBox) {
    element.classList.remove("zoom-in")
    element.classList.add("zoom-out")
    textBox.value = ''
    setTimeout(()=>{
      element.style.display = 'none'
    }, 300)
  }

  function enable_chat(element){
    element.classList.remove("zoom-out")
    element.classList.add('zoom-in')
    element.style.display = 'flex'
  }
})();