
let chat_bttn = document.getElementsByClassName("chatbox_bttn")
let chat_cntnr = document.getElementsByClassName("chat-column")
let innerMessage = document.getElementsByClassName("message-inner")
let options_list = document.getElementsByClassName("options-list")
let scrolling_chat = document.getElementById("scrollingChat")
let para = document.getElementsByTagName('p')

window.onload = function(){

  // this is used to open and close chat box
  Array.from(chat_bttn).forEach(function(element) {
    element.addEventListener('click', function (){ 
      // console.log("works");

      // get the chat conationer
      Array.from(chat_cntnr).forEach(function(e){
        // check what displaytype the container is using
        if(e.style.display == 'flex'){
          // console.log("true")
          // disable the container
          e.style.display = 'none'
        }else{
          // enable the container
          e.style.display = 'flex'
          // console.log("false")
        }

        if(e.contains(scrolling_chat)){

          Array.from(options_list).forEach(function(element){
            element.addEventListener('click', updater)
              // clearTimeout(updater)
            })
          // })
        }else{
          console.log("chat box doesnt exist")
        }

      });// end of chat container lop

    });// end of  button listener

  });// end of button class loop

}// end of window onload

function updater(){
  let chatNodes = scrolling_chat.childNodes;

  // setTimeout(() => {
    console.log(chatNodes.length)
    Array.from(chatNodes).forEach(function(element){
      let newChatNodes = element.childNodes
      console.log(newChatNodes); 
    })
  // },1000)
}