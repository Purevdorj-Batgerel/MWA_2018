const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor(){
        super();
        setInterval(() => {
            this.emit('go');
        }, 1000);
    }
}

const gymInstance = new Gym();
gymInstance.on('go', ()=> {
    console.log('Athlete is working out');
});