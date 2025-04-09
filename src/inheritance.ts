// inheistance allows a class to resuse the fuctionality of another class
// inheritance allows a class to reuse the functionality of another class

// class Persons {
//       name: string;
//       age: number;
//       hobbies: string[];

//       constructor(name: string, age: number, hobbies: string[]) {
//             this.name = name;
//             this.age = age;
//             this.hobbies = hobbies;
//       }
//       introduce(): string {
//             return `Hello, my name is ${this.name} and I am ${this.age} years old. i have ${this.hobbies.join(", ")} hobbies`;
//       }
// }

// class Students extends Persons {
//       grade: number;
//       constructor(name: string, age: number, hobbies: string[],grade: number) {
//             super(name, age, hobbies);
//             this.grade = 12;         
//       }
//       introduce(): string {
//             return `${super.introduce()} and I am in grade ${this.grade}`;
//       }
// }

// const person1:Persons = new Persons("chetan", 24, ["cricket", "football", "badminton"]);
// const person2:Persons = new Persons("sachin", 25, ["cricket", "football", "badminton"]);

// const students1:Persons = new Students("akash", 25, ["cricket", "football", "badminton"], 12);
// const students2:Persons = new Students("sachin", 25, ["cricket", "football", "badminton"], 12);

// console.log(students1.introduce());
// console.log(students2.introduce());


// console.log(person1.introduce());
// console.log(person2.introduce());


// 2nd example of inheritance



class Employee {
      name:string;
      postion:string;

      constructor(name:string, postion:string) {
            this.name = name;
            this.postion = postion;
      }
      work():string {
            return `${this.name} is working as ${this.postion}`;
      }
    }

    const employee1 = new Employee("John", "Manager");
    const employee2 = new Employee("Jane", "Developer");

      console.log(employee1.work());
      console.log(employee2.work());
    

