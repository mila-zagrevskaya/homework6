var tags = [
  {
    tagTitle: "header",
    classTitle: "top",
    style: `width: 300px; height: 200px; background-color: green;`,
    event1: function(event){
      this.style.backgroundColor = "yellow"
    },
    event2: function(event){
      this.style.backgroundColor = "green"
    }
  },
  {
    tagTitle: "div",
    classTitle: "logo",
    style: `width: 300px; height: 200px; background-color: red;`,
    event1: function(event){
      this.style.backgroundColor = "yellow"
    },
    event2: function(event){
      this.style.backgroundColor = "red"
    }
  },
  {
    tagTitle: "img",
    classTitle: "pict",
    style: `width: 300px; height: 200px; border: 1px inset gold;`,
    link: "http://pngimg.com/uploads/google/google_PNG19640.png",
    event1: function(event){
      this.style.backgroundColor = "yellow"
    },
    event2: function(event){
      this.style = ` border : 1px inset gold;
                     background-color: none;
                     width: 300px; 
                     height: 200px;
                   `
    }
  },
  {
    tagTitle: "div",
    classTitle: "container",
    style: `width: 300px; height: 200px; background-color: gray;`,
    event1: function(event){
      this.style.backgroundColor = "yellow"
    },
    event2: function(event){
      this.style.backgroundColor = "gray"
    }
  },
  {
    tagTitle: "p",
    classTitle: "parag",
    style: `width: 300px; height: 200px; background-color: blue; 
            text-align: center;  color: #fff; font-size: 20px;`,
    text: "Hello",
    event1: function(event){
      this.style.backgroundColor = "yellow"
    },
    event2: function(event){
      this.style.backgroundColor = "blue"
    }
  },  
  {
    tagTitle: "footer",
    classTitle: "bottom",
    style: `width: 300px; height: 200px; background-color: violet;`,
    event1: function(event){
      this.style.backgroundColor = "yellow"
    },
    event2: function(event){
      this.style.backgroundColor = "violet"
    }
  }
]
tags.forEach(function(elem){
  var tag = document.body.appendChild(document.createElement(elem.tagTitle))
  tag.className = elem.classTitle
  tag.style = elem.style
  tag.onmouseover = elem.event1
  tag.onmouseout = elem.event2
  tag.className === 'pict' ?  (tag.src = elem.link) : null
  tag.className ===  'parag' ? (tag.innerText = elem.text) : null
})