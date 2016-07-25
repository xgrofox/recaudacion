<?php
session_start();
require_once("../../util/Session.php");
Session::removeAttribute("beanUsuario");
session_destroy();
header("Location:login");