var badPage = "dislike.html";
var main = "main.html";
var goodPage = "like.html";
function loadFile(file, func = null)
{
	// 1. Создаём новый объект XMLHttpRequest
	var xhr = new XMLHttpRequest();

	xhr.open('GET', file, true);
	// 3. Отсылаем запрос
	xhr.send();

	// 4. Если код ответа сервера не 200, то это ошибка
	xhr.onreadystatechange = function() 
	{ // (3)
		if (xhr.readyState != 4) return;
		if (xhr.status != 200)
		{
			// обработать ошибку
			alert( "ERROR, SUKA!!!!! " + xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
		} else {
			// вывести результат
			document.getElementById("header").innerHTML=xhr.responseText; // responseText -- текст ответа.

			if(func != null)
				func();
		}
	}
}

// this is some shit inserted here by Alex:
function dislikeShow()
{
	document.getElementById("dislike").style = "animation-name: expand; animation-duration: 1s;";//FULLSCREEN DISLIKE
	document.getElementById("like").style = "animation-name: shrink; animation-duration: 1s;";// fuck the "like"
	document.getElementById("dislike-img").style = "animation-name: DHandMove; animation-duration: 1s;";
	document.getElementById("circle1").style = "animation-name: Hide; animation-duration: 1s;";
	document.getElementById("bg").style = "animation-name: Hide; animation-duration: 1s;";
	document.getElementById("square").style = "animation-name: Hide; animation-duration: 1s;";
	setTimeout(function () {
		document.getElementById("dislike").style = "width: 100%;";
		document.getElementById("like").style = "display: none;";
		document.getElementById("dislike-img").style = "top: 2vh; left: 60vw; width: 38vw;";
		document.getElementById("circle1").style = "display: none;";
		document.getElementById("bg").style = "display: none;";
		document.getElementById("square").style = "display: none;";
		loadFile(badPage, function(){
			
			document.getElementById("disText").style = "animation-name: Show; animation-duration: 1s;";
			document.getElementById("bg").style = "animation-name: Show; animation-duration: 1s;";
			document.getElementById("back").style = "animation-name: Show; animation-duration: 1s;";
		});
	}, 1000);
}

function likeShow()
{
	document.getElementById("like").style = "animation-name: expand; animation-duration: 1s;";//LIKE
	document.getElementById("dislike").style = "animation-name: shrink; animation-duration: 1s;";//fuck dislike
	document.getElementById("circle2").style = "animation-name: Hide; animation-duration: 1s;";
	document.getElementById("bg").style = "animation-name: Hide; animation-duration: 1s;";
	document.getElementById("square").style = "animation-name: Hide; animation-duration: 1s;";
	document.getElementById("like-img").style = "animation-name: LHandMove; animation-duration: 1s;";
	setTimeout(function () {
		document.getElementById("like").style = "width: 100vw;";
		document.getElementById("dislike").style = "display: none;";// fuck dislike completely
		document.getElementById("circle2").style = "display: none;";
		document.getElementById("bg").style = "display: none;";
		document.getElementById("square").style = "display: none;";
		document.getElementById("like-img").style = "top: 2vh; left: 60vw; width: 35vw;";
		loadFile(goodPage, function(){
			
			document.getElementById("likeText").style = "animation-name: Show; animation-duration: 1s;";
			document.getElementById("bg").style = "animation-name: Show; animation-duration: 1s;";
			document.getElementById("back").style = "animation-name: Show; animation-duration: 1s;";
		});
	}, 1000);
}
