<?php
	$pattern="/^[0-9\-\+]/";
	$error = false;
	$succes = false;
	
	if(count($_POST) > 0){

		if((!isset($_POST['name'])) || (strlen(trim($_POST['name'])) < 2)){
			$error['name'] = true;
		}
		$data['name'] = mb_convert_case(ucfirst($_POST['name']), MB_CASE_TITLE, 'UTF-8');
	
		if((!isset($_POST['email'])) || (strlen(trim($_POST['email'])) < 2) || (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))){
			$error['email'] = true;
		}
		$data['email'] = $_POST['email'];

		if((!isset($_POST['phone'])) || (strlen(trim($_POST['phone']) < 5)) || (!preg_match($pattern, $_POST['phone']))){
			$error['phone'] = true;
		}
		$data['phone'] = $_POST['phone'];

		if($error !== true){
			$data = implode($data,' | ');
			$f = fopen('apps.txt','a+');
			fputs($f, "$data \n");
			fclose($f);
			unset($name);
			$succes = true;
			$message = false;
		}
	}
	else
	$message = true;
?>
	<!DOCTYPE html>	
	<html lang="en">
		<head>
			<meta charset="UTF-8">	
			<title>Форма для Web Junior</title>
			<link rel="stylesheet" href="css/bootstrap.min.css">
			<link rel="stylesheet" href="css/style.css">
		</head>
		<body>
			<?if($message):?><div class="alert alert-success" role="alert">Заполните и отправьте, пожалуйста, данную форму!</div><?endif;?>
			<form role="form" action="#" method="post">
				<div class="form-group">
					<label for="exampleInputPassword1">Имя</label>
					<?if($error['name']):?><span class="error">Заполните правильно поле имя</span><?endif;?>
					<input type="text" class="form-control" id="name" name="name" placeholder="Введите Ваше имя" value="<? if(isset($data['name'])){echo $data['name'];}?>">
				</div>
				<div class="form-group">
					<label for="Email">Email</label>
					<?if($error['email']):?><span class="error">Заполните правильно поле email</span><?endif;?>
					<input type="text" class="form-control" id="Email" name="email" placeholder="Введите Вашу электронную почту" value="<?if(isset($data['email'])){echo $data['email'];}?>">
				</div>
				<div class="form-group">
					<label for="phone">Телефон</label>
					<?if($error['phone']):?><span class="error">Заполните правильно поле телефон</span><?endif;?>
					<input type="text" class="form-control" id="phone" name="phone" placeholder="Введите Ваш телефон" value="<?if(isset($data['phone'])){echo $data['phone'];}?>">
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-default">Отправить!</button>
				</div>
			</form>
			<?if($succes):?><div class="alert alert-success" role="alert">Ваши данные успешно сохранены!</div><?endif;?>
		</body>
	</html>
	