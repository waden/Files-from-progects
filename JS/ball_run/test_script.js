window.onload = function(){

	var d = document;
	var ball = d.getElementById('main');

	ball.onclick = function(){

		var ml = 0;

		moveup = function() {
			if(ml <= 300){
				ml++;
				ball.style.marginLeft = ml + 'px';
			}
			else{
				clearInterval(move);
				var move = setInterval(moveback,10);
			}
		}

		moveback = function(){
			if(ml >= 0){
				ml--;
				ball.style.marginLeft = ml + 'px';
			}
			else{
				clearInterval(move);
				var move = setInterval(moveup,10);
			}
		}

		var move = setInterval(moveup,10);

		ball.onclick = function(){
			window.location.reload();
		}

		
	}


};
    



		
		
