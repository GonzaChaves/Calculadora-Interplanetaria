var g_tierra = 9.8


mercurio.addEventListener("click",calculoMercurio);

function calculoMercurio(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_mercurio = parseFloat(document.getElementById("mercurio").value);
var resultado = (peso*g_mercurio)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en mercurio es de'+ ' ' + resultado + ' ' + 'kilos';
}

venus.addEventListener("click",calculoVenus);

function calculoVenus(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_venus = parseFloat(document.getElementById("venus").value);
var resultado = (peso*g_venus)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en venus es de'+ ' ' + resultado + ' ' + 'kilos';
}

marte.addEventListener("click",calculoMarte);

function calculoMarte(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_marte = parseFloat(document.getElementById("marte").value);
var resultado = (peso*g_marte)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en marte es de'+ ' ' + resultado + ' ' + 'kilos';
}

jupiter.addEventListener("click",calculoJupiter);

function calculoJupiter(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_jupiter = parseFloat(document.getElementById("jupiter").value);
var resultado = (peso*g_jupiter)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en jupiter es de'+ ' ' + resultado + ' ' + 'kilos';
}

saturno.addEventListener("click",calculoSaturno);

function calculoSaturno(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_saturno = parseFloat(document.getElementById("saturno").value);
var resultado = (peso*g_saturno)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en saturno es de'+ ' ' + resultado + ' ' + 'kilos';
}

urano.addEventListener("click",calculoUrano);

function calculoUrano(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_urano = parseFloat(document.getElementById("urano").value);
var resultado = (peso*g_urano)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en urano es de'+ ' ' + resultado + ' ' + 'kilos';
}

neptuno.addEventListener("click",calculoNeptuno);

function calculoNeptuno(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_neptuno = parseFloat(document.getElementById("neptuno").value);
var resultado = (peso*g_neptuno)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en neptuno es de'+ ' ' + resultado + ' ' + 'kilos';
}

luna.addEventListener("click",calculoLuna);

function calculoLuna(){
var peso=parseFloat(document.getElementById("entrada").value);
var g_luna = parseFloat(document.getElementById("luna").value);
var resultado = (peso*g_luna)/g_tierra;
document.getElementById("salida").innerHTML='tu peso en la luna es de'+ ' ' + resultado + ' ' + 'kilos';
}

function restaurar(){
    document.getElementById("entrada").value = " ";
document.getElementById("salida").innerHTML=" ";}
