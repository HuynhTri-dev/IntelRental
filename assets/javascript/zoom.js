$(document).ready(function () {
  $(".sectionWrapper__homeList__wrapper").click(function (e) {
    var imageZoomLevel = 2;
    var scope = this.querySelector(".scopeImage");
    var imageWrapper = this.querySelector(
      ".sectionWrapper__homeList__imageHouse"
    );

    var img = imageWrapper.querySelector("img");
    const src = img.getAttribute("src");

    scope.style.background = `url(${src})`;

    if (scope.style.display === "none") {
      scope.style.display = "block";
    } else {
      scope.style.display = "none";
    }

    imageWrapper.addEventListener("mousemove", function (e) {
      // Tọa độ của chuột trong ảnh
      let x = e.clientX - imageWrapper.offsetLeft;
      let y = e.clientY - imageWrapper.offsetTop;
      // Tọa độ của ảnh trong web
      var imgTop = img.offsetHeight;
      var imgLeft = img.offsetWidth;

      scope.style.backgroundSize =
        imgLeft * imageZoomLevel + "px " + (imgTop * imageZoomLevel + "px");

      scope.style.left = x + "px";
      scope.style.top = y + "px";

      let scopeX = x / (imgLeft / 100) + "%";
      let scopeY = y / (imgTop / 100) + "%";
      scope.style.backgroundPositionX = scopeX;
      scope.style.backgroundPositionY = scopeY;
    });

    imageWrapper.addEventListener("mouseleave", function () {
      scope.style.display = "none";
    });
  });
});
