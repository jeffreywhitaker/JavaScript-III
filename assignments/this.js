/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object - when in the global scope, 'this' will refer back to the window/console. This is rarely desired.
* 2. Implicit Binding - if a function is nested in an object (like 'object.function'), when you call the function (such as 'object.function()') the 'this' will be pointing to the item to the /left/ of the '.'
* 3. Using New Keyword - if using 'new' and a constructor function to create a new Object, then the 'this' will be pointing to the new Object that was formed.
* 4. Explicit - whnever using .call(), .bind(), or .apply(), the 'this' keyword will be pointing towards whatever is inside the brackets.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log(this);


// Principle 2
// code example for Implicit Binding

let HelloObject = {
    greeting: 'Hello',
    sayHello: function(name) {
      return `${this.greeting} my name is ${name}!`;
    }
  };

  console.log(HelloObject.sayHello('Jeff'));

// Principle 3
// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();


// Principle 4
// code example for Explicit Binding

// GameObject.call(this, attributes);
// see next page - the .call() is an explicit binding I built to solve the prototype problem.