//bank account 

// class BankAccount2 {
//       private _balance: number = 0;

//       constructor(
//             public accountHolder: string,
//             public accountNumber: string,
//       ) { }

//       //get method

//       public get balance(): number {
//             return this._balance;
//       }

//       //set method

//       public set balance(amount: number) {
//             if (amount < 0) {
//                   throw new Error("Invalid amount provided");
//             }
//             this._balance = amount;
//       }

//       public showAccountDetails(): string {
//             return `Hello, my name is ${this.accountHolder}. My account number is ${this.accountNumber} and my balance is ₹${this._balance} `
//       }

// }

// const account1: BankAccount2 = new BankAccount2("John Doe", "1234567890");

// console.log(account1.showAccountDetails());
// account1.balance = 100;


// Temperature Converter

class Temperature {
      private _celsius: number = 0;
    
      // Getter for Celsius
      public get celsius(): number {
        return this._celsius;
      }
    
      // Setter for Celsius with validation
      public set celsius(value: number) {
        if (value < -273.15) {
          throw new Error("Temperature cannot be below absolute zero");
        }
        this._celsius = value;
      }
    
      // Getter for Fahrenheit
      public get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
      }
    
      // Setter for Fahrenheit (converts to Celsius)
      public set fahrenheit(newFahrenheit: number) {
        const converted = (newFahrenheit - 32) * 5/9;
        if (converted < -273.15) {
          throw new Error("Temperature cannot be below absolute zero");
        }
        this._celsius = converted;
      }
    
      // Method to show temperature
      public showTemperature(): string {
        return `The temperature is ${this._celsius.toFixed(2)}°C or ${this.fahrenheit.toFixed(2)}°F`;
      }
    }
    
    // ✅ Usage
    const temperature = new Temperature();
    
    temperature.celsius = 25;
    console.log(temperature.showTemperature()); // The temperature is 25.00°C or 77.00°F
    
    temperature.fahrenheit = 32;
    console.log(temperature.showTemperature()); // The temperature is 0.00°C or 32.00°F
    