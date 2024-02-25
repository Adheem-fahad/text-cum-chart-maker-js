function el(x, y, a) {
    let element = document.createElement(x);
    if(y) {
        y.appendChild(element)
    }
    if(a) {
        element.setAttribute(a[0], a[1]);
    }
    return element;
}
function css(x, obj) {
    for(let i in obj) {
        x.style[i] = obj[i]
    }
}
function prependChild(x, y) {
    let firstchildofit = x.firstChild;
    if(firstchildofit) {
        x.insertBefore(y, firstchildofit)
    }
    return y;
}
export { el, css, prependChild }