import { el, css } from './utilities.js'
import {taskbarCompts} from './task.js'
import creator from './inputTake.js'
import TempDivMker from './selecting.js'
import { StickyNote } from './stickyNote.js'
import TextSelect from './textSelect.js'

class MainClass {
    constructor() {
        this.creator = new creator(document.querySelector('.mainEditor'));
        this.alls = [this.creator]
        this.tsk = taskbarCompts(this.alls)
        new TextSelect();
        this.checkType()
        
        this.tempdivmnger = new TempDivMker(this.creator.father, this)
    }
    checkType() {
        document.querySelector('.actbr').addEventListener('click', (e) => {
            this.cacheEl = e.target
            if(this.cacheEl == this.creator.father) this.creator.shouldType = true
            else this.creator.shouldType = false
        })
    }
}

let mainobj = new MainClass()

export { mainobj }