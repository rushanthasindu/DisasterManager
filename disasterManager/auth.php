<?php
session_start();
$userName=$_REQUEST['email'];
$pass=$_REQUEST['password'];

if ($userName=="rushan" && $pass="rushan") header("Location:../adminPanel");
else
{
include "config.php";
$sql = "SELECT * FROM `user` WHERE `email` = '$userName' AND `password` = '$pass'  ;";
$result = $conn->query($sql);

echo $sql;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $role=$row["role"];
        echo $role;
        $id=$row["uId"];
         $_SESSION["id"] = $id;
         $_SESSION["role"] = $role;
         if ($role=="DRIVER") header("Location:../home");
         if ($role=="POLICE") header("Location:../policePanel");
         if ($role=="RDA") header("Location:../rdaPanel");
         if ($role=="INSURENCE") header("Location:../insurencePanel");
        exit;
    }
} else {
 header("Location:../index.php"); 
 exit;
}
}
$conn->close()

?>