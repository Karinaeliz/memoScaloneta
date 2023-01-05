const flag = document.getElementById('flag')

for(let i=0; i <flag.offsetWidth; i++){
    let flag_img = document.createElement('div')
    flag_img.className = 'flag_img';
    flag_img.style.backgroundPosition = -i + 'px';
    flag_img.style.animationDelay = i *10 + 'ms';
    flag.append(flag_img);
}


//Btn Nivel1

const input= document.querySelector('.login_input');
const buttonNivel1= document.querySelector('.login_button1');
const formulario= document.querySelector('.login-form');



const nivel1 = (event) =>{
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location= 'juego.html';
}
formulario.addEventListener('submit', nivel1);


