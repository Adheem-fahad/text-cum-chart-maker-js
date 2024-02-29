import { el, css } from './utilities.js'
import {taskbarCompts} from './task.js'
import creator from './inputTake.js'

taskbarCompts()

let Creator = new creator(document.querySelector('.mainEditor'))

document.querySelector('.tskbr').onclick = () => {
    alert('Helllo')
}
// let Creator = new creator(document.querySelector('code'))
