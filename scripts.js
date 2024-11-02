let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".container-info");
let modal  = document.querySelector(".modal");

// Ligar o Som
botaoSom.addEventListener("click", ligaSom);

function ligaSom(){
    video.muted = false
};

// Mostrar o modal e sair do modal
botao.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal)

function mostrarModal() {
    modal.style.display = "block"
};

function esconderModal(){
    modal.style.display = "none"
}