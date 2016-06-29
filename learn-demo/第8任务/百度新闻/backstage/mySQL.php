<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
  	mysql_select_db("phplesson", $con);
  	// $sql ="INSERT INTO `news`(`title`, `simg`, `content`, `addtime`) VALUES ('哈哈','图片地址','新闻','2016-05-20')";
  	// $sql ="DELETE FROM `news` WHERE `id`=1";
  	$sql = "UPDATE `news` SET `title`='呵呵呵',`simg`='更改的img' WHERE `id`=2";
  	mysql_query("set names 'utf8'");
	$result =mysql_query($sql,$con);
	if (!$result) {
		die('Error:'.mysql_error());
	}else{
		echo "update success";
	  }
	}
mysql_close($con);

?>