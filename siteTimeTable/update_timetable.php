<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-type");
require 'connectMySQL.php';


$id_class =$_GET['id_class'];
$id_day =$_GET['id_day'];
$content =$_GET['content'];

$query ="
    update timetable
    set content='$content'
    where id_class='$id_class'and id_day='$id_day'"
;
if(mysqli_query($connect,$query)){
    //thành công
    echo "success";
}else{
    //lỗi
    echo "error";
}
?>