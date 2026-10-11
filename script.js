/* ==========================================================================
   Aapulki (आपुलकी) — Application Logic & Full Feature Implementations
   ========================================================================== */

// --- Icons Definition ---
const I = {
  home: '<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1.5"/><path d="M12 8v13M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M12 8c-2.5 0-4-1-4-2.5a2 2 0 0 1 4 0 2 2 0 0 1 4 0C16 7 14.500 8 12 8z"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.500 20c.5-3.500 3-5.500 6.500-5.500s6 2 6.500 5.500"/><circle cx="17.500" cy="9" r="2.500"/><path d="M17 14.500c2.500 0 4 1.500 4.500 4.500"/>',
  heart: '<path d="M12 20s-8-4.600-8-10.300A4.500 4.500 0 0 1 12 7a4.500 4.500 0 0 1 8 2.700C20 15.400 12 20 12 20z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c.7-4 4-6 8-6s7.300 2 8 6"/>',
  bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  check: '<path d="M5 12.500l4.500 4.500L19 7.500"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.01"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.01"/>',
  leaf: '<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z"/><path d="M5 19l8-8"/>',
  brief: '<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  split: '<circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.500 1.500M17.500 17.500L19 19M5 19l1.500-1.500M17.500 6.500L19 5"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M9 7h6"/>',
  cup: '<path d="M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5zM17 10h1.500a2.500 2.500 0 0 1 0 5H17M8 3v2M12 3v2"/>',
  art: '<path d="M12 3a9 9 0 1 0 0 18c1.500 0 2-1 1.500-2-.5-1 0-2 1.500-2H17a4 4 0 0 0 4-4c0-5-4-10-9-10z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.500" r="1"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  retry: '<path d="M20 12a8 8 0 1 1-2.500-5.800M20 4v5h-5"/>',
  off: '<path d="M2 8.500a15 15 0 0 1 20 0M5 12.500a10 10 0 0 1 14 0M8.500 16a5 5 0 0 1 7 0M12 20v.01M3 3l18 18"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  truck: '<path d="M2 6h11v10H2zM13 10h4l4 3v3h-8"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
  pen: '<path d="M4 20l1-4L16 5l3 3L8 19zM14 7l3 3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'
};

// --- Custom Palette Themed Icons ---
const CUSTOM_ICONS = {
  finder: 'images/icons/finder.png',
  gift: 'images/icons/finder.png',
  birthday: 'images/icons/birthday.png',
  cake: 'images/icons/birthday.png',
  rings: 'images/icons/rings.png',
  wedding: 'images/icons/rings.png',
  anniv: 'images/icons/rings.png',
  bouquet: 'images/icons/bouquet.png',
  flowers: 'images/icons/bouquet.png',
  thanks: 'images/icons/bouquet.png',
  card: 'images/icons/card.png',
  wrap: 'images/icons/wrap.png',
  truck: 'images/icons/truck.png',
  delivery: 'images/icons/truck.png',
  bag: 'images/icons/bag.png',
  cart: 'images/icons/bag.png',
  heart: 'images/icons/heart.png',
  saved: 'images/icons/heart.png',
  search: 'images/icons/search.png',
  user: 'images/icons/user.png',
  users: 'images/icons/user.png',
  profile: 'images/icons/user.png',
  bell: 'images/icons/bell.png',
  cal: 'images/icons/bell.png',
  payment: 'images/icons/payment.png',
  pin: 'images/icons/pin.png',
  support: 'images/icons/support.png'
};

const ic = (n, s = 24) => {
  if (CUSTOM_ICONS[n]) {
    return `<img src="${CUSTOM_ICONS[n]}" alt="" class="ic custom-ic ic-${n}" width="${s}" height="${s}" style="width:${s}px;height:${s}px;object-fit:contain;vertical-align:middle;display:inline-block;" aria-hidden="true" loading="lazy">`;
  }
  return `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n] || ''}</svg>`;
};

// --- Global App Settings & Accessibility State ---
const DEF = { size: 'm', contrast: 0, voice: 0, motion: 0, lang: 'en', simple: 0, senior: 0, data: 0 };
let S = { ...DEF };
try {
  Object.assign(S, JSON.parse(localStorage.getItem('aap') || '{}'));
} catch (e) {}

// --- Localization Translations ---
const T = {
  mr: {
    n_home: 'मुख्यपृष्ठ',
    n_finder: 'भेट शोधा',
    n_together: 'मिळून भेट द्या',
    n_local: 'पर्यावरणपूरक भेट',
    n_corporate: 'कॉर्पोरेट भेटवस्तू',
    n_occasions: 'प्रसंग',
    n_recipients: 'व्यक्ती',
    n_saved: 'जतन केलेले',
    n_profile: 'प्रोफाइल',
    begin: 'सुरू करा',
    tag: 'थोडी आपुलकी जपणाऱ्या भेटवस्तू.',
    eb: 'तुमचा भेटवस्तू सल्लागार',
    h1: 'त्यांना खरोखर आवडेल अशी भेट शोधा ♡',
    lead: 'तुम्ही कोणाला भेट देत आहात, प्रसंग कोणता आणि बजेट किती, ते सांगा. बाकी आमच्याकडे सोडा.',
    cta: 'माझी परफेक्ट भेट शोधा',
    browse: 'भेटवस्तू पाहा',
    vs: 'आवाजाने शोधा',
    vsb: 'आवाजाने शोधा',
    qb: 'झटपट बजेट',
    pc: 'लोकप्रिय श्रेणी',
    rs: 'अलीकडे जतन केलेले आणि पाहिलेले',
    lm: 'ऐनवेळची भेट',
    sl: 'पर्यावरणपूरक आणि स्थानिक',
    gt: 'मिळून भेट द्या',
    q2: 'प्रसंग कोणता आहे?',
    q3: 'तुमचे बजेट किती आहे?',
    q4: 'त्यांना काय आवडते?',
    h_one: 'एक निवडा. नंतर बदलता येईल.',
    h_few: 'काही निवडा. किमान एक.',
    back: 'मागे',
    show: 'माझ्या भेटवस्तू दाखवा',
    pl: 'कोण|प्रसंग|बजेट|आवड',
    stx: 'पायरी {n} / 4',
    ch: 'तुमच्या निवडी',
    cb: 'तुमचे बजेट (₹)',
    e1: 'पुढे जाण्यासाठी एक पर्याय निवडा.',
    e2: 'तुमचे बजेट रुपयांत लिहा, उदा. 1500.',
    e3: 'किमान एक आवड निवडा.',
    a_t: 'सुलभता सेटिंग्ज',
    a_p: 'आपुलकी तुमच्यानुसार बदलते. बदल सर्वत्र लागू होतात आणि या डिव्हाइसवर जतन होतात.',
    done: 'पूर्ण',
    on: 'चालू',
    off: 'बंद',
    skip: 'मुख्य मजकुराकडे जा',
    lg: 'ऐकत आहे…',
    stop: 'थांबवा',
    lis: 'ऐका',
    heard: 'मी ऐकले',
    phrase: 'भेट शोधा',
    saved: 'जतन केले.',
    g1: 'पाहा आणि वाचा',
    g2: 'हालचाल आणि ऐकणे',
    g3: 'सोपे आणि हलके',
    st_size: 'अक्षरांचा आकार',
    st_contrast: 'उच्च कॉन्ट्रास्ट',
    st_voice: 'आवाज / ऐका',
    st_motion: 'कमी हालचाल',
    st_lang: 'भाषा · Language',
    st_simple: 'सोपा मोड',
    st_senior: 'ज्येष्ठ-स्नेही दृश्य',
    st_data: 'डेटा सेव्हर',
    rt: 'त्यांच्यासाठी निवडलेल्या भेटवस्तू ♡',
    ed: 'तुमच्या निवडी बदला',
    vg: 'भेट पाहा',
    pcn: 'वैयक्तिक करा आणि पुढे जा',
    pvg: 'माझी भेट पाहा',
    atc: 'कार्टमध्ये जोडा',
    empty_saved: 'अद्याप कोणत्याही भेटवस्तू जतन केल्या नाहीत.',
    add_occ: 'प्रसंग जोडा',
    add_rec: 'व्यक्ती जोडा'
  },
  hi: {
    n_home: 'होम',
    n_finder: 'तोहफ़ा खोजें',
    n_together: 'मिलकर तोहफ़ा दें',
    n_local: 'टिकाऊ तोहफ़े',
    n_corporate: 'कॉर्पोरेट तोहफ़े',
    n_occasions: 'अवसर',
    n_recipients: 'व्यक्ति',
    n_saved: 'सहेजे गए',
    n_profile: 'प्रोफ़ाइल',
    begin: 'शुरू करें',
    tag: 'थोड़े से प्यार भरे तोहफ़े।',
    eb: 'आपका गिफ़्ट सलाहकार',
    h1: 'ऐसा तोहफ़ा खोजें जो उन्हें सच में पसंद आए ♡',
    lead: 'बताइए आप किसे तोहफ़ा दे रहे हैं, अवसर कौन सा है और बजट कितना है। बाकी हम सँभाल लेंगे।',
    cta: 'मेरा परफ़ेक्ट तोहफ़ा खोजें',
    browse: 'तोहफ़े देखें',
    vs: 'आवाज़ से खोजें',
    vsb: 'आवाज़ से खोजें',
    qb: 'त्वरित बजट',
    pc: 'लोकप्रिय श्रेणियाँ',
    rs: 'हाल ही में सहेजे और देखे गए',
    lm: 'आख़िरी वक़्त के तोहफ़े',
    sl: 'टिकाऊ और स्थानीय',
    gt: 'मिलकर तोहफ़ा दें',
    q2: 'अवसर कौन सा है?',
    q3: 'आपका बजट कितना है?',
    q4: 'उन्हें क्या पसंद है?',
    h_one: 'एक चुनें। बाद में बदल सकते हैं।',
    h_few: 'कुछ चुनें। कम से कम एक।',
    back: 'वापस',
    show: 'मेरे तोहफ़े दिखाएँ',
    pl: 'कौन|अवसर|बजट|रुचि',
    stx: 'चरण {n} / 4',
    ch: 'आपकी पसंद',
    cb: 'आपका बजट (₹)',
    e1: 'आगे बढ़ने के लिए एक विकल्प चुनें।',
    e2: 'अपना बजट रुपये में लिखें, जैसे 1500।',
    e3: 'कम से कम एक रुचि चुनें।',
    a_t: 'सुलभता सेटिंग्स',
    a_p: 'आपुलकी आपके अनुसार ढलती है। बदलाव हर जगह लागू होते हैं और इस डिवाइस पर सहेजे जाते हैं।',
    done: 'हो गया',
    on: 'चालू',
    off: 'बंद',
    skip: 'मुख्य सामग्री पर जाएँ',
    lg: 'सुन रहे हैं…',
    stop: 'रोकें',
    lis: 'सुनें',
    heard: 'मैंने सुना',
    phrase: 'तोहफ़ा खोजें',
    saved: 'सहेजा गया।',
    g1: 'देखें और पढ़ें',
    g2: 'गति और सुनना',
    g3: 'सरल और हल्का',
    st_size: 'अक्षरों का आकार',
    st_contrast: 'उच्च कंट्रास्ट',
    st_voice: 'आवाज़ / सुनें',
    st_motion: 'कम गति',
    st_lang: 'भाषा · Language',
    st_simple: 'सरल मोड',
    st_senior: 'वरिष्ठ-अनुकूल दृश्य',
    st_data: 'डेटा सेवर',
    rt: 'उनके लिए चुने गए तोहफ़े ♡',
    ed: 'अपनी पसंद बदलें',
    vg: 'तोहफ़ा देखें',
    pcn: 'पर्सनलाइज़ करें और आगे बढ़ें',
    pvg: 'मेरा तोहफ़ा देखें',
    atc: 'कार्ट में जोड़ें',
    empty_saved: 'अभी कोई तोहफ़ा सहेजा नहीं गया है।',
    add_occ: 'अवसर जोड़ें',
    add_rec: 'व्यक्ति जोड़ें'
  }
};

const easy = () => S.simple || S.senior;
const tr = (k, en, es) => {
  const e = easy() && es !== undefined;
  const d = T[S.lang] || {};
  return (S.lang !== 'en' && d[k]) || (e ? es : en);
};

function apply() {
  const h = document.documentElement;
  const d = h.dataset;
  const f = (k, v) => (v ? (d[k] = v) : delete d[k]);
  d.size = S.size;
  f('contrast', S.contrast && 'high');
  f('motion', S.motion && 'reduce');
  f('simple', S.simple && '1');
  f('senior', S.senior && '1');
  f('data', S.data && '1');
  h.lang = S.lang;
}

function done(id) {
  try {
    localStorage.setItem('aap', JSON.stringify(S));
  } catch (e) {}
  apply();
  const y = scrollY;
  render(true);
  scrollTo(0, y);
  if (id) {
    const el = document.getElementById(id);
    el && el.focus();
  }
  toast(tr('saved', 'Saved.'));
}

const VT = 'Try it: tap Listen and say “find a gift”.';
function listen(el, go) {
  if (!el) return;
  clearTimeout(listen.t);
  el.innerHTML = `<div class="msg info">${ic('mic')}<span class="pulse"></span><b>${tr('lg', 'Listening…')}</b><button class="btn sec sm" data-stop>${tr('stop', 'Stop')}</button></div>`;
  listen.t = setTimeout(() => {
    el.innerHTML = `<div class="msg ok">${ic('check')}<span>${tr('heard', 'I heard')}: “${tr('phrase', 'find a gift')}”</span></div>`;
    listen.t = setTimeout(() => {
      if (go) {
        location.hash = '#finder';
        el.innerHTML = '';
      } else {
        el.innerHTML = VT;
      }
    }, 1500);
  }, 2500);
}

function load() {
  const el = $('#cdemo');
  if (!el) return;
  el.innerHTML = `<div class="msg info" role="status">${ic('info')}<span>Loading gifts… this can take a while on a slow connection.</span></div><div class="skel"></div><div class="skel"></div>`;
  load.n = (load.n || 0) + 1;
  setTimeout(() => {
    el.innerHTML =
      load.n % 2
        ? `<div role="alert">${msg('warn', 'off', 'We couldn’t load the gifts. Check your connection and try again.')}</div><button class="btn sec sm" data-load>${ic('retry', 18)} Try again</button>`
        : msg('ok', 'check', 'Gifts loaded.');
  }, 1500);
}

const banners = () => (S.data ? msg('info', 'info', 'Data Saver is on. Pictures and decoration are hidden.') : '');
const steps3 = () => `<section class="sec"><h2>How it works</h2><ol class="how">${[
  ['users', '1. Say who the gift is for.'],
  ['bag', '2. Choose your budget.'],
  ['gift', '3. Pick a gift.']
].map(x => `<li>${ic(x[0])}<span>${x[1]}</span></li>`).join('')}</ol></section>`;

const sk = ['#F1C9A5', '#C68A5E', '#8D5A3B', '#E3B089', '#6B4226'];
const ink = '#3B2238';
const fg = (x, y, sc, skin, hair, cl, ex = '', h) =>
  `<g transform="translate(${x} ${y}) scale(${sc})"><rect x="-17" y="12" width="34" height="50" rx="15" style="fill:${cl}"/><circle r="15" fill="${skin}"/>${
    h ?? `<path d="M-15 -2a15 15 0 0 1 30 0c-7-7-23-7-30 0z" fill="${hair}"/>`
  }${ex}</g>`;

const crowd = () => `<svg viewBox="0 0 330 270" aria-hidden="true" focusable="false"><g transform="translate(165 95)"><rect x="-30" y="-8" width="60" height="46" rx="8" style="fill:var(--coral)"/><rect x="-34" y="-20" width="68" height="16" rx="8" style="fill:var(--sun)"/><path d="M0 -20v58" stroke="#fff" stroke-width="5"/><path d="M0 -20c-14-16-24-4-14 0M0 -20c14-16 24-4 14 0" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>
${fg(52, 197, 0.7, sk[3], '#222', '#E8A0A8')}
${fg(112, 178, 1, sk[0], '#EEE', '#8FB3A5', `<circle cx="-6" r="4" fill="none" stroke="${ink}" stroke-width="1.5"/><circle cx="6" r="4" fill="none" stroke="${ink}" stroke-width="1.5"/><path d="M26 34v30M26 34q5-4 8 0" stroke="${ink}" stroke-width="3" fill="none" stroke-linecap="round"/>`)}
<path d="M70 222l24 6" stroke="${sk[3]}" stroke-width="4" stroke-linecap="round"/>
${fg(172, 172, 1, sk[1], '#222', '#F2B66B', `<path d="M-15 -2q-8 28 0 40M15 -2q8 28 0 40" stroke="#222" stroke-width="5" fill="none"/><circle cy="54" r="24" fill="none" stroke="${ink}" stroke-width="4"/>`)}
${fg(232, 178, 1, sk[2], '', '#6C5AA8', `<circle r="15" fill="none" stroke="#C9B8F0" stroke-width="7"/><path d="M-19 6q0 22 19 24 19-2 19-24" fill="none" stroke="#C9B8F0" stroke-width="7"/>`, '<g/>')}
${fg(290, 178, 1, sk[4], '#111', '#D9694A', `<path d="M-11 4q11 18 22 0z" fill="#111"/>`)}</svg>`;

const CL = 'Illustration of people of different ages, abilities and backgrounds gathered around a gift: a child holding an elder’s hand, a woman using a wheelchair, a woman in a headscarf and a bearded man.';

const swi = (k, t, d, x = '') =>
  `<div class="card sw-card"><div class="row" style="justify-content:space-between;align-items:center"><div style="flex:1"><h3 id="l_${k}" style="margin:0 0 4px">${t}</h3><p class="help" style="margin:0">${d}</p></div><button class="tgl" role="switch" id="sw_${k}" data-sw="${k}" aria-checked="${!!S[k]}" aria-labelledby="l_${k}"><span>${
    S[k] ? ic('check', 18) + ' ' + tr('on', 'On') : tr('off', 'Off')
  }</span></button></div>${x ? `<div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--line)">${x}</div>` : ''}</div>`;

const seg = (n, t, d, o) =>
  `<fieldset class="card sw-card fs"><legend class="fs-legend">${t}</legend><p class="help" style="margin:4px 0 16px">${d}</p><div class="chips">${o
    .map(a => `<label class="seg"><input type="radio" name="${n}" value="${a[0]}" id="r_${n}_${a[0]}" ${S[n] == a[0] ? 'checked' : ''}><span>${a[1]}</span></label>`)
    .join('')}</div></fieldset>`;

// --- Options & Filtering Setup ---
const OPT = {
  who: [
    ['mother', 'Mother'],
    ['father', 'Father'],
    ['friend', 'Friend'],
    ['partner', 'Partner'],
    ['sibling', 'Sibling'],
    ['colleague', 'Colleague'],
    ['wother', 'Other']
  ],
  occ: [
    ['birthday', 'Birthday'],
    ['anniv', 'Anniversary'],
    ['thanks', 'Thank You'],
    ['wedding', 'Wedding'],
    ['festival', 'Festival'],
    ['house', 'Housewarming'],
    ['justbc', 'Just Because'],
    ['oother', 'Other']
  ],
  bud: [
    ['u500', 'Under ₹500'],
    ['b1', '₹500–₹1000'],
    ['b2', '₹1000–₹2000'],
    ['b3', '₹2000–₹5000'],
    ['custom', 'Custom']
  ],
  int: [
    ['books', 'Books'],
    ['food', 'Food'],
    ['selfcare', 'Self-care'],
    ['fashion', 'Fashion'],
    ['travel', 'Travel'],
    ['art', 'Art'],
    ['tech', 'Technology'],
    ['home', 'Home'],
    ['plants', 'Plants'],
    ['music', 'Music'],
    ['wellness', 'Wellness'],
    ['handmade', 'Handmade']
  ]
};

const SIM = {
  who: ['mother', 'father', 'friend', 'wother'],
  occ: ['birthday', 'anniv', 'thanks', 'oother'],
  bud: ['u500', 'b1', 'b2', 'b3'],
  int: ['books', 'food', 'selfcare', 'fashion', 'home', 'handmade']
};

const IDS = Object.values(OPT).flat().map(o => o[0]);
const mkMap = x => Object.fromEntries(x.split('|').map((v, i) => [IDS[i], v]));

const LBT = {
  mr: mkMap('आई|वडील|मित्र-मैत्रीण|जोडीदार|भावंड|सहकारी|इतर|वाढदिवस|वर्धापनदिन|आभार|लग्न|सण|गृहप्रवेश|सहजच|इतर|₹500 पेक्षा कमी|₹500–₹1000|₹1000–₹2000|₹2000–₹5000|इतर रक्कम|पुस्तके|खाद्यपदार्थ|स्वतःची काळजी|फॅशन|प्रवास|कला|तंत्रज्ञान|घर|झाडे|संगीत|आरोग्य|हस्तनिर्मित'),
  hi: mkMap('माँ|पिता|दोस्त|जीवनसाथी|भाई-बहन|सहकर्मी|अन्य|जन्मदिन|सालगिरह|धन्यवाद|शादी|त्योहार|गृहप्रवेश|यूँ ही|अन्य|₹500 से कम|₹500–₹1000|₹1000–₹2000|₹2000–₹5000|अन्य राशि|किताबें|खान-पान|सेल्फ़-केयर|फ़ैशन|यात्रा|कला|तकनीक|घर|पौधे|संगीत|वेलनेस|हस्तनिर्मित')
};

const LB = (id, en) => (LBT[S.lang] || {})[id] || en;

let F = { who: '', occ: '', bud: '', cust: '', int: [] };
try {
  Object.assign(F, JSON.parse(localStorage.getItem('aapf') || '{}'));
} catch (e) {}

const svF = () => {
  try {
    localStorage.setItem('aapf', JSON.stringify(F));
  } catch (e) {}
};

const lab = key => {
  const v = F[key];
  if (key === 'bud' && v === 'custom') return F.cust ? '₹' + F.cust : '';
  const o = OPT[key].find(o => o[0] === v);
  return o ? LB(o[0], o[1]) : '';
};

const NAV = [
  ['home', 'Home', 'home'],
  ['finder', 'Gift Finder', 'finder'],
  ['together', 'Gift Together', 'split'],
  ['local', 'Sustainable Gifts', 'leaf'],
  ['corporate', 'Corporate Gifting', 'brief'],
  ['occasions', 'Occasions', 'bell'],
  ['recipients', 'Recipients', 'user'],
  ['saved', 'Saved', 'heart'],
  ['profile', 'Profile', 'user']
];

const $ = s => document.querySelector(s);

const btn = (t, h, c = '') => `<a class="btn ${c}" href="${h}">${t}</a>`;
const progress = (labels, cur) =>
  `<ol class="steps" aria-label="Progress">${labels
    .map((l, i) => `<li class="${i < cur ? 'done' : ''}" ${i == cur ? 'aria-current="step"' : ''}>${l}</li>`)
    .join('')}</ol>`;
const msg = (k, i, t) => `<div class="msg ${k}">${ic(i)}<span>${t}</span></div>`;
const chips = (a, single) =>
  `<div class="chips" ${single ? 'data-single' : ''}>${a
    .map(x => `<button class="chip" aria-pressed="false">${x}</button>`)
    .join('')}</div>`;

// --- Product Image Assets ---
const IMAGES = {
  seedkit: 'images/seedkit.jpg',
  journal: 'images/journal.jpg',
  planter: 'images/planter.jpg',
  diya: 'images/diya.jpg',
  candle: 'images/candle.jpg',
  hamper: 'images/hamper.jpg',
  spa: 'images/spa.jpg',
  stole: 'images/stole.jpg',
  kansa: 'images/kansa.jpg',
  mithai: 'images/mithai.jpg',
  warli: 'images/warli.jpg'
};

const prod = (n, t, p, i, bg, pid = '') => {
  const imgSrc = IMAGES[pid] || 'images/candle.jpg';
  return `<article class="card prod"><div class="th" style="background:var(--${bg})"><img src="${imgSrc}" alt="${n}" class="p-img" loading="lazy" onerror="this.style.display='none'"><button class="iconbtn save" aria-label="Save ${n}" data-sv="${pid || 'candle'}">${ic(
    'heart',
    20
  )}</button></div><div class="bd"><div class="chips" style="margin-bottom:8px">${t
    .map((x, k) => `<span class="tag ${k ? 'l' : ''}">${x}</span>`)
    .join('')}</div><h3>${n}</h3><div class="row" style="justify-content:space-between"><span class="price">${p}</span><a class="btn ghost sm" href="#product/${pid || 'candle'}">View details</a></div></div></article>`;
};

const OA = 'birthday,anniv,thanks,wedding,festival,house,justbc,oother';
const WA = 'mother,father,friend,partner,sibling,colleague,wother';
const PE = 149;
const WR = 60;

const mp = (id, n, p, r, rv, c, i, o, w, pe, h, l, s, d, st, icn, bg, ds, m, mk) => ({
  id,
  n,
  p,
  r,
  rv,
  c,
  i: i.split(','),
  o: (o || OA).split(','),
  w: (w || WA).split(','),
  pe,
  h,
  l,
  s,
  d,
  st,
  ic: icn,
  bg,
  ds,
  m: m.split('|'),
  mk
});

const PR = [
  mp('seedkit', 'Seed-paper card & herb kit', 349, 4.6, 188, 'plants', 'plants,home', '', '', 'Name on the card', 0, 'Pune', 1, 2, 40, 'leaf', 'lav', 'A plantable greeting card with basil and coriander seeds. After the message is read, the card goes into a pot and grows.', 'Seed paper made from cotton waste|Basil and coriander seeds, plus a small clay pot|Card size: 10 × 15 cm|Care: bury, water daily, keep in sunlight', 'Made by a women’s collective in Pune that turns cotton scraps into seed paper.'),
  mp('journal', 'Handmade-paper journal', 449, 4.7, 236, 'books', 'books,art,handmade', 'birthday,thanks,justbc,festival', '', 'Name embossed on the cover', 1, '', 1, 3, 25, 'book', 'sun', 'A stitched A5 journal with soft recycled-cotton pages, for notes, sketches or daily thoughts.', 'Recycled cotton-rag paper|120 dot-grid pages, A5|Hand-stitched spine|Care: keep dry', 'Made by a family paper unit in Sanganer, Jaipur, using recycled cotton rag.'),
  mp('planter', 'Hand-painted terracotta planter', 549, 4.5, 141, 'plants', 'plants,home,handmade', 'birthday,thanks,house,justbc,festival', '', 'Name hand-painted on the pot', 1, 'Pune', 1, 2, 18, 'cup', 'peach', 'A small hand-painted clay planter with a drainage hole, ready for a herb or a succulent.', 'Fired terracotta, natural paint|Height 12 cm, with saucer|Plant not included|Care: wipe clean, avoid frost', 'Painted by potters in a Pune-area studio, one at a time.'),
  mp('diya', 'Name-engraved brass diya', 649, 4.8, 372, 'home', 'home,handmade', 'festival,house,wedding,thanks,anniv,birthday', '', 'Name engraving', 1, 'Nashik', 1, 3, 32, 'sun', 'blush', 'A heavy brass diya with a name engraved on the base. It is a keepsake that lights up every festival.', 'Solid brass|Diameter 9 cm, 280 g|Care: polish with lemon and salt', 'Engraved by a Nashik brass-work family that has made lamps for generations.'),
  mp('candle', 'Lavender candle & bath-salt set', 1190, 4.8, 412, 'selfcare', 'selfcare,home,wellness,handmade', '', '', '', 1, 'Pune', 1, 2, 4, 'sun', 'peach', 'Two hand-poured soy candles and a jar of lavender bath salts, packed in a reusable cotton pouch.', 'Soy wax, cotton wicks, essential oils|Burn time about 35 hours each|Bath salts: Epsom salt and dried lavender|Care: trim wick to 5 mm', 'Poured in small batches by a Pune home-studio maker.'),
  mp('hamper', 'Ayurvedic self-care hamper', 1450, 4.7, 298, 'selfcare', 'selfcare,wellness', 'birthday,thanks,festival,justbc,anniv', 'mother,father,friend,sibling,partner', 'Name on the gift box', 0, '', 1, 3, 30, 'heart', 'blush', 'Cold-pressed hair oil, a herbal face pack, a neem comb and a calming tea, in a jute-lined box.', 'Organic herbal oils and powders|Wooden neem comb, jute box|Free of parabens and synthetic fragrance|Patch-test before first use', 'Made by a herbal cooperative in Wayanad, Kerala.'),
  mp('spa', 'Rose & sandalwood spa set', 1650, 4.6, 204, 'selfcare', 'selfcare,wellness', '', '', '', 0, '', 1, 3, 22, 'leaf', 'lav', 'A soothing set with a rose body butter, sandalwood soap and a soft muslin towel.', 'Shea butter, rose and sandalwood|Muslin towel, 40 × 60 cm|Plastic-free packaging|Patch-test before first use', ''),
  mp('stole', 'Handloom stole, silk blend', 1799, 4.9, 167, 'fashion', 'fashion,handmade', 'birthday,festival,anniv,wedding,thanks', 'mother,partner,sibling,friend', '', 1, 'Yeola', 0, 4, 9, 'heart', 'peach', 'A light silk-blend stole with a woven border. It drapes softly and goes with festive and everyday wear.', 'Silk-cotton blend, handwoven|Length 2 m, width 70 cm|Care: dry clean only', 'Woven on handlooms by a weavers’ group in Yeola, Maharashtra.'),
  mp('kansa', 'Kansa foot-massage set', 1899, 4.7, 119, 'selfcare', 'selfcare,wellness,handmade', 'birthday,thanks,festival,anniv,justbc', 'mother,father,partner,sibling', 'Name on the wooden tray', 1, '', 0, 5, 6, 'cup', 'sun', 'A traditional kansa bowl with a wooden tray and ghee. A foot massage with it is a calm end to a long day.', 'Kansa (bell metal) bowl, wooden tray|Bowl diameter 12 cm|Includes pure cow ghee, 50 g|Care: wash with mild soap', 'Crafted by metalworkers in Thrissur, Kerala.'),
  mp('mithai', 'Festive mithai & dry-fruit box', 1250, 4.6, 521, 'food', 'food', 'festival,birthday,thanks,wedding,house', '', '', 0, 'Pune', 0, 1, 50, 'cup', 'sun', 'A box of fresh sweets and dry fruits, made in small batches without artificial colour.', 'Fresh sweets, almonds, cashews, figs|Net weight 600 g|Best within 7 days. Keep cool', 'Made by a Pune sweet-maker with fresh batches every morning.'),
  mp('warli', 'Warli art wall print', 2250, 4.8, 88, 'art', 'art,home,handmade', 'house,anniv,wedding,birthday,thanks', '', 'Names painted into the artwork', 1, 'Dahanu', 0, 5, 12, 'art', 'lav', 'A hand-painted Warli scene of a village celebration, framed and ready to hang.', 'Natural white pigment on cloth-backed board|Framed in teak, 30 × 40 cm|Hanging hook included', 'Painted by Warli artists from Dahanu, Maharashtra.')
];

// --- Stored State for Saved, Personalization, Cart, Occasions, Recipients ---
let SV = [];
let PS = {};
let OCCASIONS = [
  { id: 'o1', name: 'Aai’s Birthday', person: 'Aai', who: 'mother', occ: 'birthday', date: '12 Oct', days: 9, note: 'Loves plants and brass decor' },
  { id: 'o2', name: 'Riya & Karan’s Anniversary', person: 'Riya & Karan', who: 'friend', occ: 'anniv', date: '2 Nov', days: 30, note: 'Warm home gifts or couple spa' },
  { id: 'o3', name: 'Team Farewell Gift', person: 'Siddharth', who: 'colleague', occ: 'thanks', date: '20 Nov', days: 48, note: 'Handmade journal or coffee mug' },
  { id: 'o4', name: 'Diwali Celebration', person: 'Family', who: 'wother', occ: 'festival', date: '1 Nov', days: 28, note: 'Diya sets and artisanal sweets' }
];

let RECIPIENTS = [
  { id: 'r1', name: 'Aai', who: 'mother', avatar: 'A', bg: 'blush', ints: ['plants', 'home', 'handmade'], occs: '12 Oct (Birthday)', notes: 'Likes serene handcrafted decor and natural gardening kits.' },
  { id: 'r2', name: 'Baba', who: 'father', avatar: 'B', bg: 'sun', ints: ['books', 'wellness', 'food'], occs: '24 Dec (Birthday)', notes: 'Enjoys classical books and calming herbal teas.' },
  { id: 'r3', name: 'Riya', who: 'friend', avatar: 'R', bg: 'lav', ints: ['selfcare', 'fashion', 'art'], occs: '2 Nov (Anniversary)', notes: 'Prefers soy candles and handloom accessories.' },
  { id: 'r4', name: 'Rohan', who: 'sibling', avatar: 'R', bg: 'peach', ints: ['tech', 'music', 'food'], occs: '18 Jan (Birthday)', notes: 'Loves gourmet snacks and unique gadgets.' }
];

let CART = [
  { id: 'diya', qty: 1, pe: true, nm: 'Aai', ln: 'With Love', wr: true, ws: 'festive' }
];

try {
  SV = JSON.parse(localStorage.getItem('aaps') || '["diya","candle"]');
  PS = JSON.parse(localStorage.getItem('aapo') || '{}');
  const storedOcc = localStorage.getItem('aapo_occasions');
  if (storedOcc) OCCASIONS = JSON.parse(storedOcc);
  const storedRec = localStorage.getItem('aapo_recipients');
  if (storedRec) RECIPIENTS = JSON.parse(storedRec);
  const storedCart = localStorage.getItem('aapo_cart');
  if (storedCart) CART = JSON.parse(storedCart);
} catch (e) {}

const sp = () => {
  try {
    localStorage.setItem('aaps', JSON.stringify(SV));
    localStorage.setItem('aapo', JSON.stringify(PS));
    localStorage.setItem('aapo_occasions', JSON.stringify(OCCASIONS));
    localStorage.setItem('aapo_recipients', JSON.stringify(RECIPIENTS));
    localStorage.setItem('aapo_cart', JSON.stringify(CART));
  } catch (e) {}
};

const R = { st: 'ok', fo: 0, cat: '', bud: '', del: 0, ints: null, pe: 0, hd: 0, lc: 0, su: 0, pv: 0, sort: 'match', search: '', occFilter: 'all' };
const CATS = [
  ['selfcare', 'Self-care'],
  ['food', 'Food & sweets'],
  ['books', 'Books'],
  ['home', 'Home & décor'],
  ['plants', 'Plants'],
  ['fashion', 'Fashion'],
  ['art', 'Art']
];
const BR = { u500: [0, 500], b1: [500, 1000], b2: [1000, 2000], b3: [2000, 5000] };

const rng = k => (k === 'custom' ? [0, +F.cust || 0] : BR[k] || [0, 1e9]);
const bk = () => R.bud || F.bud;
const inr = n => '₹' + Number(n).toLocaleString('en-IN');
const WS = { mother: 'Mom', father: 'Dad' };

const whoS = () => (S.lang === 'en' ? WS[F.who] || lab('who') || 'Someone special' : lab('who') || 'विशेष व्यक्ती');
const il = id => LB(id, (OPT.int.find(o => o[0] === id) || [0, id])[1]);
const bl = k => {
  if (k === F.bud) return lab('bud');
  const o = OPT.bud.find(o => o[0] === k);
  return o ? LB(o[0], o[1]) : k;
};
const dt = d =>
  new Date(Date.now() + d * 864e5).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });

const ready = () => F.who && F.occ && F.bud && F.int.length && (F.bud !== 'custom' || +F.cust > 0);
const fit = p => {
  const i = p.i.filter(x => F.int.includes(x));
  const o = p.o.includes(F.occ);
  const w = p.w.includes(F.who);
  return { i, o, w, sc: i.length * 3 + (o ? 2 : 0) + (w ? 2 : 0) };
};

const why = p => {
  const f = fit(p);
  return (
    (f.i.length ? `Fits ${whoS()}’s love of ${f.i.map(il).join(' and ').toLowerCase()}` : 'A thoughtful all-rounder') +
    (f.o ? ', and suits this occasion' : '') +
    '.'
  );
};

const rate = p =>
  `<span><span class="sr">Rated ${p.r} out of 5 from ${p.rv} reviews</span><span aria-hidden="true">${ic('star', 16)} <b>${p.r}</b> (${p.rv} reviews)</span></span>`;

const badges = p =>
  [p.l && ic('pin', 14) + ' Local · ' + p.l, p.s && ic('leaf', 14) + ' Sustainable', p.h && 'Handmade']
    .filter(Boolean)
    .map((t, k) => `<span class="tag ${k ? 'l' : ''}">${t}</span>`)
    .join('');

const RL = () => {
  const [lo, hi] = rng(bk());
  const it = R.ints || (F.int.length ? F.int : OPT.int.map(o => o[0]));
  return PR.filter(
    p =>
      p.p >= lo &&
      p.p <= hi &&
      (!R.cat || p.c === R.cat) &&
      (!R.del || p.d <= R.del) &&
      p.i.some(x => it.includes(x)) &&
      (!R.pe || p.pe) &&
      (!R.hd || p.h) &&
      (!R.lc || p.l) &&
      (!R.su || p.s)
  )
    .map(p => ({ p, f: fit(p) }))
    .sort((a, b) => {
      if (R.sort === 'price-low') return a.p.p - b.p.p;
      if (R.sort === 'price-high') return b.p.p - a.p.p;
      if (R.sort === 'rating') return b.p.r - a.p.r;
      return b.f.sc - a.f.sc || b.p.r - a.p.r;
    });
};

const nAct = () => [R.cat, R.del, R.ints, R.pe, R.hd, R.lc, R.su].filter(Boolean).length;
const say = t => {
  const e = $('#live');
  if (!e) return;
  e.textContent = '';
  setTimeout(() => (e.textContent = t), 60);
};

const rr = id => {
  const y = scrollY;
  render(true);
  scrollTo(0, y);
  if (id) {
    const el = document.getElementById(id);
    el && el.focus();
  }
};

const cnt = () => say(Math.min(RL().length, S.simple ? 3 : 6) + ' gifts shown.');

function loadR() {
  R.st = 'loading';
  clearTimeout(R.t);
  R.t = setTimeout(() => {
    R.st = R.fail ? 'error' : 'ok';
    R.fail = 0;
    if (/^#recommendations/.test(location.hash)) {
      rr();
      say(R.st === 'ok' ? 'Your gift picks are ready.' : 'We couldn’t load your gifts. Please try again.');
    }
  }, 900);
}

const card = (p, k) => {
  const sv = SV.includes(p.id);
  const f = fit(p);
  const imgSrc = IMAGES[p.id] || 'images/candle.jpg';
  return `<li><article class="card prod rc" aria-labelledby="t_${p.id}"><div class="th" style="background:var(--${p.bg})"><img src="${imgSrc}" alt="${p.n}" class="p-img" loading="lazy" onerror="this.style.display='none'">${sv ? `<span class="tag svd">${ic('check', 14)} Saved</span>` : ''}<button class="iconbtn save" id="sv_${p.id}" data-sv="${p.id}" aria-pressed="${sv}" aria-label="${
    sv ? 'Remove ' + p.n + ' from saved gifts' : 'Save ' + p.n
  }">${ic('heart', 20)}</button></div><div class="bd"><p class="eyebrow" style="margin:0 0 4px">${ic(k === 0 ? 'star' : f.sc >= 6 ? 'check' : 'info', 14)} ${
    k === 0 ? 'Top pick' : f.sc >= 6 ? 'Strong match' : 'Good match'
  }</p><div class="chips" style="margin-bottom:8px">${badges(p)}</div><h3 id="t_${p.id}">${p.n}</h3><div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px"><span class="price">${inr(
    p.p
  )}</span>${rate(p)}</div><p class="why"><b>Why we picked this:</b> ${why(p)}</p><ul class="ml" style="margin-bottom:16px"><li>${ic('pen', 16)} ${
    p.pe ? 'Personalizable: ' + p.pe : 'Message card only'
  }</li><li>${ic('truck', 16)} Arrives by ${dt(p.d)}</li>${p.st <= 5 ? `<li>${ic('alert', 16)} Only ${p.st} left</li>` : ''}</ul><div class="row" style="gap:8px;margin-top:auto"><a class="btn sm" href="#product/${p.id}" style="flex:1" aria-label="View Gift: ${p.n}">${tr(
    'vg',
    'View Gift'
  )} ${ic('arrow', 18)}</a><button class="btn ghost sm" data-addcart="${p.id}" title="Quick add to cart">${ic('bag', 18)}</button></div></div></article></li>`;
};

const fpanel = () => {
  const bo = OPT.bud.filter(o => o[0] !== 'custom').map(o => o[0]).concat(F.bud === 'custom' ? ['custom'] : []);
  const it = R.ints || (F.int.length ? F.int : OPT.int.map(o => o[0]));
  const tg = [
    ['pe', 'Personalizable'],
    ['hd', 'Handmade'],
    ['lc', 'Local'],
    ['su', 'Sustainable']
  ];
  return `<div class="card fp" id="fpanel" ${R.fo ? '' : 'hidden'}><div class="fg"><div><label for="fcat">Category</label><select class="in" id="fcat"><option value="">All categories</option>${CATS.map(
    c => `<option value="${c[0]}" ${R.cat === c[0] ? 'selected' : ''}>${c[1]}</option>`
  ).join('')}</select></div><div><label for="fbud">Budget</label><select class="in" id="fbud" aria-describedby="fbh">${bo
    .map(k => `<option value="${k}" ${bk() === k ? 'selected' : ''}>${bl(k)}</option>`)
    .join('')}</select><p class="help" id="fbh">A firm limit. It only changes if you change it here.</p></div><div><label for="fdel">Delivery date</label><select class="in" id="fdel"><option value="0">Any date</option>${[2, 3, 5]
    .map(d => `<option value="${d}" ${R.del === d ? 'selected' : ''}>By ${dt(d)}</option>`)
    .join('')}</select></div></div>
<fieldset class="optset" style="margin-top:16px"><legend>Interests</legend><div class="chips" style="margin-top:8px">${OPT.int
    .map(o => `<button class="fc" id="fi_${o[0]}" data-fi="${o[0]}" aria-pressed="${it.includes(o[0])}">${LB(o[0], o[1])}</button>`)
    .join('')}</div></fieldset>
<fieldset class="optset" style="margin-top:16px"><legend>Gift type</legend><div class="chips" style="margin-top:8px">${tg
    .map(t => `<button class="fc" id="ft_${t[0]}" data-ft="${t[0]}" aria-pressed="${!!R[t[0]]}">${t[1]}</button>`)
    .join('')}</div></fieldset>
<div style="margin-top:16px"><button class="btn sec sm" data-fclear ${nAct() ? '' : 'disabled'}>Clear filters</button></div></div>`;
};

const popt = (k, t, d, on) =>
  `<div class="card po"><div class="row"><div style="flex:1"><h3 id="po_${k}">${t}</h3><p class="help" style="margin:0">${d}</p></div><button class="tgl" role="switch" id="pb_${k}" data-po="${k}" aria-checked="${!!on}" aria-labelledby="po_${k}"><span>${
    on ? ic('check', 18) + ' On' : 'Off'
  }</span></button></div></div>`;

const WST = [
  ['kraft', 'Classic kraft & ribbon', '#C9A27A', '#7A4A2A'],
  ['festive', 'Festive red & gold', '#B3261E', '#E6B800'],
  ['floral', 'Soft floral', '#F3B7CB', '#B8456E']
];
const GST = [
  ['warm', 'Warm hearts', 'heart'],
  ['bright', 'Bright & festive', 'sun'],
  ['calm', 'Calm & simple', 'leaf']
];

const MSG = {
  birthday: ['Wishing you a beautiful birthday filled with happiness ♡', 'Just a little something to remind you how special you are.', 'Happy birthday! May this year bring you everything you wish for.'],
  anniv: ['Happy anniversary! Here’s to every moment you’ve shared ♡', 'Another year, another reason to celebrate you both.', 'Wishing you a lifetime of love and laughter.'],
  thanks: ['Thank you for everything you do. It means more than you know.', 'With heartfelt thanks, just for being you.', 'Your kindness made a real difference. Thank you ♡'],
  wedding: ['Congratulations on your wedding! Wishing you a lifetime of happiness ♡', 'May your journey together be full of love and joy.', 'Warm wishes to the happy couple.'],
  festival: ['Wishing you a bright and joyful festival with the people you love ♡', 'May this festival bring peace, sweets and smiles.', 'Sending warm festive wishes your way.'],
  house: ['Congratulations on your new home! May it be filled with love ♡', 'Wishing you happy days and warm memories in your new space.', 'A little something to make your new house feel like home.'],
  justbc: ['Just a little something to remind you how special you are.', 'Thinking of you today, and smiling ♡', 'Because you deserve a surprise.'],
  oother: ['Sending you a little love and a lot of good wishes ♡', 'Thinking of you. I hope this brings a smile.', 'Just a little something to remind you how special you are.']
};

const NV = /^[\p{L}\p{M}0-9 .,'&-]+$/u;
const LM = { nm: 16, ln: 30, gt: 20, gm: 150, gf: 20 };
const NK = ['nm', 'ln', 'gt', 'gf'];
const BAD = 'Use only letters, numbers, spaces and . , \' & - here.';

const esc = s =>
  String(s).replace(
    /[&<>"']/g,
    c =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[c])
  );

const pid = () => location.hash.split('/')[1];
const wn = (k, v) =>
  v.length >= LM[k]
    ? ic('info', 14) + ' Limit reached.'
    : NK.includes(k) && v.trim() && !NV.test(v.trim())
    ? ic('alert', 14) + ' ' + BAD
    : v.length >= LM[k] * 0.9
    ? ic('info', 14) + ' Almost full.'
    : '';

const cn = (k, v) => `${v.length} of ${LM[k]} characters`;

const vP = (p, o) => {
  const e = {};
  if (o.pe && p.pe) {
    const n = (o.nm || '').trim();
    const l = (o.ln || '').trim();
    if (!n) e.nm = 'Please add the name or text for your gift. For example: Aai.';
    else if (!NV.test(n)) e.nm = BAD;
    if (l && !NV.test(l)) e.ln = BAD;
  }
  return e;
};

const vG = o => {
  const e = {};
  const t = (o.gt || '').trim();
  const m = (o.gm || '').trim();
  const f = (o.gf || '').trim();
  if (!t) e.gt = 'Please write who the card is for. For example: Aai.';
  else if (!NV.test(t)) e.gt = BAD;
  if (!m) e.gm = 'Please choose a suggested message or write your own.';
  if (f && !NV.test(f)) e.gf = BAD;
  return e;
};

const pc = (p, o) => {
  const pe = !!(o.pe && p.pe);
  const wx = o.wr ? WR : 0;
  const ex = pe ? PE : 0;
  const df = p.p >= 999 ? 0 : 60;
  return { pe, wr: !!o.wr, ex, wx, df, dl: p.d + (pe ? 1 : 0), tot: p.p + ex + wx + df };
};

const wsOf = o => WST.find(x => x[0] === o.ws) || WST[0];
const gsOf = o => GST.find(x => x[0] === o.gs) || GST[0];

const plate = o => `<b>${o.nm ? esc(o.nm) : 'Your text'}</b>${o.ln ? '<small>' + esc(o.ln) + '</small>' : ''}`;

const gcard = o => {
  const s = gsOf(o);
  return `<div class="gcard gs_${s[0]}"><span>${ic(s[2], 26)}</span><b class="gsn">${s[1]}</b><p class="${o.gt ? '' : 'ph'}" style="margin-top:8px">${
    o.gt ? 'Dear ' + esc(o.gt) + ',' : 'Dear (name),'
  }</p><p class="gmsg ${o.gm ? '' : 'ph'}">${o.gm ? esc(o.gm) : 'Your message will appear here.'}</p>${o.gf ? `<p class="gfr">With love, ${esc(o.gf)}</p>` : ''}</div>`;
};

const fld = (k, lbl, ex, o, er, ta) => {
  const v = o[k] || '';
  const d = `h_${k} c_${k}${er[k] ? ' e_' + k : ''}`;
  const a = `id="in_${k}" data-f="${k}" maxlength="${LM[k]}" aria-describedby="${d}" ${er[k] ? 'aria-invalid="true"' : ''}`;
  return `<div style="margin-bottom:16px"><label for="in_${k}">${lbl}</label>${
    ta ? `<textarea class="in${er[k] ? ' err' : ''}" rows="4" ${a}>${esc(v)}</textarea>` : `<input class="in${er[k] ? ' err' : ''}" type="text" autocomplete="off" value="${esc(v)}" ${a}>`
  }<p class="help" id="h_${k}" style="margin-bottom:0">${ex}</p><p class="help" style="margin:2px 0 0"><span id="c_${k}">${cn(k, v)}</span> <span id="w_${k}" aria-live="polite">${wn(
    k,
    v
  )}</span></p>${er[k] ? `<p class="help e" id="e_${k}">${ic('alert', 14)} ${er[k]}</p>` : ''}</div>`;
};

const sumry = (p, o) => {
  const c = pc(p, o);
  const r = [[p.n, inr(p.p)]];
  c.pe && r.push(['Personalization: ' + p.pe, '+' + inr(c.ex)]);
  c.wr && r.push(['Gift wrapping: ' + wsOf(o)[1], '+' + inr(c.wx)]);
  !o.gx && r.push(['Greeting card', 'Free']);
  r.push(['Delivery', c.df ? inr(c.df) : 'Free']);
  return `<dl class="sy" aria-live="polite">${r.map(x => `<div><dt>${x[0]}</dt><dd>${x[1]}</dd></div>`).join('')}<div class="tot"><dt>Total</dt><dd>${inr(c.tot)}</dd></div></dl>`;
};

const prog = n => progress(['Personalize', 'Greeting card', 'Preview'], n);
const errb = er => {
  const k = Object.keys(er);
  return k.length ? `<div role="alert">${msg('warn', 'alert', 'Please fix ' + k.length + (k.length > 1 ? ' things' : ' thing') + ' below, then try again.')}</div>` : '';
};

const box = (w, to) =>
  `<svg viewBox="0 0 260 230" style="width:100%;max-width:320px" role="img" aria-label="Wrapped gift box, ${w[1]}${to ? '. The tag says For ' + esc(to) : ''}"><defs><pattern id="pt" width="20" height="20" patternUnits="userSpaceOnUse">${
    w[0] === 'kraft' ? '<path d="M0 10h20" stroke="#0003"/>' : w[0] === 'festive' ? '<circle cx="10" cy="10" r="2.500" fill="#E6B800"/>' : '<circle cx="10" cy="10" r="6" fill="#fff9"/><circle cx="10" cy="10" r="2" fill="#B8456E"/>'
  }</pattern></defs><rect x="40" y="100" width="180" height="110" rx="8" fill="${w[2]}"/><rect x="40" y="100" width="180" height="110" rx="8" fill="url(#pt)"/><rect x="30" y="72" width="200" height="38" rx="8" fill="${
    w[2]
  }" stroke="#0004"/><rect x="30" y="72" width="200" height="38" rx="8" fill="url(#pt)"/><rect x="120" y="72" width="20" height="138" fill="${w[3]}"/><path d="M130 72c-34-44-66-8-30 0zM130 72c34-44 66-8 30 0z" fill="${
    w[3]
  }"/><circle cx="130" cy="72" r="9" fill="${w[3]}"/><g transform="rotate(-8 200 160)"><rect x="168" y="146" width="66" height="40" rx="6" fill="#fff" stroke="#3B2238" stroke-width="2"/><text x="201" y="162" text-anchor="middle" font-size="10" fill="#3B2238" font-family="Nunito,sans-serif">For</text><text x="201" y="177" text-anchor="middle" font-size="12" font-weight="800" fill="#3B2238" font-family="Nunito,sans-serif">${
    to ? esc(to.slice(0, 10)) : 'you'
  }</text></g></svg>`;

const rw = (t, x, h, l) =>
  `<li class="card row"><div style="flex:1"><h3 style="margin:0 0 2px;font-size:16px">${t}</h3><p style="margin:0;overflow-wrap:anywhere">${x}</p></div><a class="btn sec sm" href="${h}" aria-label="${l}">${l.split(' ')[0]}</a></li>`;

function sayMsg() {
  const o = PS[pid()] || {};
  const st = $('#sayst');
  if (!st) return;
  clearTimeout(sayMsg.t);
  if (!(o.gm || '').trim()) {
    st.innerHTML = `<div role="alert">${msg('warn', 'alert', 'Write or choose a message first, then tap Listen.')}</div>`;
    return;
  }
  const t = `${o.gt ? 'Dear ' + o.gt + '. ' : ''}${o.gm}${o.gf ? '. With love, ' + o.gf : ''}`;
  const fin = () => {
    st.innerHTML = msg('ok', 'check', 'Finished. Tap Listen to hear it again.');
  };
  st.innerHTML = `<div class="msg info">${ic('mic')}<span class="pulse"></span><span><b>Listening…</b> Reading your card aloud.</span><button class="btn sec sm" data-saystop>Stop</button></div>`;
  if ('speechSynthesis' in window && window.SpeechSynthesisUtterance) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = { mr: 'mr-IN', hi: 'hi-IN' }[S.lang] || 'en-IN';
    u.onend = fin;
    u.onerror = () => {};
    speechSynthesis.speak(u);
  } else {
    sayMsg.t = setTimeout(fin, 2500);
  }
}

// --- Views Routing & Full Functional Pages ---
const V = {
  welcome: () =>
    `<section class="welcome"><div class="blob b1"></div><div class="blob b2"></div><div class="wc"><div class="logo-lg"><img src="images/logo.png" alt="आपुलकी Logo" class="welcome-logo-img"></div><h1 lang="mr">आपुलकी</h1><p class="sub">Aapulki</p><p class="tg">${tr(
      'tag',
      'Gifts that carry a little love.'
    )}</p>${btn(tr('begin', 'Begin') + ' ' + ic('arrow', 20), '#home')}</div></section>`,

  home: () => `<div class="wrap">
<section class="hero"><div>${banners()}<p class="eyebrow">${tr('eb', 'Your gifting concierge')}</p><h1>${tr(
    'h1',
    'Find a gift they’ll actually love ♡',
    'Find a gift for someone you love ♡'
  )}</h1><p class="mut lead">${tr(
    'lead',
    'Tell us who you’re gifting, the occasion and your budget. We’ll do the rest.',
    'Tell us who, when and how much. We do the rest.'
  )}</p><div class="row" style="flex-wrap:wrap">${btn(
    tr('cta', 'Find My Perfect Gift') + ' ' + ic('arrow', 20),
    '#finder'
  )}${btn(tr('browse', 'Browse Gifts'), '#browse', 'sec')}</div></div>
<div class="art deco" role="img" aria-label="${CL}">${crowd()}</div></section>
${S.simple ? steps3() : ''}
<section class="sec" aria-labelledby="vs"><div class="card"><div class="row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 id="vs" style="font-size:22px">${tr(
    'vs',
    'Voice search'
  )}</h2><p class="help" style="margin:0">Say what you need, like “a gift for Aai under ₹1000”. Prototype: voice is simulated.</p></div><button class="btn sec" data-listen="vhome">${ic(
    'mic',
    20
  )} ${tr('vsb', 'Search by voice')}</button></div><div id="vhome" aria-live="polite" style="margin-top:8px"></div></div></section>
<section class="sec rich"><h2>${tr('qb', 'Quick budget')}</h2><p class="mut">Tap a budget to start the Gift Finder with it selected.</p><div class="chips">${OPT.bud
    .slice(0, 4)
    .map(b => `<a class="sumc" href="#finder" data-qbud="${b[0]}">${LB(b[0], b[1])}</a>`)
    .join('')}</div></section>
<section class="sec rich"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><div><h2>${tr(
    's2',
    'Upcoming occasions'
  )}</h2><p class="mut">Upcoming moments with gentle reminders before the date.</p></div>${btn('See all occasions', '#occasions', 'sec sm')}</div>
<div class="grid">${OCCASIONS.slice(0, 3)
    .map(
      o => {
        const occIcon = o.occ === 'birthday' ? 'birthday' : o.occ === 'anniv' || o.occ === 'wedding' ? 'rings' : o.occ === 'thanks' || o.occ === 'festival' ? 'bouquet' : 'bell';
        return `<div class="card row" style="justify-content:space-between;align-items:center"><div class="row" style="gap:12px;align-items:center"><div class="tile" style="margin:0;width:40px;height:40px">${ic(occIcon, 24)}</div><div><div class="date" style="display:inline-block;margin-bottom:2px">${o.date}</div><h3 style="margin:0">${o.name}</h3><span class="mut">${o.person} · in ${o.days} days</span></div></div><a class="btn ghost sm" href="#finder" data-pickocc="${o.id}">Find gift</a></div>`;
      }
    )
    .join('')}</div></section>
<section class="sec rich"><h2>${tr('s3', 'Personalised picks')}</h2><p class="mut">Gifts matched to the people and occasions you cherish.</p><div class="grid">
${prod('Hand-poured soy candle set', ['Local artisan', 'Personalise'], '₹1,190', 'sun', 'peach', 'candle')}${prod(
    'Handloom stole, silk blend',
    ['Handloom', 'Festive'],
    '₹1,799',
    'heart',
    'peach',
    'stole'
  )}${prod('Name-engraved brass diya', ['Personalise', 'Eco-friendly'], '₹649', 'sun', 'blush', 'diya')}</div></section>
<section class="sec rich"><h2>${tr('pc', 'Popular categories')}</h2><div class="grid cats">${[
    ['heart', 'Self-care', 'selfcare'],
    ['cup', 'Food & sweets', 'food'],
    ['book', 'Books', 'books'],
    ['home', 'Home & décor', 'home'],
    ['leaf', 'Plants', 'plants'],
    ['art', 'Handmade', 'art']
  ]
    .map(c => `<a class="cat" href="#browse?cat=${c[2]}">${ic(c[0])}<span>${c[1]}</span></a>`)
    .join('')}</div></section>
<section class="sec rich"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h2>${tr(
    'rs',
    'Recently saved and viewed'
  )}</h2>${btn('See all saved', '#saved', 'sec sm')}</div><div class="grid">${(SV.length ? SV.slice(0, 3) : ['diya', 'candle', 'planter'])
    .map(id => {
      const p = PR.find(x => x.id === id) || PR[0];
      return `<a class="card row" href="#product/${p.id}" style="text-decoration:none;gap:16px"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" style="width:56px;height:56px;border-radius:14px;object-fit:cover;flex-shrink:0"><div><h3 style="margin:0;font-size:16px">${p.n}</h3><span class="mut">${inr(p.p)} · Saved</span></div></a>`;
    })
    .join('')}</div></section>
<section class="sec rich"><div class="card feat"><div class="row" style="flex-wrap:wrap"><div class="tile" style="background:var(--card);margin:0">${ic(
    'cal'
  )}</div><div style="flex:1;min-width:200px"><h2 style="font-size:22px;margin:0">${tr(
    'lm',
    'Last-minute gifts'
  )}</h2><p style="margin:0">Need it soon? Pick a delivery date and we’ll show gifts that can make it.</p></div>${btn(
    'See gifts for this week',
    '#browse?del=2',
    'sec sm'
  )}</div></div></section>
<section class="sec rich"><div class="grid"><div class="card"><div class="tile">${ic('leaf')}</div><h2 style="font-size:22px">${tr(
    'sl',
    'Sustainable & Local'
  )}</h2><p class="mut">Artisan-made, eco-friendly gifts from makers across India.</p>${btn(
    'Explore local gifts',
    '#local',
    'sec sm'
  )}</div><div class="card"><div class="tile">${ic('split')}</div><h2 style="font-size:22px">${tr(
    'gt',
    'Gift Together'
  )}</h2><p class="mut">Invite friends or family to share the cost of one special gift.</p>${btn(
    'Start a group gift',
    '#together',
    'sec sm'
  )}</div></div></section></div>`,

  finder: () => {
    const ST = [
      ['who', 'who', 'Who are you gifting?'],
      ['occasion', 'occ', 'What’s the occasion?'],
      ['budget', 'bud', 'What’s your budget?'],
      ['interests', 'int', 'What do they enjoy?']
    ];
    const QK = ['who', 'q2', 'q3', 'q4'];
    const BK = ['#home', '#finder', '#finder/occasion', '#finder/budget'];
    let n = ST.findIndex(x => x[0] === location.hash.split('/')[1]);
    if (n < 0) n = 0;
    const k = ST[n][1];
    const multi = n === 3;
    const q = tr(QK[n], ST[n][2]);
    const vis = S.simple ? SIM[k] : 0;
    const sel = id => (multi ? F.int.includes(id) : F[k] === id);
    const list = OPT[k].filter(o => !vis || vis.includes(o[0]) || sel(o[0]));
    const sm = ST.slice(0, n)
      .filter(x => lab(x[1]))
      .map(
        x =>
          `<a class="sumc" href="${x[0] === 'who' ? '#finder' : '#finder/' + x[0]}" aria-label="Change ${x[0]}: ${lab(x[1])}">${ic(
            'check',
            16
          )} ${lab(x[1])}</a>`
      )
      .join('');
    return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px">${progress(
      tr('pl', 'Who|Occasion|Budget|Interests').split('|'),
      n
    )}<p class="eyebrow">${tr('stx', 'Step {n} of 4').replace('{n}', n + 1)}</p><h1 style="font-size:32px">${q}</h1>${
      sm ? `<div class="chips" role="group" style="margin:0 0 16px" aria-label="${tr('ch', 'Your choices')}">${sm}</div>` : ''
    }<p class="mut">${tr(multi ? 'h_few' : 'h_one', multi ? 'Pick a few. Choose at least one.' : 'Choose one. You can change it later.')}</p><div id="ferr"></div><fieldset class="optset"><legend class="sr">${q}</legend><div class="optg">${list
      .map(
        o =>
          `<label class="opt"><input type="${multi ? 'checkbox' : 'radio'}" name="${k}" value="${o[0]}" id="o_${k}_${o[0]}" ${
            sel(o[0]) ? 'checked' : ''
          }><span>${LB(o[0], o[1])}</span></label>`
      )
      .join('')}</div></fieldset>${
      n === 2
        ? `<div id="cust" ${F.bud === 'custom' ? '' : 'hidden'} style="margin-top:16px;max-width:320px"><label for="cin">${tr(
            'cb',
            'Your budget (₹)'
          )}</label><input class="in" id="cin" type="number" inputmode="numeric" min="1" step="1" value="${F.cust || ''}" aria-describedby="cinh"><p class="help" id="cinh">Enter an amount in rupees, for example 1500.</p></div>`
        : ''
    }<div class="row" style="margin-top:32px;flex-wrap:wrap;justify-content:space-between"><a class="btn sec" href="${BK[n]}">${tr(
      'back',
      'Back'
    )}</a><button class="btn" data-next="${ST[n][0]}">${n === 3 ? tr('show', 'Show my gifts') : tr('cont', 'Continue')} ${ic(
      'arrow',
      20
    )}</button></div></section></div>`;
  },

  recommendations: () => {
    if (!ready())
      return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px"><div class="tile">${ic(
        'gift'
      )}</div><h1 style="font-size:32px">${tr(
        'rt',
        'Gifts picked for them ♡'
      )}</h1>${msg('info', 'info', 'Tell us who the gift is for, the occasion, your budget and what they enjoy first.')}<div style="margin-top:24px">${btn(
        tr('cta', 'Find My Perfect Gift'),
        '#finder'
      )}</div></section></div>`;

    const all = RL();
    const cap = S.simple ? 3 : 8;
    const sh = all.slice(0, cap);
    const na = nAct() + (R.bud ? 1 : 0);
    const sum = [S.lang === 'en' ? 'For ' + whoS() : whoS(), lab('occ'), lab('bud'), F.int.map(il).join(', ')].join(' • ');
    const rb =
      R.st === 'loading'
        ? `<div role="status">${msg('info', 'info', 'Finding gifts for you…')}</div><ul class="rl" aria-hidden="true">${[1, 2, 3]
            .map(() => `<li><div class="card" style="width:100%"><div class="skel" style="height:120px"></div><div class="skel"></div><div class="skel"></div><div class="skel" style="width:60%"></div></div></li>`)
            .join('')}</ul>`
        : R.st === 'error'
        ? `<div role="alert">${msg('warn', 'off', 'We couldn’t load your gifts. Check your connection and try again. Your choices are saved.')}</div><button class="btn" data-rretry>${ic(
            'retry',
            18
          )} Try again</button>`
        : !all.length
        ? `<div class="card" role="status"><div class="tile">${ic('alert')}</div><h2 style="font-size:22px">No gifts match yet</h2><p>Nothing fits all your filters within ${bl(
            bk()
          )}. Your budget stays fixed unless you change it yourself.</p><div class="row" style="flex-wrap:wrap">${
            nAct() ? '<button class="btn" data-fclear>Clear filters</button>' : ''
          }<button class="btn sec" data-ebud>Edit budget</button><a class="btn sec" href="#finder">${tr(
            'ed',
            'Edit your choices'
          )}</a></div></div>`
        : `<p class="mut" role="status">Showing ${sh.length} of ${all.length} gifts that fit. We show only your best matches, strongest first.</p><ul class="rl">${sh
            .map((x, k) => card(x.p, k))
            .join('')}</ul>`;

    return `<div class="wrap"><section class="sec" style="margin-top:32px">${progress(
      tr('pl', 'Who|Occasion|Budget|Interests').split('|').concat('Picks'),
      4
    )}<h1 id="rh" tabindex="-1" style="font-size:32px">${tr('rt', 'Gifts picked for them ♡')}</h1><p class="lead" id="rsum">${sum}</p>
<div class="row" style="flex-wrap:wrap;margin-bottom:16px"><a class="btn sec sm" href="#finder">${ic('retry', 18)} ${tr(
      'ed',
      'Edit your choices'
    )}</a><button class="btn ghost sm" id="fbtn" data-fo aria-expanded="${!!R.fo}" aria-controls="fpanel">Filters${
      na ? ' (' + na + ' on)' : ''
    }</button><a class="sumc" href="#saved">${ic('heart', 16)} Saved gifts: ${SV.length}</a><a class="sumc" href="#cart">${ic(
      'bag',
      16
    )} Cart (${CART.length})</a></div>
${
  R.bud && R.bud !== F.bud
    ? `<div role="status">${msg('warn', 'alert', 'You changed your budget to ' + bl(R.bud) + '. Your original budget was ' + lab('bud') + '.')}</div><button class="btn sec sm" data-rrestore>Restore my budget</button>`
    : `<p class="help">${ic('info', 14)} Your budget of ${lab('bud')} is a firm limit. We never show gifts outside it.</p>`
}
${fpanel()}<div style="margin-top:16px">${rb}</div>
</section></div>`;
  },

  // --- Occasions Feature Page ---
  occasions: () => {
    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:16px">
  <div>
    <div class="tile">${ic('cal')}</div>
    <h1 style="font-size:32px">Occasions & Reminders</h1>
    <p class="mut">Birthdays, anniversaries and festivals — never miss a meaningful date again.</p>
  </div>
  <button class="btn" data-modal="add-occasion">${ic('plus', 20)} Add Occasion</button>
</div>

<div class="chips" style="margin:20px 0 24px">
  <button class="chip" aria-pressed="${R.occFilter === 'all'}" data-occfilter="all">All Dates (${OCCASIONS.length})</button>
  <button class="chip" aria-pressed="${R.occFilter === 'birthday'}" data-occfilter="birthday">${ic('birthday', 18)} Birthdays</button>
  <button class="chip" aria-pressed="${R.occFilter === 'anniv'}" data-occfilter="anniv">${ic('rings', 18)} Anniversaries</button>
  <button class="chip" aria-pressed="${R.occFilter === 'festival'}" data-occfilter="festival">${ic('bouquet', 18)} Celebrations</button>
</div>

<div class="grid">
${
  OCCASIONS.filter(o => R.occFilter === 'all' || o.occ === R.occFilter)
    .map(
      o => {
        const occIcon = o.occ === 'birthday' ? 'birthday' : o.occ === 'anniv' || o.occ === 'wedding' ? 'rings' : o.occ === 'thanks' || o.occ === 'festival' ? 'bouquet' : 'bell';
        return `
<div class="card" style="display:flex;flex-direction:column;justify-content:space-between">
  <div>
    <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:12px">
      <div class="row" style="align-items:center;gap:8px">
        <div class="tile" style="width:36px;height:36px;margin:0;border-radius:10px">${ic(occIcon, 22)}</div>
        <span class="date">${o.date}</span>
      </div>
      <span class="tag ${o.days <= 10 ? 'b' : 'l'}">In ${o.days} days</span>
    </div>
    <h3 style="margin:0 0 4px">${o.name}</h3>
    <p class="mut" style="font-size:14px;margin-bottom:8px">${ic('user', 14)} For ${o.person}</p>
    <p class="help" style="margin-bottom:16px">${o.note || 'No notes added'}</p>
  </div>
  <div class="row" style="justify-content:space-between;gap:8px;padding-top:12px;border-top:1px solid var(--line)">
    <a class="btn sm" href="#finder" data-pickocc="${o.id}">${ic('finder', 18)} Find Gift</a>
    <button class="iconbtn" data-delocc="${o.id}" title="Delete occasion" style="width:40px;height:40px">${ic('trash', 18)}</button>
  </div>
</div>`;
      }
    )
    .join('') || '<div class="empty-state" style="grid-column:1/-1"><p>No occasions in this category yet.</p></div>'
}
</div>
</section></div>`;
  },

  // --- Recipients Feature Page ---
  recipients: () => {
    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:16px">
  <div>
    <div class="tile">${ic('users')}</div>
    <h1 style="font-size:32px">My Recipients</h1>
    <p class="mut">Keep your loved ones’ tastes, interests and special dates all in one thoughtful place.</p>
  </div>
  <button class="btn" data-modal="add-recipient">${ic('plus', 20)} Add Recipient</button>
</div>

<div class="grid" style="margin-top:24px">
${RECIPIENTS.map(
  r => `
<div class="card" style="display:flex;flex-direction:column;justify-content:space-between">
  <div>
    <div class="row" style="margin-bottom:16px">
      <div class="avatar" style="background:var(--${r.bg})">${r.avatar}</div>
      <div>
        <h3 style="margin:0">${r.name}</h3>
        <span class="tag l" style="text-transform:capitalize">${r.who}</span>
      </div>
    </div>
    <p style="font-size:14px;font-weight:700;margin:0 0 4px">${ic('cal', 14)} ${r.occs}</p>
    <p class="mut" style="font-size:14px;margin-bottom:12px">${r.notes}</p>
    <div class="chips" style="margin-bottom:16px">
      ${r.ints.map(i => `<span class="tag">${il(i)}</span>`).join('')}
    </div>
  </div>
  <div class="row" style="justify-content:space-between;gap:8px;padding-top:12px;border-top:1px solid var(--line)">
    <a class="btn sm" href="#finder" data-pickrec="${r.id}">${ic('gift', 18)} Find Gift for ${r.name}</a>
    <button class="iconbtn" data-delrec="${r.id}" title="Delete recipient" style="width:40px;height:40px">${ic('trash', 18)}</button>
  </div>
</div>`
).join('')}
</div>
</section></div>`;
  },

  // --- Saved Gifts Feature Page ---
  saved: () => {
    const savedProducts = PR.filter(p => SV.includes(p.id));
    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:16px">
  <div>
    <div class="tile">${ic('heart')}</div>
    <h1 style="font-size:32px">Saved Gifts (${savedProducts.length})</h1>
    <p class="mut">Gifts you’ve shortlisted to surprise friends and family.</p>
  </div>
  <div class="row" style="gap:8px">
    <a class="btn sec sm" href="#browse">Browse All Gifts</a>
    <a class="btn sm" href="#finder">${ic('gift', 18)} Start Gift Finder</a>
  </div>
</div>

${
  !savedProducts.length
    ? `<div class="empty-state" style="margin-top:32px">
        <div class="tile">${ic('heart', 32)}</div>
        <h2>No saved gifts yet</h2>
        <p class="mut">Tap the heart icon on any gift while browsing to save it here for later.</p>
        <div style="margin-top:20px">${btn(tr('cta', 'Find My Perfect Gift') + ' ' + ic('arrow', 20), '#finder')}</div>
      </div>`
    : `<ul class="rl" style="margin-top:24px">
        ${savedProducts
          .map(
            p => `
          <li>
            <article class="card prod rc" aria-labelledby="t_${p.id}">
              <div class="th" style="background:var(--${p.bg})">
                <img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" class="p-img" loading="lazy">
                <button class="iconbtn save" data-sv="${p.id}" aria-pressed="true" aria-label="Remove ${p.n}">${ic(
              'heart',
              20
            )}</button>
              </div>
              <div class="bd">
                <div class="chips" style="margin-bottom:8px">${badges(p)}</div>
                <h3 id="t_${p.id}">${p.n}</h3>
                <div class="row" style="justify-content:space-between;margin-bottom:12px">
                  <span class="price">${inr(p.p)}</span>
                  ${rate(p)}
                </div>
                <ul class="ml" style="margin-bottom:16px">
                  <li>${ic('truck', 16)} Ships within 1 day</li>
                  <li>${ic('leaf', 16)} Sustainable craftsmanship</li>
                </ul>
                <div class="row" style="gap:8px;margin-top:auto">
                  <a class="btn sm" href="#product/${p.id}" style="flex:1">View & Personalize</a>
                  <button class="btn ghost sm" data-addcart="${p.id}" title="Add to Cart">${ic('bag', 18)}</button>
                </div>
              </div>
            </article>
          </li>`
          )
          .join('')}
      </ul>`
}
</section></div>`;
  },

  // --- Cart & Checkout Flow ---
  cart: () => {
    let subtotal = 0;
    const cartItems = CART.map(item => {
      const p = PR.find(x => x.id === item.id) || PR[0];
      const itemTot = p.p + (item.pe ? PE : 0) + (item.wr ? WR : 0);
      subtotal += itemTot * (item.qty || 1);
      return { ...item, p, itemTot };
    });

    const delivery = subtotal >= 999 || subtotal === 0 ? 0 : 60;
    const grandTotal = subtotal + delivery;

    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="tile">${ic('bag')}</div>
<h1 style="font-size:32px">Your Cart (${CART.length})</h1>
<p class="mut">Review your selected gifts, customized messages and packaging before checkout.</p>

${
  !CART.length
    ? `<div class="empty-state" style="margin-top:24px">
        <div class="tile">${ic('bag', 32)}</div>
        <h2>Your cart is currently empty</h2>
        <p class="mut">Find thoughtful gifts customized with personalized messages and gift wrap.</p>
        <div style="margin-top:20px">${btn(tr('cta', 'Find My Perfect Gift') + ' ' + ic('arrow', 20), '#finder')}</div>
      </div>`
    : `<div class="gl" style="margin-top:24px">
        <div>
          <ul class="pvl">
            ${cartItems
              .map(
                (item, idx) => `
              <li class="card" style="display:flex;gap:16px;align-items:center;padding:16px">
                <img src="${IMAGES[item.p.id] || 'images/candle.jpg'}" alt="${item.p.n}" style="width:56px;height:56px;border-radius:14px;object-fit:cover;flex-shrink:0">
                <div style="flex:1">
                  <h3 style="margin:0 0 4px;font-size:17px">${item.p.n}</h3>
                  <p class="mut" style="font-size:14px;margin:0 0 6px">
                    ${item.pe ? `<span class="tag b">Engraved: “${item.nm || 'Custom'}” (+₹149)</span> ` : ''}
                    ${item.wr ? `<span class="tag l">Gift wrap (+₹60)</span>` : ''}
                  </p>
                  <div class="row" style="justify-content:space-between">
                    <span class="price">${inr(item.itemTot)}</span>
                    <div class="qty-stepper">
                      <button class="qty-btn" data-cartqty="${idx}" data-delta="-1">-</button>
                      <span class="qty-val">${item.qty || 1}</span>
                      <button class="qty-btn" data-cartqty="${idx}" data-delta="1">+</button>
                    </div>
                  </div>
                </div>
                <button class="iconbtn" data-delcart="${idx}" title="Remove item" style="width:36px;height:36px;flex-shrink:0">${ic(
                  'trash',
                  16
                )}</button>
              </li>`
              )
              .join('')}
          </ul>
        </div>
        
        <div>
          <div class="card">
            <h2 style="font-size:20px;margin-bottom:16px">Order Summary</h2>
            <dl class="sy">
              <div><dt>Subtotal</dt><dd>${inr(subtotal)}</dd></div>
              <div><dt>Delivery</dt><dd>${delivery === 0 ? '<span class="tag g">FREE</span>' : inr(delivery)}</dd></div>
              <div class="tot"><dt>Total Amount</dt><dd>${inr(grandTotal)}</dd></div>
            </dl>
            <div class="card" style="background:var(--lav);margin:16px 0;padding:12px">
              <p style="margin:0;font-size:14px;font-weight:700">${ic('truck', 16)} Estimated Delivery: ${dt(2)} - ${dt(4)}</p>
            </div>
            <a class="btn" href="#checkout" style="width:100%">${ic('check', 20)} Proceed to Checkout</a>
            <p class="help" style="text-align:center;margin-top:10px">Secure checkout · Free returns on damaged items</p>
          </div>
        </div>
      </div>`
}
</section></div>`;
  },

  // --- Checkout Page ---
  checkout: () => {
    let subtotal = 0;
    CART.forEach(item => {
      const p = PR.find(x => x.id === item.id) || PR[0];
      subtotal += (p.p + (item.pe ? PE : 0) + (item.wr ? WR : 0)) * (item.qty || 1);
    });
    const delivery = subtotal >= 999 || subtotal === 0 ? 0 : 60;
    const total = subtotal + delivery;

    return `<div class="wrap" style="max-width:760px"><section class="sec" style="margin-top:32px">
<p class="crumb"><a href="#cart">Cart</a> › Checkout</p>
<h1 style="font-size:32px">Checkout</h1>
<p class="mut">Enter delivery details and place your order.</p>

<form id="chkform" onsubmit="event.preventDefault();location.hash='#order-success';">
  <div class="card" style="margin-bottom:20px">
    <h2 style="font-size:20px;margin-bottom:16px;display:flex;align-items:center;gap:8px">${ic('pin', 22)} 1. Shipping Address</h2>
    <div class="fg">
      <div>
        <label for="c_name">Full Name</label>
        <input class="in" id="c_name" required value="Anuja Dhope" placeholder="Your name">
      </div>
      <div>
        <label for="c_phone">Phone Number</label>
        <input class="in" id="c_phone" required value="+91 98765 43210" placeholder="10-digit mobile number">
      </div>
    </div>
    <div style="margin-top:12px">
      <label for="c_addr">Street Address</label>
      <input class="in" id="c_addr" required value="402, Greenfield Meadows, Baner" placeholder="Flat, building, street">
    </div>
    <div class="fg" style="margin-top:12px">
      <div>
        <label for="c_city">City</label>
        <input class="in" id="c_city" required value="Pune">
      </div>
      <div>
        <label for="c_pin">PIN Code</label>
        <input class="in" id="c_pin" required value="411045">
      </div>
    </div>
  </div>

  <div class="card" style="margin-bottom:20px">
    <h2 style="font-size:20px;margin-bottom:16px;display:flex;align-items:center;gap:8px">${ic('payment', 22)} 2. Payment Method</h2>
    <div class="rog">
      <label class="ro"><input type="radio" name="pay" value="upi" checked><span style="display:flex;align-items:center;gap:8px">${ic('payment', 20)} UPI / Google Pay / PhonePe</span></label>
      <label class="ro"><input type="radio" name="pay" value="card"><span style="display:flex;align-items:center;gap:8px">${ic('payment', 20)} Credit / Debit Card</span></label>
      <label class="ro"><input type="radio" name="pay" value="cod"><span style="display:flex;align-items:center;gap:8px">${ic('truck', 20)} Cash on Delivery</span></label>
    </div>
  </div>

  <div class="card" style="margin-bottom:24px">
    <h2 style="font-size:20px;margin-bottom:12px;display:flex;align-items:center;gap:8px">${ic('bag', 22)} 3. Order Summary</h2>
    <dl class="sy">
      <div><dt>Items Total</dt><dd>${inr(subtotal)}</dd></div>
      <div><dt>Shipping</dt><dd>${delivery === 0 ? 'FREE' : inr(delivery)}</dd></div>
      <div class="tot"><dt>Total Payable</dt><dd>${inr(total)}</dd></div>
    </dl>
  </div>

  <button class="btn" type="submit" style="width:100%">${ic('check', 20)} Place Order (${inr(total)})</button>
</form>
</section></div>`;
  },

  // --- Order Success Screen ---
  'order-success': () => {
    CART = [];
    sp();
    return `<div class="wrap" style="max-width:640px"><section class="sec" style="margin-top:48px;text-align:center">
<div class="logo-lg" style="margin:0 auto 20px;padding:8px"><img src="images/logo.png" alt="आपुलकी Logo" class="welcome-logo-img"></div>
<h1 style="font-size:36px">Order Placed with Love! ♡</h1>
<p class="lead mut">Thank you! Your order <b style="color:var(--coral)">#AAP-2026-8941</b> has been received and is being prepared with artisanal care.</p>

<div class="card" style="text-align:left;margin:24px 0;background:var(--lav)">
  <h3 style="margin:0 0 8px">${ic('truck')} Expected Delivery</h3>
  <p style="font-size:20px;font-weight:800;margin:0 0 4px">Arrives by ${dt(3)}</p>
  <p class="mut" style="font-size:14px;margin:0">Tracking link & SMS confirmation sent to +91 98765 43210.</p>
</div>

<div class="row" style="justify-content:center;gap:12px;margin-top:24px">
  <a class="btn" href="#home">${ic('home', 18)} Return Home</a>
  <a class="btn sec" href="#browse">Browse More Gifts</a>
</div>
</section></div>`;
  },

  // --- Browse All Products Page ---
  browse: () => {
    const activeCat = R.cat;
    const prods = PR.filter(p => !activeCat || p.c === activeCat);
    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:16px">
  <div>
    <div class="tile">${ic('gift')}</div>
    <h1 style="font-size:32px">Browse All Gifts</h1>
    <p class="mut">Handmade, personalized and eco-friendly gifts from master artisans across India.</p>
  </div>
</div>

<div class="chips" style="margin:20px 0 24px">
  <button class="chip" aria-pressed="${!activeCat}" data-bcat="">All (${PR.length})</button>
  ${CATS.map(c => `<button class="chip" aria-pressed="${activeCat === c[0]}" data-bcat="${c[0]}">${c[1]}</button>`).join('')}
</div>

<ul class="rl">
  ${prods
    .map(
      (p, k) => `
    <li>
      <article class="card prod rc">
        <div class="th" style="background:var(--${p.bg})">
          <img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" class="p-img" loading="lazy">
          <button class="iconbtn save" data-sv="${p.id}" aria-pressed="${SV.includes(p.id)}" aria-label="Save ${p.n}">${ic('heart', 20)}</button>
        </div>
        <div class="bd">
          <div class="chips" style="margin-bottom:8px">${badges(p)}</div>
          <h3>${p.n}</h3>
          <div class="row" style="justify-content:space-between;margin-bottom:8px">
            <span class="price">${inr(p.p)}</span>
            ${rate(p)}
          </div>
          <p class="mut" style="font-size:14px;margin-bottom:16px">${p.ds.slice(0, 75)}…</p>
          <div class="row" style="gap:8px;margin-top:auto">
            <a class="btn sm" href="#product/${p.id}" style="flex:1">View Details</a>
            <button class="btn ghost sm" data-addcart="${p.id}" title="Add to Cart">${ic('bag', 18)}</button>
          </div>
        </div>
      </article>
    </li>`
    )
    .join('')}
</ul>
</section></div>`;
  },

  // --- Sustainable & Local ---
  local: () => {
    const localProds = PR.filter(p => p.l || p.s || p.h);
    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="tile">${ic('leaf')}</div>
<h1 style="font-size:32px">Sustainable & Local Gifts</h1>
<p class="mut">Crafted by women collectives, heritage potters and local artisan units across India.</p>

<div class="card feat" style="margin:24px 0">
  <div class="row" style="flex-wrap:wrap">
    <div class="tile" style="background:var(--card);margin:0">${ic('pin')}</div>
    <div style="flex:1">
      <h3 style="margin:0">100% Plastic-Free & Ethical</h3>
      <p style="margin:4px 0 0" class="mut">Every purchase directly supports traditional generational craft clusters in Pune, Nashik, Jaipur, and Wayanad.</p>
    </div>
  </div>
</div>

<ul class="rl">
  ${localProds
    .map(
      p => `
    <li>
      <article class="card prod rc">
        <div class="th" style="background:var(--${p.bg})">
          <img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" class="p-img" loading="lazy">
        </div>
        <div class="bd">
          <div class="chips" style="margin-bottom:8px">${badges(p)}</div>
          <h3>${p.n}</h3>
          <p class="price">${inr(p.p)}</p>
          <p class="why" style="margin-bottom:16px"><b>Maker:</b> ${p.mk || 'Local artisanal unit'}</p>
          <a class="btn sm" href="#product/${p.id}" style="margin-top:auto">Explore Gift</a>
        </div>
      </article>
    </li>`
    )
    .join('')}
</ul>
</section></div>`;
  },

  // --- Gift Together ---
  together: () => {
    return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px">
<div class="tile">${ic('split')}</div>
<h1 style="font-size:32px">Gift Together</h1>
<p class="mut">Invite friends, siblings or colleagues to split the cost of a premium, unforgettable gift.</p>

<div class="card" style="margin:24px 0">
  <h2 style="font-size:20px;margin-bottom:12px">Split Calculator</h2>
  <label for="gt_cost">Gift Value (₹)</label>
  <input class="in" id="gt_cost" type="number" value="2000" oninput="$('#gt_res').textContent='₹'+Math.round(this.value/$('#gt_people').value)">
  
  <div style="margin-top:16px">
    <label for="gt_people">Number of Contributors: <b id="gt_pnum">4</b></label>
    <input id="gt_people" type="range" min="2" max="10" value="4" style="width:100%;height:44px;accent-color:var(--coral)" oninput="$('#gt_pnum').textContent=this.value;$('#gt_res').textContent='₹'+Math.round($('#gt_cost').value/this.value)">
  </div>
  
  <div class="card" style="background:var(--lav);margin-top:20px;text-align:center">
    <span class="mut">Each person pays only</span>
    <h2 style="font-size:36px;color:var(--coral);margin:4px 0" id="gt_res">₹500</h2>
    <p class="help" style="margin:0">Free shared greeting card link included for all contributors!</p>
  </div>
</div>

<button class="btn" data-toast="Group gifting invite link copied to clipboard!" style="width:100%">${ic(
      'split',
      20
    )} Create Group Gift & Share Link</button>
</section></div>`;
  },

  // --- Corporate Gifting ---
  corporate: () => {
    return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px">
<div class="row" style="align-items:center;gap:12px;margin-bottom:12px"><img src="images/logo.png" alt="Aapulki" style="width:48px;height:48px;border-radius:12px;object-fit:contain;background:#fff;padding:4px;border:1px solid var(--line);box-shadow:0 2px 8px rgba(0,0,0,0.06)"><span class="eyebrow" style="margin:0">Aapulki for Business</span></div>
<h1 style="font-size:32px">Corporate Gifting</h1>
<p class="mut">Thoughtful, sustainable gifts for employees, clients and festive hampers with custom branding.</p>

<form class="card" style="margin-top:24px" onsubmit="event.preventDefault();toast('Quote request received! Our team will contact you in 2 hours.');">
  <div class="fg">
    <div>
      <label for="co_name">Company Name</label>
      <input class="in" id="co_name" required placeholder="e.g. Acme Tech">
    </div>
    <div>
      <label for="co_cnt">Estimated Gift Count</label>
      <input class="in" id="co_cnt" type="number" required placeholder="e.g. 50">
    </div>
  </div>
  <div style="margin-top:12px">
    <label for="co_email">Work Email</label>
    <input class="in" id="co_email" type="email" required placeholder="hr@company.com">
  </div>
  <div style="margin-top:12px">
    <label for="co_msg">Requirements & Timeline</label>
    <textarea class="in" id="co_msg" placeholder="Tell us about your team, event, and budget per hamper"></textarea>
  </div>
  <button class="btn" type="submit" style="margin-top:20px;width:100%">Request Corporate Catalog & Quote</button>
</form>
</section></div>`;
  },

  product: () => {
    const id = location.hash.split('/')[1];
    const p = PR.find(x => x.id === id);
    if (!p)
      return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px"><h1 style="font-size:32px">We couldn’t find that gift</h1>${msg(
        'warn',
        'alert',
        'This gift link may be old. Go back to your picks to choose again.'
      )}<div style="margin-top:24px">${btn('Back to gift picks', '#recommendations')}</div></section></div>`;

    if (R.pid !== id) {
      R.pid = id;
      R.pv = 0;
    }
    const o = PS[id] || {};
    const sv = SV.includes(id);
    const f = fit(p);
    const ok = ready();
    const rg = rng(bk());
    const inb = !ok || (p.p >= rg[0] && p.p <= rg[1]);
    const w = whoS();
    const pe = o.pe && p.pe;
    const dl = p.d + (pe ? 1 : 0);
    const tot = p.p + (pe ? PE : 0) + (o.wr ? WR : 0);
    const vws = [
      [p.ic, p.bg, 'main view'],
      [p.ic, 'lav', 'close-up of the details'],
      ['gift', 'blush', 'gift-wrapped']
    ];
    const v = vws[R.pv] || vws[0];
    const wl = [
      ok && f.i.length && `Matches ${w}’s interest in ${f.i.map(il).join(' and ').toLowerCase()}.`,
      ok && f.o && `Well suited to a ${lab('occ')} gift.`,
      p.h && 'Handmade, so each one is a little different.',
      p.s && 'Made with sustainable materials.',
      p.l && `Made locally in ${p.l}.`,
      ok && (inb ? `Within your ${lab('bud')} budget.` : 'warn')
    ].filter(Boolean);

    return `<div class="wrap"><nav aria-label="Breadcrumb" style="margin-top:24px"><p class="crumb" style="margin:0"><a href="#finder">Gift Finder</a> › <a href="#recommendations">${tr(
      'rt',
      'Gifts picked for them ♡'
    )}</a> › <span aria-current="page">${p.n}</span></p></nav>
<div class="pd"><section class="a1" aria-label="Product images"><div class="pimg" style="background:var(--${v[1]})"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" class="pimg-main"></div><div class="chips" role="group" aria-label="Choose an image view" style="margin-top:12px">${vws
      .map(
        (x, k) =>
          `<button class="pth" id="pv${k}" data-pv="${k}" aria-pressed="${R.pv == k}" aria-label="Show ${x[2]}" style="background:var(--${x[1]})"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${x[2]}" style="width:100%;height:100%;object-fit:cover"></button>`
      )
      .join('')}</div><p class="help">Artisanal studio photography · Handcrafted authentic keepsake</p></section>
<section class="a2" aria-labelledby="pn"><div class="chips" style="margin-bottom:8px">${badges(p)}</div><h1 id="pn" style="font-size:30px">${p.n}</h1><p style="margin:0 0 8px">${rate(
      p
    )}</p><p class="price" style="font-size:30px;margin:0 0 16px">${inr(p.p)}</p>
<div class="card" style="background:var(--lav);margin-bottom:16px" aria-live="polite"><h2 style="font-size:20px;margin:0 0 8px;display:flex;gap:8px;align-items:center">${ic(
      'truck'
    )} Delivery</h2><p style="font-size:22px;font-weight:800;margin:0 0 8px">Arrives by ${dt(dl)}</p><ul class="ml" style="margin-bottom:0"><li>${ic(
      'check',
      16
    )} In stock. Ships within 1 day if you order today, ${dt(0)}.</li>${p.st <= 5 ? `<li>${ic('alert', 16)} Only ${p.st} left. Order soon.</li>` : ''}${
      pe ? `<li>${ic('info', 16)} Personalizing adds 1 day. It is included in the date above.</li>` : ''
    }<li>${ic('info', 16)} Delivery across India: ${p.p >= 999 ? 'free on this gift' : '₹60, free on gifts of ₹999 and above'}.</li><li>${ic(
      'info',
      16
    )} This date is an estimate. We confirm it again at checkout.</li></ul></div>
<fieldset class="optset"><legend class="sr">Gift options</legend>${popt(
      'pe',
      'Personalize this gift',
      p.pe ? `${p.pe}. +${inr(PE)}, adds 1 day.` : 'Message card only. Free, no delay.',
      o.pe
    )}${popt('wr', 'Gift wrapping', `Hand-wrapped with a ribbon and a tag. +${inr(WR)}, no delay.`, o.wr)}</fieldset>
<p class="price" aria-live="polite" style="margin:8px 0 16px">Total so far: ${inr(tot)}</p>
<div class="row" style="flex-wrap:wrap"><a class="btn" href="#personalize/${id}" style="flex:1">${tr('pcn', 'Personalize & Continue')} ${ic(
      'arrow',
      20
    )}</a><button class="btn sec" id="sv_${id}" data-sv="${id}" aria-pressed="${sv}">${ic('heart', 20)} ${sv ? 'Saved' : 'Save Gift'}</button></div><p class="help" style="margin-top:8px">Nothing is charged yet. You can review everything first.</p></section>
<div class="a3"><section aria-labelledby="h_ds"><h2 id="h_ds" style="margin-top:0">About this gift</h2><p>${p.ds}</p></section>
<section aria-labelledby="h_wy"><h2 id="h_wy">Why it’s a good match</h2>${
      wl.length
        ? `<ul class="ml" style="font-size:16px">${wl
            .map(t => (t === 'warn' ? `<li>${ic('alert', 18)} This gift is outside your ${lab('bud')} budget.</li>` : `<li>${ic('check', 18)} ${t}</li>`))
            .join('')}</ul>`
        : '<p class="mut">Tell us about the recipient to see why this gift fits.</p>'
    }</section>
<section aria-labelledby="h_fit"><h2 id="h_fit">Recipient and occasion fit</h2>${
      ok
        ? `<ul class="ml" style="font-size:16px"><li>${ic(f.w ? 'check' : 'info', 18)} ${
            f.w ? `Suits ${w}. It is popular with this recipient.` : `Not usually chosen for ${w}, but still a kind pick.`
          }</li><li>${ic(f.o ? 'check' : 'info', 18)} ${f.o ? `Well suited to ${lab('occ')}.` : `Not a typical ${lab('occ')} gift, but still thoughtful.`}</li></ul>`
        : msg('info', 'info', 'Answer a few questions to see how well this gift fits.') + btn('Open Gift Finder', '#finder', 'sec sm')
    }</section>
<section aria-labelledby="h_mt"><h2 id="h_mt">Materials and details</h2><ul style="padding-left:20px;margin:0 0 16px">${p.m
      .map(x => `<li>${x}</li>`)
      .join('')}</ul></section>
${
  p.mk
    ? `<section aria-labelledby="h_mk"><h2 id="h_mk">Meet the maker</h2><div class="card row" style="align-items:flex-start"><div class="tile" style="margin:0">${ic(
        p.l ? 'pin' : 'leaf'
      )}</div><div><p style="margin:0">${p.mk}</p>${p.l ? `<p class="help" style="margin:4px 0 0">Local maker, ${p.l}</p>` : ''}</div></div></section>`
    : ''
}
<p class="help" style="margin-top:24px">Stock, dates, prices and reviews are updated live.</p><a class="btn sec sm" href="#recommendations">‹ Back to gift picks</a></div></div></div>`;
  },

  personalize: () => {
    const id = pid();
    const p = PR.find(x => x.id === id);
    if (!p) return V.product();
    const o = (PS[id] = PS[id] || {});
    const c = pc(p, o);
    const er = R.er || {};
    const gc = !o.gx;
    return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px">${prog(0)}<p class="crumb"><a href="#product/${id}">${
      p.n
    }</a> › Personalize</p><h1 style="font-size:32px">Personalize your gift</h1><p class="mut">Make it feel like yours. Everything is optional unless marked.</p>${errb(er)}
<div class="card row" style="margin-bottom:16px;gap:16px"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" style="width:56px;height:56px;border-radius:14px;object-fit:cover;flex-shrink:0"><div style="flex:1"><h2 style="font-size:18px;margin:0">${
      p.n
    }</h2><span class="price">${inr(p.p)}</span></div><a class="btn sec sm" href="#product/${id}" aria-label="Change gift: ${p.n}">Change</a></div>
<h2 style="font-size:22px">Personalization</h2>${
      p.pe
        ? popt('pe', 'Add personalization', `${p.pe}. +${inr(PE)}, adds 1 day.`, o.pe) +
          (o.pe
            ? `<div class="card" style="margin-bottom:12px">${fld('nm', 'Name or text to add (required)', 'Example: Aai', o, er)}${fld(
                'ln',
                'Extra line (optional)',
                'Example: Happy Birthday',
                o,
                er
              )}<p class="help" style="margin:0 0 8px">Preview of your text</p><div class="plate" id="nmprev">${plate(o)}</div></div>`
            : '')
        : msg('info', 'info', 'This gift can’t be engraved. You can still add wrapping and a free greeting card.')
    }
<h2 style="font-size:22px;margin-top:24px;display:flex;align-items:center;gap:8px">${ic('wrap', 24)} Gift wrapping</h2>${popt('wr', 'Wrap this gift', `Hand-wrapped with a ribbon and a tag. +${inr(WR)}, no delay.`, o.wr)}${
      o.wr
        ? `<fieldset class="optset" style="margin-bottom:16px"><legend style="font-weight:800;margin-bottom:8px">Wrapping style</legend><div class="rog">${WST.map(
            w => `<label class="ro"><input type="radio" name="ws" value="${w[0]}" id="ws_${w[0]}" ${wsOf(o)[0] === w[0] ? 'checked' : ''}><span>${w[1]}</span></label>`
          ).join('')}</div></fieldset>`
        : ''
    }
<h2 style="font-size:22px;margin-top:24px;display:flex;align-items:center;gap:8px">${ic('card', 24)} Greeting card</h2>${popt('gx', 'Add a greeting card', 'Free. You’ll write it on the next step.', gc)}
<div class="card" style="background:var(--lav);margin:16px 0" aria-live="polite"><h2 style="font-size:20px;margin:0 0 8px;display:flex;gap:8px;align-items:center">${ic(
      'truck'
    )} Delivery</h2><p style="font-size:20px;font-weight:800;margin:0">Arrives by ${dt(c.dl)}</p>${
      c.pe ? `<p class="help" style="margin:4px 0 0">${ic('info', 14)} Personalizing adds 1 day. It is included.</p>` : ''
    }</div>
<div class="card" style="margin-bottom:16px"><h2 style="font-size:20px">Price summary</h2>${sumry(p, o)}</div>
<button class="btn" data-pvg style="width:100%">${tr('pvg', 'Preview My Gift')} ${ic('arrow', 20)}</button><p class="help" style="margin-top:8px">Next: ${
      gc ? 'write your greeting card' : 'see how your gift will look'
    }.</p><a class="btn sec sm" href="#product/${id}">‹ Back to gift details</a></section></div>`;
  },

  card: () => {
    const id = pid();
    const p = PR.find(x => x.id === id);
    if (!p) return V.product();
    const o = (PS[id] = PS[id] || {});
    const er = R.er || {};
    const sg = MSG[F.occ] || MSG.oother;
    return `<div class="wrap"><section class="sec" style="margin-top:32px">${prog(1)}<p class="crumb"><a href="#personalize/${id}">Personalize</a> › Greeting card</p><h1 style="font-size:32px;display:flex;align-items:center;gap:10px">${ic('card', 32)} Write a greeting card</h1><p class="mut">A free card goes in the box with your gift. Short and kind is best.</p>${errb(
      er
    )}
<div class="gl"><div><h2 style="font-size:20px">Card preview</h2><div id="lp">${gcard(o)}</div><div style="margin-top:16px"><button class="btn sec sm" data-say aria-label="Listen to your card message">${ic(
      'mic',
      18
    )} Listen</button></div><div id="sayst" aria-live="polite" style="margin-top:8px"></div></div>
<div><fieldset class="optset" style="margin-bottom:16px"><legend style="font-weight:800;margin-bottom:8px">Card style</legend><div class="rog">${GST.map(
      g => `<label class="ro"><input type="radio" name="gs" value="${g[0]}" id="gs_${g[0]}" ${gsOf(o)[0] === g[0] ? 'checked' : ''}><span>${ic(g[2], 20)} ${g[1]}</span></label>`
    ).join('')}</div></fieldset>
${fld('gt', 'Who is the card for? (required)', 'Example: Aai', o, er)}
<fieldset class="optset" style="margin-bottom:16px"><legend style="font-weight:800;margin-bottom:8px">Need ideas? Tap a message to use it</legend><div style="display:grid;gap:8px">${sg
      .map((m, i) => `<button class="fc wide" id="sg_${i}" data-sg="${i}" aria-pressed="${o.gm === m}">${m}</button>`)
      .join('')}</div></fieldset>
${fld('gm', 'Your message (required)', 'Choose an idea above or write your own. About 3 lines fit on the card.', o, er, 1)}${fld(
      'gf',
      'Signed by (optional)',
      'Example: Riya',
      o,
      er
    )}</div></div>
<div class="row" style="flex-wrap:wrap;margin-top:16px"><button class="btn" data-gnext>${tr('pvg', 'Preview My Gift')} ${ic(
      'arrow',
      20
    )}</button><button class="btn sec" data-gskip>Skip the card</button><a class="btn sec" href="#personalize/${id}">‹ Back</a></div></section></div>`;
  },

  preview: () => {
    const id = pid();
    const p = PR.find(x => x.id === id);
    if (!p) return V.product();
    const o = (PS[id] = PS[id] || {});
    const c = pc(p, o);
    const gc = !o.gx;
    const w = wsOf(o);
    const sv = SV.includes(id);
    const ms = [];
    Object.keys(vP(p, o)).length && ms.push(['Your personalization needs a name', '#personalize/' + id]);
    gc && Object.keys(vG(o)).length && ms.push(['Your greeting card is not finished', '#card/' + id]);
    return `<div class="wrap"><section class="sec" style="margin-top:32px">${prog(2)}<p class="crumb"><a href="#card/${id}">Greeting card</a> › Preview</p><h1 style="font-size:32px">Here’s how your gift will look</h1><p class="mut">Check everything once. You can change anything before you add it to your cart.</p>
${
  ms.length
    ? `<div role="alert">${msg('warn', 'alert', 'A few details are missing.')}<ul class="ml">${ms
        .map(m => `<li>${ic('alert', 16)} <a href="${m[1]}">${m[0]}</a></li>`)
        .join('')}</ul></div>`
    : ''
}
<div class="pvw"><div><h2 style="font-size:20px">Your gift</h2><div class="pimg" style="background:var(--${
      p.bg
    });position:relative;overflow:hidden;min-height:260px;padding:0;display:flex;align-items:center;justify-content:center"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" class="pimg-main">${c.pe ? `<div class="plate" role="img" aria-label="Engraved text: ${esc(o.nm || '')}${o.ln ? ', ' + esc(o.ln) : ''}" style="position:absolute;bottom:16px">${plate(o)}</div>` : ''}</div><p class="help">${
      c.pe ? 'Personalized: ' + p.pe : 'Not personalized'
    }</p></div>
<div><h2 style="font-size:20px">Wrapped${gc ? ' with your card' : ''}</h2><div style="text-align:center">${
      c.wr ? box(w, o.gt) : `<div class="card" style="min-height:230px;display:grid;place-items:center">${ic('gift', 64)}<p class="mut">Standard packaging. No gift wrapping.</p></div>`
    }</div><p class="help">${c.wr ? 'Wrapping: ' + w[1] : 'No gift wrapping'}</p></div></div>
${gc ? `<h2 style="font-size:20px;margin-top:24px">Greeting card</h2><div style="max-width:420px">${gcard(o)}</div>` : ''}
<h2 style="font-size:20px;margin-top:24px">Your choices</h2><ul class="pvl">${rw(
      'Personalization',
      c.pe ? esc(o.nm || '') + (o.ln ? ' · ' + esc(o.ln) : '') : p.pe ? 'Not added' : 'Not available for this gift',
      '#personalize/' + id,
      'Edit personalization'
    )}${rw('Gift wrapping', c.wr ? w[1] : 'No gift wrapping', '#personalize/' + id + '/wrap', 'Change wrapping')}${rw(
      'Greeting card',
      gc ? gsOf(o)[1] + ': “' + esc(o.gm || 'No message yet') + '”' : 'No greeting card',
      '#card/' + id,
      'Edit greeting card'
    )}${rw('Recipient name', o.gt ? esc(o.gt) : 'Not added yet', '#card/' + id, 'Edit recipient name')}</ul>
<div class="card" style="background:var(--lav);margin-bottom:16px">${ic('truck')} <b>Arrives by ${dt(c.dl)}</b><p class="help" style="margin:4px 0 0">This is an estimate. We confirm it again at checkout.</p></div>
<div class="card" style="margin-bottom:16px"><h2 style="font-size:20px">Price summary</h2>${sumry(p, o)}</div>
<div class="row" style="flex-wrap:wrap"><button class="btn" data-atc style="flex:1" ${ms.length ? 'disabled aria-describedby="atcn"' : ''}>${ic('bag', 20)} ${tr(
      'atc',
      'Add to Cart'
    )}</button><button class="btn sec" id="sv_${id}" data-sv="${id}" aria-pressed="${sv}">${ic('heart', 20)} ${sv ? 'Saved' : 'Save Gift'}</button></div>${
      ms.length ? `<p class="help e" id="atcn">${ic('alert', 14)} Finish the missing details above to add this gift.</p>` : ''
    }</section></div>`;
  },

  profile: () => `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px"><div class="tile">${ic(
    'user'
  )}</div><h1 style="font-size:32px">${tr('n_profile', 'Profile & Settings')}</h1><p class="mut">Manage preferences, account settings, accessibility, and reminders.</p>
<div class="grid" style="margin-top:24px">
  <div class="card">
    <h3>${ic('user')} Account Details</h3>
    <p class="mut">Anuja Dhope · anuja.dhope@example.com</p>
    <button class="btn ghost sm" data-toast="Profile updated.">Edit Name</button>
  </div>
  <div class="card">
    <h3>${ic('pin')} Saved Address</h3>
    <p class="mut">402, Greenfield Meadows, Baner, Pune 411045</p>
    <button class="btn ghost sm" data-toast="Address saved.">Manage Addresses</button>
  </div>
</div>
<div style="margin-top:20px">${btn(ic('sun', 20) + ' ' + tr('a_t', 'Accessibility settings'), '#access')}</div>
</section></div>`,

  access: () => `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px"><p class="crumb"><a href="#profile">${tr(
    'n_profile',
    'Profile'
  )}</a> › ${tr('a_t', 'Accessibility settings')}</p><h1 style="font-size:32px">${tr('a_t', 'Accessibility settings')}</h1><p class="mut">${tr(
    'a_p',
    'Aapulki adapts to you. Changes apply everywhere and are saved on this device.'
  )}</p><div class="art deco" style="max-width:300px;aspect-ratio:auto;padding:16px" role="img" aria-label="${CL}">${crowd()}</div></section>
<section class="sec"><h2>${tr('g1', 'See and read')}</h2>${seg(
    'size',
    tr('st_size', 'Text size'),
    'Makes text and buttons bigger.',
    [
      ['m', 'Standard'],
      ['l', 'Large'],
      ['xl', 'Extra large']
    ]
  )}${swi('contrast', tr('st_contrast', 'High contrast'), 'Stronger colours and borders.')}${seg(
    'lang',
    tr('st_lang', 'Language · भाषा'),
    'Choose the app language.',
    [
      ['en', 'English'],
      ['mr', 'मराठी'],
      ['hi', 'हिन्दी']
    ]
  )}</section>
<section class="sec"><h2>${tr('g2', 'Move and listen')}</h2>${swi('motion', tr('st_motion', 'Reduced motion'), 'Stops animations. Also follows your device setting.')}${swi(
    'voice',
    tr('st_voice', 'Voice and Listen'),
    'Adds a Listen button on every screen. This is a prototype.',
    `<button class="btn sec sm" data-listen="demo">${ic('mic', 18)} ${tr('lis', 'Listen')}</button><div id="vdemo" aria-live="polite" class="help" style="margin-top:8px">${VT}</div>`
  )}</section>
<section class="sec"><h2>${tr('g3', 'Simple and light')}</h2>${swi('simple', tr('st_simple', 'Simple Mode'), 'Fewer choices, no decoration and simpler words.')}${swi(
    'senior',
    tr('st_senior', 'Senior-friendly view'),
    'Larger text and buttons, with easy words.'
  )}${swi(
    'data',
    tr('st_data', 'Data Saver'),
    'Hides pictures and decoration to use less data.',
    `<div id="cdemo" aria-live="polite"></div><button class="btn sec sm" data-load style="margin-top:8px">${ic('retry', 18)} Preview loading and retry</button>`
  )}</section>
<div class="row" style="flex-wrap:wrap;margin-top:32px;gap:12px">${btn(tr('done', 'Done'), '#profile')}<button class="btn sec" data-reset>Reset to default</button></div></div>`,

  system: () => `<div class="wrap"><section class="sec"><p class="eyebrow">Design system</p><h1>Aapulki foundations</h1><p class="mut">Tokens and components used across every screen. 8px spacing, 12–20px radii, 48px minimum touch targets.</p></section>
<section class="sec"><h2>Colour</h2><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr))">${[
    ['Cream', 'bg'],
    ['Blush', 'blush'],
    ['Peach', 'peach'],
    ['Terracotta', 'coral'],
    ['Lavender', 'lav'],
    ['Warm yellow', 'sun'],
    ['Plum', 'ink'],
    ['Line', 'line']
  ]
    .map(c => `<div><div class="swatch" style="background:var(--${c[1]})"></div><b>${c[0]}</b></div>`)
    .join('')}</div></section>
<section class="sec"><h2>Typography</h2><div class="card"><h1 style="font-size:40px">Nunito 800 — headline</h1><h3>Subheading, 18/800</h3><p>Body copy, 16/400. Rounded and friendly, with Noto Sans Devanagari for <span lang="mr">आपुलकी</span>.</p><p class="help">Caption, 13px</p></div></section>
<section class="sec"><h2>Buttons & chips</h2><div class="row" style="flex-wrap:wrap"><button class="btn">Primary</button><button class="btn sec">Secondary</button><button class="btn ghost">Soft</button><button class="btn" disabled>Disabled</button></div><br>${chips([
    'Under ₹500',
    '₹500–₹1,000',
    '₹1,000–₹2,500',
    'Local',
    'Eco-friendly'
  ])}</section>
<section class="sec"><h2>Filters</h2><div class="card"><div class="grid"><div><label for="f1">Occasion</label><select class="in" id="f1"><option>Birthday</option><option>Anniversary</option></select></div><div><label for="f2">Budget up to <output id="o">₹1,500</output></label><input id="f2" type="range" min="200" max="5000" step="100" value="1500" style="width:100%;accent-color:var(--coral);height:48px" oninput="o.textContent='₹'+(+this.value).toLocaleString('en-IN')"></div></div>${chips([
    'Handmade',
    'Personalisable',
    'Ships in 2 days'
  ])}</div></section>
<section class="sec"><h2>Form</h2><div class="card" style="max-width:480px"><label for="n">Recipient name</label><input class="in" id="n" placeholder="e.g. Aai"><p class="help">We use this on the greeting card.</p><label for="m">Message</label><textarea class="in err" id="m" aria-describedby="me"></textarea><p class="help e" id="me">Please write a short message.</p><button class="btn">Continue</button></div></section>
<section class="sec"><h2>Progress</h2><div class="card">${progress(['Recipient', 'Occasion', 'Budget', 'Interests', 'Picks'], 2)}</div></section>
<section class="sec"><h2>Product card & modal</h2><div class="grid">${prod(
    'Hand-poured soy candle set',
    ['Local artisan', 'Personalise'],
    '₹899',
    'sun',
    'peach'
  )}<div class="card"><h3>Modal</h3><p class="mut">Used for confirmations, such as saving a gift.</p><button class="btn sec" data-open>Open modal</button></div></div></section>
<section class="sec"><h2>Status messages</h2>${msg('ok', 'check', 'Your gift is saved.')}${msg('info', 'info', 'Delivery to Pune takes 2–3 days.')}${msg(
    'warn',
    'alert',
    'This gift may not arrive before 12 Oct.'
  )}</section>
<section class="sec"><h2>Planned flow</h2><p class="mut">Screens built and functional.</p>${chips([
    'Recipient',
    'Occasion',
    'Budget',
    'Interests',
    'Recommendations',
    'Product Details',
    'Personalization',
    'Preview',
    'Greeting Card',
    'Cart',
    'Checkout',
    'Order Confirmation'
  ])}</section></div>`
};

function render(k) {
  const hashRaw = location.hash.slice(1) || 'welcome';
  const cleanHash = hashRaw.split('?')[0];
  const h = cleanHash.split('/')[0];
  const w = h === 'welcome';

  document.body.classList.toggle('w', w);
  $('#hdr').classList.toggle('hide', w);
  $('#ft').classList.toggle('hide', w);

  // Parse query params if any (e.g. #browse?cat=plants)
  if (hashRaw.includes('?')) {
    const params = new URLSearchParams(hashRaw.split('?')[1]);
    if (params.has('cat')) R.cat = params.get('cat');
  }

  if (h === 'recommendations' && k !== true && R.sig !== JSON.stringify(F)) {
    R.sig = JSON.stringify(F);
    loadR();
  }
  if (k !== true) R.er = null;

  let html;
  if (V[h]) html = V[h]();
  else {
    html = `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px"><div class="tile">${ic(
      'gift'
    )}</div><h1 style="font-size:32px">Page Not Found</h1><p class="mut">Let's take you back home.</p><div style="margin-top:24px">${btn(
      'Return Home',
      '#home'
    )}</div></section></div>`;
  }

  $('#app').innerHTML = html;
  $('#skip').textContent = tr('skip', 'Skip to main content');
  $('#fab').innerHTML = S.voice && !w ? `<button class="btn" data-listen="fab">${ic('mic', 22)} ${tr('lis', 'Listen')}</button><div id="vp" aria-live="polite"></div>` : '';

  // Update header cart badge
  const cartBtn = $('#cart');
  cartBtn.innerHTML = ic('bag', 22) + (CART.length ? `<span class="badge-dot">${CART.length}</span>` : '');

  $('#nav').innerHTML = NAV.map(
    n =>
      `<a href="#${n[0]}" ${
        h === n[0] || (h === 'access' && n[0] === 'profile') || (['recommendations', 'product', 'personalize', 'card', 'preview'].includes(h) && n[0] === 'finder')
          ? 'aria-current="page"'
          : ''
      }>${ic(n[2], 22)}<span>${tr('n_' + n[0], n[1])}</span></a>`
  ).join('');
  if (window.innerWidth >= 820) $('#nav').scrollLeft = 0;

  $('#ft').innerHTML = `<div class="wrap"><div class="cols"><div class="ft-brand"><div class="row" style="align-items:center;gap:12px;margin-bottom:12px"><img src="images/logo.png" alt="आपुलकी Logo" class="ft-logo"><div style="line-height:1.2"><b style="font:700 22px 'Noto Sans Devanagari',Nunito,sans-serif;display:block">आपुलकी</b> <span style="font-weight:700;color:var(--mut)">Aapulki</span></div></div><p class="mut">Gifts that carry a little love. Celebrate every bond.</p></div><div><b>Explore</b><a href="#finder">Gift Finder</a><a href="#occasions">Occasions</a><a href="#saved">Saved Gifts</a></div><div><b>Help</b><a href="#profile">Profile & Settings</a><a href="#access">Accessibility</a></div></div><p class="help" style="margin:24px 0 0">© 2026 Aapulki. Made with a little love.</p></div>`;
  const TITLES = { home: 'Home', finder: 'Gift Finder', together: 'Gift Together', local: 'Sustainable & Local Gifts', corporate: 'Corporate Gifting', occasions: 'Occasions', recipients: 'Recipients', saved: 'Saved Gifts', profile: 'Profile & Settings', access: 'Accessibility' };
  document.title = w ? 'आपुलकी (Aapulki)' : 'आपुलकी · ' + (TITLES[h] || h);

  if (k !== true) {
    scrollTo(0, 0);
    if (render.n++) $('#app').focus({ preventScroll: true });
  }
}

function toast(t) {
  const e = $('#toast');
  e.innerHTML = ic('check') + '<span>' + t + '</span>';
  e.classList.remove('hide');
  clearTimeout(toast.t);
  toast.t = setTimeout(() => e.classList.add('hide'), 3000);
}

// --- Event Delegation Handlers ---
document.addEventListener('click', e => {
  const w = e.target.closest('[data-sw]');
  if (w) {
    S[w.dataset.sw] = S[w.dataset.sw] ? 0 : 1;
    done(w.id);
    return;
  }
  if (e.target.closest('[data-reset]')) {
    S = { ...DEF };
    done();
    return;
  }
  const l = e.target.closest('[data-listen]');
  if (l) {
    const d = l.dataset.listen;
    listen($({ fab: '#vp', demo: '#vdemo', vhome: '#vhome' }[d]), d !== 'demo');
    return;
  }
  const st = e.target.closest('[data-stop]');
  if (st) {
    clearTimeout(listen.t);
    const b = st.closest('#vdemo,#vp,#vhome');
    b.innerHTML = b.id === 'vdemo' ? VT : '';
    return;
  }
  if (e.target.closest('[data-load]')) {
    load();
    return;
  }
  if (e.target.closest('#skip')) {
    e.preventDefault();
    $('#app').focus();
    return;
  }

  // Quick budget trigger
  const qb = e.target.closest('[data-qbud]');
  if (qb) {
    F.bud = qb.dataset.qbud;
    svF();
  }

  // Occasion trigger to Finder
  const po = e.target.closest('[data-pickocc]');
  if (po) {
    const occItem = OCCASIONS.find(o => o.id === po.dataset.pickocc);
    if (occItem) {
      F.who = occItem.who || 'mother';
      F.occ = occItem.occ || 'birthday';
      svF();
    }
  }

  // Recipient trigger to Finder
  const pr = e.target.closest('[data-pickrec]');
  if (pr) {
    const recItem = RECIPIENTS.find(r => r.id === pr.dataset.pickrec);
    if (recItem) {
      F.who = recItem.who || 'friend';
      F.int = [...recItem.ints];
      svF();
    }
  }

  // Browse category filter
  const bcat = e.target.closest('[data-bcat]');
  if (bcat) {
    R.cat = bcat.dataset.bcat;
    rr();
    return;
  }

  // Occasion list filter tab
  const ofil = e.target.closest('[data-occfilter]');
  if (ofil) {
    R.occFilter = ofil.dataset.occfilter;
    rr();
    return;
  }

  // Delete Occasion
  const docc = e.target.closest('[data-delocc]');
  if (docc) {
    OCCASIONS = OCCASIONS.filter(o => o.id !== docc.dataset.delocc);
    sp();
    rr();
    toast('Occasion deleted.');
    return;
  }

  // Delete Recipient
  const drec = e.target.closest('[data-delrec]');
  if (drec) {
    RECIPIENTS = RECIPIENTS.filter(r => r.id !== drec.dataset.delrec);
    sp();
    rr();
    toast('Recipient removed.');
    return;
  }

  // Modal triggers
  const mod = e.target.closest('[data-modal]');
  if (mod) {
    const type = mod.dataset.modal;
    const dlg = $('#dlg');
    if (type === 'add-occasion') {
      dlg.innerHTML = `
        <h2>Add an Occasion</h2>
        <p class="mut">Set a reminder for someone special.</p>
        <form id="addoccform" onsubmit="event.preventDefault();addOccasionHandler();">
          <label for="ao_name">Occasion Title</label>
          <input class="in" id="ao_name" required placeholder="e.g. Papa's 50th Birthday">
          <div style="margin-top:10px">
            <label for="ao_person">Recipient Name</label>
            <input class="in" id="ao_person" required placeholder="e.g. Baba">
          </div>
          <div class="fg" style="margin-top:10px">
            <div>
              <label for="ao_type">Occasion Type</label>
              <select class="in" id="ao_type">
                <option value="birthday">Birthday</option>
                <option value="anniv">Anniversary</option>
                <option value="festival">Festival</option>
                <option value="thanks">Thank You</option>
                <option value="house">Housewarming</option>
              </select>
            </div>
            <div>
              <label for="ao_date">Date (e.g. 15 Nov)</label>
              <input class="in" id="ao_date" required placeholder="15 Nov">
            </div>
          </div>
          <div style="margin-top:10px">
            <label for="ao_days">Days from now</label>
            <input class="in" id="ao_days" type="number" value="14" required>
          </div>
          <div style="margin-top:10px">
            <label for="ao_note">Preferences / Gift notes</label>
            <input class="in" id="ao_note" placeholder="e.g. Likes books and soothing scents">
          </div>
          <div class="row" style="margin-top:20px;justify-content:flex-end;gap:8px">
            <button type="button" class="btn sec sm" data-close>Cancel</button>
            <button type="submit" class="btn sm">Save Occasion</button>
          </div>
        </form>`;
      dlg.showModal();
      return;
    } else if (type === 'add-recipient') {
      dlg.innerHTML = `
        <h2>Add a Recipient</h2>
        <p class="mut">Save their preferences and gifting tastes.</p>
        <form id="addrecform" onsubmit="event.preventDefault();addRecipientHandler();">
          <label for="ar_name">Name</label>
          <input class="in" id="ar_name" required placeholder="e.g. Dadi">
          <div style="margin-top:10px">
            <label for="ar_who">Relationship</label>
            <select class="in" id="ar_who">
              <option value="mother">Mother</option>
              <option value="father">Father</option>
              <option value="friend">Friend</option>
              <option value="partner">Partner</option>
              <option value="sibling">Sibling</option>
              <option value="colleague">Colleague</option>
              <option value="wother">Other</option>
            </select>
          </div>
          <div style="margin-top:10px">
            <label for="ar_date">Special Date</label>
            <input class="in" id="ar_date" placeholder="e.g. 18 Aug (Birthday)">
          </div>
          <div style="margin-top:10px">
            <label for="ar_note">Notes & Tastes</label>
            <input class="in" id="ar_note" placeholder="e.g. Likes natural cotton and artisanal food">
          </div>
          <div class="row" style="margin-top:20px;justify-content:flex-end;gap:8px">
            <button type="button" class="btn sec sm" data-close>Cancel</button>
            <button type="submit" class="btn sm">Save Recipient</button>
          </div>
        </form>`;
      dlg.showModal();
      return;
    }
  }

  // Step progression in Finder
  const nx = e.target.closest('[data-next]');
  if (nx) {
    const sl = nx.dataset.next;
    const k = { who: 'who', occasion: 'occ', budget: 'bud', interests: 'int' }[sl];
    const er = $('#ferr');
    let m = '';
    if (k === 'int') {
      if (!F.int.length) m = tr('e3', 'Please choose at least one interest.');
    } else if (!F[k]) m = tr('e1', 'Please choose one option to continue.');
    else if (k === 'bud' && F.bud === 'custom' && !(+F.cust > 0)) m = tr('e2', 'Enter your budget in rupees, for example 1500.');
    if (m) {
      er.innerHTML = `<div role="alert">${msg('warn', 'alert', m)}</div>`;
      const f = k === 'bud' && F.bud === 'custom' ? $('#cin') : document.querySelector('.opt input');
      f && f.focus();
      return;
    }
    location.hash = {
      who: '#finder/occasion',
      occasion: '#finder/budget',
      budget: '#finder/interests',
      interests: '#recommendations'
    }[sl];
    return;
  }

  const c = e.target.closest('.chip');
  if (c && !c.hasAttribute('data-occfilter') && !c.hasAttribute('data-bcat')) {
    const g = c.parentElement;
    if (g.hasAttribute('data-single')) g.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', 'false'));
    c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' && !g.hasAttribute('data-single') ? 'false' : 'true');
  }

  if (e.target.closest('[data-open]')) $('#dlg').showModal();
  if (e.target.closest('[data-close]')) $('#dlg').close();
  const t = e.target.closest('[data-toast]');
  if (t) toast(t.dataset.toast);

  // Direct Cart navigation
  if (e.target.closest('#cart')) {
    location.hash = '#cart';
    return;
  }

  // Quick Add to Cart
  const addCart = e.target.closest('[data-addcart]');
  if (addCart) {
    const id = addCart.dataset.addcart;
    const p = PR.find(x => x.id === id);
    const existing = CART.find(c => c.id === id);
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      CART.push({ id, qty: 1 });
    }
    sp();
    render(true);
    toast(`Added “${p ? p.n : 'Gift'}” to Cart!`);
    return;
  }

  // Cart quantity adjustment
  const cqty = e.target.closest('[data-cartqty]');
  if (cqty) {
    const idx = +cqty.dataset.cartqty;
    const delta = +cqty.dataset.delta;
    if (CART[idx]) {
      CART[idx].qty = (CART[idx].qty || 1) + delta;
      if (CART[idx].qty <= 0) CART.splice(idx, 1);
      sp();
      rr();
    }
    return;
  }

  // Cart item removal
  const dcart = e.target.closest('[data-delcart]');
  if (dcart) {
    const idx = +dcart.dataset.delcart;
    CART.splice(idx, 1);
    sp();
    rr();
    toast('Item removed from cart.');
    return;
  }
});

function addOccasionHandler() {
  const name = $('#ao_name').value;
  const person = $('#ao_person').value;
  const occ = $('#ao_type').value;
  const date = $('#ao_date').value;
  const days = +$('#ao_days').value || 14;
  const note = $('#ao_note').value;
  OCCASIONS.unshift({ id: 'o_' + Date.now(), name, person, occ, date, days, note, who: 'wother' });
  sp();
  $('#dlg').close();
  rr();
  toast('Occasion saved successfully!');
}

function addRecipientHandler() {
  const name = $('#ar_name').value;
  const who = $('#ar_who').value;
  const occs = $('#ar_date').value || 'Upcoming birthday';
  const notes = $('#ar_note').value || 'Thoughtful gift preferences';
  const avatar = name.charAt(0).toUpperCase() || 'R';
  RECIPIENTS.unshift({ id: 'r_' + Date.now(), name, who, avatar, bg: 'blush', ints: ['selfcare', 'handmade'], occs, notes });
  sp();
  $('#dlg').close();
  rr();
  toast('Recipient added successfully!');
}

document.addEventListener('change', e => {
  const r = e.target;
  if (r.type === 'radio' && r.closest('.seg')) {
    S[r.name] = r.value;
    done(r.id);
  }
});

document.addEventListener('change', e => {
  const r = e.target;
  if (!r.closest('.opt')) return;
  const k = r.name;
  if (k === 'int') F.int = [...document.querySelectorAll('.opt input:checked')].map(x => x.value);
  else {
    F[k] = r.value;
    if (k === 'bud') {
      const c = $('#cust');
      if (c) c.hidden = r.value !== 'custom';
    }
  }
  svF();
  const er = $('#ferr');
  if (er) er.innerHTML = '';
});

document.addEventListener('input', e => {
  if (e.target.id === 'cin') {
    F.cust = e.target.value;
    svF();
  }
});

document.addEventListener('click', e => {
  const t = e.target;
  const c = s => t.closest(s);
  let x;
  if ((x = c('[data-sv]'))) {
    const id = x.dataset.sv;
    const p = PR.find(q => q.id === id);
    const i = SV.indexOf(id);
    i < 0 ? SV.push(id) : SV.splice(i, 1);
    sp();
    rr(x.id);
    toast(i < 0 ? `Saved “${p ? p.n : 'Gift'}” to your gifts.` : `Removed “${p ? p.n : 'Gift'}” from your saved gifts.`);
    return;
  }
  if ((x = c('[data-pv]'))) {
    R.pv = +x.dataset.pv;
    rr(x.id);
    return;
  }
  if ((x = c('[data-po]'))) {
    const id = location.hash.split('/')[1];
    const k = x.dataset.po;
    PS[id] = PS[id] || {};
    PS[id][k] = PS[id][k] ? 0 : 1;
    sp();
    rr(x.id);
    return;
  }
  if (c('[data-fo]')) {
    R.fo = !R.fo;
    rr('fbtn');
    return;
  }
  if ((x = c('[data-ft]'))) {
    R[x.dataset.ft] = R[x.dataset.ft] ? 0 : 1;
    rr(x.id);
    cnt();
    return;
  }
  if ((x = c('[data-fi]'))) {
    const s = new Set(R.ints || F.int);
    const k = x.dataset.fi;
    s.has(k) ? s.delete(k) : s.add(k);
    R.ints = s.size ? [...s] : null;
    rr(x.id);
    cnt();
    return;
  }
  if (c('[data-fclear]')) {
    Object.assign(R, { cat: '', del: 0, ints: null, pe: 0, hd: 0, lc: 0, su: 0 });
    rr('fbtn');
    cnt();
    return;
  }
  if (c('[data-rrestore]')) {
    R.bud = '';
    rr('fbtn');
    cnt();
    return;
  }
  if (c('[data-ebud]')) {
    R.fo = 1;
    rr('fbud');
    return;
  }
  if (c('[data-rretry]') || c('[data-rload]')) {
    loadR();
    rr();
    return;
  }
  if (c('[data-rfail]')) {
    R.fail = 1;
    loadR();
    rr();
    return;
  }
});

document.addEventListener('change', e => {
  const r = e.target;
  const id = r.id;
  if (id === 'fcat') R.cat = r.value;
  else if (id === 'fbud') R.bud = r.value === F.bud ? '' : r.value;
  else if (id === 'fdel') R.del = +r.value;
  else return;
  rr(id);
  cnt();
});

document.addEventListener('click', e => {
  const c = s => e.target.closest(s);
  const id = pid();
  const p = PR.find(q => q.id === id);
  let x;
  if (c('[data-pvg]')) {
    const o = PS[id] || {};
    const er = vP(p, o);
    const k = Object.keys(er);
    if (k.length) {
      R.er = er;
      rr('in_' + k[0]);
      say('Please fix ' + k.length + ' thing to continue.');
      return;
    }
    location.hash = !o.gx && !o.gok ? '#card/' + id : '#preview/' + id;
    return;
  }
  if (c('[data-gnext]')) {
    const o = PS[id] || {};
    const er = vG(o);
    const k = Object.keys(er);
    if (k.length) {
      R.er = er;
      rr('in_' + k[0]);
      say('Please fix ' + k.length + ' thing to continue.');
      return;
    }
    o.gok = 1;
    o.gx = 0;
    sp();
    location.hash = '#preview/' + id;
    return;
  }
  if (c('[data-gskip]')) {
    PS[id].gx = 1;
    sp();
    location.hash = '#preview/' + id;
    return;
  }
  if ((x = c('[data-sg]'))) {
    const o = PS[id];
    o.gm = (MSG[F.occ] || MSG.oother)[+x.dataset.sg];
    sp();
    R.er = null;
    rr(x.id);
    return;
  }
  if (c('[data-say]')) {
    sayMsg();
    return;
  }
  if (c('[data-saystop]')) {
    clearTimeout(sayMsg.t);
    window.speechSynthesis && speechSynthesis.cancel();
    $('#sayst').innerHTML = '';
    return;
  }
  if (c('[data-atc]')) {
    const curOpts = PS[id] || {};
    CART.push({
      id,
      qty: 1,
      pe: !!curOpts.pe,
      nm: curOpts.nm,
      ln: curOpts.ln,
      wr: !!curOpts.wr,
      ws: curOpts.ws || 'festive'
    });
    sp();
    location.hash = '#cart';
    return;
  }
});

document.addEventListener('input', e => {
  const t = e.target;
  const k = t.dataset.f;
  if (!k) return;
  const o = (PS[pid()] = PS[pid()] || {});
  const g = s => document.getElementById(s);
  o[k] = t.value;
  sp();
  if (g('c_' + k)) g('c_' + k).textContent = cn(k, t.value);
  if (g('w_' + k)) g('w_' + k).innerHTML = wn(k, t.value);
  const er = g('e_' + k);
  if (er) {
    er.remove();
    t.classList.remove('err');
    t.removeAttribute('aria-invalid');
  }
  if (g('lp')) g('lp').innerHTML = gcard(o);
  if (g('nmprev')) g('nmprev').innerHTML = plate(o);
});

document.addEventListener('change', e => {
  const r = e.target;
  if (r.type === 'radio' && (r.name === 'ws' || r.name === 'gs')) {
    const o = (PS[pid()] = PS[pid()] || {});
    o[r.name] = r.value;
    sp();
    rr(r.id);
  }
});

// --- Initial Launch ---
apply();
render.n = 0;
window.addEventListener('hashchange', () => render());
render();
