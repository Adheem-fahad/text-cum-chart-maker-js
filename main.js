import { el, css } from './utilities.js'
import {taskbarCompts} from './task.js'
import creator from './inputTake.js'
import TempDivMker from './selecting.js'
import { StickyNote } from './stickyNote.js'

class MainClass {
    constructor() {
        this.creator = new creator(document.querySelector('.mainEditor'));
        this.alls = [this.creator]
        this.tsk = taskbarCompts(this.alls)
        // this.clickEventManager()

        console.log(this.creator.father)


        // this.devlop()
        this.tempdivmnger = new TempDivMker(this.creator.father, this.tempDivstore)
    }
}

let mainobj = new MainClass()
// let Creator = new creator(document.querySelector('code'))
