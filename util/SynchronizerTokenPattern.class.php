<?php

/**
 * Class SynchronizerTokenPattern
 * Version 1.0
 * Date 2014-05-15
 * 
 * Description
 * Essa classe gera um token baseado em 87 caracteres
 * combinados entre si.
 *
 * @author Adriano A Costa | e-mail: adrianocosta0101@gmail.com
 */
class Token
{

    private $alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    private $numeric = "0123456789";
    private $operator = "*/+-";
    private $special = "@#$%&";
    private $pontuacao = "!?;:._\|";
    private $conjuntos = "{[()]}";
    private $results = null;

    public function getToken($limit)
    {
        if (!is_int($limit) && !is_float($limit)) {
            return $error = 'invalid number';
        } else if ($limit <= 0 || $limit > 87) {
            return $error = 'invalid size number';
        } else {
            return $this->setToken($limit);
        }
    }
    
    private function setToken($value)
    {
        $this->results .= $this->alphabet;
        $this->results .= $this->numeric;
        $this->results .= $this->operator;
        $this->results .= $this->special;
        $this->results .= $this->pontuacao;
        $this->results .= $this->conjuntos;

        return substr(str_shuffle($this->results), 0, $value);
    }
}

//$obj = new SynchronizerTokenPattern();
//echo $obj->getToken(20);
