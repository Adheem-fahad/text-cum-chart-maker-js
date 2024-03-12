import { StickyNote } from './stickyNote.js';
import { el, css } from './utilities.js';

let dragfnCls, upfnCls;

export default class MaketempDiv {
    constructor(x, y) {
        this.father = x;
        this.onstart();
        this.y = y;
    }
    close(eventArg) {
        document.removeEventListener('mousemove', dragfnCls)
        this.father.parentElement.removeEventListener('mouseup', upfnCls)

        let newThingyShitPiece = new StickyNote(this.temp)

        
    } 
    dragass(eventArg) {

        css(this.temp, {
            width: `${eventArg.clientX - this.initPos[0]}px`,
            height: `${eventArg.clientY - this.initPos[1]}px`
        })

        this.father.parentElement.addEventListener('mouseup', upfnCls = (e) => {
            this.close(e)

            console.log('still in selecting')
        })
    }
    onclickFn(eventArg) {
        this.initPos = [eventArg.clientX, eventArg.clientY];

        this.temp = el('div', this.father.parentElement, ['class', 'tempo'])
    
        css(this.temp, {
            left: `${this.initPos[0] - document.querySelector('.tskbr').clientWidth}px`,
            top: `${this.initPos[1] + this.father.parentElement.scrollTop}px`
        })

        document.addEventListener('mousemove', dragfnCls = (e) => {
            this.dragass(e)
        })
    }
    onstart() {
        this.father.addEventListener('mousedown', (e) => {
            this.onclickFn(e)
        })
    }
}
