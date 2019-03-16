function exercise2 (event) {

  var tags = [
      {
        name: 'header',
        attrs: {
          className: 'top',
          innerText: 'Header',
          }
      },
      {
        name: 'div',
        attrs: {
          className: 'container',
          innerText: 'Good afternoon',
          innerText: 'Блочный элемент'
        }
      },
      {
        name: 'img',
        attrs: {
          className:"picture",
          src: 'images/google.png',
        }
      },
      {
        name: 'p',
        attrs: {
          className: 'parag',
          innerText: 'Абзац текста',
        }
      },
      {
        name: 'footer',
        attrs: {
          className: 'bottom',
          innerText: 'Footer'
        }
      }
  ]

  var style = document.head.appendChild(
    document.createElement('style')
  )
  style.textContent = `
    .bottom,.parag,.picture,.container,.top {
        height: 100px;
        width: 95%;
        padding: 10px;
        margin: 5px auto;
    }
    .picture {
        width: 300px;
    }
    .bottom {
        background-color: violet;
    }
    .parag {
        background-color: blue;
    }
    .container {
        background-color: green;
    }
    .top {
        background-color: yellow;
    }
  `

  function clickHandler(event){
    function randomColor(){
      return Math.round(Math.random() * 255)
    }
    event.target.style.color = `rgb(${randomColor()},${randomColor()},${randomColor()})`
  }

  for(var tag of tags){
     var elem = document.querySelector(".result2").appendChild(
        document.createElement(`${tag.name}`)
    )
    for(var attr in tag.attrs)
      elem[attr] = tag.attrs[attr]
      elem.onclick = function (event){
      clickHandler(event)
      }
  }

}