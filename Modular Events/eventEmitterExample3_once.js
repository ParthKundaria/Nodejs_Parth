const EventEmitter= require('events')

class Emitter extends EventEmitter{}

emitter = new Emitter()

//emitter.once(eventName, eventHandler) will execute observer code just once, 
//no matter how many time this particular event was triggered.
emitter.once('knock', function(){
    console.log('Who\'s there?')
})

emitter.emit('knock')
emitter.emit('knock')