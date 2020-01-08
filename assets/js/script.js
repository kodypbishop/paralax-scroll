window.onload = function () {
  let empty = document.querySelector(".empty");
  let background = document.querySelector(".background");
  let left = document.querySelector(".left");
  let right = document.querySelector(".right");
  window.addEventListener("scroll", function () {

    let scrolledHeight = window.pageYOffset;
    let limit = empty.offsetTop + empty.offsetHeight;
console.log(((scrolledHeight - empty.offsetTop + (empty.offsetHeight * 10 / 8))/(empty.offsetHeight * 10 / 8 +empty.offsetHeight))*empty.offsetWidth)
    if (scrolledHeight > empty.offsetTop - (empty.offsetHeight * 10 / 8) && scrolledHeight <= limit) {
      background.style.left = "-"+(((scrolledHeight - empty.offsetTop + (empty.offsetHeight * 10 / 8))/(empty.offsetHeight * 10 / 8 +empty.offsetHeight))*empty.offsetWidth) / 5 + "px";
      left.style.left = (((scrolledHeight - empty.offsetTop + (empty.offsetHeight * 10 / 8))/(empty.offsetHeight * 10 / 8 +empty.offsetHeight))*empty.offsetWidth) / 8 + "px";
      right.style.right = (((scrolledHeight - empty.offsetTop + (empty.offsetHeight * 10 / 8))/(empty.offsetHeight * 10 / 8 +empty.offsetHeight))*empty.offsetWidth) / 6 + "px";

    } else {
      empty.style.backgroundPositionY = "0";
      left.style.left = "0";
      right.style.right = "0";
    }
  })
}
