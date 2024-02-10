var facebookButton = document.getElementById("facebookButton");
var instagramButton = document.getElementById("instagramButton");

// Add click event listeners to the buttons
facebookButton.addEventListener("click", function () {
  // Redirect to the Facebook profile when the Facebook button is clicked
  window.location.href =
    "https://www.facebook.com/profile.php?id=100082898430495";
});

instagramButton.addEventListener("click", function () {
  // Redirect to the Instagram profile when the Instagram button is clicked
  window.location.href = "https://www.instagram.com/sujitapokhrel112/";
});

document.getElementById("download-all").addEventListener("click", function () {
  var assetLinks = document.getElementsByClassName("asset-link");
  for (var i = 0; i < assetLinks.length; i++) {
    var link = assetLinks[i];
    var url = link.getAttribute("href");
    var fileName = url.substring(url.lastIndexOf("/") + 1);
    var anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
  // Show asset links after downloading
  for (var i = 0; i < assetLinks.length; i++) {
    assetLinks[i].style.display = "inline"; // Show each asset link
  }
  alert("You have sucessfully downloaded images go and visit your gallery");
});
