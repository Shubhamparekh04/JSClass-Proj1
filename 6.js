//6) Using Object prototyping create Emp function already added name, email, salary but not add designation. designation add by object prototyping.

function Emp(){
    this.name = "Bhargav";
    this.email = "Bhargav@gmail.com";
    this.salary = "5 Rupiya";
}

Emp.prototype.setDesignation = function (desig){
    console.log(`Employee 
    name is : ${this.name},
    email is : ${this.email},
    salary is : ${this.salary},
    designation is : ${desig}`);
}

let e1 = new Emp();

e1.setDesignation("Peon");