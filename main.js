import { el, css } from './utilities.js'
import tskMk from './task.js'
import creator from './inputTake.js'

tskMk()

let Creator = new creator(document.querySelector('.mainEditor'))
// let Creator = new creator(document.querySelector('code'))
