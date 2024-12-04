//5) Create a mobile functional class default set model no then set color using prototyping.

function Mobile() {  
    this.modelNo = "Galaxy S21";
}

Mobile.prototype.setColor = function(newColor) {
    this.color = newColor;
    console.log(`The color of model ${this.modelNo} has been updated to ${this.color}.`);
};

const mobile1 = new Mobile();
mobile1.setColor("Blue");

