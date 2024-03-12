import { el, css } from './utilities.js';

let someshit;

export default class MaketempDiv {
    constructor(x, y) {
        this.father = x;
        this.onstart();
        this.y = y;
    }
    close(eventArg) {
        document.removeEventListener('mousemove', someshit)
    } 
    dragass(eventArg) {

        css(this.temp, {
            width: `${eventArg.clientX - this.initPos[0]}px`,
            height: `${eventArg.clientY - this.initPos[1]}px`
        })

        this.father.parentElement.addEventListener('mouseup', (e) => {
            this.close(e)
        })
    }
    onclickFn(eventArg) {
        this.initPos = [eventArg.clientX, eventArg.clientY];

        this.temp = el('div', this.father, ['class', 'tempo'])
    
        css(this.temp, {
            left: `${this.initPos[0] - document.querySelector('.tskbr').clientWidth}px`,
            top: `${this.initPos[1] + this.father.parentElement.scrollTop}px`
        })

        document.addEventListener('mousemove', someshit = (e) => {
            this.dragass(e)
        })
    }
    onstart() {
        this.father.addEventListener('mousedown', (e) => {
            this.onclickFn(e)
        })
    }
}
