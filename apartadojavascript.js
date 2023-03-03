var cuentas = [
    { nombre: "Brunito", saldo: 200, password: '123' },
    { nombre: "Artur", saldo: 290, password: '231' },
    { nombre: "Bren", saldo: 67, password: '312' }
];

const cuerpo2 = document.getElementById("cuadro2").style.display ="none"
const cuerpo3 = document.getElementById("cuadro3").style.display ="none"
const cuerpo4 = document.getElementById("cuadro4").style.display ="none"
const cuerpo5 = document.getElementById("cuadro5").style.display ="none"


function template(sms){
    return `<p>${sms}</p>`;}

const login_form = document.querySelector("#login-form");
const response =document.querySelector(".response");

login_form.addEventListener("submit", function(event) {
event.preventDefault();

const  name = login_form["name"];
const  pass = login_form["pass"];
const state_login1 = (cuentas[0].nombre === name.value) && (cuentas[0].password === pass.value);
const state_login2 = (cuentas[1].nombre === name.value) && (cuentas[1].password === pass.value);
const state_login3 = (cuentas[2].nombre === name.value) && (cuentas[2].password === pass.value);


if(state_login1){
    const final_state1 = state_login1 ? "Bienvenido, Brunito :)"  : "Error!" ;
    response.innerHTML = template (final_state1);
    if(state_login1){
        var saldo1 = cuentas[0].saldo ;
        document.getElementById("CT").innerHTML =saldo1;

        
        var ocularCuerpo1=document.getElementById("cuadro1").style.display= "none";
        var cuerpo2 = document.getElementById("cuadro2").style.display= "block";
        return ocularCuerpo1,cuerpo2;
    }
}
else if(state_login2){
    const final_state2 = state_login2 ? "Bienvenido, Artur :)"  : "Error!" ;
    response.innerHTML = template (final_state2);
    if(state_login2){
        var saldo2 = cuentas[1].saldo ;

        document.getElementById("CT").innerHTML =saldo2;

        var ocularCuerpo1=document.getElementById("cuadro1").style.display= "none";
        var cuerpo2 = document.getElementById("cuadro2").style.display= "block";
        return ocularCuerpo1,cuerpo2;
    }
}
else if(state_login3){
    const final_state3 = state_login3 ? "Bienvenida, Bren :)"  : "Error!" ;
    response.innerHTML = template (final_state3);
    if(state_login3){

        var saldo3 = cuentas[2].saldo ;
        document.getElementById("CT").innerHTML =saldo3;

        var ocularCuerpo1=document.getElementById("cuadro1").style.display= "none";
        var cuerpo2 = document.getElementById("cuadro2").style.display= "block";
        return ocularCuerpo1,cuerpo2;
    }
}
else{
    response.innerHTML = template ("Usted no esta registrado");

}
});


C2B1.addEventListener("click", function(event) {
    event.preventDefault();
        var ocultarcuerpo2 =document.getElementById("cuadro2").style.display= "none";
        var mostrarCuerpo3 =document.getElementById("cuadro3").style.display= "block";

    return ocultarcuerpo2,mostrarCuerpo3;
});


C2B2.addEventListener("click", function(event) {
    event.preventDefault();
        var ocultarcuerpo2 =document.getElementById("cuadro2").style.display= "none";
        var mostrarCuerpo4 =document.getElementById("cuadro4").style.display= "block";




    return ocultarcuerpo2,mostrarCuerpo4;
});
C2B3.addEventListener("click", function(event) {
    event.preventDefault();

        var ocultarcuerpo2 =document.getElementById("cuadro2").style.display= "none";
        var mostrarCuerpo5 =document.getElementById("cuadro5").style.display= "block";




    return ocultarcuerpo2,mostrarCuerpo5;
});

back_0.addEventListener("click",function(event){
    event.preventDefault();
    var mostrarCuerpo1= document.getElementById("cuadro1").style.display= "block";
    var ocularC2 =document.getElementById("cuadro2").style.display= "none";
    return mostrarCuerpo1,ocularC2;
});




back_1.addEventListener("click",function(event){
    event.preventDefault();

    var mostrarCuerpo2 = document.getElementById("cuadro2").style.display= "block";
    var ocularC3 =document.getElementById("cuadro3").style.display= "none";
    return mostrarCuerpo2,ocularC3;
});

back_2.addEventListener("click",function(event){
    event.preventDefault();
    var mostrarCuerpo2 = document.getElementById("cuadro2").style.display= "block";
    var ocularC4 =document.getElementById("cuadro4").style.display= "none";
    return mostrarCuerpo2,ocularC4;
});
back_3.addEventListener("click",function(event){
    event.preventDefault();

    var mostrarCuerpo2 = document.getElementById("cuadro2").style.display= "block";
    var ocularC5 =document.getElementById("cuadro5").style.display= "none";
    return mostrarCuerpo2,ocularC5;
});

const response2 =document.querySelector(".response2");
const response3 =document.querySelector(".response3");




bt1.addEventListener("click",function(event){
    event.preventDefault();

         var CantidadTotal=parseInt(document.getElementById("CT").innerHTML);
         var Cantidad1=parseInt(document.getElementById("C1").value);

           if(CantidadTotal>=10 &&CantidadTotal<=990 ){

            if (Cantidad1<=700){
                document.getElementById("CT").innerHTML=(CantidadTotal+Cantidad1);
                response2.innerHTML = template ("Se ha efectuado el deposito");
        }}
     else { 
        var result1 = response2.innerHTML = template ("Error! Deposita una cantidad menor");
        return CantidadTotal,result1;}

});
bt2.addEventListener("click",function(event){
    event.preventDefault();
    var CantidadTotal=parseInt(document.getElementById("CT").innerHTML);
    var Cantidad2=parseInt(document.getElementById("C2").value);

    if(CantidadTotal>=10 &&CantidadTotal<=990 ){
        if (Cantidad2 <CantidadTotal){
            document.getElementById("CT").innerHTML=(CantidadTotal-Cantidad2);



        response3.innerHTML = template ("Retiro efectuado");}
    else { 
    var result =response3.innerHTML = template ("Error! Debe dejar una cantidad minima de $10 en su cuenta");
    return CantidadTotal,result;
    ;}

}})
; 