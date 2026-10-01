document.addEventListener("click", function (event) {
  const img = event.target.closest(".post-content img, .page-content img");
  if (!img) return;
  if (img.dataset.zoomed === "true") {
    img.style.maxWidth = "";
    img.dataset.zoomed = "false";
  } else {
    img.style.maxWidth = "none";
    img.style.width = "min(1100px, 95vw)";
    img.style.marginLeft = "50%";
    img.style.transform = "translateX(-50%)";
    img.dataset.zoomed = "true";
  }
});
