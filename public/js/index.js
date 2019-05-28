
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
        

        
        Array.from(options_list).forEach(function(element){
          element.addEventListener('click', function(){
            Array.from(chat_cntnr).forEach(function(element){
              element.addEventListener('change', function(){
                console.log(element.children)

              })
            })

          })
        })
         

      });// end of chat container lop
    });// end of  button listener
  });// end of button class loop

  // Array.from(chat_cntnr).forEach(function(element){
  //   element.addEventListener('change', function(){
  //     if(element.classList.contains(innerMessage)){
  //       console.log("true1");
  //       Array.from(innerMessage).forEach(function(element){
  //         if(element.classList.contains(para)){
  //           console.log("true2");
  //         }else{
  //           console.log("false2");
  //         }
  //       })
  //     }else{
  //       console.log("false1");
  //     }
  //   })
  // })

}



