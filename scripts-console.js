///entras a al paguina de facebook y haces crecer la lsta  y autoomaticamnte invitaras a todos
javascript:var inputs = document.getElementsByClassName('_4jy0 _4jy3 _517h _51sy _42ft');
javascript:var nombre = document.getElementsByClassName('ellipsis');
var numero=inputs.length;
var x;
for(var i=0; i<inputs.length;i++) {
x=(100*(i+1))/numero;
inputs[i].click();
console.log(x+"%",nombre[i].textContent);
}
console.log("peronas alcanzadas  "+i);




//u_jsonp_12_2  es la  id del campo de texto
javascript:var inputs = document.getElementById('u_jsonp_12_2').value="prueva con io";
console.log(inputs);


javascript:var inputs = document.getElementsByClassName('_5rpu');
javascript:var buton = document.getElementsByClassName('_1mf7 _4jy0 _4jy3 _4jy1 _51sy selected _42ft');
inputs[0].textContent="prueva io"
inputs[0].value="prueva io"
buton[0].click();







javascript:var inputs = document.getElementsByClassName('_4jy0 _4jy3 _517h _51sy _42ft');
javascript:var nombre = document.getElementsByClassName('ellipsis');
for(var i=0; i<inputs.length;i++) {

inputs[i].click();
console.log("usuario");
console.log(i);
console.log(nombre);
}






javascript:var inputs = document.getElementsByClassName('_4jy0 _4jy3 _517h _51sy _42ft');
for(var i=0; i<inputs.length;i++) {

inputs[i].click();
console.log("usuario");
console.log(i);

}
console.log("primera repaso terminado");
for(var i=0; i<inputs.length;i++) {

inputs[i].click();
console.log("usuario");
console.log(i);

}
console.log("segundo repaso terminado");
for(var i=0; i<inputs.length;i++) {

inputs[i].click();
console.log("usuario");
console.log(i);

}
console.log("terminado");
