<?php

//  php 中
//  array()函数声明的数组的方式
//  array([mixed...]) 参数mixed的语法为key=>value

	$users = array('admin'=>123456,'test'=>654321);
	$name = $_GET['name'];

// 判断键值对键名是否存在于数组中

	$flag = array_key_exists($name,$users);

	if($flag){
		echo "用户已存在";
	}else{
		echo "用户名可用";
	}


