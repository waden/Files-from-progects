function Fruit()
{
	//Генерация нового фрукта для змейки
	var min = 1;
	var max = 20;
	
	var rand1 = min - 0.5 + Math.random()*(max-min+1)
	rand1 = Math.round(rand1);
	var rand2 = min - 0.7 + Math.random()*(max-min+2)
	rand2= Math.round(rand2);
	
	//создание нового фрукта на поле
	this.create = function()
	{	
		 while(m1.getCell(rand1, rand2) === 'snake')
			{
			rand1 = min - 0.5 + Math.random()*(max-min+1)
			rand1 = Math.round(rand1);
			rand2 = min - 0.7 + Math.random()*(max-min+2)
			rand2 = Math.round(rand2);
			} 
	
			m1.setCell(rand1, rand2, 'fruit');
	}
}