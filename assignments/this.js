/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding- When in the global scope, "this" refers to the window/console.

* 2.  Implicit Binding- Most common use of "this". "this" refers the object to the left of the dot when the function was called

* 3. new Binding- Used when using constructor functions, "this" refers to the instance that the object was created

* 4. Explicit Binding- when using .call or .apply, "this" is defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2
const jody = {
    name: 'Jody',
    speak: function(){
        return `My name is ${this.name}`
    }
}
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding