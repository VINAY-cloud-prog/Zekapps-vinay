document.addEventListener("DOMContentLoaded", () => {
  fetch("common/header.html")
    .then(r => r.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
      // Update cart count after header is injected
      const count = sessionStorage.getItem("cartCount") || "0";
      const badge = document.getElementById("cartCount");
      if (badge) badge.textContent = count;
    });

  fetch("common/footer.html")
    .then(r => r.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });
});