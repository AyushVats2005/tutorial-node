const EventEmitter = require('events');

const customEmitter = new EventEmitter()
//on- listen for an event
//emit-  emit an event

customEmitter.on('response',(name,id)=> {
    console.log(`data received user ${name} sieth id: ${id}`)
})

customEmitter.on('response',()=> {
    console.log(`...`)
})

customEmitter.emit('response','john',34)