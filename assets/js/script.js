const coin = document.querySelector(".mainCoin")
const coinsValue = document.querySelector(".coins")
const coinsPerSecond = document.querySelector(".perSecond")

const valorPortatil = document.querySelector(".valor__upgrade__portatil")
const quantidadePortatil = document.querySelector(".quantidade__portatil")

const valorConsole = document.querySelector(".valor__upgrade__console")
const quantidadeConsole = document.querySelector(".quantidade__console")

const valorCelular = document.querySelector(".valor__upgrade__celular")
const quantidadeCelular = document.querySelector(".quantidade__celular")

const valorNotebook = document.querySelector(".valor__upgrade__notebook")
const quantidadeNotebook = document.querySelector(".quantidade__notebook")

const valorPcGamer = document.querySelector(".valor__upgrade__PcGamer")
const quantidadePcGamer = document.querySelector(".quantidade__PcGamer")

const valorBitcoin = document.querySelector(".valor__upgrade__bitcoin")
const quantidadeBitcoin = document.querySelector(".quantidade__bitcoin")

var coins = 200
var perSecond = 0

const valor = {
    portatil: 15,
    console: 100,
    celular: 500,
    notebook: 1000,
    pcGamer: 2000,
    bitcoin: 10000,
}

const quantidade = {
    portatil: 0,
    console: 0,
    celular: 0,
    notebook: 0,
    pcGamer: 0,
    bitcoin: 0,
}

const update = () => {
    document.title = `${coins.toFixed()} Coin Cliker`

    coinsValue.textContent = coins.toFixed()
    coinsPerSecond.textContent = perSecond.toFixed(1)

    valorPortatil.textContent = valor.portatil.toFixed()
    quantidadePortatil.textContent = quantidade.portatil.toFixed()

    valorConsole.textContent = valor.console.toFixed()
    quantidadeConsole.textContent = quantidade.console.toFixed()

    valorCelular.textContent = valor.celular.toFixed()
    quantidadeCelular.textContent = quantidade.celular.toFixed()

    valorNotebook.textContent = valor.notebook.toFixed()
    quantidadeNotebook.textContent = quantidade.notebook.toFixed()

    valorPcGamer.textContent = valor.pcGamer.toFixed()
    quantidadePcGamer.textContent = quantidade.pcGamer.toFixed()

    valorBitcoin.textContent = valor.bitcoin.toFixed()
    quantidadeBitcoin.textContent = quantidade.bitcoin.toFixed()
}

const adicionaCoins = (event) => {
    coins += 1
    update()
}

const coinsPS = () => {
    setInterval(() =>{
        coins += perSecond
        update()
    }, 1000) 
}

const compraPortatil = () => {
    if(coins >= valor.portatil) {
        coins -= valor.portatil
        valor.portatil *= 1.1
        perSecond += 0.1
        quantidade.portatil++
        update()
    }
}

const compraConsole = () => {
    if(coins >= valor.console) {
        coins -= valor.console
        valor.console *= 1.5
        perSecond += 1
        quantidade.console++
        update()
    }
}

const compraCelular = () => {
    if(coins >= valor.celular) {
        coins -= valor.celular
        valor.celular *= 2
        perSecond += 10
        quantidade.celular++
        update()
    }
}

const compraNotebook = () => {
    if(coins >= valor.notebook) {
        coins -= valor.notebook
        valor.notebook *= 5
        perSecond += 50
        quantidade.notebook++
        update()
    }
}

const compraPcGamer = () => {
    if(coins >= valor.pcGamer) {
        coins -= valor.pcGamer
        valor.pcGamer *= 10
        perSecond += 100
        quantidade.pcGamer++
        update()
    }
}

const compraBitcoin = () => {
    if(coins >= valor.bitcoin) {
        coins -= valor.bitcoin
        valor.bitcoin *= 50
        perSecond += 1000
        quantidade.bitcoin++
        update()
    }
}

const btnsUpgrade = document.querySelectorAll(".button__upgrade")

btnsUpgrade.forEach(btnUpgrade => {

    btnUpgrade.addEventListener("click", () => {

        const nomeUpgrade = btnUpgrade.parentElement.firstElementChild.textContent

        if(nomeUpgrade == "Game Portátil")  compraPortatil()
        if(nomeUpgrade == "Console PS4") compraConsole()
        if(nomeUpgrade == "Celular Potente") compraCelular()
        if(nomeUpgrade == "Notebook Gamer") compraNotebook()
        if(nomeUpgrade == "Pc Gamer") compraPcGamer()
        if(nomeUpgrade == "Bitcoin") compraBitcoin()
        
    })
});

coin.addEventListener("click", adicionaCoins)
coinsPS()
update()