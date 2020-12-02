
<?php
  $name = $_POST['name'];
  $phone = $_POST['ph'];
  $subject=$_POST['query'];
  mail("yasicarajesh@gmail.com",$name,$phone,$subject);
?>