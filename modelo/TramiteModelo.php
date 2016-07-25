<?php
require_once "../util/ChromePhp.php";
require_once "../dao/TramiteDAO.php";

class TramiteModelo
{
    public function listadoDistritoLima()
    {
        try {
            $dao = new TramiteDAO();
            $rec = $dao->listadoDistritoLima();
            if ($rec == null) {
                throw new Exception("SIN DATOS EN UBIGEO");
            }
            return $rec;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function listadoOperadorMovil()
    {
        try {
            $dao = new TramiteDAO();
            $rec = $dao->listadoOperadorMovil();
            if ($rec == null) {
                throw new Exception("SIN OPERADORES MOVILES");
            }
            return $rec;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function validarLoginUsuario($user, $pwd)
    {
        try {
            $dao = new TramiteDAO();
            $rec = $dao->validaLoginUsuario($user);
            if ($rec == null) {
                throw new Exception("NOEXISTE");
            }
            if ($rec->Fields("usu_pass") != $pwd) {
                throw new Exception ("INCORRECTA");
            }
            return $rec;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function buscarAlumno($nombre)
    {
        try {
            $dao = new TramiteDAO();
            $rec = $dao->buscarAlumno($nombre);
            if ($rec == null) {
                throw new Exception("SIN REGISTRO DE ALUMNO");
            }
            return $rec;
        } catch (Exception $e) {
            throw $e;
        }
    }

    public function listadoTelefono($tipo, $codigo)
    {
        try {
            $dao = new TramiteDAO();
            $rec = $dao->listadoTelefono($tipo, $codigo);
            if ($rec == null) {
                throw new Exception("SIN REGISTRO DE TELEFONOS");
            }
            return $rec;
        } catch (Exception $e) {
            throw $e;
        }
    }
}
