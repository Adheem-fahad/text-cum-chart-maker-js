import { el, css } from './utilities.js'

export default class MaketempDiv {
    constructor(x, y) {
        this.father = x
        this.onstart(y)
    }
    exportFn(y) {
        // console.log(this.ok)
        if(this.ok == 200 && this.temp) {
            // console.log('reached.... station exportFn')

            document.removeEventListener('mousemove', this.dragfn)
    
            this.exportedDiv = this.temp
        
            y(this.exportedDiv)
        } else if(this.temp) { 
            document.removeEventListener('mousemove', this.dragfn)

            this.temp.parentElement.removeChild(this.temp)
            this.temp = ''
        }
    }
    dragfn(e, y) {

        this.ok = 200

        if(!this.temp) return
        css(this.temp, {
            width: `${e.clientX - this.initPos[0]}px`,
            height: `${e.clientY - this.initPos[1]}px`
        })

        document.addEventListener('mouseup', () => {
            this.exportFn(y)
        })
    }
    onstart(y) {
        this.father.addEventListener('mousedown', (e) => {

            this.ok = 0
            this.temp = el('div', this.father, ['class', 'tempo'])
            this.initPos = [e.clientX, e.clientY]
            css(this.temp, {
                left: `${this.initPos[0] - document.querySelector('.tskbr').clientWidth}px`,
                top: `${this.initPos[1] + this.father.parentElement.scrollTop}px`
            })

            document.addEventListener('mousemove', (ev) => { this.dragfn(ev, y) }, false)
        }, false);
    }
}