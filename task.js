import { el, css } from './utilities.js'
import { StickyNote } from './stickyNote.js'

const TSK = document.querySelector('.tskbr');
const MED = document.querySelector('.mainEditor')
const ACT = document.querySelector('.actbr')
let componentsObj = [
  // decor btn
  {
    name: 'Decor',
    event: () => {

    }
  },
  // theme
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
    },
    extra: (pass) => {
      pass.classList.add('thame')
      pass.textContent = ''
    }
  },
  // construct btn
  {
    name: 'Construct',
    event: (site) => {
      let newEl = new StickyNote(el('div', ACT, ['class', 'box']))

      site.push(newEl)

    },
    extra: (passMe) => {
      passMe.classList.add('constrct')
      passMe.textContent = ''

      let kidsOfMe = [el('span', passMe), el('div', passMe)]
      kidsOfMe[1].style.rotate = '90deg'
    }
  },
  // {
  //   name: 'Active',
  //   event: () => {

  //   },
  //   extra: (passSme) => {
  //     passSme.style.height = '200px'
  //   },

  //   activatedColors: (target) => {
  //     let clrOptions = [
  //       [el('div', componentsObj[4].dom, ['class', 'clrOpt']), 'red'],
  //       [el('div', componentsObj[4].dom, ['class', 'clrOpt']), 'green'],
  //       [el('div', componentsObj[4].dom, ['class', 'clrOpt']), 'yellow'],
  //       [el('div', componentsObj[4].dom, ['class', 'clrOpt']), 'blue'],
  //       [el('div', componentsObj[4].dom, ['class', 'clrOpt']), 'white'],
  //       [el('div', componentsObj[4].dom, ['class', 'clrOpt']), 'black'],
  //     ]

  //   clrOptions.forEach(element => {
  //     element[0].style.background = element[1]

  //     element[0].onclick = () => {

  //       console.log(target)
  //       target.style.background = element[1]
  //     }
  //   })
  //   }
  // }
]

export function taskbarCompts(site, active) {
    componentsObj.forEach(x => {
      let DOM = el('div', TSK, ['class', 'component'])

      x.dom = DOM
      DOM.textContent = x.name;
      DOM.classList.add('tskbrdiv')
      DOM.onclick = () => {
        x.event(site)
      }
      if(x.extra) x.extra(DOM)
    })
    
    return componentsObj;
}