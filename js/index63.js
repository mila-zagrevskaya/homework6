function exercise3(event){
	
	var style = document.head.appendChild(document.createElement('style'))

	style.textContent = `
		.redBack {
		    background: red!important;
		} `
	for(var elem of document.body.children){
		elem.tagName === "SCRIPT" ? null : 
			elem.classList.add('redBack')
	}
}
