
let chat_bttn = document.getElementById("chatbox_bttn")
let chat_cntnr = document.getElementById("chat-column")
let innerMessage = document.getElementsByClassName("message-inner")
let options_list = document.getElementsByClassName("options-list")
let scrolling_chat = document.getElementById("scrollingChat")
let para = document.getElementsByTagName('p')

window.onload = function(){
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
      [...options_list].forEach(element => element.addEventListener('click', updater));
    });
  }
}// end of window onload

function updater(){
  let chatNodes = scrolling_chat.childNodes;

  // setTimeout(() => {
    console.log(chatNodes.length);
    [...chatNodes].forEach(function(element){
      let newChatNodes = element.childNodes
      console.log(newChatNodes); 
    })
  // },1000)
}