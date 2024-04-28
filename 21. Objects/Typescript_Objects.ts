//Write a program that creates Objects containing these items.
//Data type of person object.
interface person {
  age: number;
  name: string;
  nationality: string;
  student: boolean;
}
//Person object.
let person: person = {
  name: "Fatima",
  age: 20,
  nationality: "Pakistan",
  student: true,
};
//Print person.
console.log(person);
//Data type of car object
interface car {
  manufacturer: string;
  color: string;
  automatic: boolean;
}

// Car object.
let car = {
  manufacturer: "Koenigsegg Jesko",
  color: "Black and Gold",
  automatic: true,
};
//Print car.
console.log(car);
