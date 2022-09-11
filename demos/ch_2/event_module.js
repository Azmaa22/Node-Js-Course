const EventEmitter = require('events');

// create event object
var myEventObj = new EventEmitter();
const eventName = 'lookUp';

// register event handler
//& to fire one time 
myEventObj.once(eventName, ()=>{
    console.log('event fired #1');
});
myEventObj.on(eventName, ()=>{
    console.log('event fired #2');

});
// to be reference
const fun3 = ()=>{
    console.log('event fired #3');
};

myEventObj.on(eventName, fun3);

// event fire # 1
myEventObj.emit(eventName);
console.log('-------------------');

// event fire # 2
myEventObj.emit(eventName);
console.log('-------------------');

//event fire # 3
setTimeout(() => {
    console.log('Remove registration #3');
    myEventObj.off(eventName, fun3);
    myEventObj.emit(eventName);
}, 1000);

console.log('-------------------');