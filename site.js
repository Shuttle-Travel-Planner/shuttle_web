/* Shuttle — site interactivity */
(function() {
  'use strict';

  const I18N = window.SHUTTLE_I18N;
  const state = {
    lang: localStorage.getItem('shuttle_lang') || 'tr',
    theme: localStorage.getItem('shuttle_theme') || 'dark',
    heroIdx: 0,
    tweaksOpen: false
  };

  /* ---------- Theme / tweaks ---------- */
  function applyTheme() {
    document.body.setAttribute('data-theme', state.theme);
    localStorage.setItem('shuttle_theme', state.theme);
    document.querySelectorAll('[data-theme-btn]').forEach(b => {
      b.classList.toggle('on', b.dataset.themeBtn === state.theme);
    });
    // Edit-mode persistence
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { theme: state.theme, lang: state.lang } }, '*');
    } catch (e) {}
  }

  /* ---------- Language ---------- */
  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem('shuttle_lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.classList.toggle('on', b.dataset.langBtn === lang);
    });
    render();
    applyTheme();
  }

  /* ---------- Render content ---------- */
  function render() {
    const t = I18N[state.lang];

    // Nav
    document.querySelectorAll('[data-k]').forEach(el => {
      const key = el.dataset.k;
      const val = key.split('.').reduce((a, p) => a && a[p], t);
      if (val != null) el.textContent = val;
    });

    // Hero badge + title
    document.getElementById('hero-badge-txt').textContent = t.hero.badge;
    document.getElementById('hero-title-1').textContent = t.hero.title_1;
    document.getElementById('hero-title-accent').textContent = t.hero.title_accent;
    document.getElementById('hero-title-2').textContent = t.hero.title_2;
    document.getElementById('hero-sub').textContent = t.hero.sub;
    document.getElementById('store-app-small').textContent = t.hero.store_app_small;
    document.getElementById('store-app-big').textContent = t.hero.store_app_big;
    document.getElementById('store-play-small').textContent = t.hero.store_play_small;
    document.getElementById('store-play-big').textContent = t.hero.store_play_big;
    document.querySelectorAll('[data-soon]').forEach(e => e.textContent = t.hero.store_soon);
    document.getElementById('fc1-l').textContent = t.hero.fc1_l;
    document.getElementById('fc1-v').textContent = t.hero.fc1_v;
    document.getElementById('fc2-l').textContent = t.hero.fc2_l;
    document.getElementById('fc2-v').textContent = t.hero.fc2_v;
    document.getElementById('fc3-l').textContent = t.hero.fc3_l;
    document.getElementById('fc3-v').textContent = t.hero.fc3_v;

    // Marquee
    const marquee = document.getElementById('marquee-track');
    const items = t.hero.marquee;
    marquee.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      items.forEach(m => {
        const span = document.createElement('span');
        span.className = 'marquee-item';
        span.textContent = m;
        marquee.appendChild(span);
      });
    }

    // How section
    document.getElementById('how-eyebrow').textContent = t.how.eyebrow;
    document.getElementById('how-title').textContent = t.how.title;
    document.getElementById('how-lede').textContent = t.how.lede;
    const steps = document.getElementById('steps-grid');
    steps.innerHTML = '';
    t.how.steps.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'step-card reveal';
      card.innerHTML = `
        <span class="icon-emoji">${s.emoji}</span>
        <div class="step-num">0${i + 1}</div>
        <h3>${s.h}</h3>
        <p>${s.p}</p>
      `;
      steps.appendChild(card);
    });
    const final = document.createElement('div');
    final.className = 'step-card highlight reveal';
    final.innerHTML = `
      <div>
        <span class="icon-emoji">✨</span>
        <h3>${t.how.final.h}</h3>
        <p>${t.how.final.p}</p>
      </div>
      <div class="step-num">${t.how.final.num}</div>
    `;
    steps.appendChild(final);

    // Features
    document.getElementById('feat-eyebrow').textContent = t.features.eyebrow;
    document.getElementById('feat-title').textContent = t.features.title;
    document.getElementById('feat-lede').textContent = t.features.lede;
    const featIcons = ['✨', '🗓️', '🗺️', '✏️', '❤️', '📖'];
    t.features.cards.forEach((c, i) => {
      const h = document.getElementById(`feat-${i + 1}-t`);
      const p = document.getElementById(`feat-${i + 1}-d`);
      const ic = document.getElementById(`feat-${i + 1}-i`);
      if (h) h.textContent = c.t;
      if (p) p.textContent = c.d;
      if (ic) ic.textContent = featIcons[i];
    });

    // Screens
    document.getElementById('screens-eyebrow').textContent = t.screens.eyebrow;
    document.getElementById('screens-title').textContent = t.screens.title;
    document.getElementById('screens-lede').textContent = t.screens.lede;

    // Interests
    document.getElementById('int-eyebrow').textContent = t.interests.eyebrow;
    document.getElementById('int-title').textContent = t.interests.title;
    document.getElementById('int-lede').textContent = t.interests.lede;
    const iGrid = document.getElementById('int-grid');
    iGrid.innerHTML = '';
    t.interests.items.forEach(it => {
      const cell = document.createElement('div');
      cell.className = `interest ${it.c} reveal`;
      cell.innerHTML = `<span class="emoji">${it.e}</span><h4>${it.t}</h4>`;
      iGrid.appendChild(cell);
    });

    // Sample plan
    document.getElementById('smp-eyebrow').textContent = t.sample.eyebrow;
    document.getElementById('smp-title').textContent = t.sample.title;
    document.getElementById('smp-lede').textContent = t.sample.lede;
    document.getElementById('smp-location').textContent = `📍 ${t.sample.location}`;
    document.getElementById('smp-plan-title').textContent = t.sample.plan_title;
    const chipHolder = document.getElementById('smp-chips');
    chipHolder.innerHTML = '';
    t.sample.chips.forEach(c => {
      const s = document.createElement('span');
      s.className = 'chip';
      s.textContent = c;
      chipHolder.appendChild(s);
    });
    const dayTabs = document.getElementById('smp-days');
    dayTabs.innerHTML = '';
    t.sample.days.forEach((d, i) => {
      const tab = document.createElement('div');
      tab.className = 'daytab' + (i === 0 ? ' active' : '');
      tab.innerHTML = `<span class="big">${d.d}</span>${d.m}`;
      tab.addEventListener('click', () => {
        dayTabs.querySelectorAll('.daytab').forEach(x => x.classList.remove('active'));
        tab.classList.add('active');
      });
      dayTabs.appendChild(tab);
    });
    const tl = document.getElementById('smp-timeline');
    tl.innerHTML = '';
    t.sample.timeline.forEach(item => {
      const row = document.createElement('div');
      row.className = 'tl-item';
      row.innerHTML = `
        <div class="tl-time">${item.t}</div>
        <div class="tl-content">
          <h5>${item.h}</h5>
          <p>${item.p}</p>
          <div class="tl-tags">${item.tags.map(tg => `<span class="tl-tag">${tg}</span>`).join('')}</div>
        </div>
      `;
      tl.appendChild(row);
    });

    // CTA
    document.getElementById('cta-title').textContent = t.cta.title;
    document.getElementById('cta-lede').textContent = t.cta.lede;
    document.getElementById('waitlist-input').placeholder = t.cta.placeholder;
    document.getElementById('waitlist-btn').textContent = t.cta.btn;

    // Footer
    document.getElementById('footer-tagline').textContent = t.footer.tagline;
    document.getElementById('footer-rights').textContent = t.footer.rights;
    document.getElementById('footer-made').textContent = t.footer.made;
    const setCol = (id, heading, links) => {
      document.getElementById(id + '-h').textContent = heading;
      const ul = document.getElementById(id + '-list');
      ul.innerHTML = '';
      links.forEach((link, i) => {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = link;
        if (id === 'col-legal') {
          if (i === 0) { a.dataset.modal = 'terms'; }
          else if (i === 1) { a.dataset.modal = 'privacy'; }
        }
        if (id === 'col-product') {
          const anchors = ['#how', '#features', '#screens', '#sample'];
          a.href = anchors[i] || '#';
        }
        ul.appendChild(a);
      });
    };
    setCol('col-product', t.footer.col_product, t.footer.links_product);
    setCol('col-company', t.footer.col_company, t.footer.links_company);
    setCol('col-legal', t.footer.col_legal, t.footer.links_legal);
    document.getElementById('contact-h').textContent = t.footer.col_contact;
    document.getElementById('contact-mail').textContent = t.footer.contact_mail;
    document.getElementById('contact-mail').href = `mailto:${t.footer.contact_mail}`;

    // Rebind modal triggers
    document.querySelectorAll('[data-modal]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(a.dataset.modal);
      });
    });

    // Apply reveal
    observeReveals();
  }

  /* ---------- Modals ---------- */
  function openModal(key) {
    const t = I18N[state.lang].legal[key];
    if (!t) return;
    const mbody = document.getElementById('modal-body');
    mbody.innerHTML = `
      <button class="close" onclick="document.getElementById('modal-back').classList.remove('on')">×</button>
      <h3>${t.title}</h3>
      <div class="modal-date">${t.date}</div>
      ${t.body.map(([h, p]) => `<h4>${h}</h4><p>${p}</p>`).join('')}
    `;
    document.getElementById('modal-back').classList.add('on');
  }

  /* ---------- Hero phone slideshow ---------- */
  const HERO_SLIDES = [
    { type: 'lottie' },
    { type: 'img', src: 'assets/screens/01-home.png' },
    { type: 'img', src: 'assets/screens/10-plan-detail.png' },
    { type: 'img', src: 'assets/screens/11-plan-list.png' },
    { type: 'img', src: 'assets/screens/12-map.png' }
  ];

  function buildHeroSlides() {
    const screen = document.getElementById('hero-screen');
    screen.innerHTML = '';
    HERO_SLIDES.forEach((s, i) => {
      if (s.type === 'lottie') {
        const holder = document.createElement('div');
        holder.className = 'lottie-holder' + (i === 0 ? ' active' : '');
        holder.id = 'lottie-holder';
        holder.style.background = 'linear-gradient(180deg, #f0e9ff 0%, #c9e3ff 100%)';
        screen.appendChild(holder);
      } else {
        const img = document.createElement('img');
        img.src = s.src;
        img.alt = '';
        img.loading = 'lazy';
        if (i === 0) img.classList.add('active');
        screen.appendChild(img);
      }
    });
  }

  function cycleHero() {
    const children = document.getElementById('hero-screen').children;
    Array.from(children).forEach(c => c.classList.remove('active'));
    state.heroIdx = (state.heroIdx + 1) % HERO_SLIDES.length;
    children[state.heroIdx].classList.add('active');
  }

  /* ---------- Build screen carousel ---------- */
  const SCREEN_LIST = [
    { img: '01-home.png',         tr: 'Ana Sayfa',                  en: 'Home' },
    { img: '02-where.png',        tr: 'Lokasyon Seçimi',            en: 'Destination picker' },
    { img: '03-when.png',         tr: 'Tarih ve Saatler',           en: 'Dates & hours' },
    { img: '04-budget.png',       tr: 'Bütçe',                       en: 'Budget' },
    { img: '05-interests.png',    tr: 'İlgi Alanları',              en: 'Interests' },
    { img: '06-addition.png',     tr: 'Ekstra İstekler',            en: 'Extra notes' },
    { img: '07-who.png',          tr: 'Kimlerle?',                  en: 'Travel party' },
    { img: '08-home-active.png',  tr: 'Aktif Gezi',                 en: 'Active trip' },
    { img: '09-ai-recs.png',      tr: 'AI Önerileri',               en: 'AI recommendations' },
    { img: '10-plan-detail.png',  tr: 'Plan Detayı',                en: 'Plan detail' },
    { img: '11-plan-list.png',    tr: 'Saatlik Program',            en: 'Hourly timeline' },
    { img: '12-map.png',          tr: 'Harita Görünümü',            en: 'Map view' },
    { img: '13-guide.png',        tr: 'Şehir Rehberi',              en: 'City guide' },
    { img: '14-favorites.png',    tr: 'Favoriler',                  en: 'Favorites' }
  ];

  function buildScreensCarousel() {
    const inner = document.getElementById('screens-inner');
    inner.innerHTML = '';
    // duplicate for loop
    const loop = [...SCREEN_LIST, ...SCREEN_LIST];
    loop.forEach(sc => {
      const card = document.createElement('div');
      card.className = 'screen-card';
      card.innerHTML = `
        <div class="screen-phone"><img src="assets/screens/${sc.img}" alt="" loading="lazy"></div>
        <p data-tr="${sc.tr}" data-en="${sc.en}">${sc[state.lang]}</p>
      `;
      inner.appendChild(card);
    });
  }

  function retranslateScreens() {
    document.querySelectorAll('#screens-inner p').forEach(p => {
      p.textContent = p.dataset[state.lang];
    });
  }

  /* ---------- Reveal observer ---------- */
  let io;
  function observeReveals() {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    }
    document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  }

  /* ---------- Mouse tilt for step cards ---------- */
  function bindStepCardCursor() {
    document.addEventListener('mousemove', (e) => {
      const target = e.target.closest?.('.step-card');
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      target.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  }

  /* ---------- Edit mode (Tweaks) ---------- */
  function initEditMode() {
    const panel = document.getElementById('tweaks-panel');

    window.addEventListener('message', (ev) => {
      if (!ev.data) return;
      if (ev.data.type === '__activate_edit_mode') {
        state.tweaksOpen = true;
        panel.classList.add('on');
      }
      if (ev.data.type === '__deactivate_edit_mode') {
        state.tweaksOpen = false;
        panel.classList.remove('on');
      }
    });

    // Announce availability after listener is live
    try {
      window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    } catch (e) {}

    // Theme buttons
    panel.querySelectorAll('[data-theme-btn]').forEach(b => {
      b.addEventListener('click', () => {
        state.theme = b.dataset.themeBtn;
        localStorage.setItem('shuttle_theme', state.theme);
        applyTheme();
      });
    });
    panel.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.addEventListener('click', () => setLang(b.dataset.langBtn));
    });
  }

  /* ---------- Lottie ---------- */
  function loadLottie() {
    const holder = document.getElementById('lottie-holder');
    if (!holder || !window.lottie) return;
    window.lottie.loadAnimation({
      container: holder,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/rocket.json'
    });
  }

  /* ---------- Waitlist ---------- */
  function initWaitlist() {
    const form = document.getElementById('waitlist-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('waitlist-input');
      const btn = document.getElementById('waitlist-btn');
      if (!input.value.trim() || !input.value.includes('@')) {
        input.focus();
        return;
      }
      input.disabled = true;
      btn.style.display = 'none';
      const thanks = document.createElement('div');
      thanks.className = 'thanks';
      thanks.textContent = I18N[state.lang].cta.thanks;
      input.replaceWith(thanks);
    });
  }

  /* ---------- Nav scroll state ---------- */
  function initScroll() {
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.boxShadow = 'var(--shadow-md)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

  /* ---------- Init ---------- */
  function init() {
    // Top nav lang
    document.querySelectorAll('[data-lang-btn]').forEach(b => {
      b.addEventListener('click', () => setLang(b.dataset.langBtn));
    });

    // Top nav theme switch
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
      themeSwitch.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme();
      });
    }

    buildHeroSlides();
    buildScreensCarousel();
    setLang(state.lang);
    applyTheme();
    initEditMode();
    initWaitlist();
    initScroll();
    bindStepCardCursor();

    // Modal close
    document.getElementById('modal-back').addEventListener('click', (e) => {
      if (e.target.id === 'modal-back') {
        e.currentTarget.classList.remove('on');
      }
    });

    // Start hero cycling
    setInterval(cycleHero, 3800);

    // Lottie
    const tryLottie = () => {
      if (window.lottie) { loadLottie(); }
      else { setTimeout(tryLottie, 200); }
    };
    tryLottie();

    observeReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
