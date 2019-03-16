function exercise1 (event) {

	var tags = ["header", "div", "div", "p", "footer"]
	var classes = ["top", "pict", "container", "parag", "bottom"]
	var style = document.head.appendChild(document.createElement('style'))
	style.innerHTML = `
		.top, .pict, .container, .parag, .bottom {
      		height: 100px;
      		width: 95%;
      		padding: 10px;
      		margin: 5px auto;
  		}
  		.top{background-color: yellow;}
		.pict{background-color: #ff0248; }
		.container{background-color: green;}
		.parag{background-color: blue;}
		.bottom{background-color: violet;}
		.result {background-color: #2a5ca1;}
		`

	tags.forEach(
	  function (item, index) {
	     var elem = document.querySelector(".result1").appendChild (
            document.createElement (item)
	     ) 
	     elem.className = this[index]
	  }, classes
	)
}




