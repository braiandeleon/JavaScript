// ==UserScript==
// @name         Automatic attendance 'Registro TA'
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://132.148.77.78:83/
// @match        http://132.148.77.78:83/Default.aspx
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let intervalS = 30 /* ajustar intervalo de actualizacion */
let intervalMs = intervalS*1000
console.log("Nueva sesion");


function login(){
    document.getElementById("ddlCompany").value = "12";
    document.getElementById("txtUser").value = "0600";
    document.getElementById("txtPass").value = "deleonB97";
    document.getElementById("lnkSession").click();
    console.log("Log in successfully!");
}



let intervalId = setInterval(function() {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let dayOfWeek = date.getDay();
    let url = window.location.href;
    let buttonx = document.getElementsByClassName("slds-button slds-button_brand")[0];

    console.log("Se ejecuta el algoritmo... intervalo: "+intervalS+"s");


if (currentHour==23 && currentMinute==50){
    //location.reload(true); recarga la pagina -no funciona ya que termina el proceso!
    switch (dayOfWeek) {
        case 0:
          console.log("Sunday: no attendance no Neuro");

          break;
        case 1:
          console.log("Monday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }

          break;
        case 2:
          console.log("Tuesday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 3:
          console.log("Wednesday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 4:
          console.log("Thursday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 5:
          console.log("Friday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 6:
          console.log("Saturday: no attendance no Neuro");
          break;
        default:
          console.log("I don't know what fruit this is.");

      }
}else if (currentHour==7 && currentMinute==5) {
//   location.reload(true);

//aqui voy a salir al dia siguiente que utilice en if
    switch (dayOfWeek) {
        case 0:
          console.log("Sunday: no attendance no Neuro");
          break;
        case 1:
          console.log("Monday: no attendance no Neuro");
          break;
        case 2:
          console.log("Tuesday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 3:
          console.log("Wednesday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 4:
          console.log("Thursday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 5:
          console.log("Friday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
        case 6:
          console.log("Saturday");
          if(url.includes('http://132.148.77.78:83/')){
            login();
        }
          break;
    }
}else{console.log("No es hora de registrar asistencia son las: " + currentHour + ":"+ currentMinute)}}, intervalMs);

/* var buttonOmni = document.getElementsByClassName("itemTitle slds-truncate")[8]; //actualiza la lista de casos sin actualizar la pagina
buttonOmni.click(); */