
var div =document.getElementById("txtDigited");
function search(text){

		   if  (text !=""  ){
            var consulta =   new XMLHttpRequest();
            consulta.onreadystatechange = function() {
             
                if (this.readyState === 4 && this.status === 200) {

                    var Text = consulta.response; // get the string from the response
                    //console.log(Text);
                    var dados = JSON.parse(Text);
                    //console.log(dados);
                    var filmes= dados.filmes;
                document.getElementById("txtDigited").innerHTML="";
                 function renderResult(item,indice){

                    //   console.log(item);
                        
                        document.getElementById("txtDigited").innerHTML+=
                        "<br/><img src=imagens/"+filmes[indice].img+" height=200 width=200>"+
                        "<br/>Nome do Filme :" +
                        filmes[indice].titulo+
                        "<br/>"+"Genêro:"+
                        filmes[indice].genero;
                        
                    }
                
                    if (dados.mensagem){
                        document.getElementById("txtDigited").innerHTML=dados.mensagem;
                 
                    } else{

                        filmes.forEach(renderResult);
                    }
                }
              };
              consulta.open("GET", "http://mrfull.heliohost.org/ajaxphp/search.php/?src="+text, true);  
              consulta.send();	  
           }else{
                    document.getElementById("txtDigited").innerHTML="por favor  digite algo";
           }
       
}
document.getElementById("txtDigited").innerHTML="por favor  digite algo";
