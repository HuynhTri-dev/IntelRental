$(document).ready(function () {
  $(".interaction").click(function (e) {
    var heart = this.querySelector(".fa-heart");

    if (heart.classList.contains("fa-regular")) {
      heart.classList.replace("fa-regular", "fa-solid");
    } else if (heart.classList.contains("fa-solid")) {
      heart.classList.replace("fa-solid", "fa-regular");
    }
  });
});
