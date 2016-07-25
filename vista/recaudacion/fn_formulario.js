$(document).on('ready', function () {
    llenarCboOperMovAlumno();
    $('#txtBusqueda').autocomplete({
            source: 'controlador/TramiteControlador.php?variable=buscaAlumno',
            minLength: 3,
            select: function (ev, ui) {
                console.log(ui)
                $("#dv_alumno").removeClass('hidden')
                $("#dv_solicitante").removeClass('hidden')
                $("#txtAluCod").val(ui.item.alu_cod)
                $("#txtPatAlu").val(ui.item.alu_pat)
                $("#txtMatAlu").val(ui.item.alu_mat)
                $("#txtNomAlu").val(ui.item.alu_nom)
                $("#txtDirAlu").val(ui.item.alu_dir)
                $("#txtDniAlu").val(ui.item.alu_dni)
                $("#txtEmaAlu").val(ui.item.alu_cor)
                llenarCboDisAlumno(ui.item.alu_ubi);
            }
        }
    ); // fin de autocomplete
    $('#btnActAlu').click(function () {
        // llamamos a la funcion
        jQuery.validator.setDefaults({
            debug: true,
            success: "valid"
        });
        $('#form_datos_alumno').validate({
            rules: {
                'txtPatAlu': {required: true},
                'txtMatAlu': {required: true},
                'txtNomAlu': {required: true},
                'txtDirAlu': {required: true},
                'txtDniAlu': {required: true, number: true, minlength: 8, maxlength: 8},
                'txtEmaAlu': {required: true, email: true}
            },
            messages: {
                'txtPatAlu': {required: 'Ingresar apellido paterno'},
                'txtMatAlu': {required: 'Ingresar apellido materno'},
                'txtNomAlu': {required: 'Ingresar el nombre'},
                'txtDirAlu': {required: 'Ingrese la direccion usuario'},
                'txtDniAlu': {
                    required: 'Ingrese Dni',
                    number: 'Ingrese numero dni',
                    minlength: 'Ingrese un numero de 8 digitos',
                    maxlength: 'Ingrese un numero de 8 digitos'
                },
                'txtEmaAlu': {
                    required: 'Ingrese el email',
                    email: 'Ingrese email con el formato correcto; Ej. nombrecorreo@cbb.edu.pe'
                }
            },
            submitHandler: function () {

                registroAlumno();
            }
        });
    });
    $('#modalDetalle').on('show.bs.modal', function (event) {
        var aluCod = $("#txtAluCod").val();
        var variable = "listadoTelefonoAlumno";
        $.ajax({
                type: 'POST',
                url: 'controlador/TramiteControlador.php',
                data: {
                    variable: variable, aluCod: aluCod
                },
                beforeSend: function () {
                    $("#dv_listado").html('');
                    $('#dv_listado').html('<div class="loader">Loading...</div>');
                }
            }
        )
            .done(function (rs) {
                    $("#dv_listado").html(rs);
                }
            )
            .fail(function () {
                    console.log("error");
                }
            );
    })
//     cboNivel para cboGrado
//     $("#cboNivel").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraDe = $("#cboGraDe");
//                 var $cboGraHas = $("#cboGraHas");
//                 $cboGraDe.empty(); // limpia grado de:
//                 $cboGraHas.empty(); // limpia grado Hasta
//                 $cboGraDe.append("<option value='0' >Grado De:</option>");
//                 $cboGraHas.append("<option value='0' >Grado Hasta:</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraDe.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                     $cboGraHas.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoDe = $("#cboGraDe");
//             $comboGradoDe.empty();
//             $comboGradoDe.append("<option value='0' >Grado De:</option>");
//             var $comboGradoHa = $("#cboGraHas");
//             $comboGradoHa.empty();
//             $comboGradoHa.append("<option value='0' >Grado Hasta:</option>");
//         }
//     }); // cboNivel para cboGrado
//     $("#cboNivel_2").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraUlt = $("#cboGraUlt");
//                 $cboGraUlt.empty(); // limpia grado de:
//                 $cboGraUlt.append("<option value='0'>Grado Ultim:</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraUlt.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//                 var $cboBimDe = $("#cboDeBim");
//                 $cboBimDe.empty(); // limpia grado de:
//                 $cboBimDe.append("<option value='0'>De Bimestre :</option>");
//                 $cboBimDe.append("<option value='1'>1er</option>");
//                 $cboBimDe.append("<option value='2'>2do</option>");
//                 $cboBimDe.append("<option value='3'>3ro</option>");
//                 $cboBimDe.append("<option value='4'>4to</option>");
//                 var $cboBimAl = $("#cboAlBim");
//                 $cboBimAl.empty(); // limpia grado de:
//                 $cboBimAl.append("<option value='0'>Al Bimestre :</option>");
//                 $cboBimAl.append("<option value='1'>1er</option>");
//                 $cboBimAl.append("<option value='2'>2do</option>");
//                 $cboBimAl.append("<option value='3'>3ro</option>");
//                 $cboBimAl.append("<option value='4'>4to</option>");
//             }, 'json');
//         }
//         else {
//             var $comboGradoUl = $("#cboGraUlt");
//             $comboGradoUl.empty();
//             $comboGradoUl.append("<option value='0'>Grado Ultim:</option>");
//         }
//     }); // cboNivel para cboGrado
//     $("#cboNivel_3").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraUlt = $("#cboGra_3");
//                 $cboGraUlt.empty(); // limpia grado de:
//                 $cboGraUlt.append("<option value='0'>Grado Ultim:</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraUlt.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoUl = $("#cboGra_3");
//             $comboGradoUl.empty();
//             $comboGradoUl.append("<option value='0'>Grado Ultim:</option>");
//         }
//     }); // cboNivel para cboGrado
//     $("#cboNivel_4").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraUlt = $("#cboGra_4");
//                 $cboGraUlt.empty(); // limpia grado de:
//                 $cboGraUlt.append("<option value='0'>Grado :</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraUlt.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoUl = $("#cboGra_4");
//             $comboGradoUl.empty();
//             $comboGradoUl.append("<option value='0'>Grado :</option>");
//         }
//     }); // cboNivel para cboGrado
//     $("#cboNivel_6").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraUlt = $("#cboGra_6");
//                 $cboGraUlt.empty(); // limpia grado de:             $cboGraUlt.append("<option value='0'>Grado :</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraUlt.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoUl = $("#cboGra_6");
//             $comboGradoUl.empty();
//             $comboGradoUl.append("<option value='0'>Grado :</option>");
//         }
//     }); // cboNivel para cboGrado
//     $("#cboNivel_7").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraUlt = $("#cboGra_7");
//                 $cboGraUlt.empty(); // limpia grado de:
//                 $cboGraUlt.append("<option value='0'>Grado :</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraUlt.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoUl = $("#cboGra_7");
//             $comboGradoUl.empty();
//             $comboGradoUl.append("<option value='0'>Grado :</option>");
//         }
//     }); // cboNivel para cboGrado
//     $("#cboNivel_8").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraUlt = $("#cboGra_8");
//                 $cboGraUlt.empty(); // limpia grado de:
//                 $cboGraUlt.append("<option value='0'>Grado :</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraUlt.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoUl = $("#cboGra_8");
//             $comboGradoUl.empty();
//             $comboGradoUl.append("<option value='0'>Grado :</option>");
//         }
//     }); // cboNivel para cboGrado //    // cboNivel para cboGrado
//     $("#cboNivel_9").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraDe = $("#cboGraDe_9");
//                 var $cboGraHas = $("#cboGraHa_9");
//                 $cboGraDe.empty(); // limpia grado de:
//                 $cboGraHas.empty(); // limpia grado Hasta
//                 $cboGraDe.append("<option value='0' >Grado De:</option>");
//                 $cboGraHas.append("<option value='0' >Grado Hasta:</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraDe.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                     $cboGraHas.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoDe = $("#cboGraDe_9");
//             $comboGradoDe.empty();
//             $comboGradoDe.append("<option value='0' >Grado De:</option>");
//             var $comboGradoHa = $("#cboGraHa_9");
//             $comboGradoHa.empty();
//             $comboGradoHa.append("<option value='0' >Grado Hasta:</option>");
//         }
//     }); // cboNivel para cboGrado
//     $("#cboNivel_10").change(function () {
//         var nivel = $(this).val();
//         if (nivel !== '0') {
//             var datos = {idNivel: $(this).val()};
//             $.post("../modelo/grado.php", datos, function (grados) {
//                 var $cboGraUlt = $("#cboGra_10");
//                 $cboGraUlt.empty(); // limpia grado de:
//                 $cboGraUlt.append("<option value='0'>Grado Ultimo:</option>");
//                 $.each(grados, function (index, grado) {
//                     $cboGraUlt.append("<option value='" + grado.gra_cod + "'>" + grado.gra_gra + " " + grado.comp + "</option>");
//                 });
//             }, 'json');
//         }
//         else {
//             var $comboGradoUl = $("#cboGra_10");
//             $comboGradoUl.empty();
//             $comboGradoUl.append("<option value='0'>Grado Ultimo:</option>");
//         }
//     }); // cboNivel para cboGrado
//     // La dinamica de los checkbox...
//     $("#miTramite").on('click', function () {
//         $("#chxCerEst").is(':checked') ? // 1
//             $('#divCerEst').css("display", "block") : $('#divCerEst').css("display", "none");
//         $("#chxCerCom").is(':checked') ? // 2
//             $('#divCerCom').css("display", "block") : $('#divCerCom').css("display", "none");
//         $("#chxConEst").is(':checked') ? // 3
//             $('#divConEst').css("display", "block") : $('#divConEst').css("display", "none");
//         $("#chxExcAca").is(':checked') ? // 4
//             $('#divExcAca').css("display", "block") : $('#divExcAca').css("display", "none");
//         $("#chxExaSub").is(':checked') ? // 5
//             $('#divExaSub').css("display", "block") : $('#divExaSub').css("display", "none");
//         $("#chxConMat").is(':checked') ? // 6
//             $('#divConMat').css("display", "block") : $('#divConMat').css("display", "none");
//         $("#chxConNoA").is(':checked') ? // 7
//             $('#divConNoA').css("display", "block") : $('#divConNoA').css("display", "none");
//         $("#chxDupRepN").is(':checked') ? // 8
//             $('#divDupRepN').css("display", "block") : $('#divDupRepN').css("display", "none");
//         $("#chxConCer").is(':checked') ? // 9
//             $('#divConCer').css("display", "block") : $('#divConCer').css("display", "none");
//         $("#chxPruUbi").is(':checked') ? // 9
//             $('#divPruUbi').css("display", "block") : $('#divPruUbi').css("display", "none");
//     });
//     /* Eventos del 5. Examen de subsanacion o recuperacion */
//     var iCnt = 0;
//     // Crear un elemento div añadiendo estilos CSS
//     $('#btAdd').click(function () {
//         if (iCnt <= 3) {
//             iCnt = iCnt + 1;
// // Añadir caja de texto.
//             $('#contenedor').append('<div class="row form-group" id="selects_' + iCnt + '" >' +
//                 '<div class="col-md-4" >' +
//                 '<input type="text" class="form-control input-sm" id="txtExaSub_5_' + iCnt + '" name="txtExaSub_5_' + iCnt + '" placeholder="Ingresar asignatura y/o area" >' +
//                 '</div>' +
//                 '<div class="col-md-3" >' +
//                 '<select class="form-control input-sm" name="cboNivel_5_' + iCnt + '" id="cboNivel_5_' + iCnt + '" >' +
//                 '<option value = "0" >Nivel: </option>' +
//                 '<option value = "I" >Inicial</option>' +
//                 '<option value = "P" >Primaria</option>' +
//                 '<option value = "S" >Secundaria</option>' +
//                 '</select>' +
//                 '</div>' +
//                 '<div class="col-md-2" >' +
//                 '<select class = "form-control input-sm" name="cboGrado_5_' + iCnt + '" id="cboGrado_5_' + iCnt + '" >' +
//                 '<option value = "0" >Grado: </option>' +
//                 '<option value = "1" >1er </option>' +
//                 '<option value = "2" >2do </option>' +
//                 '<option value = "3" >3er </option>' +
//                 '<option value = "4" >4to </option>' +
//                 '<option value = "5" >5to </option>' +
//                 '</select>' +
//                 '</div>' +
//                 '<div class="col-md-2" >' +
//                 '<input type="text" class="form-control input-sm" id="txtAnoTer_5_' + iCnt + '" name="txtAnoTer_5_' + iCnt + '" placeholder="Año Termino" >' +
//                 '</div>' +
//                 '<div class="col-md-1" >' +
//                 '<select class="form-control input-sm" name="cboCant_5_' + iCnt + '" id="cboCant_5_' + iCnt + '">' +
//                 '<option value= "1" > 1 </option>' +
//                 '<option value= "2" > 2 </option>' +
//                 '<option value= "3" > 3 </option>' +
//                 '</select>' +
//                 '</div>' +
//                 '</div>');
//         }
//         else { //se establece un limite para añadir elementos, 4 es el limite
//             $('#contenedor').append('<label>Limite Alcanzado</label>');
//             $('#btAdd').attr('disabled', 'true');
//         }
//     }); //Fin del evento btAdd
//     // Elimina un elemento por click
//     $('#btRemove').click(function () {
//         if (iCnt !== 0) {
//             $('#selects_' + iCnt).remove();
//             iCnt = iCnt - 1;
//         }
//         if (iCnt === 0) {
//             $('#contenedor').empty();
//             //$('#selects').remove();
//             //$('#btSubmit').remove();
//             $('#btAdd').removeAttr('disabled');
//         }
//     }); // Fin del evento btRemove
//     // Elimina todos los elementos del contenedor
//     $('#btRemoveAll').click(function () {
//         $('#contenedor').empty();
//         // $('#contenedor').remove();
//         // $('#btSubmit').remove();
//         iCnt = 0;
//         $('#btAdd').removeAttr('disabled');
//         // $('#btAdd').attr('class', 'bt');
//     }); // fin de del evento btRemoveAll
//     /* Evento del Registro o actualizacion del Pariente  */
//     $('#btnActPari').click(function () {
// // llamamos a la funcion
//         jQuery.validator.setDefaults({
//             debug: true,
//             success: "valid"
//         });
//         $('#form_datos_pariente').validate({
//             debug: true,
//             rules: {
//                 'txtPatUsu': {required: true},
//                 'txtMatUsu': {required: true},
//                 'txtNomUsu': {required: true},
//                 'txtTelUsu': {number: true, rangelength: [7, 9]},
//                 'txtCelUsu': {
//                     required: $('input[name=genderUsu]').is(':checked') ? true : false,
//                     number: true,
//                     minlength: 9,
//                     maxlength: 9
//                 },
//                 'cboOpeMovUsu': {cboescero: $('#txtCelUsu').val().trim() === '' ? false : true},
//                 'rdaSelUsu': {required: $('#txtCelUsu').val().trim() === '' ? false : true},
//                 'txtDirUsu': {required: true},
//                 'cboDisUsu': {cboescero: true},
//                 'txtDniUsu': {required: true, number: true, minlength: 8, maxlength: 8},
//                 'txtEmaUsu': {required: true, email: true}
//             },
//             messages: {
//                 'txtPatUsu': {required: 'Ingresar apellido paterno'},
//                 'txtMatUsu': {required: 'Ingresar apellido materno'},
//                 'txtNomUsu': {required: 'Ingresar el nombre'},
//                 'txtTelUsu': {number: 'Ingresar el telefono', rangelength: 'Ingrese un numero valido'},
//                 'txtCelUsu': {
//                     required: 'Ingrese numero de celular',
//                     number: 'Ingrese numero celular entero valido',
//                     minlength: 'Ingrese un numero de 9 digitos',
//                     maxlength: 'Ingrese un numero de 9 digitos'
//                 },
//                 'cboOpeMovUsu': {cboescero: 'Seleccione operador valido'},
//                 'rdaSelUsu': {required: 'Seleccione tipo de operador'},
//                 'txtDirUsu': {required: 'Ingrese la direccion usuario'},
//                 'cboDisUsu': {cboescero: 'Seleccione Distrito valido'},
//                 'txtDniUsu': {
//                     required: 'Ingrese Dni',
//                     number: 'Ingrese numero dni',
//                     minlength: 'Ingrese un numero de 8 digitos',
//                     maxlength: 'Ingrese un numero de 8 digitos'
//                 },
//                 'txtEmaUsu': {
//                     required: 'Ingrese el email',
//                     email: 'Ingrese email con el formato correcto; Ej. nombrecorreo@cbb.edu.pe'
//                 }
//             },
//             submitHandler: function () {
//                 registrarPariente(varParCod);
//             }
//         });
// //        e.preventDefault();
//     });
//     /* Evento del Regisstro o actualizacion del alumno  */

//     $('#btnEnvFut').click(function () {
//         // add loading image to div
//         var json_obj = $('input[name="chxTramite"]').serializeArray();
//         var json_rules = {};
//         var json_messages = {};
//         var json_tramites = new Array();
//         var ar = 0;
//         for (var key in json_obj) {
//             /* json_rules = json_rules + rul[0] + (key < json_obj.length - 1 ? "," : "");
//              json_mesage = json_mesage + rul[1] + (key < json_obj.length - 1 ? "," : "");          json_rules = json_rules + JSON.stringify(rul[0]) + ",";
//              json_mesage = json_rules + JSON.stringify(rul[1]) + ",";*/
//             var rul;
//             if (json_obj[key].value !== "EXA_SUB") {
//                 rul = seleccionarDatosFut(json_obj[key].value, iCnt);
//                 json_rules = $.extend(json_rules, rul[0]);
//                 json_messages = $.extend(json_messages, rul[1]);
//                 json_tramites[ar] = rul[2];
//                 ar++;
//             } else {// TOMA EL TRAMITE 5
//                 for (i = 1; i <= iCnt; i++) {
//                     rul = seleccionarDatosFut(json_obj[key].value, i);
//                     json_rules = $.extend(json_rules, JSON.parse(rul[0])); // primero toma la cadena y lo
//                     json_messages = $.extend(json_messages, JSON.parse(rul[1]));// ver
//                     json_tramites[ar] = JSON.parse(rul[2]);
//                     ar++;
//                 }
//             }
//         }
//
//         var rul_futFun = {
//             'txaFunPed': {required: true}
//         };
//         var mes_futFun = {
//             'txaFunPed': 'Tiene que agregar un fundamento por la realizacion del tramite'
//         };
//         json_rules = $.extend(json_rules, rul_futFun); // primero toma la cadena y lo
//         json_messages = $.extend(json_messages, mes_futFun);
//         /*
//          var data_rules = JSON.stringify(json_rules);
//          var data_mesage = JSON.stringify(json_mesage);
//          console.log(data_rules);
//          console.log(data_mesage);*/
// //        var id_sol;
//         jQuery.validator.setDefaults({
//             debug: true,
//             success: "valid"
//         });
//         $('#miTramite').validate({
//             debug: true,
//             rules: json_rules,
//             messages: json_messages,
//             submitHandler: function () {
//                 resgistrarSolicitante(varAluCod, varParCod, json_tramites);
//             }
//         });
//     });
}); // fin del jquery

function llenarCboDisAlumno(id) {
    var variable = "listadoUbigeo"; // Variable Controlador
    // Envio de Datos por AJAX
    $.post("controlador/TramiteControlador.php", {variable: variable, id: id}, function (data) {
        $("#cboDisAlu").html(data); // Carga de Datos en el Combo
    });
}

function llenarCboOperMovAlumno() {
    var variable = "listadoOperadorMovil"; // Variable Controlador
    // Envio de Datos por AJAX
    $.post("controlador/TramiteControlador.php", {variable: variable}, function (data) {
        $("#cboOpeMovAlu").html(data); // Carga de Datos en el Combo
    });
}

function registroAlumno() {
// aqui se muestra el gif de espera
    $('#div_cargandoAlu').html('<div class="loader"> Cargando...</div>');
    // Recogiendo datos del formulario alumno
    var dataBusq = JSON.parse(vAluCod);
    var dataEnviados = {
        // Recojo datos de los inputs
        'txtPatAlu': ($('#txtPatAlu').val().trim() !== '') ? "'" + $('#txtPatAlu').val() + "'" : 'NULL',
        'txtMatAlu': ($('#txtMatAlu').val().trim() !== '') ? "'" + $('#txtMatAlu').val() + "'" : 'NULL',
        'txtNomAlu': ($('#txtNomAlu').val().trim() !== '') ? "'" + $('#txtNomAlu').val() + "'" : 'NULL',
        'txtTelAlu': ($('#txtTelAlu').val().trim() !== '') ? "'" + $('#txtTelAlu').val() + "'" : 'NULL',
        'txtCelAlu': ($('#txtCelAlu').val().trim() !== '') ? "'" + $('#txtCelAlu').val() + "'" : 'NULL',
        'cboOpeMovAlu': ($('#cboOpeMovAlu').val() !== '0') ? "'" + $('#cboOpeMovAlu').val() + "'" : 'NULL',
        'rdaSelAlu': $('#rdaPreAlu').is(':checked') ? ("'" + $('#rdaPostAlu').val() + "'") : ($('#rdaPostAlu').is(':checked') ? "'" + $('#rdaPostAlu').val() + "'" : 'NULL'),
        'txtDirAlu': ($('#txtDirAlu').val().trim() !== '') ? "'" + $('#txtDirAlu').val() + "'" : 'NULL',
        'cboDisAlu': ($('#cboDisAlu').val().trim() !== '') ? "'" + $('#cboDisAlu').val() + "'" : 'NULL',
        'txtDniAlu': ($('#txtDniAlu').val().trim() !== '') ? "'" + $('#txtDniAlu').val() + "'" : 'NULL',
        'txtEmaAlu': ($('#txtEmaAlu').val().trim() !== '') ? "'" + $('#txtEmaAlu').val() + "'" : 'NULL',
        'accion': dataBusq.exito, // este me indica que accion hacer update o insert
        'alu_cod': dataBusq.alu_cod, // alu_cod del integrante buscado
        'per_id': dataBusq.per_id // alu_cod del integrante buscado
    };
    // run ajax request
    $.ajax({
        url: '../controlador/registrarAlumno.php',
        data: dataEnviados,
        type: 'POST',
        dataType: 'json',
//            url: 'https://api.github.com/users/jveldboom',
        success: function (datAlu) {
            // alert($('#cboOpeMovAlu').val());
            setTimeout(function () {
                if (datAlu.exito === true) { // hacer cambios aqui
                    $('#div_cargandoAlu').html('<div class="alert alert-success">Se Actualizo correctamente al Alumno ... </div>');
                    (tParent !== "E") ? $('#div_tramites').css("display", "none") : $('#div_tramites').css("display", "block");
                } else {
                    $('#div_cargandoAlu').html('<div class="alert alert-danger">No se actualizo el Alumno</div>');
                }
            }, 1000);
        }, error: function (jqXHR, status, error) {
            alert('disculpe, existio un problema en la actualizacion');
        }, complete: function (datos, status) {
        }
    });
}