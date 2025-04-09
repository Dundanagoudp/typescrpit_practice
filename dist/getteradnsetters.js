"use strict";
// GETTER AND SETTERS
// Getter and Setter for the name property
// class Persons {
//       private _age: number | undefined;
//       constructor(
//             public name : string,
//             public hobbies:string[]
//       ) { }
// //setter method 
//       public set age(age: number) {
//             if (age>150 || age<0) {
//                         throw new Error("Invalid age provided")   
//                   }
//                   this._age = age;
//       }
//       // Getter for the age property
//       // The getter is used to access the private _age property
//       public get age() : number{
//             if(this._age === undefined) {
//                   throw new Error("Age is not set");
//             }
//             return this._age;
//       }
//       introduce():string{
//             return `hello my name is ${this.name} and my age ${this._age} and my hobbies are ${this.hobbies.join(", ")} hobbies`
//       }
// }
// const persons1:Persons = new Persons("John",  ["reading", "gaming"]);
// persons1.age = 12;
// console.log(persons1.introduce());
// console.log(      `My age is ${persons1.age}`);
//bank account 
// class BankAccount2 {
//  private _balance: number = 0;
// constructor(
//       public accountHolder: string,
//       public accountNumber: string,
// ){}
// //setter method
// public set balance(amount:number){
//       if(amount < 0) {
//             throw new Error("Invalid amount provided")
//       }
//       this._balance = amount;
// }
// //getter method
// public get balance():number{
//      if(this._balance === undefined) {
//             throw new Error("Balance is not set")
//       }
//       return this._balance;
// }
// public showAccountDetails():string{
//       return `Hello, my name is ${this.accountHolder}. My account number is ${this.accountNumber} and my balance is ₹${this._balance} `
// }
// }
// console.log("Bank Account Details")
// const account1: BankAccount2 = new BankAccount2("John Doe", "1234567890");
// account1.balance = 1000;
// console.log(account1.showAccountDetails());
