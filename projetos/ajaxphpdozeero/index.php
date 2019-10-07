<!DOCTYPE html>
<?php
$url =  "http:$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    <span data-image=<?=  $url."imagens" ?> ></span>
    </head>
    <body>
	<form id="form-search" action="" >
		<input id ="strings"type="text"  name="txt" onkeyup=" search(this.value);" />	
	</form>
		
	<span id="txtDigited"></span>
	
	<script src="search.js"></script>
	
    </body>
</html>
