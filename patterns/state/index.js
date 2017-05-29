const StateMachine = require('./state_machine');
const myStateMachine = StateMachine();

let myState = myStateMachine.init();

console.log(`My current state is ${myState.getName()}. My colour is ${myState.getColour()} and my label is "${myState.getLabel()}"`); // DRAFT

myState = myStateMachine.transition(myState);
console.log(`My current state is ${myState.getName()}. My colour is ${myState.getColour()} and my label is "${myState.getLabel()}"`); // PENDING

myState = myStateMachine.transition(myState);
console.log(`My current state is ${myState.getName()}. My colour is ${myState.getColour()} and my label is "${myState.getLabel()}"`); // PUBLISHED

myState = myStateMachine.transition(myState);
console.log(`My current state is ${myState.getName()}. My colour is ${myState.getColour()} and my label is "${myState.getLabel()}"`); // PUBLISHED
