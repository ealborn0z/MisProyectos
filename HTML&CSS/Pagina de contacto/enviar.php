<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Recibe los datos del formulario
	$nombre = $_POST["nombre"];
	$email = $_POST["email"];
	$mensaje = $_POST["mensaje"];
	
	// Configura los datos del correo electrónico
	$destinatario = "tucorreo@tudominio.com";
	$asunto = "Mensaje desde la página de contacto";
	$cuerpo = "Has recibido un mensaje desde la página de contacto de tu sitio web. \n\n".
			  "nombre: ".$nombre."\n".
			  "email: ".$email."\n".
			  "mensaje: ".$mensaje."\n";

	// Envía el correo electrónico
	mail($destinatario, $asunto, $cuerpo);

	// Redirige a una página de confirmación
	header("Location: confirmacion.html");
	exit;
}
?>
