import { el, css } from './utilities.js'

export default class MaketempDiv {
    constructor(x, y) {
        this.father = x
        this.onstart()
        this.y = y
    }
    exportFn(y = this.y) {
        // console.log(this.ok)
        // if(this.ok == 200 && this.temp) {
            // console.log('reached.... station exportFn')

            // document.removeEventListener('mousemove', this.dragfn)

            document.onmousemove = null
    
            this.exportedDiv = this.temp
        
            // y(this.exportedDiv)
        // } else if(this.temp) { 
            // document.removeEventListener('mousemove', this.dragfn)

            this.temp.parentElement.removeChild(this.temp)
            this.temp = ''
        // }
    }
    dragfn(e) {

        css(this.temp, {
            width: `${e.clientX - this.initPos[0]}px`,
            height: `${e.clientY - this.initPos[1]}px`
        })

        // document.addEventListener('mouseup', this.exportFn())
        document.onmouseup = (ev) => {
            this.exportFn()
        }
    }
    onstart(y) {
        this.father.addEventListener('mousedown', (e) => {

            this.temp = el('div', this.father, ['class', 'tempo'])
            this.initPos = [e.clientX, e.clientY]
            css(this.temp, {
                left: `${this.initPos[0] - document.querySelector('.tskbr').clientWidth}px`,
                top: `${this.initPos[1] + this.father.parentElement.scrollTop}px`
            })

            document.onmousemove = (ev) => {
                this.dragfn(ev)
            }
        }, false);
    }
}