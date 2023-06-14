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
function HtmlSelectElement(items = []) {
    this.addItem = (item) => this.items.push(item);
    this.items = items;
    this.removeItem = (item) => {
        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(item), 1)
        }
    };
    this.loop = () => {

    }
    this.render = () => {
        console.log(`<select>
    ${this.items.map((val) => { return `<option>${val}</option>` }).join('\n\t')}
</select>`);
    }
}

function HtmlImage(src = '') {
    this.src = src;
    this.render = () => {
        console.log(`<img "src=${this.src}" />`);
    }
}

function extendAgain(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}
extendAgain(HtmlSelectElement, HtmlElement);
extendAgain(HtmlImage, HtmlElement);

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImage('http://blabla')
]
for (let e of elements) {
    e.render();
}