var tags = ["header", "div", "div", "p", "footer"]
var classes = ["top", "logo", "container", "parag", "bottom"]

var style = document.head.appendChild(document.createElement('style'))

style.innerHTML = `
.top{background-color: gray; width: 100px; height: 100px;}
.logo{background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIc4Bejz1rANPIpPwQGrymT18gYC0TXAcKCLIWKIuZZfGjhpIS); background-size: cover; width: 300px; height: 200px; }
.container{background-color: green; width: 100px; height: 100px;}
.parag{background-color: blue; width: 100px; height: 50px;}
.bottom{background-color: red; width: 100px; height: 100px;}
`

tags.forEach(
  function (item, index) {
     var elem = document.body.appendChild (
            document.createElement (item)
     ) 
     elem.className = this[index]
  }, classes
)