
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

    let chat_input = document.getElementById("textInput")
    chat_input.addEventListener('keypress', function(event){
      if(event.keyCode === 13){
        setTimeout(() =>{

          let message_data = document.querySelectorAll(".message-inner p");

          message_data.forEach(function(element){
            let message_html = element.innerHTML
            let regexExp = /https?:\/\/?[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
            
            let link  = message_html.match(regexExp)
            console.log(link)

            if(link && link.length){
              link.forEach(function(link_text){
                message_html = message_html.replace(link_text, '<a href="' + link_text+ '">' + "here" + '</a>')
              })

              element.innerHTML = message_html
            }

            console.log(message_html);
            


            // if(link){

            //   console.log(message_html);
              

            // }else{
            //   console.log("noting")
            // }
          })
          // console.log(message_data.item(message_data.length-1).textContent);
        }, 300) 
      }

    })
  }
}// end of window onload

