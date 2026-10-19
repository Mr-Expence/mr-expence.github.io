const footerHtml = `<footer class="footer">
  <p>© <span data-year></span> Mr_Expence. All rights reserved.</p>
  </footer>`;

document.body.insertAdjacentHTML("beforeend", footerHtml);

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});