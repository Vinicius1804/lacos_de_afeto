window.addEventListener('scroll', function() {
    const nuvem = document.querySelector('.nuvem img');
    let scrollPos = window.scrollY;
    
    // A posição da imagem vai subir conforme o scroll - agora movemos para cima
    nuvem.style.transform = 'translateY(' + scrollPos * -0.3 + 'px)';
});

function show_camada1(){
    document.getElementById("camada1").style.visibility="visible";
    document.getElementById("camada2").style.visibility="hidden";
}

function show_camada2(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="visible";
}

function some_tudo(){
    document.getElementById("camada1").style.visibility="hidden";
    document.getElementById("camada2").style.visibility="hidden";
}
