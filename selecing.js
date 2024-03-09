import { el, css } from './utilities.js'

export default class MaketempDiv {
    constructor(x, y) {
        this.father = x
        this.onstart(y)
    }
    exportFn(y) {
        document.onmousemove = null
    
        this.exportedDiv = this.temp
        
        y(this.exportedDiv)

        this.temp.parentElement.removeChild(this.temp)
        this.temp = ''
    }
    dragfn(e, y) {

        css(this.temp, {
            width: `${e.clientX - this.initPos[0]}px`,
            height: `${e.clientY - this.initPos[1]}px`
        })

        document.onmouseup = () => {
            this.exportFn(y)
        }
    }
    onstart(y) {
        this.father.onmousedown = (e) => {

            this.temp = el('div', this.father, ['class', 'tempo'])
            this.initPos = [e.clientX, e.clientY]
            css(this.temp, {
                left: `${this.initPos[0] - document.querySelector('.tskbr').clientWidth}px`,
                top: `${this.initPos[1]}px`
            })

            document.onmousemove = (ev) => {
                this.dragfn(ev, y)
            }
        }
    }
}