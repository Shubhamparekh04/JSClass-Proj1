//2) Create a Person class and with argument create a Father and Child method father age of 60 and child age of 20 print with argument.

class Person {
    

father(age) {
    console.log(`Father age of ${age}`);
}

child(age) {
    console.log(`Child age of ${age}`);
}
}

let p1 = new Person();

p1.father(60);
p1.child(20);