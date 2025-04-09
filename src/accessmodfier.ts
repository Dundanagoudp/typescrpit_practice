
// Modifier  	Inside Class ✅	Subclass ✅	Outside Class ✅
// public           	 ✅	           ✅	        ✅
// protected             ✅	           ✅	        ❌
// private	             ✅	           ❌	        ❌



// parent class
// class Persons {
//       public  name: string;
//       private  age: number;
//       protected   hobbies: string[];
      
//             constructor(name: string, age: number, hobbies: string[]) {
//                   this.name = name;
//                   this.age = age;
//                   this.hobbies = hobbies;
//             }
//             introduce(): string {
//                   return `Hello, my name is ${this.name} and I am ${this.age} years old. i have ${this.hobbies.join(", ")} hobbies`;
//             }
//       }
      

//       // child classs
//       class Students extends Persons {
//             grade: number;
//             constructor(name: string, age: number, hobbies: string[],grade: number) {
//                   super(name, age, hobbies);
//                   this.grade = 12; 
                          
//             }
//             introduce(): string {
//                   return `${super.introduce()} and I am in grade ${this.grade}`;
//             }
//       }
      
//       // outside class
//       const person1:Persons = new Persons("chetan", 24, ["cricket", "football", "badminton"]);
//       // const person2:Persons = new Persons("sachin", 25, ["cricket", "football", "badminton"]);
      
//       const students1:Persons = new Students("akash", 25, ["cricket", "football", "badminton"], 12);
//       // const students2:Persons = new Students("sachin", 25, ["cricket", "football", "badminton"], 12);
      
//       console.log(students1.name);
      // console.log(students2.introduce());
      
      
      // console.log(person1.name);
      // console.log(person1.age);
      // console.log(person1.hobbies);
      
      // console.log(person2.introduce());


    class BankAccount {
      public accountHolder: string;     // Anyone can see
      private balance: number;          // Only the bank can access
      protected accountNumber: string;  // Bank and branches can access
    
    constructor (accountHolder: string, balance: number, accountNumber: string) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    }  

    class BankBranch extends BankAccount {
      constructor(accountHolder: string, balance: number, accountNumber: string) {
        super(accountHolder, balance, accountNumber);
        console.log(balance);
        
      }
    }

    const bankAccount = new BankAccount("chetan", 1000, "1234");
    const bankBranch = new BankBranch("chetan", 1000, "1234");

    console.log(bankAccount.accountHolder);
//     console.log(bankBranch.balance);
//     console.log(bankBranch.accountNumber);
    
    
    