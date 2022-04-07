const coin = document.querySelector(".mainCoin")
const coinsValue = document.querySelector(".coins")
const coinsPerSecond = document.querySelector(".perSecond")

const btnPortatil = document.querySelector(".btnPortatil")
const valorPortatil = document.querySelector(".valor__upgrade__portatil")
const quantidadePortatil = document.querySelector(".quantidade__portatil")

const btnConsole = document.querySelector(".btnConsole")
const valorConsole = document.querySelector(".valor__upgrade__console")
const quantidadeConsole = document.querySelector(".quantidade__console")

const btnCelular = document.querySelector(".btnCelular")
const valorCelular = document.querySelector(".valor__upgrade__celular")
const quantidadeCelular = document.querySelector(".quantidade__celular")

const btnNotebook = document.querySelector(".btnNotebook")
const valorNotebook = document.querySelector(".valor__upgrade__notebook")
const quantidadeNotebook = document.querySelector(".quantidade__notebook")

const btnPcGamer = document.querySelector(".btnPcGamer")
const valorPcGamer = document.querySelector(".valor__upgrade__PcGamer")
const quantidadePcGamer = document.querySelector(".quantidade__PcGamer")

const btnMoedaVirtual = document.querySelector(".btnMoedaVirtual")
const valorBitcoin = document.querySelector(".valor__upgrade__bitcoin")
const quantidadeBitcoin = document.querySelector(".quantidade__bitcoin")

var coins = 0
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
    setInterval(() => {
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
    }, 1)
}

const adicionaCoins = () => {
    coins += 1
}

const coinsPS = () => {
    setInterval(() =>{
        coins += perSecond
    }, 1000) 
}

const compraPortatil = () => {
    if(coins >= valor.portatil) {
        coins -= valor.portatil
        valor.portatil *= 1.1
        perSecond += 0.1
        quantidade.portatil++
    }
}

const compraConsole = () => {
    if(coins >= valor.console) {
        coins -= valor.console
        valor.console *= 1.2
        perSecond += 1
        quantidade.console++
    }
}

const compraCelular = () => {
    if(coins >= valor.celular) {
        coins -= valor.celular
        valor.celular *= 1.3
        perSecond += 8
        quantidade.celular++
    }
}

const compraNotebook = () => {
    if(coins >= valor.notebook) {
        coins -= valor.notebook
        valor.notebook *= 1.4
        perSecond += 47
        quantidade.notebook++
    }
}

const compraPcGamer = () => {
    if(coins >= valor.pcGamer) {
        coins -= valor.pcGamer
        valor.pcGamer *= 1.5
        perSecond += 260
        quantidade.pcGamer++
    }
}

const compraBitcoin = () => {
    if(coins >= valor.bitcoin) {
        coins -= valor.bitcoin
        valor.bitcoin *= 1.6
        perSecond += 1400
        quantidade.bitcoin++
    }
}

coinsPS()
update()

coin.addEventListener("click", adicionaCoins)

btnPortatil.addEventListener("click", compraPortatil)
btnConsole.addEventListener("click", compraConsole)
btnCelular.addEventListener("click", compraCelular)
btnNotebook.addEventListener("click", compraNotebook)
btnPcGamer.addEventListener("click", compraPcGamer)
btnMoedaVirtual.addEventListener("click", compraBitcoin)
