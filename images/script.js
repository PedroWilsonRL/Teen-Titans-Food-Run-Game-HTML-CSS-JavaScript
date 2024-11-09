const beastboy = document.querySelector('.beastboy');
const food = document.querySelector('.food');

const jump = () => {
    beastboy.classList.add('jump');

    setTimeout(() => {
        beastboy.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const foodPosition = food.offsetLeft;
    const beastboyPosition = +window.getComputedStyle(beastboy).bottom.replace('px', '');

    console.log(beastboyPosition);
    
    if (foodPosition <= 115 && foodPosition > 0 && beastboyPosition < 94) {

        food.style.animation = 'none';
        food.style.left = `${foodPosition}px`;

        beastboy.style.animation = 'none';
        beastboy.style.bottom = `${beastboyPosition}px`;

        beastboy.src = './Characters and Objects/game-over.png';
        beastboy.style.width = '78px'
        beastboy.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump); 