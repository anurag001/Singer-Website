var prev;
var i = 0;

function left() {
	var x = document.getElementById('track').getAttribute('src');
	var y = document.getElementById('track');

		if (x.match('burn')){
		    player.src = "./songs/goodness gracious.mp3";
		    burn.style.background = "#222";
		    gracious.style.background = "rgb(223, 32, 8)";
		    y.src = "./songs/goodness gracious.mp3";
			document.getElementById("cover").src="./images/cover/goodness.jpg";
		}

		else if(x.match('love')){
			player.src = "./songs/burn.mp3";
			lmlyd.style.background = "#222";
			burn.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/burn.mp3";
			document.getElementById("cover").src="./images/cover/burn.jpg";
		}

		else if(x.match('heart')){
			player.src = "./songs/love me like you do.mp3";
			beatheart.style.background = "#222";
			lmlyd.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/love me like you do.mp3";
			document.getElementById("cover").src="./images/cover/love.jpg";
		}

		else if(x.match('army')){
			player.src = "./songs/beating heart.mp3";
			army.style.background = "#222";
			beatheart.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/beating heart.mp3";
			document.getElementById("cover").src="./images/cover/beating.jpg";
		}

		else{
			player.src = "./songs/army.mp3";
			gracious.style.background = "#222";
			army.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/army.mp3";
			document.getElementById("cover").src="./images/cover/army.jpg";
		}
}


function right() {
	var x = document.getElementById('track').getAttribute('src');
	var y = document.getElementById('track');

		if (x.match('burn')){
		    player.src = "./songs/love me like you do.mp3";
		    burn.style.background = "#222";
		    lmlyd.style.background = "rgb(223, 32, 8)";
		    y.src = "./songs/love me like you do.mp3";
			document.getElementById("cover").src="./images/cover/love.jpg";
		}

		else if(x.match('love')){
			player.src = "./songs/beating heart.mp3";
			lmlyd.style.background = "#222";
			beatheart.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/beating heart.mp3";
			document.getElementById("cover").src="./images/cover/beating.jpg";
		}

		else if(x.match('heart')){
			player.src = "./songs/army.mp3";
			beatheart.style.background = "#222";
			army.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/army.mp3";
			document.getElementById("cover").src="./images/cover/army.jpg";			
		}

		else if(x.match('army')){
			player.src = "./songs/goodness gracious.mp3";
			army.style.background = "#222";
			gracious.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/goodness gracious.mp3";
			document.getElementById("cover").src="./images/cover/goodness.jpg";
		}

		else{
			player.src = "./songs/burn.mp3";
			gracious.style.background = "#222";
			burn.style.background = "rgb(223, 32, 8)";
			y.src = "./songs/burn.mp3";
			document.getElementById("cover").src="./images/cover/burn.jpg";
		}
}

