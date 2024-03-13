import { StickyNote } from './stickyNote.js';
import { el, css } from './utilities.js';

let dragfnCls, upfnCls;

export default class MaketempDiv {
    constructor(x, y) {
        this.father = x;
        this.onstart();
        this.y = y;

        this.counter = 0
        this.oner = 0
    }
    close(eventArg) {
        eventArg.preventDefault()
        
        document.removeEventListener('mousemove', dragfnCls)
        this.father.parentElement.removeEventListener('mouseup', upfnCls)

        if(this.counter == 1) {
            let clonedDIV = el('div', this.father.parentElement, ['class', 'box'])
            css(clonedDIV, {
                width: `${this.temp.clientWidth}px`,
                height: `${this.temp.clientHeight}px`,
                top: this.temp.style.top,
                left: this.temp.style.left
            })
            let newSticky = new StickyNote(clonedDIV)

            this.father.parentElement.removeChild(this.temp)
        }
        this.counter++
    } 
    dragass(eventArg) {
        // console.log('drag')
        css(this.temp, {
            width: `${eventArg.clientX - this.initPos[0]}px`,
            height: `${eventArg.clientY - this.initPos[1]}px`
        })

    }
    onclickFn(eventArg) {
        // console.log('click')
        this.initPos = [eventArg.clientX, eventArg.clientY];
        
        this.temp = el('div', this.father.parentElement, ['class', 'tempo'])
        
        css(this.temp, {
            left: `${this.initPos[0] - document.querySelector('.tskbr').clientWidth}px`,
            top: `${this.initPos[1] + this.father.parentElement.scrollTop}px`
        })
        
        document.addEventListener('mousemove', dragfnCls = (e) => {
            this.dragass(e)
            this.oner++
            if(this.oner <= 3) {
                this.father.parentElement.addEventListener('mouseup', upfnCls = (e) => {
                    console.log('plsls')
                    this.close(e)
                })
            }
        })
    }
    onstart() {
        this.father.addEventListener('mousedown', (e) => {
            this.onclickFn(e)
        })
    }
}
