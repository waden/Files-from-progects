;(function () {

	var app = {
		initialize: function() {
			this.set_up_listeners();
			this.update_result();
		},
		set_up_listeners: function(){
			//изменение радиуса
			$('#icrease-radius').on('click', $.proxy(this.increase_rad, this))
			$('#decrease-radius').on('click', $.proxy(this.decrease_rad, this))
			//изменение цвета
			$('#bg-color').on('change', $.proxy(this.bg_color_input, this))
			$('#border-color').on('change', $.proxy(this.br_color_input, this))
		},
		create :$('.create'),
		max_radius: 20,
		min_radius:  0,
 
		increase_rad: function(){
			var current_radius = this.create.css('border-radius'),
				step = $('#step').val(),
				new_radius = ( parseInt(current_radius) + parseInt(step) ); 
				this.create.css({'border-radius' : new_radius });
				if(new_radius > this.max_radius){ // проверяем пределы величины
					new_radius = this.max_radius
					$('#icrease-radius').addClass('disabled');
				}
				if( (new_radius < this.max_radius) && ($('#decrease-radius').hasClass('disabled')) ){  //проверяем наличие класса у соседней кнопки
					this.decrease_rad.removeClass('disabled'); //удаляем класс
				}
				this.update_result();
		},

		decrease_rad: function(){
			var current_radius = this.create.css('border-radius'),
				step = $('#step').val(),
				new_radius = ( parseInt(current_radius) - parseInt(step) );
				this.create.css({'border-radius' : new_radius });
				if(new_radius < this.min_radius){ // проверяем пределы величины
				 	new_radius = this.min_radius
					$('#decrease-radius').addClass('disabled'); 
				}
				if( (new_radius > this.min_radius) && ($('#icrease-radius').hasClass('disabled')) ){ //проверяем наличие класса у соседней кнопки
					this.increase_rad.removeClass('disabled'); //удаляем класс
				}
				this.update_result();

		},
		bg_color_input: function(){
			var new_color = '#' + $('#bg-color').val();
			this.create.css({'background-color' : new_color });	
			this.update_result();
		},

		br_color_input: function(){
			var new_color = '#' + $('#border-color').val();
			this.create.css({'border-color' : new_color });	
			this.update_result();
		},
		update_result: function(){     // вывод результата в textarea
			var border_r = this.create.css('border-radius'),
				bg_color = this.create.css('background-color'),
				bor_color = this.create.css('border-color'),
				resul_area = $('#result');

			resul_area.text(

					'-moz-border-radius:' +  border_r  + ';\n' + 
					'-webkit-border-radius:' +  border_r  + ';\n' + 
					'border-radius:' +  border_r  + ';\n' + 
					'background-color:' + bg_color + ';\n' + 
					'border-color:' + bor_color + ';'
				)

		}
	}
	app.initialize();

})();
