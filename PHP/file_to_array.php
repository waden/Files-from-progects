<?php

  header('Content-Type: text/html; charset=utf-8');
  ini_set("auto_detect_line_endings", true);
  $tpl = 'citatu';
  $par;

  //file to array()
  $handle = fopen("citatu1.txt", "r");

  while (!feof($handle)) {
      $buffer = fgets($handle, 4096);
      $one = explode("|",$buffer);
      $cit[] = array($one[0] => $one[1]);
  }

  fclose($handle);

  //Print array()
  		
  $b = count($cit);

  for($i = 1 ; $i < $b ; $i++){
    foreach($cit[$i] as $k => $v) {
	    	echo '<li>'.$k.'</li>';
	    	echo '<li>'.$v.'</li>';
        echo'<br>';
    }
  }
?>