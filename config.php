<?php
    
    $dbhost = 'localhost';
    $dbusarname = 'root';
    $dbpassword = '';
    $dbname = 'formulario';

   $conexao = new mysql($dbhost,$dbusarname,$dbpassword,$dbname)

   if($conexao->connect_errno)
   {
    echo "Erro";
   }
   else {
    echo"conexão efetuada com sucesso"
   }
?>

