//me dirigoi ala paguina
javascript: var web = "https://www.facebook.com/akitaxiapp/?fref=ts";
javascript:var link =  document.getElementsByClassName('_2s25');
link[1].baseURI= web;
link[1].href= web;
link[1].click();




 //le doy me gusta  ala paguina
javascript:var like =  document.getElementsByClassName('_42ft _4jy0 PageLikeButton _4jy4 _517h _9c6');
like[0].click();
// me dirigo a invitar
javascript:var likes =  document.getElementsByClassName('_4jq5');
likes[3].click();




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