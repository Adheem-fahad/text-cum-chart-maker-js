import { el, css } from './utilities.js'
import creator from './inputTake.js'

export class StickyNote {
    constructor(element) {
        this.father = element;

        // this.headerBr = el('div', this.father, ['class', 'hbr'])

        this.addingEditCont()
        this.mousetouch()
        this.scaffolding()
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


    scafdrag() {
        document.onmousemove = () => {
            css(el('div', document.documentElement), {width: `${e.clientX }px`,height: '30px',background: 'red',position: 'fixed',top: `${e.clientY}px`, left: 0})
        }
    }
    scaffolding() {
        const allCircs = [] 
        let allPos = [
            {'left': `${0 - 6}px`, 'top': `${0 - 6}px`},
            {'right': `${0 - 6}px`, 'top': `${0 - 6}px`},
            {'left': `${0 - 6}px`, 'bottom': `${0 - 6}px`},
            {'right': `${0 - 6}px`, 'bottom': `${0 - 6}px`}
        ]


        for(let i = 0; i < 4; i++) {
            allCircs.push(el('div', this.father, ['class', 'piCl']))

            console.log(allPos[i])
            css(allCircs[i], allPos[i])

            allCircs.onmousedown = () => {
                this.scafdrag()

                console.log('hey')
            }
        }
    }

    closeDrag() {
        document.onmousemove = null;

        this.father.style.border = '2px solid rgba(92, 92, 255, 0.358)'
    }
    draggable(num1, num2) {
        document.onmousemove = (e) => {
            // console.log(e.offsetY, e.offsetX)
            const DOC_TSKw = document.querySelector('.tskbr').clientWidth

            css(this.father, {
                top: `${e.clientY + this.father.parentElement.scrollTop - num2}px`,
                left: `${e.clientX - DOC_TSKw - num1}px`
            })

            document.onmouseup = (e) => {
                e.preventDefault()

                this.closeDrag()

                // TESTINGCODE: css(el('div', document.documentElement), {width: `${e.clientX }px`,height: '30px',background: 'red',position: 'fixed',top: `${e.clientY}px`, left: 0;})
            }
        }
    }
    mousetouch() {
        // let kundi = true;
        // this.textCnt.onmousedown = () => {
        //     // alert(kundi)
        //     kundi = false;
        // }
        // if(kundi) {
            this.father.onmousedown = (e) => {
                // e.preventDefault();
                this.draggable(e.offsetX, e.offsetY)

                this.textCnt.setAttribute('tabindex', '-1')
                this.textCnt.focus()

                this.father.style.border = '2px solid rgba(177, 177, 255, 0.542)'

            }
        // }
    }
}