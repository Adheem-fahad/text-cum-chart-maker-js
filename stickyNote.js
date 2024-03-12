import { el, css } from './utilities.js'
import Creator from './inputTake.js'


let mousemovefn, mousedownfn;
// kundism() {
// addingEditCont() {
//     this.textCnt = el('h3', this.father, ['contentEditable', 'true'])
//     // el('span', this.textCnt)
//     this.textCnt.focus()
//     this.textCnt.onclick = () => {
//         document.addEventListener('keydown', () => {
//             this.lclStredtxt = this.textCnt.textContent
//         })
//     }
// }
// scafdrag(e) {
//     // document.addEventListener('mousemove', () => {/
//     // })
// }
// scaffolding() {
//     const allCircs = [] 
//     let allPos = [
//         {'left': `${0 - 6}px`, 'top': `${0 - 6}px`},
//         {'right': `${0 - 6}px`, 'top': `${0 - 6}px`},
//         {'left': `${0 - 6}px`, 'bottom': `${0 - 6}px`},
//         {'right': `${0 - 6}px`, 'bottom': `${0 - 6}px`}
//     ]


//     for(let i = 0; i < 4; i++) {
//         allCircs.push(el('div', this.father, ['class', 'piCl']))

//         // console.log(allPos[i])
//         css(allCircs[i], allPos[i])

//         // allCircs.forEach(element => {
//         //     addEventListener('mousedown', (e) => {
//         //         this.scafdrag(e)

//         //         // console.log('hey')
//         //     })
//         // })
//     }
// }
// }

export class StickyNote {
    constructor(element) {
        this.father = element;
        this.creaiososis = new Creator(this.father)
        
        this.keyFn()
    }
    keyFn() {
        this.father.addEventListener('mousedown', mousedownfn = (e) => {
            this.mousetouch(e)
        }) 
    }
    closeDrag() {

        document.removeEventListener('mousemove', mousemovefn)

        this.father.style.border = '2px solid rgba(92, 92, 255, 0.358)'
    }
    draggable(e, num1, num2) {

            const DOC_TSKw = document.querySelector('.tskbr').clientWidth

            css(this.father, {
                top: `${e.clientY + this.father.parentElement.scrollTop - num2}px`,
                left: `${e.clientX - DOC_TSKw - num1}px`
            })

            document.onmouseup = (e) => {
                this.closeDrag()
            }
    }
    mousetouch(eventArg) {

                document.addEventListener('mousemove', mousemovefn = (e) => { 
                    this.draggable(e, eventArg.offsetX, eventArg.offsetY)
                })

                this.father.style.border = '2px solid rgba(177, 177, 255, 0.542)'
    }
}