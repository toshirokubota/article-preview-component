const elms = document.querySelectorAll('.activatable');
const button = document.getElementById('activate');
console.log(elms, button);
button.addEventListener('click', () => {
    for(let elm of elms) {
        elm.classList.toggle('active');
    }
});
