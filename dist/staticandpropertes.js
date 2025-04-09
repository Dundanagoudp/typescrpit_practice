"use strict";
// stattic and propertes
// class Person {
//       constructor(public name: string){}
// }
// const person1 = new Person(name: "chetan");
// person1.name = chetan;
class MathOperations {
    static PI = Math.PI;
    static add(a, b) {
        return a + b;
    }
    static subs(a, b) {
        return a - b;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.add(1, 2));
console.log(MathOperations.subs(1, 2));
