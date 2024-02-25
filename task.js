import { el, css } from './utilities.js'

let TSK = document.querySelector('.tskbr');

const components = ['File', 'Theme', 'Decor']
let IS_DARK_OR_NOT = true;

export default function taskbarCompts() {
    components.forEach(x => {

        let DOM = el('div', TSK, ['class', 'component'])
        DOM.textContent = x;

        if(x == 'Theme') {
            DOM.onclick = () => {
            if(IS_DARK_OR_NOT) {
                IS_DARK_OR_NOT = false
                    document.documentElement.style.setProperty('--bg-clr', 'white');
                    document.documentElement.style.setProperty('--opp-clr', 'black');
                    document.documentElement.style.setProperty('--bd-clr', 'rgba(0, 0, 0, 0.38)')
                } else {
                    IS_DARK_OR_NOT = true
                    document.documentElement.style.setProperty('--bg-clr', 'black');
                    document.documentElement.style.setProperty('--opp-clr', 'white');
                    document.documentElement.style.setProperty('--bd-clr', 'rgba(255, 255, 255, 0.38)');
                }
            }
        }
    })
}