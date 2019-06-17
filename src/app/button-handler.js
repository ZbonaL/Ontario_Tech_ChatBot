
let chat_bttn = document.getElementById("chatbox_bttn")
let chat_cntnr = document.getElementById("chat-column")
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
    });

  }
}// end of window onload

