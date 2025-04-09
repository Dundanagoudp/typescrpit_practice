"use strict";
// abstarct and classes
// interface PerObj {
//       name: string;
//       age: number;
// }
// class Person : PerObj = {
//       name:"chetan",
//       age: 24,
// }
// class Person1 : PerObj = {
//       name:"mallu",
//       age: 25,
// }
// class Person2 : PerObj = {
//       name:"akash",
//       age: 26,
// }
// example shape hierachy
// circle and rectangle inherit from shape
// abstract class Shape {
//       constructor(protected color: string) {}  // ✅ save color for use in child
//       abstract calculateArea(): number;
//       abstract displayArea: () => void;
//     }
//     class Circle extends Shape {
//       constructor(color: string, protected radius: number) {
//         super(color);  // ✅ fixed syntax
//       }
//       public calculateArea(): number {
//         return Math.PI * this.radius * this.radius;
//       }
//       displayArea: () => void = () => {
//         const area = this.calculateArea();
//         console.log(`This is a ${this.color} circle with area ${area.toFixed(2)}`);
//       };
//     }
//     // ✅ Usage
//     const myCircle = new Circle("blue", 5);
//     myCircle.displayArea(); // Output: This is a blue circle with area 153.94
// sqaure and rectangle 
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`this is a ${this.color} circle with area ${this.calculateArea().toFixed(2)}`);
    };
}
class Rectangle extends Shape {
    width;
    height;
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    displayArea = () => {
        console.log(`this is a ${this.color} rectangle with area ${this.calculateArea().toFixed(2)}`);
    };
}
class Sqaure extends Shape {
    side;
    constructor(color, side) {
        super(color);
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
    displayArea = () => {
        console.log(`this is a ${this.color} sqaure with area ${this.calculateArea().toFixed(2)}`);
    };
}
const circle = new Circle("blue", 5);
const rectangle = new Rectangle("green", 10, 4);
const sqaure = new Sqaure("red", 6);
circle.displayArea();
rectangle.displayArea();
sqaure.displayArea();
