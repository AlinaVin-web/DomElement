"use strict";

const DomElement = function (selector, width, height, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.createElement = (text) => {
        let elem;
        if (this.selector[0] === ".") {
            elem = document.createElement('div');
            elem.className = this.selector.slice(1);

        }
        if (this.selector[0] === "#") {
            elem = document.createElement('p');
            elem.id = this.selector.slice(1);
        }
        elem.innerText = text;
        elem.style.cssText = `
            width: ${this.width};
            height: ${this.height};
            font-size: ${this.fontSize}px;
            background: ${this.bg};
        `;
        document.body.append(elem);
    }
}

const newDiv = new DomElement(".block", "100px", "100px", "yellow", 14);
const newP = new DomElement("#paragraph", "max-content", "auto", "green", 24);

newDiv.createElement("Я родился!");
newP.createElement("Приветик");
