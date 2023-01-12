// ==UserScript==
// @name         Automatic attendance 'Salesforce'
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        https://neuro-id.lightning.force.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let intervalS = 30 /* ajustar intervalo de actualizacion */
let intervalMs = intervalS*1000
console.log("Nueva sesion de softphone");


function softphoneIn (){
    var buttonOmni = document.getElementsByClassName("itemTitle slds-truncate")[0];
    buttonOmni.click();

    var buttonScroll = document.getElementsByClassName("slds-button slds-button_icon-container slds-button_icon-x-small")[0];
    buttonScroll.click();

    var buttonOmnix = document.getElementsByClassName("slds-truncate")[17]; //17 para logout
    buttonOmnix.click();

    setTimeout(function(){buttonOmni.click()},1000)

}
function softphoneOut (){
    var buttonOmni = document.getElementsByClassName("itemTitle slds-truncate")[0];
    buttonOmni.click();

    var buttonScroll = document.getElementsByClassName("slds-button slds-button_icon-container slds-button_icon-x-small")[0];
    buttonScroll.click();

    var buttonOmnis = document.getElementsByClassName("slds-truncate")[18]; //17 para logout
    buttonOmnis.click();

    setTimeout(function(){buttonOmni.click()},1000)
}



let intervalId = setInterval(function() {
    let date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let dayOfWeek = date.getDay();
    let url = window.location.href;
    let buttonx = document.getElementsByClassName("slds-button slds-button_brand")[0];

    console.log("Se ejecuta el algoritmo... intervalo: "+intervalS+"s");


if (currentHour==23 && currentMinute==57){
    //location.reload(true); recarga la pagina -no funciona ya que termina el proceso!
    switch (dayOfWeek) {
        case 0:
          console.log("Sunday");

          break;
        case 1:
          console.log("Monday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneIn();
          }

          break;
        case 2:
          console.log("Tuesday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneIn();
          }
          break;
        case 3:
          console.log("Wednesday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneIn();
          }
          break;
        case 4:
          console.log("Thursday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneIn();
          }
          break;
        case 5:
          console.log("Friday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneIn();
          }
          break;
        case 6:
          console.log("Saturday");
          break;
        default:
          console.log("I don't know what fruit this is.");

      }
}else if (currentHour==7 && currentMinute==5) {
//   location.reload(true);

//aqui voy a salir al dia siguiente que utilice en if
    switch (dayOfWeek) {
        case 0:
          console.log("Sunday");
          break;
        case 1:
          console.log("Monday");
          break;
        case 2:
          console.log("Tuesday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneOut();
          }
          break;
        case 3:
          console.log("Wednesday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneOut();
          }
          break;
        case 4:
          console.log("Thursday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneOut();
          }
          break;
        case 5:
          console.log("Friday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneOut();
          }
          break;
        case 6:
          console.log("Saturday");
          if (url.includes('neuro-id.lightning.force.com')) {
            softphoneOut();
          }
          break;
    }
}else{console.log("No es hora de activar SoftPhone son las: " + currentHour + ":"+ currentMinute)}}, intervalMs);

/* var buttonOmni = document.getElementsByClassName("itemTitle slds-truncate")[8]; //actualiza la lista de casos sin actualizar la pagina
buttonOmni.click(); */