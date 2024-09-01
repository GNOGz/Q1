/* define interface for Person objects */
interface Person {
  name:string,
  age:number,
  luckyAge?:boolean,
}

/* assign interface/type to the function definition properly */
const q2 = (person:Person):Person => {

  if (person.age <= 15){
    let p1: Person = {
      name: person.name,
      age: person.age,
      luckyAge: person.age%7===0,
    };
    p1.luckyAge = p1.age%7 == 0;
    return p1;
  }
  else{
    let p2: Person = {
      name: person.name,
      age: person.age-10,
      luckyAge: person.age%7===0,
    };
    if (p2.age < 15){
      p2.age = 15;
    }
    p2.luckyAge = p2.age%7 == 0;
    return p2;
  }
};

//test cases
const input1 = { name: "John", age: 59 };
const input2 = { name: "Jane", age: 18 };

console.log(q2(input1));
console.log(q2(input2));

export default q2;
