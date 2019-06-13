<?php
header('Access-Control-Allow-Origin: *');
require 'connectMySQL.php';

    class lop{
        function lop($id_class,$class_name){
            $this->id_class=$id_class;
            $this->class_name=$class_name;
        }
    }
    $query ="select*from class";
    $result =mysqli_query($connect,$query);
    $mangketqua =array();
    while($dong =mysqli_fetch_assoc($result)){
        array_push($mangketqua,new lop($dong['id_class'],$dong['class_name']));
    }
        echo json_encode($mangketqua);
    //echo json_encode($mangketqua=>array(""server_response));
?>