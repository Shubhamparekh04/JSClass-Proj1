// 4) Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument.

class Shape {
    rectangle(width, height) {
        const area = width * height;
        console.log(`Rectangle Area: ${area}`);
    }

    circle(radius) {
        const area = 3.14 * radius * radius;
        console.log(`Circle Area: ${area}`);
    }
}

const shape = new Shape();

shape.rectangle(10, 5);