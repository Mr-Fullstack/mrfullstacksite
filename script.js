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
    btn.style.left= "27.3%";
    content.style.width="70%";
    content.style.left="27.3%";
    open=true;
    action.setAttribute('class','');
    action.setAttribute('class','cross');
    btn.style.backgroundColor="#d67e7e";
  }

}
/* corrigindo menu about sempre primeiro */

var url  = window.location.href;
var link = url.split("#");
console.log(link);

if ( link.length == 1 ) {

  window.location.href = url+'#about';
 
}



for (menu of menus){

  menu.onclick=function(){
    
    if ( width <= 720){
      menuClick();
    }
    
  }

}