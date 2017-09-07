class MessagesChannel < ApplicationCable::Channel  
  def subscribed
    stream_from 'messages'
  end

  def receive(message)
    puts "DEBUG:#{message}"
    puts "DEBUG:#{message['data']}"
    client = ApiAiRuby::Client.new(
      client_access_token: 'b1fe59481e11438e8ceee437c2a7b48d'
    )
    response = client.text_request message['data']
    puts "[receive] - response:#{response}"

    ActionCable.server.broadcast 'messages', {message: response}
  end 

end