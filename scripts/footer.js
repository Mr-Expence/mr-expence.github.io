const footerHtml = `<footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <span class="nav__mark"><img src="/assets/Roundedfavicon/android-chrome-512x512.png"></span>
        <p>Currently learning how to code and use Unreal Engine. Creating Youtube Videos.</p>
      </div>
      <div>
        <p class="footer__heading">Explore</p>
        <div class="footer__links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/social">Social</a>
        </div>
      </div>
      <div>
        <p class="footer__heading">Connect</p>
        <div class="footer__links">
          <a href="/social">GitHub</a>
          <a href="/social">YouTube</a>
          <a href="/social">Modrinth</a>
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