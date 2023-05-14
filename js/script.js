const txtIngresado = document.querySelector("#txtnew");
const txtResultado = document.querySelector("#txtresul");
/*botones*/
const btnEncriptar = document.querySelector("#btnenc");
const btnDesencriptar = document.querySelector("#btndes");
const btnCopiar = document.querySelector("#btncop");

function encriptar (){
  let txtnew = txtIngresado.value.toLowerCase();
  let textoEncriptado = txtnew
  .replaceAll("e", "enter") /*en ese orden para que no haya problemas al encriptarlo*/
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");
  document.getElementById("btncop").style.visibility = "visible";
  document.getElementById("nr").style.visibility = "hidden";
  

  txtResultado.value = textoEncriptado;

  document.getElementById("txtnew").value = '';

}

function desencriptar (){
  let textoEncriptado = txtIngresado.value.toLowerCase();
  let txtnew = textoEncriptado
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");
  document.getElementById("btncop").style.visibility = "visible";
  document.getElementById("nr").style.visibility = "hidden";
  

  txtResultado.value = txtnew;

  document.getElementById("txtnew").value = '';

}

function copiar () {
  let textoEncriptado = txtResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;