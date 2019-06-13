<?php
header('Access-Control-Allow-Origin: *');
require 'connectMySQL.php';
$id_admin =$_GET['id_admin'];
    class admin{
        function admin($id_admin,$password){
            $this->id_admin=$id_admin;
            $this->password=$password;
        }
    }
    $query ="select*from admin where id_admin='$id_admin'";
    $result =mysqli_query($connect,$query);
    $mangketqua =array();
    while($dong =mysqli_fetch_assoc($result)){
        array_push($mangketqua,new admin($dong['id_admin'],$dong['password']));
    }
        echo json_encode($mangketqua);
    //echo json_encode($mangketqua=>array(""server_response));
?>