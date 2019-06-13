<?php
header('Access-Control-Allow-Origin: *');
require 'connectMySQL.php';

    class day{
        function day($id_day,$day_name){
            $this->id_day=$id_day;
            $this->day_name=$day_name;
        }
    }
    $query ="select*from day";
    $result =mysqli_query($connect,$query);
    $mangketqua =array();
    while($dong =mysqli_fetch_assoc($result)){
        array_push($mangketqua,new day($dong['id_day'],$dong['day_name']));
    }
        echo json_encode($mangketqua);
    //echo json_encode($mangketqua=>array(""server_response));
?>