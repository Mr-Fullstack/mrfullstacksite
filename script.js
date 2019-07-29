var btn = document.getElementById('btn');
var aside = document.getElementById('menu');
var content = document.querySelector('.content');
var action = document.getElementById('action');
var menus = document.querySelectorAll('#menu>ul>li');
var open = true;
var width = window.innerWidth;

/* faltar pegar tamanho da tela  para ajustar o mobile direito */

action.setAttribute('class','bars');

btn.style.backgroundColor="#d67e7e";

btn.onclick = function (){
  menuClick();
}

function menuClick(){

  if(open){
    aside.style.transform="translate(-520px,0px)";
    btn.style.left= "0%";
    content.style.width="100%";
    content.style.left="0%";
    open=false;
    action.setAttribute('class','');
    action.setAttribute('class','bars');
    btn.style.backgroundColor="#7ed684";
  }else{
    aside.style.transform="translate(0px,0px)";
    if(width>=730){ 
    btn.style.left= "27.3%";
    content.style.width="70%";
    content.style.left="27.3%";
   }else{
    btn.style.left= "70%";
   }
    open=true;
    action.setAttribute('class','');
    action.setAttribute('class','cross');
    btn.style.backgroundColor="#d67e7e";
  }

}



function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString(),
      diaF = (dia.length == 1) ? '0'+dia : dia,
      mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes,
      anoF = data.getFullYear();
  return diaF+"/"+mesF+"/"+anoF;
}



/* pegando url */
var url  = window.location.href;
var link = url.split("#");
/* corrigindo menu about sempre primeiro */
if ( link.length == 1 ) {

  window.location.href = url+'#about';
 
}

var menuSel='';


for (menu of menus){
  

  menu.onclick=function(menu){
    
    if ( width <= 720){
      menuClick();
    }

  }

}


