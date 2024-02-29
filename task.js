import { el, css } from './utilities.js'

let TSK = document.querySelector('.tskbr');

let componentsObj = [
  {
    name: 'File'
  },
  {
    name: 'Decor'
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
      
    }
  }
]

export function taskbarCompts() {
    componentsObj.forEach(x => {
      let DOM = el('div', TSK, 'class', 'component')
      DOM.textContent = x.name;
      DOM.onclick = () => {
        x.event()
      }
    })
}