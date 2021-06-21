let menuBotoesEl = document.querySelectorAll('.botao-expandir-retrair');
let status = 'plus';

for (let menuBotaoEl of menuBotoesEl) {
    menuBotaoEl.addEventListener('click', function(e) {
        let menuEl = e.currentTarget;
        tagParagrafo = menuEl.parentNode;
        tagParagrafo.classList.toggle('expandido');
        if (status === 'plus') {
            status = 'minus';
            menuEl.innerHTML = '-';
        } else {
            status = 'plus';
            menuEl.innerHTML = '+';
        }
    })
}