const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');


    }, 500)
}

const loop = setInterval(() => {

    console.log(loop)
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';


        clearInterval(loop);

        // alert('Game Over')

        var sair = confirm("Você perdeu! Deseja recomeçar?"); // solicita confirmação
        if (sair) {
            location.reload()
            // sai da repetição
        }
    }

}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
