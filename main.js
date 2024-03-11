import { el, css } from './utilities.js'
import {taskbarCompts} from './task.js'
import creator from './inputTake.js'
import TempDivMker from './selecting.js'
// import { StickyNote } from './stickyNote.js'

class MainClass {
    constructor() {
        this.creator = new creator(document.querySelector('.mainEditor'));
        this.alls = [this.creator]
        this.tsk = taskbarCompts(this.alls)
        this.clickEventManager()

        this.tempdivmnger = new TempDivMker(this.creator.father, this.tempDivstore)
    }
    tempDivstore(temp) {
        let newnote = new StickyNote(temp)
        // console.log(newnote)
    }
    clickEventManager() {
        document.addEventListener('click', (e) => {
            this.recentEl = e.target
            
            // this.tsk[4].activatedColors(this.recentEl) 
            

            this.alls.forEach(element => {
                if(this.recentEl == element.father){ 
                    if(element.creaiososis) {
                        element.creaiososis.shouldType = true;
                    } else element.shouldType = true;
                }
                else {
                    if(element.creaiososis) element.creaiososis.shouldType = false
                    else element.shouldType = false
                }
                // console.log(this.alls)
            })


        }, false)
    }
}

let mainobj = new MainClass()
// let Creator = new creator(document.querySelector('code'))
