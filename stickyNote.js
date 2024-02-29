import { el, css } from './utilities.js'
import creator from './inputTake.js'

export class StickyNote {
    constructor(element) {
        this.father = element;
        // new creator(this.father)
        this.mousetouch()
    }
    closeDrag() {
        document.onmousemove = null;
    }
    draggable(num1, num2) {
        document.onmousemove = (e) => {
            // console.log(e.offsetY, e.offsetX)

            css(this.father, {
                top: `${e.clientY + this.father.parentElement.scrollTop - num2}px`,
                left: `${e.clientX - this.father.clientWidth - num1}px`
            })

            document.onmouseup = (e) => {
                e.preventDefault()

                this.closeDrag()
            }
        }
    }
    mousetouch() {
        this.father.onmousedown = (e) => {
            e.preventDefault();

            console.log('Hello')

            this.draggable(e.offsetX, e.offsetY)
        }
    }
}