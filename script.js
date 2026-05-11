const digitsContainer = document.getElementById('digits');
const btn = document.getElementById('btn-refresh');

const DIGITS_COUNT = 4;

btn.addEventListener('click', () => {
    digitsContainer.innerHTML = '';

    for (let i = 0; i < DIGITS_COUNT; i++) {
        const digit = document.createElement('div');
        digit.classList.add('digit');
        digit.textContent = Math.floor(Math.random() * 10);
        digitsContainer.appendChild(digit);
    }
});

btn.dispatchEvent(new Event('click'));