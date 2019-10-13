 
 
 var repos = Res("https://api.github.com/users/mr-fullstack/repos");
 console.log(repos);
 

function Res(url){

 var request = new XMLHttpRequest();
 var response;
 request.onreadystatechange = function(){
  response = this.responseText;
    if (this.readyState === 4 && this.status === 200) {
       console.log(response);
    }
};
request.open("GET",url, true);  
request.send();	

   
}