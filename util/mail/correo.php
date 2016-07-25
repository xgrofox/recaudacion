<?php
//Librerías para el envío de mail
include_once('class.phpmailer.php');
include_once('class.smtp.php');

class EnvioCorreo
{
	
	function correo($mail,$grupo,$token){
		
		$correo    = $mail;
		$asunto  = "Invitacion Grupo Juego de Negocio";
		$mensaje = "TE INVITO A JUGAR CONMIGO PERTENESCO AL GRUPO ".$grupo." <br> SI ACEPTAS DALE AL SIGUIENTE LINK <br> <a href='http://10.0.1.232/sistema/cliente/vista/registro.php?token=".urlencode($token)."' >ACEPTO</a>";

		//Este bloque es importante
		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = "ssl";
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 465;

		//Nuestra cuenta
		$mail->Username ='PonceMiguel@gmail.com';
		$mail->Password = 'Benigno1.';

		//Agregar destinatario
		$mail->AddAddress($correo);
		$mail->Subject = $asunto;
		$mail->Body    = $mensaje;
		//Para adjuntar archivo
		//$mail->AddAttachment($archivo['tmp_name'], $archivo['name']);
		$mail->MsgHTML($mensaje);

		//Avisar si fue enviado o no y dirigir al index
		if($mail->Send()){
			$final = 0;
		}else{
			$final = 1;
		}
		//return 0;
		return $final;
	}
}


?>

