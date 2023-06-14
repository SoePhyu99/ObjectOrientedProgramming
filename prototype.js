function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = () => {
    console.log('duplicate');
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

extend(Circle, Shape)
function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

let c = new Circle(1, 'red')

// Exercise - Prototypical Inheritance
HtmlElement.prototype.focus = () => {
    console.log('focus');
}
function HtmlElement() {
    this.click = () => {
        console.log('click');
    }
}
function HtmlSelectElement() {
    this.addItem = (item) => this.items.push(item);
    this.items = [];
    this.removeItem = (item) => {
        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(item), 1)
        }
    }
}
HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlElement;