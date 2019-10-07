<?php
		try {
		
			     $pesquisaFilme = !empty($_GET['src'])?$_GET['src']:null;
				  $conn = new PDO('mysql:host=localhost;dbname=ajax', "root", "");
		          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		          $sql="SELECT * FROM  filmes  WHERE titulo like '%$pesquisaFilme%' ";  
		          $consulta = $conn->prepare($sql);	
		          $consulta->execute();
			if($consulta->rowCount()>=1){

			 $dados=[];
			$filme=[];
			  while($row = $consulta->fetch(PDO::FETCH_OBJ)){
						$dados[]=$row; 
						$filme['filmes']=$dados;
			   }
			          echo json_encode( $filme);
			 
			}else{
					$erro['mensagem']='nenhum filme econtrado';
					echo json_encode( $erro);
			}
			} catch(PDOException $e) {
					echo 'ERROR: ' . $e->getMessage();
				}
		
		
	
	
	



