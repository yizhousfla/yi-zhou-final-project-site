// ═══════════════════════════════════════════════════════════
//  Yi Zhou, Ph.D. — SFSU Finance  |  app.js
//  APIs used:
//    1. Frankfurter API — live FX currency ticker (no key needed)
//    2. Yahoo Finance   — live stock/ETF quotes on Markets page
//  Backend:
//    EmailJS — contact form sends to yizhou88@sfsu.edu
// ═══════════════════════════════════════════════════════════

// ─────────────────────────────────────────────
// DATA — Arrays of Objects
// ─────────────────────────────────────────────
const publications = [
  {
    year: 2026,
    title: "Weather Risk and Financial Markets: Credit Risk, Stock Returns, and Corporate Fundamentals",
    authors: "Zhou, Y.",
    journal: "Global Finance Journal",
    details: "Global Finance Journal, 70, 101239.",
    doi: "https://doi.org/10.1016/j.gfj.2026.101239"
  },
  {
    year: 2025,
    title: "Using Generative AI to Predict the Weather Impact on Future Stock Returns",
    authors: "Zhou, Y.",
    journal: "Review of Quantitative Finance and Accounting",
    details: "Review of Quantitative Finance and Accounting, 64, 1–30. Accepted: July 2, 2025.",
    doi: "https://doi.org/10.1007/s11156-025-01437-x"
  },
  {
    year: 2023,
    title: "Pricing Strategies in BigTech Lending: Evidence from China",
    authors: "Lu, L., Wei, J., Wu, W., & Zhou, Y.",
    journal: "Financial Management",
    details: "Financial Management, 52(2), 333–374. Advance online publication January 24, 2023.",
    doi: "https://doi.org/10.1111/fima.12416"
  },
  {
    year: 2022,
    title: "Residual Variance and Asset Pricing in the Art Market",
    authors: "Mei, J., Moses, M., & Zhou, Y.",
    journal: "Journal of Cultural Economics",
    details: "Journal of Cultural Economics, 47(3), 513–545. Advance online publication February 7, 2022.",
    doi: "https://doi.org/10.1007/s10824-022-09449-4"
  },
  {
    year: 2022,
    title: "Option Trading Volume by Moneyness, Firm Fundamentals, and Expected Stock Returns",
    authors: "Zhou, Y.",
    journal: "Journal of Financial Markets",
    details: "Journal of Financial Markets, 58, 100648. Advance online publication June 11, 2021.",
    doi: "https://doi.org/10.1016/j.finmar.2021.100648"
  },
  {
    year: 2019,
    title: "Two Trees with Heterogeneous Beliefs: Spillover Effect of Disagreement",
    authors: "Han, B., Lu, L., & Zhou, Y.",
    journal: "Journal of Financial and Quantitative Analysis",
    details: "Journal of Financial and Quantitative Analysis, 54(4), 1791–1819. Advance online publication October 8, 2018.",
    doi: "https://doi.org/10.1017/S0022109018001266"
  },
  {
    year: 2017,
    title: "The Term Structure of Credit Spreads, Firm Fundamentals, and Expected Stock Returns",
    authors: "Han, B., Subrahmanyam, A., & Zhou, Y.",
    journal: "Journal of Financial Economics",
    details: "Journal of Financial Economics, 124(1), 147–171.",
    doi: "https://doi.org/10.1016/j.jfineco.2017.01.002"
  },
  {
    year: 2017,
    title: "Narcissism and the Art Market Performance",
    authors: "Zhou, Y.",
    journal: "European Journal of Finance",
    details: "European Journal of Finance, 23(13), 1197–1218. Lead Article. Advance online publication March 15, 2016.",
    doi: "http://dx.doi.org/10.1080/1351847X.2016.1151804"
  },
  {
    year: 2016,
    title: "Capital Structure Effects on the Prices of Individual Equity Call Options",
    authors: "Geske, R., Subrahmanyam, A., & Zhou, Y.",
    journal: "Journal of Financial Economics",
    details: "Journal of Financial Economics, 121(2), 231–253. Lead Article.",
    doi: "https://doi.org/10.1016/j.jfineco.2016.03.009"
  },
  {
    year: 2015,
    title: "Understanding the Term Structure of Credit Default Swap Spreads",
    authors: "Han, B., & Zhou, Y.",
    journal: "Journal of Empirical Finance",
    details: "Journal of Empirical Finance, 31, 18–35.",
    doi: "https://doi.org/10.1016/j.jempfin.2015.02.002"
  },
  {
    year: 2013,
    title: "Credit Default Swap Spread and Variance Risk Premia",
    authors: "Wang, H., Zhou, H., & Zhou, Y.",
    journal: "Journal of Banking & Finance",
    details: "Journal of Banking and Finance, 37(10), 3733–3746. Lead Article.",
    doi: "https://doi.org/10.1016/j.jbankfin.2013.02.021"
  }
];

const awards = [
  { year: "2025–2027", title: "Lam Larsen Distinguished Research Professor", org: "Lam Family College of Business, SFSU" },
  { year: "2025", title: "Best Paper Award — 2nd Modern Finance Conference", org: "Warsaw, Poland — for 'AI Infrastructure, Firm Value, and Expected Stock Returns'" },
  { year: "2022–2023", title: "Publication Incentive Award", org: "Lam Family College of Business (3rd consecutive year)" },
  { year: "2021–2022", title: "Publication Incentive Award", org: "Lam Family College of Business (2nd consecutive year)" },
  { year: "2020–2021", title: "Publication Incentive Award", org: "Lam Family College of Business (1st consecutive year)" },
  { year: "2017–2018", title: "Exemplary Research Award", org: "Lam Family College of Business (2nd consecutive year)" },
  { year: "2017", title: "Development of Research and Creativity (DRC) Grant", org: "California State University Chancellor's Office" },
  { year: "2016–2017", title: "Exemplary Research Award", org: "Lam Family College of Business (1st consecutive year)" },
  { year: "2016", title: "Pacific Basin Finance Journal Research Excellence Award", org: "Pacific Basin Finance Journal" },
  { year: "2013", title: "GARP Research Award", org: "Global Association of Risk Professionals" },
  { year: "2013", title: "American Association of Individual Investors Award", org: "AAII" },
  { year: "2009", title: "GARP Research Award", org: "Global Association of Risk Professionals" },
  { year: "2009", title: "Center for Hedge Fund Research (CHFR) Award", org: "CHFR, Imperial College London" }
];

const serviceRows = [
  { committee: "Academic Senate", role: "Senator representing LFCoB", years: "2018–2023" },
  { committee: "Faculty Affairs Committee (F.A.C.)", role: "Member", years: "2019–2023" },
  { committee: "Curriculum Review & Approval Committee (C.R.A.C.)", role: "Member", years: "2018–2019" },
  { committee: "Academic Program Review Committee (A.P.R.C.)", role: "Member", years: "2017–2019" },
  { committee: "Academic Master Plan", role: "Member", years: "2018–2019" }
];

// ─────────────────────────────────────────────
// RENDER FUNCTIONS
// ─────────────────────────────────────────────
function renderPublications() {
  const list = document.getElementById('pub-list');
  publications.forEach(function(pub) {
    const li = document.createElement('li');
    li.className = 'pub-item';
    li.style.cursor = 'default';
    const titleHtml = pub.doi
      ? `<a class="pub-title-link" href="${pub.doi}" target="_blank" rel="noopener">${pub.title}</a>`
      : pub.title;
    li.innerHTML = `
      <span class="year">${pub.year}</span>
      <div class="journal">${pub.journal}</div>
      <div class="title">${titleHtml}</div>
      <div class="authors">${pub.authors}</div>
    `;
    list.appendChild(li);
  });
}

function renderAwards() {
  const container = document.getElementById('awards-list');
  awards.forEach(function(award) {
    const div = document.createElement('div');
    div.className = 'award-item';
    div.innerHTML = `
      <div class="award-year">${award.year}</div>
      <div class="award-body">
        <h3>${award.title}</h3>
        <p>${award.org}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderService() {
  const tbody = document.getElementById('service-table-body');
  serviceRows.forEach(function(row) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.committee}</td><td>${row.role}</td><td>${row.years}</td>`;
    tbody.appendChild(tr);
  });
}

// ─────────────────────────────────────────────
// PAGE NAVIGATION — hash-based routing
// URL hash (e.g. #markets) is saved on every
// nav click so reloading restores the same page
// ─────────────────────────────────────────────
const navButtons = document.querySelectorAll('nav button');
const pages = document.querySelectorAll('.page');

function navigateTo(target) {
  // Update nav buttons
  navButtons.forEach(function(b) { b.classList.remove('active'); });
  const activeBtn = document.querySelector('nav button[data-page="' + target + '"]');
  if (activeBtn) activeBtn.classList.add('active');

  // Update pages
  pages.forEach(function(p) { p.classList.remove('active'); });
  const targetPage = document.getElementById('page-' + target);
  if (targetPage) {
    targetPage.classList.add('active');
    targetPage.style.animation = 'none';
    targetPage.offsetHeight; // reflow
    targetPage.style.animation = '';
  }

  // Trigger markets data load if needed
  if (target === 'markets') loadMarketQuotes();

  // Save to URL hash without scrolling
  history.replaceState(null, '', '#' + target);
}

navButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    navigateTo(btn.getAttribute('data-page'));
  });
});

// On load, read the hash and navigate there (or default to bio)
(function() {
  const hash = window.location.hash.replace('#', '');
  const validPages = Array.from(navButtons).map(function(b) { return b.getAttribute('data-page'); });
  if (hash && validPages.includes(hash)) {
    navigateTo(hash);
  }
})();

// ─────────────────────────────────────────────
// BACKEND: EmailJS — Contact Form
// ─────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY  = '3j5c0_fGWWDshwQZ0';
const EMAILJS_SERVICE_ID  = 'service_5mabq5v';
const EMAILJS_TEMPLATE_ID = 'template_xgpziwr';

// Init EmailJS once it's available
function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }
}

document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  let valid = true;

  const nameEl    = document.getElementById('cf-name');
  const emailEl   = document.getElementById('cf-email');
  const messageEl = document.getElementById('cf-message');

  if (!nameEl.value.trim()) {
    document.getElementById('err-name').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('err-name').style.display = 'none';
  }

  if (!emailEl.value.trim() || !emailEl.value.includes('@')) {
    document.getElementById('err-email').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('err-email').style.display = 'none';
  }

  if (!messageEl.value.trim()) {
    document.getElementById('err-message').style.display = 'block';
    valid = false;
  } else {
    document.getElementById('err-message').style.display = 'none';
  }

  if (!valid) return;

  const submitBtn = document.getElementById('contact-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  try {
    if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');

    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this);

    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';

  } catch (err) {
    // Fallback: open mailto so message is never lost
    const subject = encodeURIComponent('[SFSU Web Inquiry] ' + (document.getElementById('cf-subject').value || 'Inquiry'));
    const body    = encodeURIComponent('From: ' + nameEl.value + ' <' + emailEl.value + '>\n\n' + messageEl.value);
    window.location.href = 'mailto:yizhou88@sfsu.edu?subject=' + subject + '&body=' + body;

    document.getElementById('form-send-error').style.display = 'block';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});

// ─────────────────────────────────────────────
// API #1 (Markets page): Yahoo Finance proxy
// Fetches quotes for major indices & ETFs
// No API key required
// ─────────────────────────────────────────────
const MARKET_SYMBOLS = [
  { symbol: 'SPY',  label: 'S&P 500 ETF'     },
  { symbol: 'QQQ',  label: 'Nasdaq 100 ETF'  },
  { symbol: 'DIA',  label: 'Dow Jones ETF'   },
  { symbol: 'GLD',  label: 'Gold ETF'        },
  { symbol: 'TLT',  label: '20Y Treasury'    },
];

async function fetchQuote(symbol) {
  // Yahoo Finance via allorigins CORS proxy — works from any browser
  const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=2d`;
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(yahooUrl)}`;

  const res = await fetch(proxyUrl);
  if (!res.ok) throw new Error('Proxy fetch failed');
  const wrapper = await res.json();
  const data = JSON.parse(wrapper.contents);

  if (!data.chart || !data.chart.result || !data.chart.result[0]) {
    throw new Error('No data returned');
  }

  const meta = data.chart.result[0].meta;
  return {
    price:     meta.regularMarketPrice,
    prevClose: meta.chartPreviousClose,
    currency:  meta.currency || 'USD',
  };
}

async function loadMarketQuotes() {
  const grid = document.getElementById('quotes-grid');
  if (!grid) return;

  // Build card shells
  grid.innerHTML = MARKET_SYMBOLS.map(function(s) {
    return `<div class="quote-card" id="quote-${s.symbol}">
      <div class="quote-ticker">${s.symbol}</div>
      <div class="quote-label">${s.label}</div>
      <div class="quote-price">—</div>
      <div class="quote-change">—</div>
    </div>`;
  }).join('');

  // Fetch each quote independently so partial failures don't block others
  MARKET_SYMBOLS.forEach(async function(s) {
    const card = document.getElementById('quote-' + s.symbol);
    try {
      const q      = await fetchQuote(s.symbol);
      const change = q.price - q.prevClose;
      const pct    = (change / q.prevClose * 100);
      const up     = change >= 0;
      const sign   = up ? '+' : '';
      const cls    = up ? 'ticker-up' : 'ticker-down';
      card.innerHTML = `
        <div class="quote-ticker">${s.symbol}</div>
        <div class="quote-label">${s.label}</div>
        <div class="quote-price">${q.price.toFixed(2)}</div>
        <div class="quote-change ${cls}">${sign}${change.toFixed(2)} (${sign}${pct.toFixed(2)}%)</div>
      `;
      card.classList.remove('skeleton');
    } catch (err) {
      card.innerHTML = `
        <div class="quote-ticker">${s.symbol}</div>
        <div class="quote-label">${s.label}</div>
        <div class="quote-price" style="color:var(--muted);font-size:14px;">Unavailable</div>
        <div class="quote-change">—</div>
      `;
    }
  });
}

// ─────────────────────────────────────────────
// API #2: Frankfurter — Live Currency Rates
// Free, no API key required: frankfurter.app
// Displays USD vs key finance-relevant currencies
// ─────────────────────────────────────────────
async function loadCurrencyTicker() {
  const tickerInner = document.getElementById('ticker-inner');
  if (!tickerInner) return;

  // Currency pairs relevant to a finance academic site
  const currencies = ['EUR', 'GBP', 'JPY', 'CNY', 'CHF', 'CAD', 'AUD', 'HKD'];

  try {
    // Frankfurter API: https://api.frankfurter.app/latest?from=USD
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=USD&to=${currencies.join(',')}`
    );
    if (!response.ok) throw new Error('Ticker fetch failed');
    const data = await response.json();

    const rates = data.rates;
    const dateStr = data.date;

    // Build ticker items — duplicate for seamless loop
    const items = currencies.map(function(code) {
      const rate = rates[code];
      if (!rate) return '';
      return `
        <span class="ticker-item">
          <span class="ticker-label">USD/${code}</span>
          <span class="ticker-neutral">${rate.toFixed(4)}</span>
        </span>`;
    }).join('');

    // Duplicate for seamless scroll
    tickerInner.innerHTML = items + items;

    // Show date badge
    const dateBadge = document.getElementById('ticker-date');
    if (dateBadge) dateBadge.textContent = `FX rates · ${dateStr}`;

  } catch (err) {
    // Graceful fallback — show static rates if API unreachable
    const dateBadge = document.getElementById('ticker-date');
    if (dateBadge) dateBadge.textContent = 'FX rates · latest available';

    const staticRates = [
      ['EUR','0.9201'],['GBP','0.7734'],['JPY','142.50'],
      ['CNY','7.2318'],['CHF','0.8821'],['CAD','1.3845'],
      ['AUD','1.5234'],['HKD','7.7812']
    ];
    const items = staticRates.map(([code, rate]) => `
      <span class="ticker-item">
        <span class="ticker-label">USD/${code}</span>
        <span class="ticker-neutral">${rate}</span>
      </span>`).join('');
    tickerInner.innerHTML = items + items;
  }
}

// ─────────────────────────────────────────────
// BACKEND #2: Visitor Guestbook — Firebase Firestore
// Real-time, multi-user persistence.
// Firebase is initialized in firebase-init.js (type="module").
// This file stays a plain script so onclick= attributes keep working.
// ─────────────────────────────────────────────
const GB_COL   = 'guestbook';       // Firestore collection name — must match firebase-init.js
const MOD_PASS = 'sfsufinance2026'; // ← change to your preferred password
let   modActive = false;

// Shorthand helpers pulled from window._firebase (set by firebase-init.js)
function _fb() { return window._firebase; }

// ── Helpers ──────────────────────────────────
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ── Render one entry as HTML ──────────────────
function entryHtml(entry, docId) {
  let dateLabel = '';
  try {
    const ts = entry.timestamp?.toDate ? entry.timestamp.toDate() : new Date(entry.timestamp);
    dateLabel = ts.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
  } catch(e) {}

  const deleteBtn = modActive
    ? `<button class="gb-delete-btn" onclick="deleteEntry('${docId}')">✕ Delete</button>`
    : '';

  return `
    <div class="guestbook-entry" id="gb-entry-${docId}">
      <div class="entry-header">
        <span class="entry-name">${escapeHtml(entry.name)}</span>
        <span class="entry-date">${dateLabel}</span>
        ${deleteBtn}
      </div>
      <p class="entry-message">${escapeHtml(entry.message)}</p>
    </div>`;
}

// ── Real-time listener — updates UI instantly ──
// Polls for window._firebase in case the ES module hasn't finished loading yet
function subscribeGuestbook() {
  const container = document.getElementById('guestbook-entries');
  if (!container) return;

  if (!window._firebase) {
    setTimeout(subscribeGuestbook, 100);
    return;
  }

  container.innerHTML = '<p class="guestbook-loading">Loading comments…</p>';

  const { db, collection, query, orderBy, onSnapshot, addDoc, deleteDoc, doc, serverTimestamp } = _fb();
  const q = query(collection(db, GB_COL), orderBy('timestamp', 'desc'));

  onSnapshot(q, function(snapshot) {
    if (snapshot.empty) {
      container.innerHTML = '<p class="guestbook-loading">No comments yet — be the first!</p>';
      return;
    }
    container.innerHTML = snapshot.docs
      .map(function(d) { return entryHtml(d.data(), d.id); })
      .join('');
  }, function(err) {
    console.error('Guestbook snapshot error:', err);
    container.innerHTML = '<p class="guestbook-loading">Could not load comments. Please try again later.</p>';
  });
}

// ── Delete an entry (mod only) ────────────────
window.deleteEntry = async function(docId) {
  if (!modActive) return;
  try {
    const { db, deleteDoc, doc } = _fb();
    await deleteDoc(doc(db, GB_COL, docId));
    // onSnapshot updates the UI automatically
  } catch(err) {
    console.error('Delete failed:', err);
    alert('Could not delete entry. Check your Firestore permissions.');
  }
};

// ── Mod login / exit ──────────────────────────
window.toggleModLogin = function() {
  const login = document.getElementById('mod-login');
  login.style.display = login.style.display === 'none' ? 'flex' : 'none';
  document.getElementById('mod-error').style.display = 'none';
};

window.enterModMode = function() {
  const pw = document.getElementById('mod-password').value;
  if (pw === MOD_PASS) {
    modActive = true;
    document.getElementById('mod-login').style.display  = 'none';
    document.getElementById('mod-active').style.display = 'flex';
    document.getElementById('mod-password').value = '';
    subscribeGuestbook(); // re-render so delete buttons appear
  } else {
    document.getElementById('mod-error').style.display = 'inline';
  }
};

window.exitModMode = function() {
  modActive = false;
  document.getElementById('mod-active').style.display = 'none';
  subscribeGuestbook(); // re-render without delete buttons
};

// ── Submit new comment ────────────────────────
const gbForm = document.getElementById('guestbook-form');
if (gbForm) {
  gbForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const nameEl    = document.getElementById('gb-name');
    const messageEl = document.getElementById('gb-message');
    const errEl     = document.getElementById('gb-error');
    const submitBtn = gbForm.querySelector('button[type="submit"]');

    if (!nameEl.value.trim() || !messageEl.value.trim()) {
      errEl.style.display = 'block';
      errEl.textContent   = 'Please enter both your name and a comment.';
      return;
    }
    errEl.style.display = 'none';
    submitBtn.disabled  = true;
    submitBtn.textContent = 'Posting…';

    try {
      const { db, addDoc, collection, serverTimestamp } = _fb();
      await addDoc(collection(db, GB_COL), {
        name:      nameEl.value.trim(),
        message:   messageEl.value.trim(),
        timestamp: serverTimestamp()    // server-side timestamp (reliable ordering)
      });
      nameEl.value    = '';
      messageEl.value = '';
      // onSnapshot will update the list automatically
    } catch(err) {
      console.error('Post failed:', err);
      errEl.style.display = 'block';
      errEl.textContent   = 'Could not post comment. Please try again.';
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Post Comment';
    }
  });
}


// ─────────────────────────────────────────────
// ART MARKET — Auction House Tab Switching
// URLs stored in JS (not HTML) to avoid &amp; encoding issues
// ─────────────────────────────────────────────
const AUCTION_URLS = {
  // Sotheby's — New York location (f1), auction type (f4), category (f2)
  // f1 = New York location ID, f4 = auction sale type
  // Category search terms used as q= keyword since internal f2 IDs are opaque
  'sothebys-all':     'https://www.sothebys.com/en/calendar?s=0&from=&to=&f1=00000162-326e-d29e-a1eb-ffeedb240000&f4=00000164-609b-d1db-a5e6-e9ff01230000&q=',
  'sothebys-contemp': 'https://www.sothebys.com/en/calendar?s=0&from=&to=&f1=00000162-326e-d29e-a1eb-ffeedb240000&f4=00000164-609b-d1db-a5e6-e9ff01230000&q=contemporary+art',
  'sothebys-impress': 'https://www.sothebys.com/en/calendar?s=0&from=&to=&f1=00000162-326e-d29e-a1eb-ffeedb240000&f4=00000164-609b-d1db-a5e6-e9ff01230000&q=impressionist+modern+art',
  'sothebys-19c':     'https://www.sothebys.com/en/calendar?s=0&from=&to=&f1=00000162-326e-d29e-a1eb-ffeedb240000&f4=00000164-609b-d1db-a5e6-e9ff01230000&q=19th+century+european',
  'sothebys-omd':     'https://www.sothebys.com/en/calendar?s=0&from=&to=&f1=00000162-326e-d29e-a1eb-ffeedb240000&f4=00000164-609b-d1db-a5e6-e9ff01230000&q=old+master+drawings',
  'sothebys-omp':     'https://www.sothebys.com/en/calendar?s=0&from=&to=&f1=00000162-326e-d29e-a1eb-ffeedb240000&f4=00000164-609b-d1db-a5e6-e9ff01230000&q=old+master+paintings',

  // Christie's — using search query (q=) since location filter IDs are not publicly documented
  // event_live=live auctions, event_115=online, category_10=Asian Art, category_7=Fine Art
  'christies-all':    'https://www.christies.com/en/calendar?filters=|event_live|event_115|category_10|category_7|',
  'christies-live':   'https://www.christies.com/en/calendar?filters=|event_live|',
  'christies-online': 'https://www.christies.com/en/calendar?filters=|event_115|',
  'christies-asian':  'https://www.christies.com/en/calendar?filters=|category_10|',
  'christies-fine':   'https://www.christies.com/en/calendar?filters=|category_7|',
  'christies-la':     'https://www.christies.com/en/results?locations=los-angeles',
  'christies-ny':     'https://www.christies.com/en/results?locations=new-york',
};

function switchAuctionTab(house, btn) {
  document.querySelectorAll('.auction-tab-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.auction-house-section').forEach(function(s) { s.classList.remove('active'); });
  var section = document.getElementById('auction-' + house);
  if (section) section.classList.add('active');
}

function setAuctionUrl(house, chip) {
  // Deactivate all chips in this house's filter bar
  var filterId = house === 'sothebys' ? 'sothebys-filters' : 'christies-filters';
  document.querySelectorAll('#' + filterId + ' .auction-filter-chip').forEach(function(c) {
    c.classList.remove('active');
  });
  chip.classList.add('active');

  var key = chip.getAttribute('data-key');
  var url = AUCTION_URLS[key];
  if (!url) return;

  var linkId = house === 'sothebys' ? 'sothebys-link' : 'christies-link';
  document.getElementById(linkId).href = url;
}

document.addEventListener('DOMContentLoaded', function() {
  renderPublications();
  renderAwards();
  renderService();
  loadCurrencyTicker();
  initEmailJS();
  subscribeGuestbook();   // Firebase real-time listener
});
