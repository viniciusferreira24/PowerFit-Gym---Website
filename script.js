// ===== MENU MOBILE =====

function toggleMenu(){ // função abrir/fechar menu

const nav = document.querySelector("nav") // seleciona menu

nav.classList.toggle("active") // adiciona/remove classe active

}



// ===== CONTADOR ANIMADO =====

const counters = document.querySelectorAll(".stat h2") // seleciona números

counters.forEach(counter => { // percorre cada número

counter.innerText = "0" // começa contador em 0

const updateCounter = () => { // função atualizar contador

const target = +counter.innerText + 10 // incrementa valor

const max = counter.getAttribute("data-target") // valor final

if(target < max){ // se ainda não chegou no final

counter.innerText = target // atualiza número

setTimeout(updateCounter,30) // repete animação

}else{

counter.innerText = max // define valor final

}

}

updateCounter() // inicia contador

})



// ===== ANIMAÇÃO AO ROLAR A PÁGINA =====

const elements = document.querySelectorAll(".plan, .training-card, .gallery-container img") // elementos animados

function reveal(){ // função revelar elementos

const windowHeight = window.innerHeight // altura da tela

elements.forEach(el => { // percorre elementos

const elementTop = el.getBoundingClientRect().top // posição elemento

if(elementTop < windowHeight - 100){ // quando entra na tela

el.style.opacity = "1" // mostra elemento

el.style.transform = "translateY(0)" // move para posição

}

})

}

window.addEventListener("scroll", reveal) // executa ao rolar



// ===== EFEITO SUAVE NOS LINKS =====

document.querySelectorAll("nav a").forEach(link => { // pega links menu

link.addEventListener("click", function(e){ // escuta clique

e.preventDefault() // remove comportamento padrão

const target = document.querySelector(this.getAttribute("href")) // destino

target.scrollIntoView({behavior:"smooth"}) // rolagem suave

})

})