const moon = document.getElementById('moon');
let text = document.getElementById('text');
const mountain = document.getElementById('mountain');
const river = document.getElementById('river');
const boat = document.getElementById('boat');
// const header = document.querySelector('header');
const train = document.getElementById('train');
const hill = document.getElementById('hill');
let desert_moon = document.getElementById('desert-moon');
let man = document.getElementById('man');
let progress = document.getElementById('progress');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // header.style.top = value * 0.5 + 'px';
    moon.style.top = value * 0.7 + 'px';
    text.style.top = 85 + value * -0.2 + '%';
    text.style.zIndex = 1003 + value;
    train.style.left = value * 1.5 + 'px';
    desert_moon.style.top = value * 0.4 + 'px';
    man.style.left = value * 0.6 + 'px';
    progress.style.display = value > 500 ? 'block' : 'none';
    // mountain.style.top = value * 0.5 + 'px';
    // river.style.top = value * 0.5 + 'px';
    // boat.style.top = value * 0.5 + 'px';
    // train.style.top = value * 0.5 + 'px';
    // hill.style.top = value * 0.5 + 'px';
})
progress.addEventListener('click', () => {
    window.scrollTo(0, 0);
})