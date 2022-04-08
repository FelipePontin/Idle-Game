var coins = 100000
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

        document.querySelector(".coins").textContent = coins.toFixed()
        document.querySelector(".perSecond").textContent = perSecond.toFixed(1)
    
        document.querySelector(".valor__upgrade__portatil").textContent = valor.portatil.toFixed()
        document.querySelector(".quantidade__portatil").textContent = quantidade.portatil.toFixed()
    
        document.querySelector(".valor__upgrade__console").textContent = valor.console.toFixed()
        document.querySelector(".quantidade__console").textContent = quantidade.console.toFixed()
    
        document.querySelector(".valor__upgrade__celular").textContent = valor.celular.toFixed()
        document.querySelector(".quantidade__celular").textContent = quantidade.celular.toFixed()
    
        document.querySelector(".valor__upgrade__notebook").textContent = valor.notebook.toFixed()
        document.querySelector(".quantidade__notebook").textContent = quantidade.notebook.toFixed()
    
        document.querySelector(".valor__upgrade__PcGamer").textContent = valor.pcGamer.toFixed()
        document.querySelector(".quantidade__PcGamer").textContent = quantidade.pcGamer.toFixed()
    
        document.querySelector(".valor__upgrade__bitcoin").textContent = valor.bitcoin.toFixed()
        document.querySelector(".quantidade__bitcoin").textContent = quantidade.bitcoin.toFixed()
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