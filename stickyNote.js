import { el, css } from './utilities.js'
import Creator from './inputTake.js'


let mousemovefn, mousedownfn, controller = new AbortController();

export class StickyNote {
    constructor(element) {
        this.father = element;
        this.creaiososis = new Creator(this.father)
    }
    keyFn() {
        this.father.addEventListener('mousedown', mousedownfn = (e) => {
            this.mousetouch(e)

            this.father.onmouseup = (e) => {
                this.closeDrag()
            }
        }) 
    }
    closeDrag() {
        document.removeEventListener('mousemove', mousemovefn)

        this.father.style.border = '2px solid rgba(92, 92, 255, 0.358)'
    }
    draggable(e, num1, num2) {
        const DOC_TSKw = document.querySelector('.tskbr').clientWidth;

        css(this.father, {
            top: `${e.clientY + this.father.parentElement.scrollTop - num2}px`,
            left: `${e.clientX - DOC_TSKw - num1}px`
        })

    }
    mousetouch(eventArg) {
        document.addEventListener('mousemove', mousemovefn = (e) => { 
            this.draggable(e, eventArg.offsetX, eventArg.offsetY)

            console.log('drag')
        })
        this.father.style.border = '2px solid rgba(177, 177, 255, 0.542)'
    }
}