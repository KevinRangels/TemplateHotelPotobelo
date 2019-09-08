/*=============================================
FECHAS RESERVA
=============================================*/
$('.datepicker.entrada').datepicker({
    startDate: '0d',
    format: 'dd-mm-yyyy',
    todayHighlight: true 

});
$('.datepicker.entrada').change(function(){
    var fechaEntrada = $(this).val();

    $('.datepicker.salida').datepicker({
        startDate: fechaEntrada,
        dateDisable: fechaEntrada,
        format: 'dd-mm-yyyy',    
    });
});
/*=============================================
BOTÓN RESERVA
=============================================*/
$(".mostrarBloqueReservas").click(function(){

	$(".formReservas").slideToggle("fast");

	$(".menu").slideUp('fast');

	if($(".mostrarBloqueReservas").attr("modo") == "abajo"){

		$(".mostrarBloqueReservas").attr("modo", "arriba");

		$(".flechaReserva").removeClass("fa-caret-up");

		$(".flechaReserva").addClass("fa-caret-down");

	}else{

		$(".mostrarBloqueReservas").attr("modo", "abajo");

		$(".flechaReserva").removeClass("fa-caret-down");

		$(".flechaReserva").addClass("fa-caret-up");

	}
});
/*=============================================
ANIMACIONES CON EL SCROLL
=============================================*/
$(window).scroll(function(){

	var posY = window.pageYOffset;

	if(window.matchMedia("(min-width:769px)").matches){
	
		if(posY > 50){

			$(".formReservas").slideUp("fast");
			$(".mostrarBloqueReservas").attr("modo", "arriba");
			$(".flechaReserva").removeClass("fa-caret-up");
			$(".flechaReserva").addClass("fa-caret-down");

		}else{

			$(".formReservas").slideDown("fast");
			$(".mostrarBloqueReservas").attr("modo", "abajo");
			$(".flechaReserva").removeClass("fa-caret-down");
			$(".flechaReserva").addClass("fa-caret-up");

		}

	}
});