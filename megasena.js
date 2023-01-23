function megaSena(){
let mega = ['', '', '', '','',''];
let numero_aleatorio;
for (var i =  0; i < mega.length; i++) {
    numero_aleatorio = (Math.random() * 60 + 1).toFixed(2);
    numero_fix = Math.round(numero_aleatorio);
    mega[i] = numero_fix;
    outResultado.textContent = ("Os números são: " + mega);
    console.log(mega);
    }
}
window.onload=function(){
btGere = document.getElementById("btGere");
btGere.addEventListener("click", megaSena);
}