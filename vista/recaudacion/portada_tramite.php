<!-- Inicio Header -->
<?php include "../assets/include/header.php" ?>
<!-- Fin Header -->
<!-- Contenido Pagina -->
<!-- Statistics -->
<div class="row">
    <div class="col-lg-12">
        <div class="widget-container stats-container">
            <div class="col-md-3">
                <div class="number">
                    <div class="icon globe"></div>
                    86
                    <small>%</small>
                </div>
                <div class="text">
                    Overall growth
                </div>
            </div>
            <div class="col-md-3">
                <div class="number">
                    <div class="icon visitors"></div>
                    613
                </div>
                <div class="text">
                    Unique visitors
                </div>
            </div>
            <div class="col-md-3">
                <div class="number">
                    <div class="icon money"></div>
                    <small>$</small>
                    924
                </div>
                <div class="text">
                    Sales
                </div>
            </div>
            <div class="col-md-3">
                <div class="number">
                    <div class="icon chat-bubbles"></div>
                    325
                </div>
                <div class="text">
                    New followers
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Statistics -->
<div class="row">
    <!-- Weather -->
    <div class="col-md-8">
        <div class="widget-container weather">
            <div class="widget-content padded">
                <div class="row text-center">
                    <div class="col-sm-6 col-md-6 col-lg-4 today">
                        <p>
                            TODAY
                        </p>
                        <canvas class="skycons-element" data-skycons="RAIN" height="100" id="rain" width="100"></canvas>
                        <div class="number">
                            72
                            <small>°</small>
                        </div>
                        <p class="location">
                            Washington, D.C.
                        </p>
                    </div>
                    <div class="col-sm-2 hidden-xs">
                        <p>
                            MON
                        </p>
                        <canvas class="skycons-element" data-skycons="CLEAR_DAY" height="60" id="clear-day"
                                width="60"></canvas>
                        <div class="number">
                            86
                            <small>°</small>
                        </div>
                    </div>
                    <div class="col-sm-2 hidden-xs">
                        <p>
                            TUE
                        </p>
                        <canvas class="skycons-element" data-skycons="RAIN" height="60" id="cloudy" width="60"></canvas>
                        <div class="number">
                            75
                            <small>°</small>
                        </div>
                    </div>
                    <div class="col-sm-2 hidden-xs">
                        <p>
                            WED
                        </p>
                        <canvas class="skycons-element" data-skycons="PARTLY_CLOUDY_DAY" height="60"
                                id="partly-cloudy-day" width="60"></canvas>
                        <div class="number">
                            82
                            <small>°</small>
                        </div>
                    </div>
                    <div class="col-sm-2 hidden-md hidden-sm hidden-xs">
                        <p>
                            THU
                        </p>
                        <canvas class="skycons-element" data-skycons="SLEET" height="60" id="sleet" width="60"></canvas>
                        <div class="number">
                            64
                            <small>°</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end Weather --><!-- Bar Graph -->
    <div class="col-md-4">
        <div class="widget-container small">
            <div class="heading">
                <i class="fa fa-signal"></i>New sign ups<i class="fa fa-list pull-right"></i><i
                    class="fa fa-refresh pull-right"></i>
            </div>
            <div class="widget-content padded">
                <div class="bar-chart-widget">
                    <div class="chart-graph">
                        <div id="barcharts">
                            <canvas width="251" height="100"
                                    style="display: inline-block; width: 251px; height: 100px; vertical-align: top;"></canvas>
                        </div>
                        <ul class="chart-text-axis">
                            <li>
                                1
                            </li>
                            <li>
                                2
                            </li>
                            <li>
                                3
                            </li>
                            <li>
                                4
                            </li>
                            <li>
                                5
                            </li>
                            <li>
                                6
                            </li>
                            <li>
                                7
                            </li>
                            <li>
                                8
                            </li>
                            <li>
                                9
                            </li>
                            <li>
                                10
                            </li>
                            <li>
                                11
                            </li>
                            <li>
                                12
                            </li>
                            <li>
                                13
                            </li>
                            <li>
                                14
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Bar Graph -->
</div>
<div class="row">
    <!-- Area Charts:Morris -->
    <div class="col-md-6">
        <div class="widget-container fluid-height">
            <div class="heading">
                <i class="fa fa-bar-chart-o"></i>Area Chart
            </div>
            <div class="widget-content padded text-center">
                <div class="graph-container">
                    <div class="caption"></div>
                    <div class="graph" id="hero-area" style="position: relative;">
                        <svg height="342" version="1.1" width="896" xmlns="http://www.w3.org/2000/svg"
                             style="overflow: hidden; position: relative;">
                            <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with RaphaÃ«l 2.1.2
                            </desc>
                            <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                            <text x="50.5" y="308" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none"
                                  fill="#888888"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
                                  font-size="12px" font-family="sans-serif" font-weight="normal">
                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan>
                            </text>
                            <path fill="none" stroke="#aaaaaa" d="M63,308H871" stroke-width="0.5"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <text x="50.5" y="237.25" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none"
                                  fill="#888888"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
                                  font-size="12px" font-family="sans-serif" font-weight="normal">
                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7,500</tspan>
                            </text>
                            <path fill="none" stroke="#aaaaaa" d="M63,237.25H871" stroke-width="0.5"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <text x="50.5" y="166.5" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none"
                                  fill="#888888"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
                                  font-size="12px" font-family="sans-serif" font-weight="normal">
                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">15,000</tspan>
                            </text>
                            <path fill="none" stroke="#aaaaaa" d="M63,166.5H871" stroke-width="0.5"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <text x="50.5" y="95.75" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none"
                                  fill="#888888"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
                                  font-size="12px" font-family="sans-serif" font-weight="normal">
                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">22,500</tspan>
                            </text>
                            <path fill="none" stroke="#aaaaaa" d="M63,95.75H871" stroke-width="0.5"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <text x="50.5" y="25" text-anchor="end" font="10px &quot;Arial&quot;" stroke="none"
                                  fill="#888888"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
                                  font-size="12px" font-family="sans-serif" font-weight="normal">
                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30,000</tspan>
                            </text>
                            <path fill="none" stroke="#aaaaaa" d="M63,25H871" stroke-width="0.5"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <text x="721.7703523693802" y="320.5" text-anchor="middle" font="10px &quot;Arial&quot;"
                                  stroke="none" fill="#888888"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
                                  font-size="12px" font-family="sans-serif" font-weight="normal"
                                  transform="matrix(1,0,0,1,0,7)">
                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan>
                            </text>
                            <text x="363.4228432563791" y="320.5" text-anchor="middle" font="10px &quot;Arial&quot;"
                                  stroke="none" fill="#888888"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: sans-serif;"
                                  font-size="12px" font-family="sans-serif" font-weight="normal"
                                  transform="matrix(1,0,0,1,0,7)">
                                <tspan dy="4" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011</tspan>
                            </text>
                            <path fill="#ebf6eb" stroke="#000000"
                                  d="M63,257.8807C85.58080194410692,252.69236666666666,130.74240583232077,241.9253958333333,153.3232077764277,237.12736666666666C175.90400972053462,232.32933749999998,221.0656136087485,226.06474717668488,243.64641555285542,219.49646666666666C265.98177399756986,212.9995805100182,310.65249088699875,186.80528908839776,332.9878493317132,184.86669999999998C355.0777642770352,182.94941408839776,399.2575941676792,202.66302023809524,421.3475091130012,204.07296666666667C443.9283110571081,205.51424523809524,489.089914945322,195.3117583333333,511.6707168894289,196.27159999999998C534.2515188335358,197.23144166666665,579.4131227217497,228.79010418943534,601.9939246658566,211.7517C624.329283110571,194.89849585610202,669,68.92631666666665,691.3353584447144,60.705166666666656C713.6707168894288,52.48401666666665,758.3414337788579,133.92807891621126,780.6767922235723,145.9825C803.2575941676793,158.1693872495446,848.419198055893,154.748425,871,157.6704L871,308L63,308Z"
                                  fill-opacity="0.5" stroke-width="0"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0.5;"></path>
                            <path fill="none" stroke="#a0e2a0"
                                  d="M63,257.8807C85.58080194410692,252.69236666666666,130.74240583232077,241.9253958333333,153.3232077764277,237.12736666666666C175.90400972053462,232.32933749999998,221.0656136087485,226.06474717668488,243.64641555285542,219.49646666666666C265.98177399756986,212.9995805100182,310.65249088699875,186.80528908839776,332.9878493317132,184.86669999999998C355.0777642770352,182.94941408839776,399.2575941676792,202.66302023809524,421.3475091130012,204.07296666666667C443.9283110571081,205.51424523809524,489.089914945322,195.3117583333333,511.6707168894289,196.27159999999998C534.2515188335358,197.23144166666665,579.4131227217497,228.79010418943534,601.9939246658566,211.7517C624.329283110571,194.89849585610202,669,68.92631666666665,691.3353584447144,60.705166666666656C713.6707168894288,52.48401666666665,758.3414337788579,133.92807891621126,780.6767922235723,145.9825C803.2575941676793,158.1693872495446,848.419198055893,154.748425,871,157.6704"
                                  stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <circle cx="63" cy="257.8807" r="4" fill="#a0e2a0" stroke="#ffffff" stroke-width="1"
                                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="153.3232077764277" cy="237.12736666666666" r="4" fill="#a0e2a0" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="243.64641555285542" cy="219.49646666666666" r="4" fill="#a0e2a0"
                                    stroke="#ffffff" stroke-width="1"
                                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="332.9878493317132" cy="184.86669999999998" r="4" fill="#a0e2a0" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="421.3475091130012" cy="204.07296666666667" r="4" fill="#a0e2a0" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="511.6707168894289" cy="196.27159999999998" r="4" fill="#a0e2a0" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="601.9939246658566" cy="211.7517" r="4" fill="#a0e2a0" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="691.3353584447144" cy="60.705166666666656" r="4" fill="#a0e2a0" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="780.6767922235723" cy="145.9825" r="4" fill="#a0e2a0" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="871" cy="157.6704" r="4" fill="#a0e2a0" stroke="#ffffff" stroke-width="1"
                                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <path fill="#f8f0e6" stroke="#000000"
                                  d="M63,282.8507333333333C85.58080194410692,277.1765833333333,130.74240583232077,265.12432083333334,153.3232077764277,260.15413333333333C175.90400972053462,255.18394583333333,221.0656136087485,245.80665191256827,243.64641555285542,243.0892333333333C265.98177399756986,240.4013519125683,310.65249088699875,240.71814415285453,332.9878493317132,238.53293333333335C355.0777642770352,236.3717358195212,399.2575941676792,228.73457664835163,421.3475091130012,225.7036C443.9283110571081,222.6052683150183,489.089914945322,213.88717083333333,511.6707168894289,214.01569999999998C534.2515188335358,214.14422916666666,579.4131227217497,239.86483752276868,601.9939246658566,226.73183333333333C624.329283110571,213.74157918943533,669,117.22498333333331,691.3353584447144,109.52266666666665C713.6707168894288,101.82034999999998,758.3414337788579,157.02737399817852,780.6767922235723,165.1133C803.2575941676793,173.28808233151184,848.419198055893,172.20245,871,174.5655L871,308L63,308Z"
                                  fill-opacity="0.5" stroke-width="0"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0.5;"></path>
                            <path fill="none" stroke="#f1c88e"
                                  d="M63,282.8507333333333C85.58080194410692,277.1765833333333,130.74240583232077,265.12432083333334,153.3232077764277,260.15413333333333C175.90400972053462,255.18394583333333,221.0656136087485,245.80665191256827,243.64641555285542,243.0892333333333C265.98177399756986,240.4013519125683,310.65249088699875,240.71814415285453,332.9878493317132,238.53293333333335C355.0777642770352,236.3717358195212,399.2575941676792,228.73457664835163,421.3475091130012,225.7036C443.9283110571081,222.6052683150183,489.089914945322,213.88717083333333,511.6707168894289,214.01569999999998C534.2515188335358,214.14422916666666,579.4131227217497,239.86483752276868,601.9939246658566,226.73183333333333C624.329283110571,213.74157918943533,669,117.22498333333331,691.3353584447144,109.52266666666665C713.6707168894288,101.82034999999998,758.3414337788579,157.02737399817852,780.6767922235723,165.1133C803.2575941676793,173.28808233151184,848.419198055893,172.20245,871,174.5655"
                                  stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <circle cx="63" cy="282.8507333333333" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="153.3232077764277" cy="260.15413333333333" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="243.64641555285542" cy="243.0892333333333" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="332.9878493317132" cy="238.53293333333335" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="421.3475091130012" cy="225.7036" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="511.6707168894289" cy="214.01569999999998" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="601.9939246658566" cy="226.73183333333333" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="691.3353584447144" cy="109.52266666666665" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="780.6767922235723" cy="165.1133" r="4" fill="#f1c88e" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="871" cy="174.5655" r="4" fill="#f1c88e" stroke="#ffffff" stroke-width="1"
                                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <path fill="#f5fafc" stroke="#000000"
                                  d="M63,282.8507333333333C85.58080194410692,282.5866,130.74240583232077,284.44260833333334,153.3232077764277,281.7942C175.90400972053462,279.14579166666664,221.0656136087485,262.8360351548269,243.64641555285542,261.66346666666664C265.98177399756986,260.50364348816026,310.65249088699875,274.71505662983424,332.9878493317132,272.4646333333333C355.0777642770352,270.2389399631676,399.2575941676792,245.97829532967035,421.3475091130012,243.75900000000001C443.9283110571081,241.490386996337,489.089914945322,252.16645833333334,511.6707168894289,254.513C534.2515188335358,256.8595416666667,579.4131227217497,273.67962604735885,601.9939246658566,262.53133333333335C624.329283110571,251.50421771402551,669,172.7295375,691.3353584447144,165.81136666666666C713.6707168894288,158.89319583333332,758.3414337788579,199.3979123406193,780.6767922235723,207.18596666666667C803.2575941676793,215.05960400728597,848.419198055893,223.14009166666668,871,228.45813333333334L871,308L63,308Z"
                                  fill-opacity="0.5" stroke-width="0"
                                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 0.5;"></path>
                            <path fill="none" stroke="#a0dcee"
                                  d="M63,282.8507333333333C85.58080194410692,282.5866,130.74240583232077,284.44260833333334,153.3232077764277,281.7942C175.90400972053462,279.14579166666664,221.0656136087485,262.8360351548269,243.64641555285542,261.66346666666664C265.98177399756986,260.50364348816026,310.65249088699875,274.71505662983424,332.9878493317132,272.4646333333333C355.0777642770352,270.2389399631676,399.2575941676792,245.97829532967035,421.3475091130012,243.75900000000001C443.9283110571081,241.490386996337,489.089914945322,252.16645833333334,511.6707168894289,254.513C534.2515188335358,256.8595416666667,579.4131227217497,273.67962604735885,601.9939246658566,262.53133333333335C624.329283110571,251.50421771402551,669,172.7295375,691.3353584447144,165.81136666666666C713.6707168894288,158.89319583333332,758.3414337788579,199.3979123406193,780.6767922235723,207.18596666666667C803.2575941676793,215.05960400728597,848.419198055893,223.14009166666668,871,228.45813333333334"
                                  stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                            <circle cx="63" cy="282.8507333333333" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="153.3232077764277" cy="281.7942" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="243.64641555285542" cy="261.66346666666664" r="4" fill="#a0dcee"
                                    stroke="#ffffff" stroke-width="1"
                                    style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="332.9878493317132" cy="272.4646333333333" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="421.3475091130012" cy="243.75900000000001" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="511.6707168894289" cy="254.513" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="601.9939246658566" cy="262.53133333333335" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="691.3353584447144" cy="165.81136666666666" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="780.6767922235723" cy="207.18596666666667" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                            <circle cx="871" cy="228.45813333333334" r="4" fill="#a0dcee" stroke="#ffffff"
                                    stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                        </svg>
                        <div class="morris-hover morris-default-style" style="display: none;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Area Charts:Morris --><!-- Chat -->
    <div class="col-md-6">
        <div class="widget-container scrollable chat" style="height: 427px;">
            <div class="heading">
                <i class="fa fa-comments"></i>Chat Widget<i class="fa fa-smile-o pull-right"></i>
            </div>
            <div class="widget-content padded">
                <ul>
                    <li>
                        <img width="30" height="30" src="images/avatar-male.jpg">
                        <div class="bubble">
                            <a class="user-name" href="">John Smith</a>
                            <p class="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                                mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper
                                suscipit, posuere a, pede.
                            </p>
                            <p class="time">
                                <strong>Today</strong>3:53 pm
                            </p>
                        </div>
                    </li>
                    <li class="current-user">
                        <img width="30" height="30" src="images/avatar-female.jpg">
                        <div class="bubble">
                            <a class="user-name" href="">Jane Smith</a>
                            <p class="message">
                                Donec odio. Quisque volutpat mattis eros.
                            </p>
                            <p class="time">
                                <strong>Today</strong>3:53 pm
                            </p>
                        </div>
                    </li>
                    <li>
                        <img width="30" height="30" src="images/avatar-male.jpg">
                        <div class="bubble">
                            <a class="user-name" href="">John Smith</a>
                            <p class="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                                mattis eros.
                            </p>
                            <p class="time">
                                <strong>Today</strong>3:53 pm
                            </p>
                        </div>
                    </li>
                    <li>
                        <img width="30" height="30" src="images/avatar-male.jpg">
                        <div class="bubble">
                            <a class="user-name" href="">John Smith</a>
                            <p class="message">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
                                mattis eros.
                            </p>
                            <p class="time">
                                <strong>Today</strong>3:53 pm
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="post-message">
                <input class="form-control" placeholder="Write your message here..." type="text"><input type="submit"
                                                                                                        value="Send">
            </div>
        </div>
    </div>
    <!-- End Chat -->
</div>
<div class="row">
    <!-- Pie Graph 1 -->
    <div class="col-lg-5">
        <div class="widget-container fluid-height">
            <div class="heading">
                <i class="fa fa-bar-chart-o"></i>Donut Charts
            </div>
            <div class="widget-content clearfix">
                <div class="col-sm-6">
                    <div class="pie-chart1 pie-chart pie-number easyPieChart" data-percent="87"
                         style="width: 200px; height: 200px; line-height: 200px;">
                        87%
                        <canvas width="200" height="200"></canvas>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="pie-chart2 pie-chart pie-number easyPieChart" data-percent="26"
                         style="width: 200px; height: 200px; line-height: 200px;">
                        26%
                        <canvas width="200" height="200"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-7">
        <div class="widget-container fluid-height">
            <!-- Table -->
            <table class="table table-filters">
                <tbody>
                <tr>
                    <td class="filter-category blue">
                        <div class="arrow-left"></div>
                        <i class="fa fa-stethoscope"></i>
                    </td>
                    <td>
                        National Distribution Co.
                    </td>
                    <td>
                        $9204
                    </td>
                    <td class="hidden-xs">
                        <div class="sparkslim">
                            <canvas width="100" height="30"
                                    style="display: inline-block; width: 100px; height: 30px; vertical-align: top;"></canvas>
                        </div>
                    </td>
                    <td>
                        <div class="danger">
                            -4%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="filter-category green">
                        <div class="arrow-left"></div>
                        <i class="fa fa-coffee"></i>
                    </td>
                    <td>
                        Star Organization Co.
                    </td>
                    <td>
                        $23,890
                    </td>
                    <td class="hidden-xs">
                        <div class="sparkslim">
                            <canvas width="100" height="30"
                                    style="display: inline-block; width: 100px; height: 30px; vertical-align: top;"></canvas>
                        </div>
                    </td>
                    <td>
                        <div class="success">
                            +12%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="filter-category orange">
                        <div class="arrow-left"></div>
                        <i class="fa fa-gamepad"></i>
                    </td>
                    <td>
                        Companysoft, LLC
                    </td>
                    <td>
                        $10,995
                    </td>
                    <td class="hidden-xs">
                        <div class="sparkslim">
                            <canvas width="100" height="30"
                                    style="display: inline-block; width: 100px; height: 30px; vertical-align: top;"></canvas>
                        </div>
                    </td>
                    <td>
                        <div class="success">
                            +5%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="filter-category red">
                        <div class="arrow-left"></div>
                        <i class="fa fa-gift"></i>
                    </td>
                    <td>
                        Craft Co.
                    </td>
                    <td>
                        $6,790
                    </td>
                    <td class="hidden-xs">
                        <div class="sparkslim">
                            <canvas width="100" height="30"
                                    style="display: inline-block; width: 100px; height: 30px; vertical-align: top;"></canvas>
                        </div>
                    </td>
                    <td>
                        <div class="success">
                            +26%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="filter-category blue">
                        <div class="arrow-left"></div>
                        <i class="fa fa-stethoscope"></i>
                    </td>
                    <td>
                        National Distribution Co.
                    </td>
                    <td>
                        $9204
                    </td>
                    <td class="hidden-xs">
                        <div class="sparkslim">
                            <canvas width="100" height="30"
                                    style="display: inline-block; width: 100px; height: 30px; vertical-align: top;"></canvas>
                        </div>
                    </td>
                    <td>
                        <div class="danger">
                            -4%
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="filter-category magenta">
                        <div class="arrow-left"></div>
                        <i class="fa fa-trophy"></i>
                    </td>
                    <td>
                        Fastnation Co.
                    </td>
                    <td>
                        $22,156
                    </td>
                    <td class="hidden-xs">
                        <div class="sparkslim">
                            <canvas width="100" height="30"
                                    style="display: inline-block; width: 100px; height: 30px; vertical-align: top;"></canvas>
                        </div>
                    </td>
                    <td>
                        <div class="danger">
                            -4%
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- End Pie Graph 1 -->
</div>
<!-- Fin Contenido Pagina -->
<!-- Inicio Footer -->
<?php include "../assets/include/footer.php" ?>
<!-- Fin Footer -->
