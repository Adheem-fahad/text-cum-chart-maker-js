import { el, css } from './utilities.js'
import Creator from './inputTake.js'

export class StickyNote {
    constructor(element) {
        this.father = element;
        this.creaiososis = new Creator(this.father)
        // this.headerBr = el('div', this.father, ['class', 'hbr'])

        // this.addingEditCont()
        
        this.father.addEventListener('mousedown', (e) => {
            this.mousetouch(e)
        }) 

        this.scaffolding()
    }

    addingEditCont() {
        this.textCnt = el('h3', this.father, ['contentEditable', 'true'])
        // el('span', this.textCnt)
        this.textCnt.focus()
        this.textCnt.onclick = () => {
            document.addEventListener('keydown', () => {
                this.lclStredtxt = this.textCnt.textContent
            })
        }
    }


    scafdrag(e) {
        // document.addEventListener('mousemove', () => {/
        // })
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

            // console.log(allPos[i])
            css(allCircs[i], allPos[i])

            allCircs.forEach(element => {
                addEventListener('mousedown', (e) => {
                    this.scafdrag(e)

                    // console.log('hey')
                })
            })
        }
    }

    closeDrag() {
        // document.removeEventListener('mousemove', this.draggable)
        document.onmousemove = null

        this.father.style.border = '2px solid rgba(92, 92, 255, 0.358)'
    }
    draggable(num1, num2, e) {
            // console.log(e.offsetY, e.offsetX)
            console.log('moving')

            const DOC_TSKw = document.querySelector('.tskbr').clientWidth

            css(this.father, {
                top: `${e.clientY + this.father.parentElement.scrollTop - num2}px`,
                left: `${e.clientX - DOC_TSKw - num1}px`
            })

            document.addEventListener('mouseup', (e) => {
                console.log('yo shit.. its up')
                e.preventDefault()

                this.closeDrag()
            })
    }
    mousetouch(e) {
                // document.addEventListener('mousemove', (e) => { this.draggable(e.offsetX, e.offsetY, e) })
                document.onmousemove = (e) => {
                    this.draggable(e.offsetX, e.offsetY, e)
                }

                this.father.style.border = '2px solid rgba(177, 177, 255, 0.542)'
    }
}