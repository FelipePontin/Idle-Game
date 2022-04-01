const setaRecompensa = document.querySelectorAll(".seta_recompensa")

setaRecompensa.forEach((seta) => {
    seta.addEventListener("click", () => {
        const recompensa = seta.nextElementSibling
        recompensa.classList.toggle("recompensaOpen")
    }) 
})

const btnConquistas = document.querySelector(".botao_conquistas")
const secaoConquista = document.querySelector(".secao_conquista")
const fecharConquistas = document.querySelector(".fechar_conquistas")

btnConquistas.addEventListener("click", () => {
    secaoConquista.classList.toggle("secao_conquistaOpen")
})

fecharConquistas.addEventListener("click", () => {
    secaoConquista.classList.remove("secao_conquistaOpen")
})
