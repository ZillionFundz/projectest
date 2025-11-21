const exitBtn = document.getElementById('exit-btn');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

exitBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    exitBtn.style.display = 'none';
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.bottom = '25%';
    }, 200)
})
overlay.addEventListener('click', () => {
    popup.style.bottom = '-100%';
    popup.style.display = 'none';
    overlay.style.display = 'none';
    exitBtn.style.display = 'block';
})
noBtn.addEventListener('click', () => {
    popup.style.bottom = '-100%';
    popup.style.display = 'none';
    overlay.style.display = 'none';
    exitBtn.style.display = 'block';
})