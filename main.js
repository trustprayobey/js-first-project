let count = 0;

let valueButton = document.querySelector('#value')
let mySpan = document.querySelector('.myNumber')


let buttons = document.querySelectorAll('.btn')

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const all = event.currentTarget.classList
        if (all.contains('increase')) {
            count++;
            valueButton.style.color = 'green'
            valueButton.textContent = count
        }
        else if (all.contains('decrease')) {
            count--;
            valueButton.style.color = 'red'
            valueButton.textContent = count
        }
        else {
            count = 0;
            valueButton.style.color = 'black'
            valueButton.textContent = count
        }
    })
})