const card = document.querySelector('.container');
let flag = false;

card.addEventListener('click', (e) => {
    flag ? card.style.background = 'orange' : card.style.background = 'green'
    flag = !flag
});