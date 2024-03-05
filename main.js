import { el, css } from './utilities.js'
import {taskbarCompts} from './task.js'
import creator from './inputTake.js'

class MainClass {
    constructor() {
        this.creator = new creator(document.querySelector('.mainEditor'));
        this.alls = [this.creator]
        this.tsk = taskbarCompts(this.alls)
        this.clickEventManager()
    }

    clickEventManager() {
        document.addEventListener('click', (e) => {
            this.recentEl = e.target

            this.tsk[4].dom.textContent = e.target

            if(this.creator.father == this.recentEl) this.creator.shouldType = true
            else this.creator.shouldType = false;

        }, false)
    }
}

let mainobj = new MainClass()
// let Creator = new creator(document.querySelector('code'))
