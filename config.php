
<?php

$servidor = "localhost";
$usuario = "root";      
$senha = "vitao0206";            
$banco = "projeto1";    

$conexao = new mysqli($servidor, $usuario, $senha, $banco);

if ($conexao->connect_errno) {
    echo "Erro ao conectar: (" . $conexao->connect_errno . ") " . $conexao->connect_error;
    exit;
}

?>

?>
