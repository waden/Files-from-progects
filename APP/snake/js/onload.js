$(document).ready(function(){

	var timer ='',
		point = 0,
		name ='';

	m1 = new Matrix('matrix1', 20, 20);
	m1.create();

	var square = new Square(1, 2, 'right');
	var fruit = new Fruit();
	$('#point').text(point);

	start  = function(level){
		// обработка уровня, запуск змеи, создание фрукта
		switch (level)
				{
				case 'Easy':
					timer = setInterval(gameplay, 500);
					level = 'Easy';
					break;
				case 'Medium':
					timer = setInterval(gameplay, 300);
					level = 'Med';
					break;
				case 'Hard':
					alert('msg');
					timer = setInterval(gameplay, 150);
					level = 'Hard';
					break;
				}
		square.create();
		fruit.create();	
	}


	gameplay = function()
	{	
		if(square.alive)
		{	
			//если змея ест, увеличиваем счет создаем новый фрукт
			if(square.eated) 
			{

				point ++; 
				$('#point').text(point);
				var fruit = new Fruit();
				fruit.create();
			}
			
			square.move();
		}	
		else
		{
			//выключаем змею
			clearInterval(timer);
			$('.on').effect('bounce','slow');

			//спрашиваем имя (модальное окно)
			$( "#dialog-modal2" ).dialog({
				dialogClass: "no-close",
				width: 320,
				height: 200,
				draggable: false,
				show:'scale',
				modal: true,
				title:'Спасибо за игру!'
	    	});
	    	//сохраняем результат в файл, перезагружаем страницу
	    	$('#save_result').click(function(){
	    		name = $('#name').val();
	    		var results = {name:name, level:level ,point:point};
				$.post("php/add.php",results);
				$( "#dialog-modal2" ).dialog('close');
				window.location.reload();

	    	});
		}
	}
	
	var course = square.last_course;

	//при нажатии на стрелки меняем курс змеи 
	document.onkeydown = function(a)
	{
		var event = a || window.event;
		var keyCode = event.keyCode || event.which;
		
		switch(keyCode)
		{
			case 37:
				if(course != 'rigth');
				square.course = 'left';
				break;
				
			case 38:
			if(course != 'down');
				square.course = 'up';
				break;
				
			case 40:
			if(course != 'up');
				square.course = 'down';
				break;
				
			case 39:
			if(course != 'left');
				square.course = 'right';
				break;
		}
	}

	//Нажатие на кнопку "новая игра"
	$('#new_game').click(function(){
	 	$( "#dialog-modal" ).dialog({
			width: 420,
			height: 250,
			draggable: false,
			show:'scale',
			modal: true,
			title:'Выберите уровень сложности:'
    	});
    	$(function(){
			$("#radio").buttonset();
		});
		$(function(){
			$("#submit").button();
		});

		//нажатие на кнопку "старт"
		$("#submit").click(function(){
				level = $('input[type="radio"]:checked').attr('level');
				start(level);
				$( "#dialog-modal" ).dialog('close');
				return level;
		});	
	 });
	//при клике на кнопку выводим результаты
	$('#show_result').click(function(){
		//ajax запрос в файл php
			$('.results').load('php/get.php?result=1');
		$('.results').toggle("fold",1000);
	});
});