'use strict';

// 1) Create a School class and create a student , faculty and peon method and student name email contact print same as faculty and peon using class & object.

class School {

    constructor(name, email, contact) {
        this.name = name;
        this.email = email;
        this.contact = contact;

    }

    student() {
        console.log(`Student Details: 
        Name: ${this.name} 
        Email: ${this.email}
        Contact: ${this.contact}`);
    }

    faculty() {

        console.log(`Faculty Details: 
    Name: ${this.name} 
    Email: ${this.email}
    Contact: ${this.contact}`);
    }
    
    peon() {

        console.log(`Peon Details: 
    Name: ${this.name} 
    Email: ${this.email}
    Contact: ${this.contact}`);
    }
}


let s1 = new School("Shubham", "Shubham@gmail.com", +918000854404);
s1.student();

