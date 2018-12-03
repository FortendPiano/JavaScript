class Option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createElem() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent =  prompt('Запишу любой текст.', 'Pararam');
        div.style.cssText = `height:  ${this.height}; 
                             width:  ${this.width}; 
                             background:  ${this.bg}; 
                             font-size:  ${this.fontSize}; 
                             text-align:  ${this.textAlign}`;
    }
}

let text = new Option('50px', '100px', 'yellow', '28px', 'center');
console.log(text.createElem());




