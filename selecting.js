import { StickyNote } from './stickyNote.js';
import { el, css } from './utilities.js';

let dragfnCls, upfnCls, controller = new AbortController();

export default class MaketempDiv {
    constructor(x) {
        this.father = x;
        this.onstart();
        // this.counter = 0; this.oner = 0
    }
    checkifitisTooSmall() {
        if((this.finalPos[1] - this.initPos[1]) < 10) {
            document.querySelector('.actbr').removeChild(this.temp)
        }
    }
    close(eventArg) {
        // console.log("this is", [... eventArg.target.classList].includes('box'))
        document.removeEventListener('mousemove', dragfnCls)

        eventArg.preventDefault()
        if([...eventArg.target.classList].includes('box')) {
            return
        }
        this.finalPos = [eventArg.clientX, eventArg.clientY]

        this.checkifitisTooSmall()

        let clonedDIV = el('div', this.father.parentElement, ['class', 'box'])
        css(clonedDIV, {
            width: `${this.temp.clientWidth}px`,
            height: `${this.temp.clientHeight}px`,
            top: this.temp.style.top,
            left: this.temp.style.left
        })
        let newSticky = new StickyNote(clonedDIV)

        // console.log(this.temp)
        if(this.temp.parentElement) this.temp.parentElement.removeChild(this.temp)
        // document.documentElement.removeChild(this.temp)
        
        document.onmouseup = null;
        
    } 
    dragass(eventArg) {
        css(this.temp, {
            width: `${eventArg.clientX - this.initPos[0]}px`,
            height: `${eventArg.clientY - this.initPos[1]}px`
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
        this.father.parentElement.onmouseup = (e) => {
            this.close(e)
        }
    }
    onstart() {
        this.father.addEventListener('mousedown', (e) => {
            this.onclickFn(e)
        })
    }
}
