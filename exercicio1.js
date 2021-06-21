const botaoCalcularFGravidadeEl = document.querySelector('#calcular');
const constanteEl = document.querySelector('#constante');
const massa1El = document.querySelector('#massa1');
const massa2El = document.querySelector('#massa2');
const distanciaEl = document.querySelector('#distancia');
const resultadoEl = document.querySelector('#resultado');


botaoCalcularFGravidadeEl.addEventListener('click', calcularFGravidade);

function calcularFGravidade() {
    const G = constanteEl.value;
    const M1 = massa1El.value;
    const M2 = massa2El.value;
    const d = distanciaEl.value;
    const forcaGravitacional = G * M1 * M2 / d ** 2;
    resultadoEl.value = forcaGravitacional.toExponential(2);
}