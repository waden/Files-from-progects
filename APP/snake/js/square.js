function Square(row, col, course)
{
	this.body = [[row, col]];
	this.course = course;
	this.alive = true;
	this.eated = false;
	var that = this;
	this.last_course = course;

	//создаем квадрат
	this.create = function()
	{
		m1.setCell(that.body[0][0], that.body[0][1], 'empty');
	}

	this.gameover = function(){
		that.alive = false;
	}
	
	this.move = function()
	{
		//делаем копию массива
		var head = that.body[0].slice();
		
		this.eated = false;
	
		//cверяем местоположение головы змеи с размером поля, если врезалась геймовер
		switch(that.course)
		{
			case 'right':
				if(head[1] < 20)
					{
						head[1] ++;
						that.last_cource = 'right';
					}
					else
						that.gameover();
					break;
			case 'left':
					if(head[1] > 1)
					{
						head[1] --;
						that.last_cource = 'left';
					}
					else
						that.gameover();
					break;
			case 'down':
					if(head[0]  < 20)
					{
						head[0] ++;
						that.last_cource = 'down';
					}
					else
						that.gameover();
					break;
			case 'up':
					if(head[0] > 1)
					{
						head[0] -- ;
						that.last_cource = 'up';
					}
					else
						that.gameover();
					break;
		}
		
		//добавляем элемент в начало массива
		that.body.unshift(head);

		//получаем значение нового местоположения змейки
		switch(m1.getCell(that.body[0][0],that.body[0][1]))
		{
			//если врезались в змейку
			case 'snake':
			that.gameover();
			break;
			//если съели фрукт
			case 'fruit':
			that.eated = true;
			break;
			default:
				//если все ок, удаляем цвет с хвоста змеи
				var tail = that.body.pop();
				//добавляем ему цвет обычной ячейки
				m1.setCell(tail[0], tail[1], 'empty');
			break;
		}
		//задаем новое местоположение змеи
		m1.setCell(that.body[0][0], that.body[0][1], 'snake');
	}
}