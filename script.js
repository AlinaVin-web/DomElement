"use strict";

const DomElement = function (selector, position, width, height, bg, fontSize) {
    this.selector = selector;
    this.position = position;
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
            position: ${this.position};
            top:0;
            left: 0;
            width: ${this.width};
            height: ${this.height};
            font-size: ${this.fontSize}px;
            background: ${this.bg};
        `;
        document.body.append(elem);
        return elem;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const newDiv = new DomElement(".block", "absolute", "100px", "100px", "yellow", 14);
    let element = newDiv.createElement("Я двигаюсь, следовательно, я существую!");

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case "ArrowLeft":
                element.style.left = parseInt(element.style.left) - 10 + "px";
                break;
            case "ArrowUp":
                element.style.top = parseInt(element.style.top) - 10 + "px";
                break;
            case "ArrowRight":
                element.style.left = parseInt(element.style.left) + 10 + "px";
                break;
            case "ArrowDown":
                element.style.top = parseInt(element.style.top) + 10 + "px";
                break;
        }
    });
});
