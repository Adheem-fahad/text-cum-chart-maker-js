import { el, css } from './utilities.js'
import { StickyNote } from './stickyNote.js'

const TSK = document.querySelector('.tskbr');
const MED = document.querySelector('.mainEditor')
const ACT = document.querySelector('.actbr')
let componentsObj = [
  {
    name: 'File',
    event: () => {
    }
  },
  {
    name: 'Decor',
    event: () => {

    }
  },
  {
    name: 'Theme',
    IS_DARK_OR: true,
    event: () => {
      let IS_DARK_OR_NOT = componentsObj[2].IS_DARK_OR
      if(IS_DARK_OR_NOT) {
                componentsObj[2].IS_DARK_OR = false
                    document.documentElement.style.setProperty('--bg-clr', 'white');
                    document.documentElement.style.setProperty('--opp-clr', 'black');
                    document.documentElement.style.setProperty('--bd-clr', 'rgba(0, 0, 0, 0.38)')
                } else {
                    componentsObj[2].IS_DARK_OR = true
                    document.documentElement.style.setProperty('--bg-clr', 'black');
                    document.documentElement.style.setProperty('--opp-clr', 'white');
                    document.documentElement.style.setProperty('--bd-clr', 'rgba(255, 255, 255, 0.38)');
                }
    }
  },
  {
    name: 'Construct',
    event: () => {
      let newEl = new StickyNote(el('div', ACT, ['class', 'box']))
    }
  }
]

export function taskbarCompts() {
    componentsObj.forEach(x => {
      let DOM = el('div', TSK, ['class', 'component'])
      DOM.textContent = x.name;
      DOM.onclick = () => {
        x.event()
      }
    })
}