// INTerface vs Type

// interface can be used to create a type

interface Stud {
      name:string,
      age:number,

}

interface StudAddr  {
      city:string,
      state:string
}

interface Data extends Stud , StudAddr{}



class Biodata implements Data  {
      
      constructor(
            public name:string,
            public age:number,
            public city:string,
            public state:string
      ) {}

}


const std1 = new Biodata("John", 25, "New York", "NY");

console.log(Biodata);
