const shareButton = document.getElementById("shareButton");
const shareDiv = document.getElementById("share-div");

shareButton.addEventListener("click", (show) => {
  shareDiv.classList.toggle("hidden");
});
