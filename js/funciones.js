$(document).ready(function(){

// Creo una variable para guardar la búsqueda que me devuelve todos los elementos div dentro de mi documento.
var $miSeleccion = $('div');

 //Cuando hago clic sobre el elemento con ID cambiarGris, se ejecuta la función cambiarGris.
 $('#cambiarGris').on('click',cambiarGris);

 //Cuando hago clic sobre el elemento con ID cambiarMorado, se ejecuta la función cambiarMorado.
 $('#cambiarMorado').on('click',cambiarMorado);




function cambiarGris()

	{

		$miSeleccion.css('background-color','#95a5a6');
		// this me permite actuar sobre el elemento o elementos que han disparado la acción. De esta manera no tengo 
		// que emplear una nueva búsqueda y así optimizo mi código
		$(this).text('Este botón ha sido usado');

	}


function cambiarMorado()
	{
		
		$miSeleccion.css('background-color','#8e44ad');
		$(this).text('Este botón ha sido usado');
	}

});

 


    
        