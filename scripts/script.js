let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
}, 2000)

function nextImage(){
  count++;
  if (count > 4){
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

window.addEventListener("scroll", function() {
  var header = document.getElementById("header");
  header.classList.toggle("header-aplicado", window.scrollY > 0);
});