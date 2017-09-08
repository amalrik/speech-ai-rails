//= require cable
//= require_self
//= require_tree .

App.messages = App.cable.subscriptions.create('MessagesChannel', {  
  received: function(data) {
    //$("#messages").removeClass('hidden')
    //return $('#messages').append(this.renderMessage(data));
    console.log("received:"+data);
    show_sucess_icon(document.getElementById('send'));
    synthVoice(data.message.result.fulfillment.speech);

    // debugger;
  }
});

function synthVoice(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
}

function show_sucess_icon(btn) {
  btn.classList.add('is-success');
  btn.classList.remove('is-loading');

  setTimeout( () => {
    btn.classList.remove('is-success');
  }, 5000);
}