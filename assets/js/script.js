window.sr = ScrollReveal({reset:true});

sr.reveal('.flavors--desc--area', {
    duration:2000,
    rotate: {x:20, y:20, z:0}
});
sr.reveal('.social--area', {
    duration:2000,
    rotate: {x:20, y:20, z:0}
});

function scroolUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.querySelector('.imgButton').addEventListener('click',scroolUp);

function verifyScrool(){
    if(window.scrollY > 300){
        document.querySelector('.imgButton').style.display = 'block';
    } else {
        document.querySelector('.imgButton').style.display = 'none';
    }
}

window.addEventListener('scroll', verifyScrool);

function toggleMenu() {
        if(document.querySelector('.menu--area').style.display == 'none'){
            document.querySelector('.menu--area').style.display = 'block'
        } else {
           document.querySelector('.menu--area').style.display = 'none'
        }
}
document.querySelector('.menu--mobile').addEventListener('click',toggleMenu)


document.querySelector('#cardapio--link').setAttribute('href', '#cardapio');
document.querySelector('#fotos--link').setAttribute('href', '#fotos');
document.querySelector('#contato--link').setAttribute('href', '#contato');
document.querySelector('#dicas--link').setAttribute('href', '#dicas');

let imagens = document.querySelectorAll('.small-img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btClose = document.querySelector('.botao-modal-close');
let srcVal ='';

for(let i=0;i<imagens.length;i++){
    imagens[i].addEventListener('click', ()=>{
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src',srcVal);
        modal.classList.toggle('modal-active');
    });
}
btClose.addEventListener('click', ()=>{
    modal.classList.toggle('modal-active');
});