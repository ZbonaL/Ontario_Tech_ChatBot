window.onload = function(){

  let chat_bttn = document.getElementById("chatbox_bttn");
  let chat_cntnr = document.getElementById("container");

  chat_bttn.addEventListener('click', () => {
    console.log("hello");

    chat_cntnr.setAttribute('style', 'display: flex;');

  });

}