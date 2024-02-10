document.addEventListener("DOMContentLoaded", function () {
  // Fetch images from images.html
  fetch("images.html")
    .then((response) => response.text())
    .then((html) => {
      // Create a temporary div to parse the HTML content
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Append images to the .photos container
      var imagesContainer = document.querySelector(".photos");
      var images = tempDiv.querySelectorAll(".photos img");
      images.forEach((image) => {
        imagesContainer.appendChild(image);
      });
    })
    .catch((error) => console.error("Error fetching images:", error));

  // Add event listener to the download button
  document
    .getElementById("downloadButton")
    .addEventListener("click", function () {
      var images = document.querySelectorAll(".photos img");
      images.forEach(function (image) {
        var link = document.createElement("a");
        link.href = image.src;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });
});
