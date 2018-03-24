var badPage = "dislike.html";
var main = "main.html";
var goodPage = "like.html";

var currentPage;

var stdTime = "0.8s";
var stdNumTime = 780;

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
			alert( "ERROR! " + xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
		} else {
			// вывести результат
			document.getElementById("header").innerHTML=xhr.responseText; // responseText -- текст ответа.
			currentPage = file;
			if(func != null)
				func();
		}
	}
}

// this is some shit inserted here by Alex:
function dislikeShow()
{
	document.getElementById("dislike").style = "animation-name: expand; animation-duration: " + stdTime + ";";//FULLSCREEN DISLIKE
	document.getElementById("like").style = "animation-name: shrink; animation-duration: " + stdTime + ";";// fuck the "like"
	document.getElementById("dislike-img").style = "animation-name: DHandMove; animation-duration: " + stdTime + ";";
	document.getElementById("circle1").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("bg").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("square").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	setTimeout(function () {
		document.getElementById("dislike").style = "width: 100%;";
		document.getElementById("like").style = "display: none;";
		document.getElementById("dislike-img").style = "top: 2vh; left: 60vw; width: 38vw;";
		document.getElementById("circle1").style = "display: none;";
		document.getElementById("bg").style = "display: none;";
		document.getElementById("square").style = "display: none;";
		loadFile(badPage, function(){
			
			document.getElementById("disText").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("bg").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("back").style = "animation-name: Show; animation-duration: " + stdTime + ";";
		});
	}, stdNumTime);
}

function likeShow()
{
	document.getElementById("like").style = "animation-name: expand; animation-duration: " + stdTime + ";";//LIKE
	document.getElementById("dislike").style = "animation-name: shrink; animation-duration: " + stdTime + ";";//fuck dislike
	document.getElementById("circle2").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("bg").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("square").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("like-img").style = "animation-name: LHandMove; animation-duration: " + stdTime + ";";
	setTimeout(function () {
		document.getElementById("like").style = "width: 100vw;";
		document.getElementById("dislike").style = "display: none;";// fuck dislike completely
		document.getElementById("circle2").style = "display: none;";
		document.getElementById("bg").style = "display: none;";
		document.getElementById("square").style = "display: none;";
		document.getElementById("like-img").style = "top: 2vh; left: 60vw; width: 35vw;";
		loadFile(goodPage, function(){
			
			document.getElementById("likeText").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("bg").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("back").style = "animation-name: Show; animation-duration: " + stdTime + ";";
		});
	}, stdNumTime);
}

function dislikeHide()
{
	document.getElementById("disText").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("bg").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("back").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("dislikeInfo").style = "animation-name: DShrink; animation-duration: " + stdTime + ";";
	document.getElementById("dislike-img").style = "animation-name: DHandMoveReverse; animation-duration: " + stdTime + ";";

	setTimeout(function () {
		document.getElementById("disText").style = "display: none;";
		document.getElementById("bg").style = "display: none;";
		document.getElementById("back").style = "display: none;";
		
		document.getElementById("dislikeInfo").style = "width: 50vw;";
		// document.getElementById("like").style = "display: none;";
		// document.getElementById("dislike-img").style = "top: 2vh; left: 60vw; width: 38vw;";
		// document.getElementById("circle1").style = "display: none;";
		// document.getElementById("bg").style = "display: none;";
		// document.getElementById("square").style = "display: none;";
		loadFile(main, function(){
			document.getElementById("like").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("circle1").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("bg").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("square").style = "animation-name: Show; animation-duration: " + stdTime + ";";
		});
	}, stdNumTime);
}

function likeHide()
{
	document.getElementById("likeText").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("bg").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("back").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
	document.getElementById("likeInfo").style = "animation-name: LShrink; animation-duration: " + stdTime + ";";
	document.getElementById("like-img-L").style = "animation-name: LHandMoveReverse; animation-duration: " + stdTime + ";";

	setTimeout(function () {
		document.getElementById("likeText").style = "display: none;";
		document.getElementById("bg").style = "display: none;";
		document.getElementById("back").style = "display: none;";
		//document.getElementById("like-img-L").style = "display: block; position: absolute; width: 32vw; height: auto; top: 6vh; left: 18vw;";
		
		document.getElementById("likeInfo").style = "margin-left:50vw; width: 50vw;";
		// document.getElementById("like").style = "display: none;";
		// document.getElementById("dislike-img").style = "top: 2vh; left: 60vw; width: 38vw;";
		// document.getElementById("circle1").style = "display: none;";
		// document.getElementById("bg").style = "display: none;";
		// document.getElementById("square").style = "display: none;";
		loadFile(main, function(){
			document.getElementById("dislike").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("circle2").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("bg").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			document.getElementById("square").style = "animation-name: Show; animation-duration: " + stdTime + ";";
		});
	}, stdNumTime);
}

function show(page)
{
	if (page == badPage)
	{
		if (currentPage == main)
			dislikeShow();
		else
		if (currentPage == goodPage)
		{
			likeHide();
			setTimeout(function(){dislikeShow();}, stdNumTime*2);
		}
		else
		{
			document.getElementById("header").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
			setTimeout(function(){
				loadFile(page);
				document.getElementById("header").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			}, stdNumTime);
		}
	}
	else
	if (page == goodPage)
	{
		if (currentPage == main)
			likeShow();
		else
		if (currentPage == badPage)
		{
			dislikeHide();
			setTimeout(function(){likeShow();}, stdNumTime*2);
		}
		else
		{
			document.getElementById("header").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
			setTimeout(function(){
				loadFile(page);
				document.getElementById("header").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			}, stdNumTime);
		}
	}
	else
	if (page == main)
	{
		if (currentPage == badPage)
			dislikeHide();
		else
		if (currentPage == goodPage)
			likeHide();
		else
		{
			document.getElementById("header").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
			setTimeout(function(){
				loadFile(page);
				document.getElementById("header").style = "animation-name: Show; animation-duration: " + stdTime + ";";
			}, stdNumTime);
		}
	}
	else
	{
		document.getElementById("header").style = "animation-name: Hide; animation-duration: " + stdTime + ";";
		setTimeout(function(){
			loadFile(page);
			document.getElementById("header").style = "animation-name: Show; animation-duration: " + stdTime + ";";
		}, stdNumTime);
	}
}
