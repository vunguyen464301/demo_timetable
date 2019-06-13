<?php
header('Access-Control-Allow-Origin: *');
require 'connectMySQL.php';
$id_class =$_GET['id_class'];
$id_day =$_GET['id_day'];
    class timetable{
        function timetable($id_class,$id_day,$day_name,$content){
            $this->id_class=$id_class;
            $this->id_day=$id_day;
            $this->day_name=$day_name;
            $this->content=$content;
        }
    }
    $query ="
    SELECT a.id_class, a.id_day, day_name , content
    FROM timetable a ,day b, class c
    WHERE a.id_class=c.id_class and a.id_day=b.id_day and a.id_class='$id_class' and a.id_day='$id_day'
    ";
    $result =mysqli_query($connect,$query);
    $mangketqua =array();
    while($dong =mysqli_fetch_assoc($result)){
        array_push($mangketqua,new timetable(
            $dong['id_class'],
            $dong['id_day'],
            $dong['day_name'],
            $dong['content']));
    }
        echo json_encode($mangketqua);
    //echo json_encode($mangketqua=>array(""server_response));
?>