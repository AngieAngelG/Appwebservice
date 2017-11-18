$("#miformulario").submit(function(evento){
	evento.preventDefault();
	//console.info("Activando Formulario....")
	var cadena=$(this).serializeArray();
	//console.info(cadena);
	$.ajax({
		url:"http://localhost:8080/prueba.php"
	
	}).done(function(respuesta){
		$(".mensaje").html(respuesta);
	});

});