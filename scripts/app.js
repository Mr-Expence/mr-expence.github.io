const FALLBACK_PROJECTS = [
  {
      "id": "flaming-swords",
      "title": "Flaming Swords",
      "category": "packs",
      "categoryLabel": "Resource Pack",
      "year": "2025",
      "index": "01",
      "description": "Makes the Fire Aspect Enchantment show flames",
      "details": "",
      "tags": ["Minecraft", "Resource Pack", "Vanilla"],
      "hiddenTags": ["Enchantments", "Animation", "Swords", "Fire", "Weapons", "Spears", "Maces", "Flames"],
      "stats": { "downloads": "120k", "likes": "48" },
      "featured": true,
      "link": "/projects/flaming-swords",
      "github": "https://github.com/Mr-Expence/Flaming-Swords",
      "download": "https://modrinth.com/resourcepack/flaming-swords",
      "logo": "/assets/flaming-swords/pack.png",
      "banner": "/assets/flaming-swords/Flaming_Swords_Banner_Blended.png",
      "show": true
    },
    {
      "id": "shulker-ui",
      "title": "Shulker UI",
      "category": "packs",
      "categoryLabel": "Resource Pack",
      "year": "2025",
      "index": "02",
      "description": "Makes the Shulker Box UI look nicer",
      "details": "",
      "tags": ["Minecraft", "Resource Pack", "Modded"],
      "hiddenTags": ["UI", "Shulker", "Shulker Boxes", "Inventory", "Colourful", "Colorful"],
      "stats": { "downloads": "19", "likes": "21" },
      "featured": true,
      "link": "/projects/shulker-ui",
      "github": "https://github.com/Mr-Expence/Shulker-UI",
      "download": "https://modrinth.com/resourcepack/shulker-ui",
      "logo": "/assets/shulker-ui/pack.png",
      "banner": "/assets/shulker-ui/Shulker_Ui_Banner.png",
      "show": true
    },
    {
      "id": "mr_expences-vanilla-pvp-overlay",
      "title": "Mr_Expence's PvP Overlay",
      "category": "packs",
      "categoryLabel": "Resource Pack",
      "year": "2025",
      "index": "03",
      "description": "My custom vanilla Pvp Overlay for Minecraft with blue cobwebs and other features",
      "details": "",
      "tags": ["Minecraft", "Resource Pack", "Vanilla"],
      "hiddenTags": ["PvP", "Weapons", "Simple", "Enchantments"],
      "stats": { "downloads": "4.5k", "likes": "3" },
      "featured": true,
      "link": "/projects/mr_expences-vanilla-pvp-overlay",
      "github": "https://github.com/Mr-Expence/Mr_Expence-s-PvP-Overlay",
      "download": "https://modrinth.com/resourcepack/mr_expences-pvp-overlay",
      "logo": "/assets/mr_expences-vanilla-pvp-overlay/pack.png",
      "banner": "/assets/mr_expences-vanilla-pvp-overlay/Pvp_Overlay_Banner.png",
      "show": true
    },
    {
      "id": "bare-bones-buttons",
      "title": "Bare Bones Buttons",
      "category": "packs",
      "categoryLabel": "Resource Pack",
      "year": "2025",
      "index": "04",
      "description": "Add the Bare Bone Buttons to the game and nothing else",
      "details": "",
      "tags": ["Minecraft", "Resource Pack", "Vanilla"],
      "hiddenTags": ["GUI", "Simplistic"],
      "stats": { "downloads": "1.2k", "likes": "3" },
      "featured": true,
      "link": "/projects/bare-bones-buttons",
      "github": "https://github.com/Mr-Expence/Bare-Bones-Buttons",
      "download": "https://modrinth.com/resourcepack/bare-bones-buttons",
      "logo": "/assets/bare-bones-buttons/pack.png",
      "banner": "/assets/bare-bones-buttons/Bare_Bone_Buttons_Banner.png",
      "show": false
    },
    {
      "id": "cosmetics",
      "title": "Cosmetics+",
      "category": "packs",
      "categoryLabel": "Resource Pack",
      "year": "2026",
      "index": "05",
      "description": "Adds custom cosmetic models to the game",
      "details": "",
      "tags": ["Minecraft", "Resource Pack", "Vanilla"],
      "hiddenTags": ["Cosmetics", "Simplistic", "Alpha", "Datapack"],
      "stats": { "downloads": "403", "likes": "3" },
      "featured": false,
      "link": "/projects/cosmetics",
      "github": "https://modrinth.com/resourcepack/cosmetics+",
      "download": "https://modrinth.com/resourcepack/cosmetics+",
      "logo": "/assets/cosmetics/pack.png",
      "banner": "/assets/cosmetics/Cosmetics_Banner.png",
      "show": true
    }
];

function initMobileNav() {
  const menuBtn = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  if (!menuBtn || !mobileNav) return;
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

function initFooterYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function isVisible(project) {
  return project.show !== false;
}

async function loadProjects() {
  try {
    const response = await fetch('/json/data.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    const projects = Array.isArray(data.projects) ? data.projects : FALLBACK_PROJECTS;
    return projects.filter(isVisible);
  } catch (error) {
    return FALLBACK_PROJECTS.filter(isVisible);
  }
}

const ARROW_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const DOWNLOAD_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const STAR_ICON = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5 14.6 9l6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.4 9.9l6-.9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';

function renderCard(project) {
  return `
    <article class="card card--category-${project.category}">
      <div class="card__thumb">
        <img src="${project.banner}" alt="${project.title} header image" loading="lazy">
      </div>
      <img class="card__avatar" src="${project.logo}" alt="${project.title} logo">
      <div class="card__body">
        <h3 class="title-l">${project.title}</h3>
        <div class="card__meta">
          <span>${project.categoryLabel}</span>
          <span class="dot"></span>
          <span>${project.year}</span>
        </div>
        <p class="body-m">${project.description}</p>
        <div class="card__stats">
          <span>${DOWNLOAD_ICON}${project.stats.downloads}</span>
          <span>${STAR_ICON}${project.stats.likes}</span>
        </div>
        <div class="card__tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a class="card__link" href="${project.link}">
          View project ${ARROW_ICON}
        </a>
      </div>
    </article>
  `;
}

function renderEmptyState(container) {
  container.innerHTML = '<p class="empty-state">No projects match this filter yet.</p>';
}

async function initFeaturedGrid() {
  const container = document.querySelector('[data-featured-grid]');
  if (!container) return;
  const projects = await loadProjects();
  const featured = projects.filter((project) => project.featured);
  container.innerHTML = featured.map(renderCard).join('');
}

function getSearchInput() {
  return document.querySelector('.nav__search input');
}

function matchesSearch(project, query) {
  if (!query) return true;
  const tags = [...(project.tags || []), ...(project.hiddenTags || [])];
  const haystack = `${project.title} ${project.description} ${tags.join(' ')}`.toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function getProjectsPageUrl(query = '') {
  const url = new URL('/projects', window.location.origin);
  if (query) {
    url.searchParams.set('search', query);
  }
  const normalizedPath = url.pathname.endsWith('/') && url.pathname !== '/' ? url.pathname.slice(0, -1) : url.pathname;
  return `${normalizedPath}${url.search}`;
}

function syncSearchQuery(query) {
  if (!window.location.pathname.includes('/projects')) return;
  const url = new URL(window.location.href);
  if (query) {
    url.searchParams.set('search', query);
  } else {
    url.searchParams.delete('search');
  }
  const normalizedPath = url.pathname.endsWith('/') && url.pathname !== '/' ? url.pathname.slice(0, -1) : url.pathname;
  window.history.replaceState({}, '', `${normalizedPath}${url.search}${url.hash}`);
}

let allProjects = [];
let activeCategory = 'all';

function applyProjectFilters() {
  const container = document.querySelector('[data-projects-grid]');
  if (!container) return;
  const searchInput = getSearchInput();
  const query = searchInput ? searchInput.value.trim() : '';
  syncSearchQuery(query);
  const visible = allProjects.filter(
    (p) => (activeCategory === 'all' || p.category === activeCategory) && matchesSearch(p, query)
  );
  if (visible.length === 0) {
    renderEmptyState(container);
  } else {
    container.innerHTML = visible.map(renderCard).join('');
  }
}

async function initProjectsGrid() {
  const container = document.querySelector('[data-projects-grid]');
  if (!container) return;
  allProjects = await loadProjects();
  const chips = document.querySelectorAll('[data-filter-chip]');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      activeCategory = chip.getAttribute('data-filter-chip');
      applyProjectFilters();
    });
  });

  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get('search');
  const searchInput = getSearchInput();
  if (initialQuery && searchInput) {
    searchInput.value = initialQuery;
  }

  applyProjectFilters();
}

function initNavSearch() {
  const input = getSearchInput();
  if (!input) return;

  const onProjectsGrid = document.querySelector('[data-projects-grid]');

  const updateSearch = () => {
    if (onProjectsGrid) {
      applyProjectFilters();
    }
  };

  input.addEventListener('input', updateSearch);
  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();

    if (onProjectsGrid) {
      applyProjectFilters();
      return;
    }

    const query = input.value.trim();
    window.location.assign(getProjectsPageUrl(query));
  });
}

function initCodeCopy() {
  document.querySelectorAll('.code-block__copy').forEach((button) => {
    button.addEventListener('click', async () => {
      const block = button.closest('.code-block');
      const code = block ? block.querySelector('code') : null;
      if (!code) return;

      try {
        await navigator.clipboard.writeText(code.textContent);
        const originalLabel = button.textContent;
        button.textContent = 'Copied';
        button.classList.add('is-copied');
        setTimeout(() => {
          button.textContent = originalLabel;
          button.classList.remove('is-copied');
        }, 1600);
      } catch (error) {
        console.error('Copy failed:', error);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  initMobileNav();
  initFooterYear();
  initFeaturedGrid();
  await initProjectsGrid();
  initNavSearch();
  initCodeCopy();
});