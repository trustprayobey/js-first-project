let counter = 0;

let valueButton = document.getElementById('value')

let buttons = document.querySelectorAll('.btn')
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
        const all = event.currentTarget.classList
        console.log(all)

    })
})