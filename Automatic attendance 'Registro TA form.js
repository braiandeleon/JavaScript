// ==UserScript==
// @name         Automatic attendance 'Registro TA form'
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://132.148.77.78:83/frmCheck.aspx*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let intervalS = 30 /* ajustar intervalo de actualizacion */
let intervalMs = intervalS*1000
console.log("Estoy en un dia de trabajo. Debo de registrar asistencia.");

function attendance(){
    if (currentHour==23 && currentMinute==50){
    setTimeout(function(){
    document.getElementById("lnkEntry00").click();
    document.getElementById("lnkEnaCheck").click();
    document.getElementById("lnkDefault").click(); //
    console.log("Attendance registered correctly!");
    },1000)
}



}
function exit(){
    if (currentHour==7 && currentMinute==5) {
    console.log("exit ok.");
    setTimeout(function(){
    document.getElementById("lnkExit01").click();
    document.getElementById("lnkEnaCheck").click();
    document.getElementById("lnkDefault").click();
    // "lnkCacel" boton cancelar de la caja de dialogo que se abre al clickear sobre entrada o salida en la pagina principal
    console.log("Exit registered correctly!");
    },1000)
}

}

    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let dayOfWeek = date.getDay();
    let url = window.location.href;
    let buttonx = document.getElementsByClassName("slds-button slds-button_brand")[0];

    console.log("Se ejecuta el algoritmo... intervalo: "+intervalS+"s");

    window.addEventListener("load", attendance()); //si estamos en url == "http://132.148.77.78:83/"
    window.addEventListener("load", exit()); //si estamos en url == "http://132.148.77.78:83/"