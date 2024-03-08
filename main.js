import { el, css } from './utilities.js'
import {taskbarCompts} from './task.js'
import creator from './inputTake.js'

class MainClass {
    constructor() {
        this.creator = new creator(document.querySelector('.mainEditor'));
        this.alls = [this.creator]
        this.tsk = taskbarCompts(this.alls)
        this.clickEventManager()
        this.recentEl = ''
        this.tsk[4].activatedColors(this.recentEl) 
    }

    clickEventManager() {
        document.addEventListener('click', (e) => {
            this.recentEl = e.target

            

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
