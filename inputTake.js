import { el, css } from './utilities.js'

export default class InputTaker {
    constructor(x) {
        // for the main Class
        this.father = x;

        this.isNow = true;
        this.interval;
        this.textCache;
        this.htmlCache = '';
        this.shouldType = true;
        // this.shouldType = false;
        this.starterFn(x)
    }
    completelyParse(x) {
        console.log(this.htmlCache)
        this.htmlCache.forEach(val => {
            if(val == '</br>') {
                el('br', x)
            } else {
            el('h1', x).textContent = val
            }
        })
        // x.innerHTML = this.htmlCache
    }
    segmenteros(y = false) {
        // if(y) {
        //     this.htmlCache =  this.textCache.split("\xa0")
        //     console.log(this.htmlCache)

        // } else {
        //     if(Array.isArray(this.htmlCache)) {
        //     this.htmlCache[this.htmlCache.length-1] +=  this.textCache
        //     } else this.htmlCache = [this.textCache]
        // }
        this.htmlCache = this.textCache.split('\xa0');
    }
    parseKeyboard(keyPressed) {
        switch(keyPressed) {
            case 'Backspace':
                if(this.textCache[this.textCache.length-1] == ';') {
                    // console.log(this.textCache[this.textCache.lastIndexOf('&')-1])
                    return this.textCache.slice(0, this.textCache.lastIndexOf('&'))
                } else if(this.textCache[this.textCache.length-1] == '>') {
                    return this.textCache.slice(0, this.textCache.lastIndexOf('<'))
                } else {
                    return this.textCache.slice(0, -1)
                }
                break;
            case 'Shift':
                // state = 0
                
                return this.textCache
                break;
            case 'Enter':
                return this.textCache + '\xa0' + '</br>' + '\xa0' 
                break;
            case 'Alt':
                return this.textCache;
            case 'Tab': return this.textCache; break;
            case 'ArrowUp': return this.textCache; break;
            case 'ArrowDown': return this.textCache; break;
            case 'ArrowLeft': return this.textCache; break;
            case 'ArrowRight': return this.textCache; break;
            case 'Control': return this.textCache; break;
            case 'CapsLock': return this.textCache; break;
            case " ":
                // alert('sup kundi')
                this.segmenteros(true)
                return this.textCache + '\xa0';
                break;
            default: 
                return this.textCache + keyPressed
        }
    }
    cursorBlink(x) {
        // this.interval = setInterval(() => {
        //     if(this.isNow) {
        //         console.log(this.textCache)
        //         this.textCache += '|'
        //         this.isNow = false
        //     } else {
        //         this.isNow = true
        //         this.textCache = this.textCache.slice(0, -1)
        //     }
        // }, 600)
    }
    // THIS IS THE AFTER CODE:
    afterCodeSet(x, e) {

        this.textCache = this.parseKeyboard(e.key);
        this.segmenteros()
        x.innerHTML = ''
        this.completelyParse(x)
        this.isNow = false
    }
    starterFn(x)  {
        this.textCache = '';
        document.documentElement.addEventListener('keydown', e => {
            // alert('k')
            // before: x.innerHTML = this.parseKeyboard(e.key);
            if(e.code == 'Space') e.preventDefault()
            if(this.shouldType) {
                this.afterCodeSet(x, e)
            }
            // before:this.textCache = this.parseKeyboard(e.key);
            // this.textCache = x.innerHTML;
            //  
            // x.innerHTML += '|'

            // if(this.interval) clearInterval(this.interval)
            //     this.cursorBlink(x)
        }, false); 
    }
}