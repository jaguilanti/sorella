(function(){
	setInterval(function(){

		var primeraLetra = document.getElementById('changecolor'),
			segundaLetra = document.getElementById('changecolor'),

		coloresDegradado = ["#ffff"];
		coloresSimples = ["black","withe"];

		primeraLetra.style.color = coloresDegradado[Math.floor(Math.random() * coloresDegradado.length)];
		segundaLetra.style.color = coloresSimples[Math.floor(Math.random() * coloresSimples.length)];


	},300);
}())
