window.sr = ScrollReveal({reset:true});

sr.reveal('.flavors--desc--area', {
    duration:2000,
    rotate: {x:20, y:20, z:0}
});
sr.reveal('.flavors--area', {
    duration:4000,
    rotate: {x:30, y:30, z:0}
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