	function ative(){
     var bot = document.getElementById('res')
     var main = document.getElementById('menu')
     var log = document.getElementById('logo')
     var cont = document.querySelector('.content')
		bot.classList.toggle('active')
		main.classList.toggle('active')
		log.classList.toggle('active')
		cont.classList.toggle('active')

		//o .toggle é obrigatoriamente o id da div para alterar a classe do banner
	}
