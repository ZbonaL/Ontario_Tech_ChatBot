window.onload = function(){
  
  let chat_bttn = document.getElementsByClassName("chatbox_bttn")
  let chat_cntnr = document.getElementsByClassName("chat-column")
  let userInput = document.getElementsByClassName("user_input")
  let messages = document.getElementsByClassName("messages")

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
      });
      
    });
  });

  // // handle user input 
  // Array.from(userInput).forEach(function(element){

  //   // clears the chat box on page refresh
  //   element.value = ""

  //   // check for enter key press
  //   element.addEventListener('keydown', function(e){
      
  //     if(e.keyCode === 13){
  //       // console.log(element.value)

  //       // create a chat box to store user input
  //       let message_box = document.createElement('p');

  //       // holds user input
  //       let textNode = document.createTextNode(element.value)
  //       // append userinput to message box
  //       message_box.appendChild(textNode)
        
  //       // append messagebox to messages div
  //       Array.from(messages).forEach(function (element){
  //         element.appendChild(message_box)
  //       })
  //       // clear userinput box
  //       element.value = ""
  //     }
  //   })
  // })

}

