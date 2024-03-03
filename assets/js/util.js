function myFunction() {
  var copyText = "hiran.v@gmail.com";
  navigator.clipboard.writeText(copyText);
}
window.onload = function () {
  document
    .getElementById("copyEmailButton")
    .addEventListener("click", function () {
      var tooltipText = document.getElementById("tooltipText");
      // tooltipText.style.display = "inline"; // Show the tooltip
      tooltipText.style.opacity = "1";
      setTimeout(function () {
        tooltipText.style.opacity = "0";
        // tooltipText.style.display = "none";
      }, 2000);
    });
};

