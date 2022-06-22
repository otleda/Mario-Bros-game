let mario = document.querySelector('.mario');

let key = {space : 32}

const jumpMario = (event) => {

    if(event.keyCode == key.space) {

        mario.classList.add('jump');
    }
    
    setTimeout(()=> { 
        mario.classList.remove('jump');
    }, 500);

}

window.addEventListener('keydown',jumpMario);




