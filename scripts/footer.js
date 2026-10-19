const footerHtml = `<footer class="footer">
    <div class="container footer__content">
      <a class="footer__brand" href="/" aria-label="Mr_Expence home">
        <span class="nav__mark"><img src="/assets/Roundedfavicon/android-chrome-512x512.png" alt=""></span>
        <span>Mr_Expence</span>
      </a>
      <nav class="footer__links" aria-label="Footer">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
      </nav>
    </div>
    <div class="container footer__bottom">
      <p>© <span data-year></span> Mr_Expence. All rights reserved.</p>
    </div>
  </footer>`;

document.body.insertAdjacentHTML("beforeend", footerHtml);

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});