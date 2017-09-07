//= require cable
//= require_self
//= require_tree .

App.messages = App.cable.subscriptions.create('MessagesChannel', {  
  received: function(data) {
    //$("#messages").removeClass('hidden')
    //return $('#messages').append(this.renderMessage(data));
    console.log("received:"+data);
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
