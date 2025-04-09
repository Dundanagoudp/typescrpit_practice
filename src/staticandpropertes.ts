// stattic and propertes

// class Person {
//       constructor(public name: string){}
// }

// const person1 = new Person(name: "chetan");
// person1.name = chetan;


class MathOperations {
      public static PI: number = Math.PI;
      public static add(a: number, b: number): number {
            return a + b;
      }

      public static subs(a: number, b: number): number {
            return a - b;
      }
}

console.log(MathOperations.PI);
console.log(MathOperations.add(1, 2));
console.log(MathOperations.subs(1, 2));


