
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaRocketTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	criaRocketTempo = 1500
} else if (nivel === 'dificil') {
	criaRocketTempo = 1000
} else if (nivel === 'chucknorris') {
	criaRocketTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaRocket)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000 )


function posicaoRandomica() {
	//remover time rocket anterior caso exista
	if(document.getElementById('rocket')) {
		document.getElementById('rocket').remove()

		if(vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	poxicaoX = posicaoX < 0 ? 0 : posicaoX
	poxicaoY = posicaoY < 0 ? 0 : posicaoY

	//elemento html
	var rocket = document.createElement('img')
	rocket.src = 'imagens/rocket-transparent-team-3.png'
	rocket.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	rocket.style.left = posicaoX + 'px'
	rocket.style.top = posicaoY + 'px'
	rocket.style.position = 'absolute'
	rocket.id = 'rocket'
	rocket.onclick = function() {
		this.remove()
	}

	document.body.appendChild(rocket)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'rocket1'
		case 1: 
			return 'rocket2'
		case 2:
			return 'rocket3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1: 
			return 'ladoB'
	}
}