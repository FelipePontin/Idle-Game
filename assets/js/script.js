const game = {
    coins: 0,
    perSecond: 0
}

const valor = {
    portatil: 15,
    console: 100,
    celular: 500,
    notebook: 1000,
    pcGamer: 2000,
    bitcoin: 10000
}

const quantidade = {
    portatil: 0,
    console: 0,
    celular: 0,
    notebook: 0,
    pcGamer: 0,
    bitcoin: 0
}

const update = () => {
    setInterval(() => {
        document.title = `${game.coins.toFixed(0)} Coin Cliker`

        document.querySelector(".coins").textContent = game.coins.toFixed(0)
        document.querySelector(".perSecond").textContent = game.perSecond.toFixed(1)
    
        document.querySelector(".valor__upgrade__portatil").textContent = valor.portatil.toFixed(0)
        document.querySelector(".quantidade__portatil").textContent = quantidade.portatil.toFixed(0)
    
        document.querySelector(".valor__upgrade__console").textContent = valor.console.toFixed(0)
        document.querySelector(".quantidade__console").textContent = quantidade.console.toFixed(0)
    
        document.querySelector(".valor__upgrade__celular").textContent = valor.celular.toFixed(0)
        document.querySelector(".quantidade__celular").textContent = quantidade.celular.toFixed(0)
    
        document.querySelector(".valor__upgrade__notebook").textContent = valor.notebook.toFixed(0)
        document.querySelector(".quantidade__notebook").textContent = quantidade.notebook.toFixed(0)
    
        document.querySelector(".valor__upgrade__PcGamer").textContent = valor.pcGamer.toFixed(0)
        document.querySelector(".quantidade__PcGamer").textContent = quantidade.pcGamer.toFixed(0)
    
        document.querySelector(".valor__upgrade__bitcoin").textContent = valor.bitcoin.toFixed(0)
        document.querySelector(".quantidade__bitcoin").textContent = quantidade.bitcoin.toFixed(0)
    }, 1)
}

const adicionaCoins = () => {
    game.coins += 1
}

const coinsPS = () => {
    setInterval(() =>{
        game.coins += game.perSecond
    }, 1000) 
}

const compraPortatil = () => {
    if(game.coins >= valor.portatil) {
        game.coins -= valor.portatil
        valor.portatil *= 1.1
        game.perSecond += 0.1
        quantidade.portatil++
    }
}

const compraConsole = () => {
    if(game.coins >= valor.console) {
        game.coins -= valor.console
        valor.console *= 1.2
        game.perSecond += 1
        quantidade.console++
    }
}

const compraCelular = () => {
    if(game.coins >= valor.celular) {
        game.coins -= valor.celular
        valor.celular *= 1.3
        game.perSecond += 8
        quantidade.celular++
    }
}

const compraNotebook = () => {
    if(game.coins >= valor.notebook) {
        game.coins -= valor.notebook
        valor.notebook *= 1.4
        game.perSecond += 47
        quantidade.notebook++
    }
}

const compraPcGamer = () => {
    if(game.coins >= valor.pcGamer) {
        game.coins -= valor.pcGamer
        valor.pcGamer *= 1.5
        game.perSecond += 260
        quantidade.pcGamer++
    }
}

const compraBitcoin = () => {
    if(game.coins >= valor.bitcoin) {
        game.coins -= valor.bitcoin
        valor.bitcoin *= 1.6
        game.perSecond += 1400
        quantidade.bitcoin++
    }
}

const saveGame = () => {
    var gameSave = {
        coins: game.coins,
        perSecond: game.perSecond,
        valorPortatil: valor.portatil,
        quantidadePortatil: quantidade.portatil,
        valorConsole: valor.console,
        quantidadeConsole: quantidade.console,
        valorCelular: valor.celular,
        quantidadeCelular: quantidade.celular,
        valorNotebook: valor.notebook,
        quantidadeNotebook: quantidade.notebook,
        valorPcGamer: valor.pcGamer,
        quantidadePcGamer: quantidade.pcGamer,
        valorBitCoin: valor.bitcoin,
        quantidadeBitcoin: quantidade.bitcoin
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

const loadGame = () => {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"))

    if (localStorage.getItem("gameSave") !== null) {
        if (typeof savedGame.perSecond !== "undefined") game.coins = savedGame.coins
        if (typeof savedGame.perSecond !== "undefined") game.perSecond = savedGame.perSecond

        if (typeof savedGame.valorPortatil !== "undefined") valor.portatil = savedGame.valorPortatil
        if (typeof savedGame.quantidadePortatil !== "undefined") quantidade.portatil = savedGame.quantidadePortatil
    
        if (typeof savedGame.valorConsole !== "undefined") valor.console = savedGame.valorConsole
        if (typeof savedGame.quantidadeConsole !== "undefined") quantidade.console = savedGame.quantidadeConsole
    
        if (typeof savedGame.valorCelular !== "undefined") valor.celular = savedGame.valorCelular
        if (typeof savedGame.quantidadeCelular !== "undefined") quantidade.celular = savedGame.quantidadeCelular
    
        if (typeof savedGame.valorNotebook !== "undefined") valor.notebook = savedGame.valorNotebook
        if (typeof savedGame.quantidadeNotebook !== "undefined") quantidade.notebook = savedGame.quantidadeNotebook
    
        if (typeof savedGame.valorPcGamer !== "undefined") valor.pcGamer = savedGame.valorPcGamer
        if (typeof savedGame.quantidadePcGamer !== "undefined") quantidade.pcGamer = savedGame.quantidadePcGamer
    
        if (typeof savedGame.valorBitCoin !== "undefined") valor.bitcoin = savedGame.valorBitCoin
        if (typeof savedGame.quantidadeBitcoin !== "undefined") quantidade.bitcoin = savedGame.quantidadeBitcoin
    } 
}

window.onload = function() {
    loadGame()
}

coinsPS()
update()

setInterval(() => {
    saveGame()
}, 1)