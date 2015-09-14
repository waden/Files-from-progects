<?php
	
	//считываем файл в строку
	$results = file_get_contents('results.txt');

	//разрываем строку в массив по "|"
	$data = explode('|', $results);

	//сортируем в обратном порядке
	 $revars_data = array_reverse($data);

	//выводим последние 5 результатов
	$size = count ($revars_data);

	if ($size < 6){
		for($i=0 ; $i < $size; $i++){
		echo $revars_data[$i].'<br>';
		}
	}
	else{
		for($i=0 ; $i < 6; $i++){
		echo $revars_data[$i].'<br>';
		}
	}
	
	
?>

