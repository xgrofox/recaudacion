<!-- Inicio Header -->
<?php include "../assets/include/header.php" ?>
<!-- Fin Header -->
<!-- Contenido Pagina -->
<div class="page-title">
    <h3>
        <?= utf8_decode("FUT Formúlario Unico de Trámite") ?>
    </h3>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="widget-container fluid-height clearfix">
            <div class="heading">
                <i class="fa fa-search"></i>BUSQUEDA NUEVA
            </div>
            <div class="widget-content padded clearfix">
                <form id="miBus" role="form">
                    <div class="form-group">
                        <label for="txtBusqueda">Busqueda por el primer apellido del alumno:</label>
                        <input type="text" class="form-control" id="txtBusqueda"
                               placeholder="Escriba Apellido y Nombres">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6">
        <div class="widget-container fluid-height clearfix hidden" id="dv_alumno">
            <div class="heading">
                <i class="fa fa-file-text-o"></i>DATOS DEL ALUMNO
            </div>
            <div class="widget-content padded clearfix">
                <!-- Colocacion del Alumno -->
                <form id="form_datos_alumno" name="form_datos_alumno">
                    <div class="form-group col-sm-4">
                        <label class="control-label" for="txtPatAlu">Apellidos Paterno :</label>
                        <input type="text" class="form-control input-sm" id="txtPatAlu" name="txtPatAlu"
                               placeholder="Apellido Paterno del alumno">
                        <input type="hidden" id="txtAluCod" name="txtAluCod" value="">
                        <input type="hidden" id="txtUbigeoAlu" name="txtUbigeoAlu" value="">
                    </div>
                    <div class="form-group col-sm-4">
                        <label class="control-label" for="txtMatAlu">Apellidos Materno :</label>
                        <input type="text" class="form-control input-sm" id="txtMatAlu" name="txtMatAlu"
                               placeholder="Apellido Materno del alumno">
                    </div>
                    <div class="form-group col-sm-4">
                        <label class="control-label" for="txtNomAlu">Nombres Alumno :</label>
                        <input type="text" class="form-control input-sm" id="txtNomAlu" name="txtNomAlu"
                               placeholder="Nombre del alumno">
                    </div>

                    <div class="form-group col-sm-8">
                        <label class="control-label" for="txtDirAlu">Domicilio del Alumno(Jr., Calle, Pje.,
                            Urb.)
                            :</label>
                        <input type="text" class="form-control input-sm" id="txtDirAlu" name="txtDirAlu"
                               placeholder="Ingrese domicilio exacto del alumno">
                    </div>
                    <div class="form-group col-sm-4">
                        <label class="control-label" for="cboDisAlu">Distrito :</label>
                        <select class="form-control input-sm" name="cboDisAlu"
                                id="cboDisAlu"></select>
                    </div>
                    <div class="form-group col-sm-8">
                        <label class="control-label" for="txtEmaAlu">Correo Alumno :</label>
                        <input type="text" class="form-control input-sm" id="txtEmaAlu" name="txtEmaAlu"
                               placeholder="Ingrese email alumno">
                    </div>
                    <div class="form-group col-sm-2">
                        <label class="control-label" for="txtDniAlu">Dni Alumno :</label>
                        <input type="text" class="form-control input-sm" id="txtDniAlu" name="txtDniAlu"
                               placeholder="Ingrese DNI">
                    </div>
                    <div class="form-group col-sm-2">
                        <label class="control-label" for="btntelefono">&nbsp;</label>
                        <button type="button" class="btn btn-danger btn-xs" id="btntelefono" name="btntelefono"
                                data-toggle="modal" data-target="#modalDetalle">
                            Detalle
                        </button>
                    </div>
                    <button id="btnActAlu" name="btnActAlu" type="submit"
                            class="form-control btn-sm btn-danger text-center">Actualizar Datos Alumno
                    </button>
                    <div id="div_cargandoAlu" class="row top-buffer"></div>
                </form>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="widget-container fluid-height clearfix hidden" id="dv_solicitante">
            <div class="heading">
                <i class="fa fa-file-text-o"></i>DATOS DEL SOLICITANTE
            </div>
            <div class="widget-content padded clearfix">
                <!-- Colocacion del Alumno -->
                <div id='div_datos_pariente' class="form-group col-sm-12">
                    <form name="form_datos_pariente" id="form_datos_pariente" role="form">
                        <div class="row top-buffer">
                            <div class="col-md-4"><label for="txtPat">Apellidos Paterno :</label></div>
                            <div class="col-md-4"><label for="txtMat">Apellidos Materno :</label></div>
                            <div class="col-md-4"><label for="txtNom">Nombre Completo:</label></div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <input type="text" class="form-control input-sm" id="txtPatUsu"
                                       name="txtPatUsu"
                                       placeholder="Ingrese Paterno del usuario">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control input-sm" id="txtMatUsu"
                                       name="txtMatUsu"
                                       placeholder="Ingrese Materno del usuario">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control input-sm" id="txtNomUsu"
                                       name="txtNomUsu"
                                       placeholder="Ingrese Nombre del usuario">
                            </div>
                        </div>
                        <div class="row top-buffer">
                            <div class="col-md-4"><label for="lblTel">Casa/Fijo :</label></div>
                            <div class="col-md-4"><label for="lblCel">Celular :</label></div>
                            <div class="col-md-4"><label for="lblCel">Operador :</label></div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <input type="text" class="form-control input-sm" id="txtTelUsu"
                                       name="txtTelUsu"
                                       placeholder="Ingrese Telefono">
                            </div>
                            <div class="col-md-3">
                                <input type="text" class="form-control input-sm" id="txtCelUsu"
                                       name="txtCelUsu"
                                       placeholder="Ingrese celular">
                            </div>
                            <div class="col-md-3">
                                <select class="form-control input-sm" name="cboOpeMovUsu"
                                        id="cboOpeMovUsu"></select>
                            </div>
                            <div class="col-md-3">
                                &nbsp;&nbsp;
                                <input type="radio" id="rdaPreUsu" name="genderUsu" value="PRE">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" id="rdaPostUsu" name="genderUsu" value="POST">
                            </div>
                        </div>
                        <div class="row top-buffer">
                            <div class="col-md-8">
                                <label for="txtdomi">Domicilio del Usuario Solicitante(Jr., Calle, Pje.,
                                    Urb.) :</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <input type="textarea" class="form-control input-sm" id="txtDirUsu"
                                       name="txtDirUsu"
                                       placeholder="Ingrese domicilio exacto del usuario">
                            </div>
                            <div class="col-md-4">
                                <select class="form-control input-sm" name="cboDisUsu"
                                        id="cboDisUsu"></select>
                            </div>
                        </div>
                        <div class="row top-buffer">
                            <div class="col-md-3"><label for="lblDniUsu">Dni Usuario : </label></div>
                            <div class="col-md-5"><label for="lblCorUsu">Email Usuario : </label></div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <input type="text" class="form-control input-sm" id="txtDniUsu"
                                       name="txtDniUsu"
                                       placeholder="Ingrese Dni usuario">
                            </div>
                            <div class="col-md-5">
                                <input type="text" class="form-control input-sm" id="txtEmaUsu"
                                       name="txtEmaUsu"
                                       placeholder="Ingrese email usuario">
                            </div>
                            <div class="col-md-4">
                                <button id="btnActPari" type="submit"
                                        class="form-control btn-md btn-primary">Actualizar
                                    Pariente
                                </button>
                            </div>
                        </div>
                        <div id="div_cargandoSol" class="row top-buffer"></div>
                    </form>
                </div>
                <!-- Colocacion del Alumno -->
            </div>
        </div>
    </div>
</div>
<div class="row">
    <!-- Striped Table -->
    <div class="col-lg-12">
        <div class="widget-container fluid-height clearfix hidden" id="dv_tramite">
            <div class="heading">
                <i class="fa fa-list"></i>Tramites
            </div>
            <div class="widget-content padded clearfix">
                <div class="col-md-12" id="div_tramites">
                    <form name="miTramite" id="miTramite" role="form">
                        <div class="form-group">
                            <div class="row">
                                <label for="autoridad">4. TRAMITE :</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxCerEst" name="chxTramite" value="CER_EST"
                                       class="checkbox">&nbsp;&nbsp;
                                <label for="lblCerEst">1. CERTIFICADO DE ESTUDIOS :</label>
                            </div>
                            <div class="row" id="divCerEst" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel" id="cboNivel">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGraDe" id="cboGraDe">
                                        <option value='0'>Grado De:</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGraHas" id="cboGraHas">
                                        <option value='0'>Grado hasta:</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_1"
                                           name="txtAnoTer_1"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_1" id="cboCant_1">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxCerCom" name="chxTramite" value="CER_COM">&nbsp;&nbsp;
                                <label for="apeNomUsu">2. CERTIFICADO DE COMPORTAMIENTO :</label>
                            </div>
                            <div class="row" id="divCerCom" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_2" id="cboNivel_2">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control input-sm" name="cboGraUlt" id="cboGraUlt">
                                        <option value='0'>Grado Ultim:</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control input-sm" name="cboDeBim" id="cboDeBim">
                                        <option value='0'>De Bimestre:</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-control input-sm" name="cboAlBim" id="cboAlBim">
                                        <option value='0'>Al Bimestre:</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_2"
                                           name="txtAnoTer_2"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_2" id="cboCant_2">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxConEst" name="chxTramite" value="CON_EST">&nbsp;&nbsp;
                                <label for="lblConEst">3. CONSTANCIA DE ESTUDIO :</label>
                            </div>
                            <div class="row" id="divConEst" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_3" id="cboNivel_3">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGra_3" id="cboGra_3">
                                        <option value='0'>Grado:</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_3"
                                           name="txtAnoTer_3"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_3" id="cboCant_3">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxExcAca" name="chxTramite" value="EXC_ACA">&nbsp;&nbsp;
                                <label for="lblExcAca">4. EXCELENCIA ACADEMICA :</label>
                            </div>
                            <!--</div>-->
                            <!--<div class="form-group">-->
                            <div class="row" id="divExcAca" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_4" id="cboNivel_4">
                                        <!--se usa solo primaria y secundaria ya que es necesario saber las notas de los ultimos 3 años (3,4,5)-->
                                        <option value='0'>Nivel:</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGra_4" id="cboGra_4">
                                        <option value='0'>Grado:</option>
                                        <!--validar  dependiendo del nivel primaria  5to,6to y secundaria 3ero,4to,5to-->
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_4"
                                           name="txtAnoTer_4"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_4" id="cboCant_4">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxExaSub" name="chxTramite" value="EXA_SUB">&nbsp;&nbsp;
                                <label for="lblExaSub">5. EXAMEN DE SUBSANACION O RECUPERACION </label>
                            </div>
                            <div id="divExaSub" style="display:none;">
                                <div class="form-group" id="main">
                                    <div class="btn-group">
                                        <button type="button" class="form-control btn-xs btn-primary"
                                                id="btAdd">Agregar
                                            Elemento
                                        </button>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="form-control btn-xs btn-warning"
                                                id="btRemove">Eliminar
                                            Elemento
                                        </button>
                                    </div>
                                    <div class="btn-group">
                                        <button type="button" class="form-control btn-xs btn-danger"
                                                id="btRemoveAll">Eliminar
                                            Todo
                                        </button>
                                    </div>
                                </div>
                                <div id="contenedor">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxConMat" name="chxTramite" value="CON_MAT">&nbsp;&nbsp;
                                <label for="lblConMat">6. CONSTANCIA DE MATRICULA SIAGIE </label>
                            </div>
                            <div class="row" id="divConMat" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_6" id="cboNivel_6">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGra_6" id="cboGra_6">
                                        <option value='0'>Grado:</option>
                                    </select>
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_6" id="cboCant_6">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxConNoA" name="chxTramite" value="CON_NO">&nbsp;&nbsp;
                                <label for="lblConNoA">7. CONSTANCIA DE NO ADEUDO O PAGO PENSION :</label>
                            </div>
                            <div class="row" id="divConNoA" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_7" id="cboNivel_7">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGra_7" id="cboGra_7">
                                        <option value='0'>Grado:</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_7"
                                           name="txtAnoTer_7"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_7" id="cboCant_7">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxDupRepN" name="chxTramite" value="DUP_REP">&nbsp;&nbsp;
                                <label for="lblDupRep">8. DUPLICADO DE REPORTES NOTAS :</label>
                            </div>
                            <div class="row" id="divDupRepN" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_8" id="cboNivel_8">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGra_8" id="cboGra_8">
                                        <option value='0'>Grado:</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_8"
                                           name="txtAnoTer_8"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_8" id="cboCant_8">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxConCer" name="chxTramite" value="CON_CER">&nbsp;&nbsp;
                                <label for="lblConCer">9. CONVALIDACION DE CERTIFICADO DE ESTUDIOS</label>
                            </div>
                            <div class="row" id="divConCer" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_9" id="cboNivel_9">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGraDe_9" id="cboGraDe_9">
                                        <option value='0'>Grado De:</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGraHa_9" id="cboGraHa_9">
                                        <option value='0'>Grado hasta:</option>
                                    </select>
                                </div>
                                <!--Ver si es  pais o año de estudios, preguntar al profesor gutierrez-->
                                <div class="col-md-2">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_9"
                                           name="txtAnoTer_9"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_9" id="cboCant_9">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <input type="checkbox" id="chxPruUbi" name="chxTramite" value="PRU_UBI">&nbsp;&nbsp;
                                <label for="lblPruUbi">10. PRUEBA DE UBICACION ACADEMICA :</label>
                            </div>
                            <div class="row" id="divPruUbi" style="display:none;">
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboNivel_10"
                                            id="cboNivel_10">
                                        <option value='0'>Nivel:</option>
                                        <option value='I'>Inicial</option>
                                        <option value='P'>Primaria</option>
                                        <option value='S'>Secundaria</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <select class="form-control input-sm" name="cboGra_10" id="cboGra_10">
                                        <option value='0'>Grado ultimo:</option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <input type="text" class="form-control input-sm" id="txtAnoTer_10"
                                           name="txtAnoTer_10"
                                           placeholder="Año Termino">
                                </div>
                                <div class="col-md-1">
                                    <select class="form-control input-sm" name="cboCant_10" id="cboCant_10">
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <label for="txtMotivo">5. FUNDAMENTACIÓN DEL PEDIDO (Motivo) :</label>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                            <textarea class="form-control input-sm" rows="2" cols="78" name="txaFunPed" id="txaFunPed"
                                      placeholder="Ingrese el motivo del pedido de tramite"></textarea>
                                </div>
                            </div>
                        </div>
                        <button id="btnEnvFut" type="submit" class="btn btn-default btn-success">Enviar
                            FUT
                        </button>
                        <div id="div_cargandoFut" class="row top-buffer"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- end Striped Table -->
</div>
<!-- Modal Box -->
<div class="modal fade" id="modalDetalle" tabindex="-1" role="dialog" aria-labelledby="DetalleModal"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="exampleModalLabel">Registro Telefonos</h4>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div id="dv_listado" class="col-sm-12">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- /.Modal Box -->
<!-- Inicio Footer -->
<?php include "../assets/include/footer.php" ?>
<!-- Fin Footer -->
