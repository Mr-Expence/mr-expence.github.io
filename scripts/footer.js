const footerHtml = `<footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <span class="nav__mark"><img src="/assets/Roundedfavicon/android-chrome-512x512.png"></span>
      </div>
      <div>
        <p class="footer__heading">Pages</p>
        <div class="footer__links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
        </div>
      </div>
    </div>
    <div class="container footer__bottom">
      <p>© <span data-year></span> Mr_Expence. All rights reserved.</p>
      </div>
    </div>
  </footer>`;

document.body.insertAdjacentHTML("beforeend", footerHtml);

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});