<?php
include('config.php');
$url=isset($_GET['url'])?$_GET['url']:'starter';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">   
    <link href="https://fonts.googleapis.com/css?family=Montserrat:200,400,900" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo CSS_AWESOME_PATH;?>">
    <link rel="stylesheet" href="<?php echo CSS_PATH; ?>">
    <link rel="stylesheet" href="<?php echo CSS_ANIMATE_PATH; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
    <body>
        <div class="tela">
            <section class="tela__main animated fadeIn">
               
                <?php

                if(file_exists('pages/'.$url.'.php')){
                    include('pages/'.$url.'.php');
                }else{
                    $url = '404';
                    include('pages/404.php');
                }
                ?>  
                
            </section><!--tela__main--> 
        </div><!--tela--> 
        <script src="assets/js/function.js"></script>
    </body>
</html>