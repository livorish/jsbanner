
var counter = 0;

var images =
[
  "img/pic1.jpg",
  "img/pic2.jpg",
  "img/pic3.jpg",
  "img/pic4.jpg",
  "img/pic5.jpg"
];

var links =
[
  "http://",
  "http://",
  "http://",
  "http://",
  "http://"
];

function counterFunction() {
  counter++;

  if(counter > 4){
    counter = 0;
  }
  var image = document.getElementById("banner");
  image.src = images[counter];

  var link = document.getElementById("bannerlink");
  link.href = links[counter];

}

window.onload = function() {
  setInterval(counterFunction, 3000);
}
