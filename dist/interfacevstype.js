"use strict";
// INTerface vs Type
class Biodata {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
const std1 = new Biodata("John", 25, "New York", "NY");
console.log(Biodata);
