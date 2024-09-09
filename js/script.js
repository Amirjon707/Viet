function SEND() {
    let a = document.querySelector('#a').value
    let b = document.querySelector('#b').value
    let c = document.querySelector('#c').value
    let x1 = document.querySelector('#x1')
    let x2 = document.querySelector('#x2')
    let error = document.querySelector('#error')

    if (a == 0 || b == 0 || c == 0) {
        error.innerHTML = 'ERROR!'
    } else {
    error.innerHTML = ''
    let d = b**2 - 4 * a * c
    if (d > 0) {
        x1.style.display = 'block'
        x2.style.display = 'block'
        let ans1 = (-b + d ** 0.5) / (a * 2)
        let ans2 = (-b - d ** 0.5) / (a * 2)
        x1.innerHTML = "x<sub>1</sub> = " + ans1;
        x2.innerHTML = "x<sub>2</sub> = " + ans2;
    } else if (d == 0){
        x1.style.display = 'block'
        x2.style.display = 'none'
        let ans1 = (-b + d ** 0.5) / (a * 2)
        x1.innerHTML = "x<sub>1</sub> = " + ans1;
    } else {
        x1.style.display = 'none'
        x2.style.display = 'none'
    }
}
}