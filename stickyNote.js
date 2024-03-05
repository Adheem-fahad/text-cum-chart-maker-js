import { el, css } from './utilities.js'
import creator from './inputTake.js'

export class StickyNote {
    constructor(element) {
        this.father = element;

        this.headerBr = el('div', this.father, ['class', 'hbr'])

        this.addingEditCont()
        this.mousetouch()
    }

    addingEditCont() {
        this.textCnt = el('h3', this.father, ['contentEditable', 'true'])

        this.textCnt.focus()
        this.textCnt.onclick = () => {
            document.addEventListener('keydown', () => {
                this.lclStredtxt = this.textCnt.textContent
            })
        }
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
        let kundi = true;
        this.textCnt.onmousedown = () => {
            // alert(kundi)
            kundi = false;
        }
        if(kundi) {
            this.father.onmousedown = (e) => {
                // e.preventDefault();

                this.draggable(e.offsetX, e.offsetY)
            }
        }
    }
}