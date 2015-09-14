function Matrix(containerId, rows, cols)
{
	// Генерация поля для змеи

	this.containerId = containerId;
	this.rows = rows;
	this.cols = cols;

	this.create = function()
	{
		var matrix = $('#'+ this.containerId);
		var n = this.rows * this.cols;	
		
		$(matrix).html('');
		
		for (var i = 0; i < n; i++)
		{
			var div = document.createElement('div');
			$(div).addClass('cell');
			$(matrix).append(div);
		}
		$('<div class="results center"><hr></div>').appendTo('#matrix1'),
		$('<div id="head_point">Ваш счет:</div>').appendTo('#matrix1');
		$('<div id="point"></div>').appendTo('#matrix1');
		
	}
	
	//получаем ячейку, на которую движется змея
	this.getCell = function(row, col)
	{	
		var matrix = document.getElementById(this.containerId)
		var place = (row - 1) * this.cols + col - 1;
		
		switch(matrix.children[place].className)
		{
		case 'cell on':
			return 'snake';
			break;
		case 'cell fruit':
			return 'fruit';
			break;
		case 'cell':
			return 'empty';
			break;
		}
	}
	
	//закрашиваем и снимаем окрас у нужных ячеек (фрукты, змея)
	this.setCell = function(row, col, val)
	{
		
		var ind = (row - 1) * this.cols + col - 1;
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[ind];	
		
		switch(val)
		{
		case 'snake':
			classname ='cell on';
			break;
		case 'fruit':
			classname = 'cell fruit';
			break;
		case 'empty':
			classname = 'cell'
			break;
		}
		cell.className = classname;
	}	
}
		
