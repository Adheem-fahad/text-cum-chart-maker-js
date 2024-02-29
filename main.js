import { el, css } from './utilities.js'
import {taskbarCompts} from './task.js'
import creator from './inputTake.js'

taskbarCompts()

let Creator = new creator(document.querySelector('.mainEditor'))
// let Creator = new creator(document.querySelector('code'))
