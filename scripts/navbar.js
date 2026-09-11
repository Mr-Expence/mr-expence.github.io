const html = `<header class="nav">
    <div class="container nav__inner">
      <a class="nav__brand" href="/">
        <span class="nav__mark"><img src="/assets/Roundedfavicon/android-chrome-512x512.png"></span>
        Mr_Expence
      </a>
      <nav class="nav__links" aria-label="Primary">
        <a class="nav__link" href="/">Home</a>
        <a class="nav__link" href="/projects">Projects</a>
        <a class="nav__link" href="/social">Social</a>
        <a class="nav__link" href="/personal-links">Personal Links</a>
      </nav>
      <label class="nav__search">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.6" />
          <path d="m21 21-4.3-4.3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
        <input type="search" placeholder="Search projects...">
      </label>
    </div>
    <div class="container">
      <nav class="nav__mobile" data-mobile-nav aria-label="Mobile">
        <a class="nav__link" href="/">Home</a>
        <a class="nav__link" href="/projects">Projects</a>
        <a class="nav__link" href="/social">Social</a>
        <a class="nav__link" href="/personal-links">Personal Links</a>
      </nav>
    </div>
  </header>`;

document.body.insertAdjacentHTML("afterbegin", html);

function normalizePath(path) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}

function markCurrentNavLink() {
  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".nav__link").forEach((link) => {
    const linkPath = normalizePath(new URL(link.href).pathname);

    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

markCurrentNavLink();
