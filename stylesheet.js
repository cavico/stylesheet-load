/*!
* stylesheet.js by @cavico
* Copyright 2013 Camilo Vitorino da Costa
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
function stylesheet(url) {
	var id = url.split(/[/]+/).pop().replace(/\./g,'');
	if(document.getElementById(id)) return false;
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.id = id;
	link.href = url;
	document.getElementsByTagName("head")[0].appendChild(link);
}