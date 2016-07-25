<?php
class Util{
	const LOG_FILE = "../log/error.log";
	
	public static function save_log( Exception $e, $query){
		$mensaje = 	"Archivo: " . $e->getFile()." \n".
					"Linea: ". $e->getLine()." \n".
					"Codigo: ".$e->getCode()." \n".
					"Mensaje: ".$e->getMessage()." \n".
					"Consulta: ".$query;
		error_log($mensaje,3,self::LOG_FILE);
	}
}
?>