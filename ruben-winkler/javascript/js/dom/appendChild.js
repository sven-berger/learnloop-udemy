let myArticle = document.createElement("article");
let jumbotron = document.querySelector(".jumbotron > section");

myArticle.setAttribute("class", "blogArticle");
myArticle.setAttribute("id", "1");

// Text hinzufügen mit createTextNode
myText = document.createTextNode(
  "Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet.",
);

myArticle.appendChild(myText);
jumbotron.append(myArticle);
