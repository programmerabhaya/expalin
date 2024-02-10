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
