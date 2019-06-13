<?php
header("Access-Control-Allow-Origin: *");
require 'connectMySQL.php';


$class_name =$_GET['class_name'];

$query ="insert into class values ('','$class_name')";
if(mysqli_query($connect,$query)){
    //thành công
    echo "success";
}else{
    //lỗi
    echo "error";
}
?>