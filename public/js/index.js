window.onload = function(){
  


  let chat_bttn = document.getElementById("chatbox_bttn");
  let chat_cntnr = document.getElementById("container");
  let userInput = document.getElementById("user_input");
  let messages = document.getElementById("messages")

  // make sure that the input is clear
  userInput.value = ""


  // this is used to open and close chat box
  chat_bttn.addEventListener('click', () => {
    console.log("hello");
    
    if(chat_cntnr.style.display == 'flex'){
      chat_cntnr.style.display = 'none'
    }else{
      chat_cntnr.style.display = 'flex'
    }
  })

  // this is used to add the new messages to the chat window
  userInput.addEventListener('keydown', function (e) {
    if(e.keyCode === 13){
      console.log(userInput.value)
      let message_box = document.createElement('p')
      let textNode = document.createTextNode(userInput.value);
      message_box.appendChild(textNode)
      messages.appendChild(message_box)

      userInput.value = ""
    }
  })




}
