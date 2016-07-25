<!DOCTYPE html>
<html>
<head>
    <base href="http://serverweb.cbb.edu.pe/sistemas/app/"/>
    <meta charset="UTF-8">
    <title>Login Tramites</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
    <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Open+Sans'>
    <link rel="stylesheet" href="vista/assets/stylesheets/login.css">
    <link rel="stylesheet" href="vista/assets/stylesheets/sweetalert.css">
</head>
<body>
<div class="cont">
    <div class="demo">
        <div class="login">
            <div class="login__check"></div>
            <div class="login__form">
                <div class="login__row">
                    <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
                        <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"/>
                    </svg>
                    <input type="text" class="login__input name" placeholder="Usuario" id="txtUser"/>
                </div>
                <div class="login__row">
                    <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
                        <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"/>
                    </svg>
                    <input type="password" class="login__input pass" placeholder="Password" id="txtPwd"/>
                </div>
                <button type="button" class="login__submit">Ingresar</button>
                <div id="mensaje" class="font-15-blanca"></div>
            </div>
        </div>
    </div>
</div>
<script src='vista/assets/javascripts/jquery-2.1.4.min.js'></script>
<script src='vista/assets/javascripts/sweetalert.min.js'></script>
<script type="text/javascript">
    $(document).ready(function () {
        var animating = false,
            submitPhase1 = 600,
            $login = $(".login"),
            $app = $(".app");

        function ripple(elem, e) {
            $(".ripple").remove();
            var elTop = elem.offset().top,
                elLeft = elem.offset().left,
                x = e.pageX - elLeft,
                y = e.pageY - elTop;
            var $ripple = $("<div class='ripple'></div>");
            $ripple.css({top: y, left: x});
            elem.append($ripple);
        };

        $(document).on("click", ".login__submit", function (e) {
            if (animating) return;
            animating = true;
            var that = this;
            ripple($(that), e);
            $(that).addClass("processing");
            setTimeout(function () {
                var datosEnviados = {
                    'variable': 'loginUsuario',
                    'user': $('#txtUser').val(),
                    'pwd': $('#txtPwd').val()
                };
                $.ajax({
                    url: 'controlador/TramiteControlador.php',
                    data: datosEnviados,
                    type: 'POST',
                    success: function (data) {
                        console.log(data)
                        switch (data) {
                            case 'NOEXISTE':
                                $("#mensaje").html("NO EXISTE USUARIO")
                                $(that).removeClass("processing");
                                animating = false;
                                break;
                            case 'INCORRECTA':
                                $("#mensaje").html('CONTRASEÑA INCORRECTA')
                                $(that).removeClass("processing");
                                animating = false;
                                break;
                            case 'OK':
                                location.href = "tramite/portada"
                                break;
                        }
                    },
                    error: function (jqXHR, status, error) {
                        swal("error", error, "error")
                    },
                    complete: function (jqXHR, textStatus) {

                    }
                });
            }, submitPhase1 - 70);
        });
    });
</script>


</body>
</html>
