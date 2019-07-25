/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is when the "this" its on a global context it happens when none of the other rules below are present in a function.

*
  2.Implicit binding is when a dot its used to call a function and whats to the left of the dot is the object "this". 
  

 
* 3.New binding when a constructor function its used using "this".


* 4. explicit binding its when you use ".call();  or .apply();  in a function passing context in "this". 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetings(greet) {
    console.log('this')
    return greet;

}
greetings("hello");


// Principle 2

// code example for Implicit Binding

const person= {
    name:'luis',
    myAge: function(age) {
    console.log(`${this.name} is ${age}`);        
    console.log(this);
    }
  };
  person.myAge('30');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hi';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const carlos = new CordialPerson('pedro');
  const pedro = new CordialPerson('carlos');
  
  carlos.speak();
  pedro.speak();

// Principle 4

// code example for Explicit Binding

carlos.speak.call(pedro); pedro.speak.apply(carlos);