;(function () {
	
	var increase_rad = $('#icrease-radius'),
		decrease_rad = $('#decrease-radius'),
		create = $('.create'),
		max_radius = 20,
		min_radius = 0,
		bg_color_input = $('#bg-color'),
		br_color_input = $('#border-color'),
		resul_area = $('#result');

		increase_rad.on('click',function(){
			var current_radius = create.css('border-radius'),
				step = $('#step').val(),
				new_radius = ( parseInt(current_radius) + parseInt(step) ); 
				create.css({'border-radius' : new_radius });
				if(new_radius > max_radius){ // проверяем пределы величины
					new_radius = max_radius
					$(this).addClass('disabled');
				}
				if( (new_radius < max_radius) && (decrease_rad.hasClass('disabled')) ){  //проверяем наличие класса у соседней кнопки
					decrease_rad.removeClass('disabled'); //удаляем класс
				}
				update_result();
		});

		decrease_rad.on('click',function(){
			var current_radius = create.css('border-radius'),
				step = $('#step').val(),
				new_radius = ( parseInt(current_radius) - parseInt(step) );
				create.css({'border-radius' : new_radius });
				if(new_radius < min_radius){ // проверяем пределы величины
					new_radius = min_radius
					$(this).addClass('disabled'); 
				}
				if( (new_radius > min_radius) && (increase_rad.hasClass('disabled')) ){ //проверяем наличие класса у соседней кнопки
					increase_rad.removeClass('disabled'); //удаляем класс
				}
				update_result();

		});
		bg_color_input.on('change',function(){
			var new_color = '#' + $(this).val();
			create.css({'background-color' : new_color });	
			update_result();
		});

		br_color_input.on('change',function(){
			var new_color = '#' + $(this).val();
			create.css({'border-color' : new_color });	
			update_result();
		});

		var update_result = function(){     // вывод результата в textarea
			var border_r = create.css('border-radius'),
				bg_color = create.css('background-color'),
				bor_color = create.css('border-color');

			resul_area.text(

					'-moz-border-radius:' +  border_r  + ';\n' + 
					'-webkit-border-radius:' +  border_r  + ';\n' + 
					'border-radius:' +  border_r  + ';\n' + 
					'background-color:' + bg_color + ';\n' + 
					'border-color:' + bor_color + ';'
				)

		}
		update_result();

})();
