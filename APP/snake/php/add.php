<?php

// записываем в файл результаты игры
$name = $_POST['name'];
$complication = $_POST['level'];
$score = $_POST['point'];

$f = fopen('results.txt', 'a+');
fwrite($f, $name . ":". $complication .":" . $score . "|");
fclose($f);


