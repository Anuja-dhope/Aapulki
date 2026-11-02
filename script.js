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
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  box: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>'
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
    .map((l, i) => `<li class="${i < cur ? 'done' : ''}" ${i == cur ? 'aria-current="step"' : ''}>${l}${i < cur ? '<span class="sr"> (completed)</span>' : ''}</li>`)
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

let CART = [];

let ORDERS = [];
let CHK = { name: '', phone: '', addr: '', city: '', pin: '', pay: 'upi' };

try {
  SV = JSON.parse(localStorage.getItem('aaps') || '[]');
  PS = JSON.parse(localStorage.getItem('aapo') || '{}');
  const storedOcc = localStorage.getItem('aapo_occasions');
  if (storedOcc) OCCASIONS = JSON.parse(storedOcc);
  const storedRec = localStorage.getItem('aapo_recipients');
  if (storedRec) RECIPIENTS = JSON.parse(storedRec);
  const storedCart = localStorage.getItem('aapo_cart');
  if (storedCart) CART = JSON.parse(storedCart);
  ORDERS = JSON.parse(localStorage.getItem('aapo_orders') || '[]');
  Object.assign(CHK, JSON.parse(localStorage.getItem('aapo_chk') || '{}'));
} catch (e) {}

const sp = () => {
  try {
    localStorage.setItem('aaps', JSON.stringify(SV));
    localStorage.setItem('aapo', JSON.stringify(PS));
    localStorage.setItem('aapo_occasions', JSON.stringify(OCCASIONS));
    localStorage.setItem('aapo_recipients', JSON.stringify(RECIPIENTS));
    localStorage.setItem('aapo_cart', JSON.stringify(CART));
    localStorage.setItem('aapo_orders', JSON.stringify(ORDERS));
    localStorage.setItem('aapo_chk', JSON.stringify(CHK));
  } catch (e) {}
};

// --- Cart Totals, Checkout Validation & Form Errors ---
const FREE_AT = 999;
const DEL_FEE = 60;
const DEMO_PAY = 'Demo payment – no real charge';
const PAY = { upi: 'UPI / Google Pay / PhonePe', card: 'Credit / Debit Card', cod: 'Cash on Delivery' };

const cartTotals = () => {
  const lines = CART.map(item => {
    const p = PR.find(x => x.id === item.id) || PR[0];
    const pe = !!(item.pe && p.pe);
    const qty = item.qty || 1;
    const unit = p.p + (pe ? PE : 0) + (item.wr ? WR : 0);
    return { item, p, pe, qty, unit, line: unit * qty };
  });
  const sub = lines.reduce((a, l) => a + l.line, 0);
  const del = sub >= FREE_AT || !sub ? 0 : DEL_FEE;
  return {
    lines,
    count: lines.reduce((a, l) => a + l.qty, 0),
    sub,
    del,
    tot: sub + del,
    eta: Math.max(0, ...lines.map(l => l.p.d + (l.pe ? 1 : 0)))
  };
};

const totalsDl = t =>
  `<dl class="sy"><div><dt>Subtotal (${t.count} ${t.count === 1 ? 'item' : 'items'})</dt><dd>${inr(t.sub)}</dd></div><div><dt>Delivery charges</dt><dd>${
    t.del ? inr(t.del) : '<span class="tag g">FREE</span>'
  }</dd></div><div class="tot"><dt>Final total</dt><dd>${inr(t.tot)}</dd></div></dl>`;

const vC = c => {
  const e = {};
  const phone = (c.phone || '').replace(/[\s-]/g, '');
  const pin = (c.pin || '').trim();
  if (!(c.name || '').trim()) e.name = 'Please enter the full name of the person receiving this.';
  if (!phone) e.phone = 'Please enter a 10-digit phone number.';
  else if (!/^\d{10}$/.test(phone)) e.phone = 'Phone number must be exactly 10 digits, without +91. For example: 9876543210.';
  if (!(c.addr || '').trim()) e.addr = 'Please enter the flat or house number and street.';
  if (!(c.city || '').trim()) e.city = 'Please enter the city.';
  if (!pin) e.pin = 'Please enter a 6-digit PIN code.';
  else if (!/^\d{6}$/.test(pin)) e.pin = 'PIN code must be exactly 6 digits. For example: 411045.';
  return e;
};

// Shows or clears one field's error, in text and linked to its input
const fieldErr = (el, t) => {
  if (!el) return;
  const id = 'e_' + el.id;
  const old = document.getElementById(id);
  old && old.remove();
  const d = (el.getAttribute('aria-describedby') || '').split(' ').filter(x => x && x !== id);
  el.classList.toggle('err', !!t);
  if (t) {
    el.setAttribute('aria-invalid', 'true');
    d.push(id);
    const p = document.createElement('p');
    p.className = 'help e';
    p.id = id;
    p.innerHTML = ic('alert', 14) + ' ' + esc(t);
    const help = el.nextElementSibling;
    (help && help.classList.contains('help') ? help : el).after(p);
  } else el.removeAttribute('aria-invalid');
  d.length ? el.setAttribute('aria-describedby', d.join(' ')) : el.removeAttribute('aria-describedby');
};

// Applies { inputId: message } to a form; returns false and focuses the first problem
const formErrs = (box, er) => {
  const ids = Object.keys(er);
  box && box.querySelectorAll('.in').forEach(x => fieldErr(x, er[x.id]));
  const sum = box && box.querySelector('[data-errsum]');
  if (sum) sum.innerHTML = ids.length ? `<div role="alert">${msg('warn', 'alert', 'Please fix ' + ids.length + (ids.length > 1 ? ' things' : ' thing') + ' below, then try again.')}</div>` : '';
  if (ids.length) document.getElementById(ids[0]).focus();
  return !ids.length;
};

const prefix = (er, pre) => Object.fromEntries(Object.entries(er).map(([k, v]) => [pre + k, v]));

// Delivery field. live=true saves each keystroke so details survive going back
const cf = (k, lbl, ex, attrs = '', live = true) =>
  `<div><label for="c_${k}">${lbl}</label><input class="in" id="c_${k}" ${live ? `data-chk="${k}"` : ''} value="${esc(CHK[k] || '')}" required aria-describedby="ch_${k}" ${attrs}><p class="help" id="ch_${k}">${ex}</p></div>`;

const chkFields = live =>
  `<div class="fg">${cf('name', 'Full name', 'The person receiving the gift.', 'autocomplete="name"', live)}${cf(
    'phone',
    'Phone number',
    'Exactly 10 digits, without +91.',
    'type="tel" inputmode="numeric" autocomplete="tel-national"',
    live
  )}</div>${cf('addr', 'Street address', 'Flat or house number, building, street.', 'autocomplete="street-address"', live)}<div class="fg">${cf(
    'city',
    'City',
    'For example: Pune.',
    'autocomplete="address-level2"',
    live
  )}${cf('pin', 'PIN code', 'Exactly 6 digits.', 'inputmode="numeric" autocomplete="postal-code"', live)}</div>`;

// --- Occasion Dates ---
const isSample = x => /^[or][1-4]$/.test(x.id);
const sampleTag = x => (isSample(x) ? '<span class="tag" style="margin-left:6px">Sample</span>' : '');

const occNext = o => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  let d;
  if (o.iso) {
    const [y, m, dd] = o.iso.split('-').map(Number);
    d = new Date(y, m - 1, dd);
    if (d >= now) return d;
    d.setFullYear(now.getFullYear());
  } else {
    const m = /(\d{1,2})\s+([a-z]{3})/i.exec(o.date || '');
    const mi = m ? 'janfebmaraprmayjunjulaugsepoctnovdec'.indexOf(m[2].toLowerCase()) / 3 : -1;
    if (!(mi >= 0) || mi % 1) return null;
    d = new Date(now.getFullYear(), mi, +m[1]);
  }
  if (d < now) d.setFullYear(d.getFullYear() + 1);
  return d;
};

const occDays = o => {
  const d = occNext(o);
  if (!d) return o.days || 0;
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.round((d - now) / 864e5);
};
const dayTxt = n => (n <= 0 ? 'Today' : n === 1 ? 'Tomorrow' : 'In ' + n + ' days');
const occSorted = () => [...OCCASIONS].sort((a, b) => occDays(a) - occDays(b));
const occIcon = o => (o.occ === 'birthday' ? 'birthday' : o.occ === 'anniv' || o.occ === 'wedding' ? 'rings' : o.occ === 'thanks' || o.occ === 'festival' ? 'bouquet' : 'bell');

// --- Modal Helpers (native dialog: traps focus and closes on Escape) ---
function openDlg(html) {
  const dlg = $('#dlg');
  dlg.innerHTML = html;
  dlg.showModal();
}

function confirmDlg(title, body, okLabel, keepLabel, fn) {
  confirmDlg.fn = fn;
  openDlg(`<h2 id="dt">${title}</h2><p class="mut">${body}</p><div class="row" style="margin-top:24px;justify-content:flex-end;flex-wrap:wrap;gap:8px"><button class="btn sec sm" data-close autofocus>${keepLabel}</button><button class="btn danger sm" data-cfmok>${okLabel}</button></div>`);
}

// Plain quick-adds merge into an existing plain line; personalised gifts stay separate
function addToCart(id, o) {
  const p = PR.find(x => x.id === id);
  if (!p) return;
  if (!o) {
    const same = CART.find(c => c.id === id && !c.pe && !c.wr && !c.gm);
    if (same) same.qty = (same.qty || 1) + 1;
    else CART.push({ id, qty: 1 });
  } else {
    const line = { id, qty: 1, pe: !!(o.pe && p.pe), nm: o.nm, ln: o.ln, wr: !!o.wr, ws: wsOf(o)[0] };
    if (!o.gx && o.gm) Object.assign(line, { gs: gsOf(o)[0], gt: o.gt, gm: o.gm, gf: o.gf });
    CART.push(line);
  }
  sp();
  return p;
}

const itemTags = i =>
  [
    i.pe && `Personalized: “${esc(i.nm || '')}${i.ln ? ' · ' + esc(i.ln) : ''}”`,
    i.wr && `Gift wrap: ${(WST.find(x => x[0] === i.ws) || WST[0])[1]}`,
    i.gm && `Greeting card to ${esc(i.gt || '')}`
  ]
    .filter(Boolean)
    .map((x, k) => `<span class="tag ${['b', 'l', 'c'][k]}">${x}</span>`)
    .join(' ');

function removeCartLine(idx) {
  const item = CART[idx];
  if (!item) return;
  R.undo = { item, idx };
  CART.splice(idx, 1);
  sp();
  rr('undobtn');
}

// --- Simulated Order Tracking (time since order; no courier integration) ---
const STG = ['Order Placed', 'Order Confirmed', 'Gift Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
const SIM_TRACK = 'Simulated tracking status';
const stgTimes = o => {
  const span = Math.max(o.eta, 1) * 864e5;
  return [0, 3e5, span * 0.25, span * 0.5, span * 0.85, span];
};
const ordElapsed = o => (o.cancelled || Date.now()) - o.at + (o.skew || 0);
const ordStage = o => {
  const e = ordElapsed(o);
  return stgTimes(o).reduce((a, t, i) => (e >= t ? i : a), 0);
};
const ordDone = o => !o.cancelled && ordStage(o) === STG.length - 1;
const canCancel = o => !o.cancelled && ordStage(o) < 3;
const ordStatus = o => (o.cancelled ? 'Cancelled' : STG[ordStage(o)]);
const ordTag = o =>
  `<span class="tag ${o.cancelled ? 'b' : ordDone(o) ? 'g' : 'l'}">${ic(o.cancelled ? 'x' : ordDone(o) ? 'check' : 'truck', 14)} ${ordStatus(o)}</span>`;
const ordEta = o => fdt(o.at + o.eta * 864e5);
const simNote = () => `<div class="msg info">${ic('info')}<span><b>${SIM_TRACK}.</b> Status moves on with the time since the order. No courier is connected in this prototype.</span></div>`;
const orderOf = () => ORDERS.find(x => x.id === location.hash.split('/')[1]);

const timeline = o => {
  const cur = ordStage(o);
  const t = stgTimes(o);
  const rows = STG.map((s, i) => {
    if (o.cancelled && i > cur) return '';
    const st = i < cur || ordDone(o) || o.cancelled ? 'done' : i === cur ? 'cur' : 'next';
    const when = i <= cur ? fdt(Math.max(o.at, o.at + t[i] - (o.skew || 0))) : i === STG.length - 1 ? 'Estimated by ' + ordEta(o) : 'Upcoming';
    return `<li class="tl-${st}" ${st === 'cur' ? 'aria-current="step"' : ''}><span class="tl-dot" aria-hidden="true">${st === 'next' ? '' : st === 'cur' ? '●' : '✓'}</span><div><b>${s}</b><span class="help" style="display:block;margin:0">${
      st === 'cur' ? 'Current status · ' : st === 'done' ? 'Completed · ' : ''
    }${when}</span></div></li>`;
  }).join('');
  return `<ol class="tl">${rows}${
    o.cancelled ? `<li class="tl-can" aria-current="step"><span class="tl-dot" aria-hidden="true">✕</span><div><b>Cancelled</b><span class="help" style="display:block;margin:0">Current status · ${fdt(o.cancelled)}</span></div></li>` : ''
  }</ol>`;
};

function placeOrder() {
  const t = cartTotals();
  if (!t.lines.length || Object.keys(vC(CHK)).length) {
    location.hash = '#checkout';
    return;
  }
  const at = Date.now();
  const o = {
    id: 'AAP-' + new Date(at).getFullYear() + '-' + String(at).slice(-6),
    at,
    skew: 0,
    items: t.lines.map(l => ({ ...l.item, n: l.p.n, pe: l.pe, qty: l.qty, unit: l.unit })),
    addr: { name: CHK.name.trim(), phone: CHK.phone.replace(/[\s-]/g, ''), addr: CHK.addr.trim(), city: CHK.city.trim(), pin: CHK.pin.trim() },
    pay: CHK.pay,
    sub: t.sub,
    del: t.del,
    tot: t.tot,
    eta: t.eta,
    support: []
  };
  ORDERS.unshift(o);
  t.lines.forEach(l => delete PS[l.p.id]);
  CART = [];
  sp();
  toast('Order placed.');
  location.hash = '#order-success/' + o.id;
}

const R = { st: 'ok', fo: 0, cat: '', bud: '', del: 0, ints: null, pe: 0, hd: 0, lc: 0, su: 0, pv: 0, sort: 'match', search: '', occFilter: 'all' };
const RECK = ['cat', 'del', 'ints', 'pe', 'hd', 'lc', 'su', 'bud', 'sort'];
try {
  Object.assign(R, JSON.parse(localStorage.getItem('aapo_recf') || '{}'));
} catch (e) {}

const svR = () => {
  try {
    localStorage.setItem('aapo_recf', JSON.stringify(Object.fromEntries(RECK.map(k => [k, R[k]]))));
  } catch (e) {}
};

// Browse filters are separate from Gift Finder filters
const B0 = { q: '', cat: '', sort: 'featured', bud: '', del: 0, pe: 0, hd: 0, lc: 0, su: 0 };
let B = { ...B0 };
try {
  Object.assign(B, JSON.parse(localStorage.getItem('aapo_browse') || '{}'));
} catch (e) {}

const svB = () => {
  try {
    localStorage.setItem('aapo_browse', JSON.stringify(B));
  } catch (e) {}
};

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
const WS = { mother: 'Mom', father: 'Dad', wother: 'someone special' };

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

const fdt = ms => new Date(ms).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });

const ready = () => F.who && F.occ && F.bud && F.int.length && (F.bud !== 'custom' || +F.cust > 0);
const fit = p => {
  const i = p.i.filter(x => F.int.includes(x));
  const o = p.o.includes(F.occ);
  const w = p.w.includes(F.who);
  return { i, o, w, sc: i.length * 3 + (o ? 2 : 0) + (w ? 2 : 0) };
};

const whoP = () => {
  if (S.lang !== 'en') return whoS() + '’s';
  return { mother: 'Mom’s', father: 'Dad’s', wother: 'their' }[F.who] || 'your ' + lab('who').toLowerCase() + '’s';
};

// Explains a pick using only the answers it actually matches
const why = p => {
  const f = fit(p);
  const hi = rng(bk())[1];
  const a = [];
  if (f.i.length) a.push(`Matches ${whoP()} love of ${f.i.map(il).join(' and ').toLowerCase()}`);
  else if (R.ints) a.push('Matches the interests you filtered by');
  if (f.w && F.who !== 'wother') a.push(`Good for ${S.lang === 'en' ? WS[F.who] || 'your ' + lab('who').toLowerCase() : whoS()}`);
  if (f.o && F.occ !== 'oother') a.push(`Suits ${lab('occ')}`);
  if (p.p <= hi) a.push(`Within your ${bl(bk())} budget`);
  return a.join(' · ') + '.';
};

const rate = p =>
  `<span><span class="sr">Rated ${p.r} out of 5 from ${p.rv} reviews</span><span aria-hidden="true">${ic('star', 16)} <b>${p.r}</b> (${p.rv} reviews)</span></span>`;

const badges = p =>
  [p.l && ic('pin', 14) + ' Local · ' + p.l, p.s && ic('leaf', 14) + ' Sustainable', p.h && 'Handmade']
    .filter(Boolean)
    .map((t, k) => `<span class="tag ${k ? 'l' : ''}">${t}</span>`)
    .join('');

const RL = (x = {}) => {
  const r = { ...R, ...x };
  const [lo, hi] = x.hi !== undefined ? [0, x.hi] : rng(r.bud || F.bud);
  const all = OPT.int.map(o => o[0]);
  const it = x.anyInt ? all : r.ints || (F.int.length ? F.int : all);
  return PR.filter(
    p =>
      p.p >= lo &&
      p.p <= hi &&
      (!r.cat || p.c === r.cat) &&
      (!r.del || p.d <= r.del) &&
      p.i.some(k => it.includes(k)) &&
      (!r.pe || p.pe) &&
      (!r.hd || p.h) &&
      (!r.lc || p.l) &&
      (!r.su || p.s)
  )
    .map(p => ({ p, f: fit(p) }))
    .sort((a, b) => {
      if (r.sort === 'price-low') return a.p.p - b.p.p;
      if (r.sort === 'price-high') return b.p.p - a.p.p;
      if (r.sort === 'popular') return b.p.rv - a.p.rv;
      return b.f.sc - a.f.sc || b.p.r - a.p.r;
    });
};

// When nothing matches: closest gifts from relaxing one preference at a time
const closest = () => {
  const hi = rng(bk())[1];
  const seen = new Set();
  const out = [];
  const add = (title, note, act, items) => {
    const a = items.filter(x => !seen.has(x.p.id)).slice(0, 3);
    if (!a.length) return;
    a.forEach(x => seen.add(x.p.id));
    out.push({ title, note, act, a });
  };
  const rm = (k, t, clear) => add(`Without the “${t}” filter`, () => `Fits your other answers, but not the “${t}” filter.`, `<button class="btn sec sm" data-rrm="${k}">Remove this filter</button>`, RL(clear));
  if (R.cat) rm('cat', (CATS.find(c => c[0] === R.cat) || [0, R.cat])[1], { cat: '' });
  if (R.del) rm('del', 'Arrives by ' + dt(R.del), { del: 0 });
  if (R.ints) rm('ints', 'Interests', { ints: null });
  TYPES.filter(t => R[t[0]]).forEach(t => rm(t[0], t[1], { [t[0]]: 0 }));
  const over = RL({ hi: 1e9, sort: 'price-low' }).filter(x => x.p.p > hi);
  const band = over.length && Object.keys(BR).find(k => BR[k][0] <= over[0].p.p && BR[k][1] >= over[0].p.p);
  add(
    'A little over your budget',
    p => `${inr(p.p - hi)} over your ${bl(bk())} budget. Matches what they enjoy.`,
    band ? `<button class="btn sec sm" data-rband="${band}">Change budget to ${bl(band)}</button>` : '',
    over
  );
  add(
    'Within your budget, with different interests',
    p => `Not one of the interests you chose${fit(p).o && F.occ !== 'oother' ? `, but it suits ${lab('occ')}` : ''}.`,
    `<a class="btn sec sm" href="#finder/interests">Change interests</a>`,
    RL({ anyInt: 1 })
  );
  if (!out.length)
    add(
      'Popular gifts to consider',
      () => 'Doesn’t match all your answers, but people often choose it.',
      `<a class="btn sec sm" href="#finder">${tr('ed', 'Edit your choices')}</a>`,
      [...PR].sort((a, b) => b.rv - a.rv).map(p => ({ p, f: fit(p) }))
    );
  return out;
};

const nAct = () => [R.cat, R.del, R.ints, R.pe, R.hd, R.lc, R.su].filter(Boolean).length;
const say = t => {
  const e = $('#live');
  if (!e) return;
  e.textContent = '';
  setTimeout(() => (e.textContent = t), 60);
};

// Re-render in place, keeping scroll and keyboard focus
const rr = id => {
  const y = scrollY;
  const a = document.activeElement;
  const fid = id || (a && a.id);
  const inApp = a && $('#app').contains(a);
  render(true);
  scrollTo(0, y);
  const el = fid && document.getElementById(fid);
  if (el) el.focus({ preventScroll: true });
  else if (inApp) $('#app').focus({ preventScroll: true });
};

const recCap = () => (S.simple ? 3 : 8);
const cnt = () => {
  svR();
  say(Math.min(RL().length, recCap()) + ' gifts shown.');
};

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

// --- Shared Product Card Parts ---
const ALT = {
  journal: 'Stitched handmade-paper journal with a soft cover',
  planter: 'Hand-painted terracotta planter with a saucer',
  diya: 'Engraved brass diya, lit',
  candle: 'Lavender soy candles and a jar of bath salts in a gift set',
  hamper: 'Ayurvedic self-care hamper in a jute-lined box',
  mithai: 'Open gift box of festive sweets, almonds and cashews'
};
const PHOTO_PH = ['seedkit', 'spa', 'stole', 'kansa', 'warli'];
const pAlt = p => (PHOTO_PH.includes(p.id) ? 'Placeholder photo for ' + p.n : ALT[p.id] || p.n);
const phTag = p => (PHOTO_PH.includes(p.id) ? '<span class="tag phd">Placeholder photo</span>' : '');

const thumb = p => {
  const sv = SV.includes(p.id);
  return `<div class="th" style="background:var(--${p.bg})"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${pAlt(p)}" class="p-img" loading="lazy" onerror="this.style.display='none'">${phTag(p)}${
    sv ? `<span class="tag svd">${ic('check', 14)} Saved</span>` : ''
  }<button class="iconbtn save" id="sv_${p.id}" data-sv="${p.id}" aria-pressed="${sv}" aria-label="${sv ? 'Remove ' + p.n + ' from saved gifts' : 'Save ' + p.n}">${ic('heart', 20)}</button></div>`;
};

const ctaRow = p =>
  `<div class="cta-row"><a class="btn sec sm" href="#product/${p.id}" aria-label="View details: ${p.n}">View Details</a><button class="btn sm" id="ac_${p.id}" data-addcart="${p.id}" aria-label="Add ${p.n} to cart">${ic('bag', 18)} ${tr('atc', 'Add to Cart')}</button></div>`;

const pcard = (p, extra = '') =>
  `<li><article class="card prod rc" aria-labelledby="t_${p.id}">${thumb(p)}<div class="bd"><div class="chips" style="margin-bottom:8px">${badges(p)}</div><h3 id="t_${p.id}">${p.n}</h3><div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:8px"><span class="price">${inr(
    p.p
  )}</span>${rate(p)}</div>${extra}<p class="help" style="margin:0 0 12px;color:var(--ink);font-weight:600">${ic('truck', 16)} Arrives by ${dt(p.d)}</p>${ctaRow(p)}</div></article></li>`;

const card = (p, k, note) => {
  const f = fit(p);
  return `<li><article class="card prod rc" aria-labelledby="t_${p.id}">${thumb(p)}<div class="bd"><p class="eyebrow" style="margin:0 0 4px">${ic(note ? 'info' : k === 0 ? 'star' : f.sc >= 6 ? 'check' : 'info', 14)} ${
    note ? 'Closest match' : k === 0 ? 'Top pick' : f.sc >= 6 ? 'Strong match' : 'Good match'
  }</p><div class="chips" style="margin-bottom:8px">${badges(p)}</div><h3 id="t_${p.id}">${p.n}</h3><div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px"><span class="price">${inr(
    p.p
  )}</span>${rate(p)}</div><p class="why">${note ? `<b>How it differs:</b> ${note}` : `<b>Why this matches:</b> ${why(p)}`}</p><ul class="ml" style="margin-bottom:16px"><li>${ic('pen', 16)} ${
    p.pe ? 'Personalizable: ' + p.pe : 'Message card only'
  }</li><li>${ic('truck', 16)} Arrives by ${dt(p.d)}</li>${p.st <= 5 ? `<li>${ic('alert', 16)} Only ${p.st} left</li>` : ''}</ul>${ctaRow(p)}</div></article></li>`;
};

// --- Browse: search, filters, sorting ---
const TYPES = [
  ['pe', 'Personalizable'],
  ['hd', 'Handmade'],
  ['lc', 'Local'],
  ['su', 'Sustainable']
];
const SORTS = [
  ['price-low', 'Price: Low to High'],
  ['price-high', 'Price: High to Low'],
  ['popular', 'Popularity']
];
const budOpts = OPT.bud.filter(o => o[0] !== 'custom');

const bList = () => {
  const q = B.q.trim().toLowerCase();
  const [lo, hi] = BR[B.bud] || [0, 1e9];
  const a = PR.filter(
    p =>
      (!q || (p.n + ' ' + p.ds).toLowerCase().includes(q)) &&
      (!B.cat || p.c === B.cat) &&
      p.p >= lo &&
      p.p <= hi &&
      (!B.del || p.d <= B.del) &&
      (!B.pe || p.pe) &&
      (!B.hd || p.h) &&
      (!B.lc || p.l) &&
      (!B.su || p.s)
  );
  if (B.sort === 'price-low') a.sort((x, y) => x.p - y.p);
  if (B.sort === 'price-high') a.sort((x, y) => y.p - x.p);
  if (B.sort === 'popular') a.sort((x, y) => y.rv - x.rv);
  return a;
};

const bActive = () =>
  [
    B.q.trim() && ['q', 'Search: “' + esc(B.q.trim()) + '”'],
    B.cat && ['cat', (CATS.find(c => c[0] === B.cat) || [0, B.cat])[1]],
    B.bud && ['bud', LB(B.bud, (budOpts.find(o => o[0] === B.bud) || [0, ''])[1])],
    B.del && ['del', 'Arrives by ' + dt(B.del)],
    ...TYPES.filter(t => B[t[0]])
  ].filter(Boolean);

const rmChips = (a, attr, clear) =>
  a.length
    ? `<div class="chips" role="group" aria-label="Active filters" style="align-items:center;margin-bottom:16px"><span class="help" style="margin:0;font-weight:700;color:var(--ink)">Active filters:</span>${a
        .map(x => `<button class="fc fx" id="${attr}_${x[0]}" data-${attr}="${x[0]}" aria-label="Remove filter: ${x[1]}">${x[1]}</button>`)
        .join('')}<button class="btn sec sm" ${clear}>Clear All</button></div>`
    : '';

const browseBody = () => {
  const a = bList();
  const act = bActive();
  return `${rmChips(act, 'brm', 'data-bclear')}<p class="mut" role="status">Showing ${a.length} of ${PR.length} gifts</p>${
    a.length
      ? `<ul class="rl">${a.map(p => pcard(p, `<p class="mut" style="font-size:14px;margin-bottom:8px">${p.ds.slice(0, 75)}…</p>`)).join('')}</ul>`
      : `<div class="empty-state"><div class="tile">${ic('search', 32)}</div><h2>No gifts found</h2><p class="mut">${
          B.q.trim() ? 'Nothing matches “' + esc(B.q.trim()) + '” with these filters. ' : 'Nothing matches these filters. '
        }Try a different search, or change or clear your filters.</p><button class="btn" data-bclear>${ic('retry', 18)} Clear Filters</button></div>`
  }`;
};

const fpanel = () => {
  const bo = OPT.bud.filter(o => o[0] !== 'custom').map(o => o[0]).concat(F.bud === 'custom' ? ['custom'] : []);
  const it = R.ints || (F.int.length ? F.int : OPT.int.map(o => o[0]));
  const tg = TYPES;
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

const cn = (k, v) => `${v.length}/${LM[k]} characters`;

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
  const df = p.p >= FREE_AT ? 0 : DEL_FEE;
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

const selRows = (p, o) => {
  const c = pc(p, o);
  const row = (on, l, v) => `<li>${ic(on ? 'check' : 'x', 16)} <span><b>${l}:</b> ${v}</span></li>`;
  return (
    row(c.pe, 'Personalization', c.pe ? (o.nm ? esc(o.nm) + (o.ln ? ' · ' + esc(o.ln) : '') : 'On, text still needed') : p.pe ? 'Not selected' : 'Not available for this gift') +
    row(c.wr, 'Gift wrapping', c.wr ? wsOf(o)[1] : 'Not selected') +
    row(!o.gx, 'Greeting card', o.gx ? 'Not included' : gsOf(o)[1] + (o.gm ? ', message written' : ', message still needed'))
  );
};
const selsum = (p, o) => `<div class="card" style="margin-bottom:16px"><h2 style="font-size:20px">Your selections</h2><ul class="ml" id="selsum" style="margin-bottom:0;overflow-wrap:anywhere">${selRows(p, o)}</ul></div>`;

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
  st.innerHTML = `<div class="msg info">${ic('mic')}<span class="pulse"></span><span><b>Reading your card aloud…</b></span><button class="btn sec sm" data-saystop>Stop</button></div>`;
  if ('speechSynthesis' in window && window.SpeechSynthesisUtterance) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = { mr: 'mr-IN', hi: 'hi-IN' }[S.lang] || 'en-IN';
    u.onend = fin;
    u.onerror = () => {
      st.innerHTML = msg('warn', 'alert', 'Your device couldn’t read this aloud.');
    };
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
    '#finder',
    'lg'
  )}${btn(tr('browse', 'Browse Gifts'), '#browse', 'sec')}</div></div>
<div class="art deco" role="img" aria-label="${CL}">${crowd()}</div></section>
${S.simple ? steps3() : ''}
<section class="sec rich" style="margin-top:32px"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><div><h2>${tr(
    's2',
    'Upcoming occasions'
  )}</h2><p class="mut">Dates you’ve saved, soonest first.</p></div>${btn('See all occasions', '#occasions', 'sec sm')}</div>
${
  OCCASIONS.length
    ? `<div class="grid">${occSorted()
        .slice(0, 3)
        .map(
          o => `<div class="card row" style="justify-content:space-between;align-items:center;flex-wrap:wrap"><div class="row" style="gap:12px;align-items:center"><div class="tile" style="margin:0;width:40px;height:40px">${ic(occIcon(o), 24)}</div><div><div class="date" style="display:inline-block;margin-bottom:2px">${esc(o.date)}</div>${sampleTag(o)}<h3 style="margin:0">${esc(o.name)}</h3><span class="mut">${esc(o.person)} · ${dayTxt(occDays(o))}</span></div></div><a class="btn ghost sm" href="#finder" data-pickocc="${o.id}" aria-label="Find a gift for ${esc(o.name)}">Find gift</a></div>`
        )
        .join('')}</div>`
    : `<div class="empty-state"><div class="tile">${ic('cal', 32)}</div><h3>No upcoming occasions</h3><p class="mut">Add a birthday or anniversary and it will show up here.</p><button class="btn" data-modal="add-occasion">${ic('plus', 20)} Add an Occasion</button></div>`
}</section>
<section class="sec rich"><h2>${tr('qb', 'Quick budget')}</h2><p class="mut">Tap a budget to start the Gift Finder with it selected.</p><div class="chips">${OPT.bud
    .slice(0, 4)
    .map(b => `<a class="sumc" href="#finder" data-qbud="${b[0]}">${LB(b[0], b[1])}</a>`)
    .join('')}</div></section>
<section class="sec rich"><h2>${tr('s3', 'Personalised picks')}</h2><p class="mut">A few favourites from our makers to start with.</p><ul class="rl">${['candle', 'stole', 'diya']
    .map(id => pcard(PR.find(p => p.id === id)))
    .join('')}</ul></section>
<section class="sec rich"><h2>${tr('pc', 'Popular categories')}</h2><div class="grid cats">${[
    ['heart', 'Self-care', 'selfcare'],
    ['cup', 'Food & sweets', 'food'],
    ['book', 'Books', 'books'],
    ['home', 'Home & décor', 'home'],
    ['leaf', 'Plants', 'plants'],
    ['art', 'Handmade', 'hd']
  ]
    .map(c => `<a class="cat" href="#browse?${c[2] === 'hd' ? 'hd=1' : 'cat=' + c[2]}">${ic(c[0])}<span>${c[1]}</span></a>`)
    .join('')}</div></section>
${SV.length ? `<section class="sec rich"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h2>${tr(
    'rs',
    'Recently saved'
  )}</h2>${btn('See all saved', '#saved', 'sec sm')}</div><div class="grid">${SV.slice(0, 3)
    .map(id => {
      const p = PR.find(x => x.id === id) || PR[0];
      return `<a class="card row" href="#product/${p.id}" style="text-decoration:none;gap:16px"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" style="width:56px;height:56px;border-radius:14px;object-fit:cover;flex-shrink:0"><div><h3 style="margin:0;font-size:16px">${p.n}</h3><span class="mut">${inr(p.p)} · Saved</span></div></a>`;
    })
    .join('')}</div></section>` : ''}
<section class="sec" aria-labelledby="vs"><div class="card"><div class="row" style="flex-wrap:wrap"><div style="flex:1;min-width:220px"><h2 id="vs" style="font-size:22px">${tr(
    'vs',
    'Voice search'
  )}</h2><p class="help" style="margin:0">Say what you need, like “a gift for Aai under ₹1000”. Prototype: voice is simulated.</p></div><button class="btn sec" data-listen="vhome">${ic(
    'mic',
    20
  )} ${tr('vsb', 'Search by voice')}</button></div><div id="vhome" aria-live="polite" style="margin-top:8px"></div></div></section>
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
    }<div class="row" style="margin-top:32px;flex-wrap:wrap;justify-content:space-between"><a class="btn sec" href="${BK[n]}">‹ ${tr(
      'back',
      'Back'
    )}</a><div class="row" style="flex-wrap:wrap;gap:8px">${
      ready() && n < 3 ? `<button class="btn ghost" data-next="${ST[n][0]}" data-jump>${tr('show', 'Show my gifts')}</button>` : ''
    }<button class="btn" data-next="${ST[n][0]}">${n === 3 ? tr('show', 'Show my gifts') : tr('cont', 'Continue')} ${ic(
      'arrow',
      20
    )}</button></div></div></section></div>`;
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
    const cap = recCap();
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
        ? `<div class="card" role="status"><div class="tile">${ic('alert')}</div><h2 style="font-size:22px">No exact matches yet</h2><p>Nothing fits all your answers within ${bl(
            bk()
          )}. Your budget stays fixed unless you change it yourself. Here are the closest gifts, each changing just one thing.</p><div class="row" style="flex-wrap:wrap">${
            nAct() ? '<button class="btn" data-fclear>Clear filters</button>' : ''
          }<button class="btn sec" data-ebud>Edit budget</button><a class="btn sec" href="#finder">${tr(
            'ed',
            'Edit your choices'
          )}</a></div></div>${closest()
            .map(
              g => `<section style="margin-top:24px" aria-label="${esc(g.title)}"><div class="row" style="justify-content:space-between;flex-wrap:wrap;margin-bottom:12px"><h2 style="font-size:20px;margin:0">${esc(g.title)}</h2>${g.act}</div><ul class="rl">${g.a
                .map(x => card(x.p, 1, g.note(x.p)))
                .join('')}</ul></section>`
            )
            .join('')}`
        : `<p class="mut" role="status">Showing ${sh.length} of ${all.length} gifts that fit. We show only your best matches, strongest first.</p><ul class="rl">${sh
            .map((x, k) => card(x.p, k))
            .join('')}</ul>`;

    return `<div class="wrap"><section class="sec" style="margin-top:32px">${progress(
      tr('pl', 'Who|Occasion|Budget|Interests').split('|').concat('Picks'),
      4
    )}<h1 id="rh" tabindex="-1" style="font-size:32px">${tr('rt', 'Gifts picked for them ♡')}</h1><p class="lead" id="rsum">${sum}</p>
<div class="chips" role="group" aria-label="${tr('ch', 'Your choices')}" style="margin-bottom:16px">${[
      ['who', 'who', '#finder'],
      ['occ', 'occasion', '#finder/occasion'],
      ['bud', 'budget', '#finder/budget'],
      ['int', 'interests', '#finder/interests']
    ]
      .map(x => {
        const v = x[0] === 'int' ? F.int.map(il).join(', ') : lab(x[0]);
        return `<a class="sumc" href="${x[2]}" aria-label="Change ${x[1]}: ${v}">${ic('pen', 16)} ${v}</a>`;
      })
      .join('')}</div>
<div class="row" style="flex-wrap:wrap;margin-bottom:16px"><a class="btn sec sm" href="#finder">${ic('retry', 18)} ${tr(
      'ed',
      'Edit your choices'
    )}</a><button class="btn ghost sm" id="fbtn" data-fo aria-expanded="${!!R.fo}" aria-controls="fpanel">Filters${
      na ? ' (' + na + ' on)' : ''
    }</button><a class="sumc" href="#saved">${ic('heart', 16)} Saved gifts: ${SV.length}</a><a class="sumc" href="#cart">${ic(
      'bag',
      16
    )} Cart (${cartTotals().count})</a></div>
${
  R.bud && R.bud !== F.bud
    ? `<div role="status">${msg('warn', 'alert', 'You changed your budget to ' + bl(R.bud) + '. Your original budget was ' + lab('bud') + '.')}</div><button class="btn sec sm" data-rrestore>Restore my budget</button>`
    : `<p class="help">${ic('info', 14)} Your budget of ${lab('bud')} is a firm limit. Your picks never go over it. If nothing fits, we may suggest clearly labelled alternatives.</p>`
}
${fpanel()}${rmChips(
      [
        R.cat && ['cat', (CATS.find(c => c[0] === R.cat) || [0, R.cat])[1]],
        R.del && ['del', 'Arrives by ' + dt(R.del)],
        R.ints && ['ints', 'Interests: ' + R.ints.map(il).join(', ')],
        ...TYPES.filter(t => R[t[0]])
      ].filter(Boolean),
      'rrm',
      'data-fclear'
    )}<div style="max-width:320px;margin-top:16px"><label for="rsort">Sort by</label><select class="in" id="rsort">${[['match', 'Best match'], ...SORTS]
      .map(o => `<option value="${o[0]}" ${R.sort === o[0] ? 'selected' : ''}>${o[1]}</option>`)
      .join('')}</select></div><div style="margin-top:16px">${rb}</div>
</section></div>`;
  },

  // --- Occasions Feature Page ---
  occasions: () => {
    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:16px">
  <div>
    <div class="tile">${ic('cal')}</div>
    <h1 style="font-size:32px">Occasions & Reminders</h1>
    <p class="mut">Birthdays, anniversaries and festivals, soonest first. Saved on this device; this prototype doesn’t send reminders.</p>
  </div>
  <button class="btn" id="addocc" data-modal="add-occasion">${ic('plus', 20)} Add Occasion</button>
</div>

<div class="chips" style="margin:20px 0 24px">
  <button class="chip" aria-pressed="${R.occFilter === 'all'}" id="of_all" data-occfilter="all">All Dates (${OCCASIONS.length})</button>
  <button class="chip" aria-pressed="${R.occFilter === 'birthday'}" id="of_birthday" data-occfilter="birthday">${ic('birthday', 18)} Birthdays</button>
  <button class="chip" aria-pressed="${R.occFilter === 'anniv'}" id="of_anniv" data-occfilter="anniv">${ic('rings', 18)} Anniversaries</button>
  <button class="chip" aria-pressed="${R.occFilter === 'festival'}" id="of_festival" data-occfilter="festival">${ic('bouquet', 18)} Celebrations</button>
</div>

<div class="grid">
${
  occSorted().filter(o => R.occFilter === 'all' || o.occ === R.occFilter)
    .map(
      o => `
<div class="card" style="display:flex;flex-direction:column;justify-content:space-between">
  <div>
    <div class="row" style="justify-content:space-between;align-items:center;margin-bottom:12px">
      <div class="row" style="align-items:center;gap:8px">
        <div class="tile" style="width:36px;height:36px;margin:0;border-radius:10px">${ic(occIcon(o), 22)}</div>
        <span class="date">${esc(o.date)}</span>
      </div>
      <span class="tag ${occDays(o) <= 10 ? 'b' : 'l'}">${dayTxt(occDays(o))}</span>
    </div>
    <h3 style="margin:0 0 4px">${esc(o.name)}${sampleTag(o)}</h3>
    <p class="mut" style="font-size:14px;margin-bottom:8px">${ic('user', 14)} For ${esc(o.person)}</p>
    <p class="help" style="margin-bottom:16px">${o.note ? esc(o.note) : 'No notes added'}</p>
  </div>
  <div class="row" style="justify-content:space-between;gap:8px;padding-top:12px;border-top:1px solid var(--line)">
    <a class="btn sm" href="#finder" data-pickocc="${o.id}" aria-label="Find a gift for ${esc(o.name)}">${ic('finder', 18)} Find Gift</a>
    <button class="iconbtn" data-delocc="${o.id}" aria-label="Delete occasion: ${esc(o.name)}" title="Delete occasion">${ic('trash', 18)}</button>
  </div>
</div>`
    )
    .join('') ||
  `<div class="empty-state" style="grid-column:1/-1"><div class="tile">${ic('cal', 32)}</div><h2>${OCCASIONS.length ? 'No occasions in this category' : 'No upcoming occasions'}</h2><p class="mut">${
    OCCASIONS.length ? 'Choose another category, or add a new date.' : 'Add a birthday, anniversary or festival to plan ahead.'
  }</p><button class="btn" data-modal="add-occasion">${ic('plus', 20)} Add an Occasion</button></div>`
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
  <button class="btn" id="addrec" data-modal="add-recipient">${ic('plus', 20)} Add Recipient</button>
</div>

<div class="grid" style="margin-top:24px">
${RECIPIENTS.length ? '' : `<div class="empty-state" style="grid-column:1/-1"><div class="tile">${ic('users', 32)}</div><h2>No recipients yet</h2><p class="mut">Add someone you often gift, and start the Gift Finder with their tastes filled in.</p><button class="btn" data-modal="add-recipient">${ic('plus', 20)} Add a Recipient</button></div>`}
${RECIPIENTS.map(
  r => `
<div class="card" style="display:flex;flex-direction:column;justify-content:space-between">
  <div>
    <div class="row" style="margin-bottom:16px">
      <div class="avatar" style="background:var(--${esc(r.bg)})">${esc(r.avatar)}</div>
      <div>
        <h3 style="margin:0">${esc(r.name)}${sampleTag(r)}</h3>
        <span class="tag l" style="text-transform:capitalize">${esc((OPT.who.find(o => o[0] === r.who) || [0, r.who])[1])}</span>
      </div>
    </div>
    <p style="font-size:14px;font-weight:700;margin:0 0 4px">${ic('cal', 14)} ${esc(r.occs)}</p>
    <p class="mut" style="font-size:14px;margin-bottom:12px">${esc(r.notes)}</p>
    <div class="chips" style="margin-bottom:16px">
      ${r.ints.map(i => `<span class="tag">${il(i)}</span>`).join('')}
    </div>
  </div>
  <div class="row" style="justify-content:space-between;gap:8px;padding-top:12px;border-top:1px solid var(--line)">
    <a class="btn sm" href="#finder" data-pickrec="${r.id}">${ic('gift', 18)} Find Gift for ${esc(r.name)}</a>
    <button class="iconbtn" data-delrec="${r.id}" aria-label="Delete recipient: ${esc(r.name)}" title="Delete recipient">${ic('trash', 18)}</button>
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
        <h2>Your saved gifts list is empty</h2>
        <p class="mut">Tap the heart on any gift while browsing to keep it here for later.</p>
        <div style="margin-top:20px">${btn('Explore Gifts ' + ic('arrow', 20), '#browse')}</div>
      </div>`
    : `<ul class="rl" style="margin-top:24px">${savedProducts.map(p => pcard(p)).join('')}</ul>`
}
</section></div>`;
  },

  // --- Cart & Checkout Flow ---
  cart: () => {
    const t = cartTotals();
    const undo = R.undo
      ? `<div class="msg ok row" role="status" style="justify-content:space-between;flex-wrap:wrap;margin-top:16px"><span style="display:flex;gap:8px;align-items:center">${ic('check')} Removed “${esc(
          (PR.find(x => x.id === R.undo.item.id) || PR[0]).n
        )}”.</span><button class="btn sec sm" id="undobtn" data-undo>Undo</button></div>`
      : '';

    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="tile">${ic('bag')}</div>
<h1 style="font-size:32px">Your Cart (${t.count})</h1>
<p class="mut">Review your selected gifts, customized messages and packaging before checkout.</p>
${undo}
${
  !t.lines.length
    ? `<div class="empty-state" style="margin-top:24px">
        <div class="tile">${ic('bag', 32)}</div>
        <h2>Your cart is empty</h2>
        <p class="mut">Find thoughtful gifts customized with personalized messages and gift wrap.</p>
        <div style="margin-top:20px">${btn('Continue Shopping', '#browse')}</div>
      </div>`
    : `<div class="gl" style="margin-top:24px">
        <div>
          <ul class="pvl">
            ${t.lines
              .map(
                (l, idx) => `
              <li class="card cl" style="display:flex;gap:16px;align-items:flex-start;padding:16px">
                <img src="${IMAGES[l.p.id] || 'images/candle.jpg'}" alt="" style="width:56px;height:56px;border-radius:14px;object-fit:cover;flex-shrink:0">
                <div style="flex:1;min-width:0">
                  <h2 style="margin:0 0 4px;font-size:17px">${l.p.n}</h2>
                  <p class="mut" style="font-size:14px;margin:0 0 6px;overflow-wrap:anywhere">${itemTags(l.item)}</p>
                  <p class="help" style="margin:0 0 8px">${inr(l.unit)} each${l.pe ? ` · includes ${inr(PE)} personalization` : ''}${l.item.wr ? ` · includes ${inr(WR)} wrap` : ''}</p>
                  <div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px">
                    <div class="qty-stepper" role="group" aria-label="Quantity of ${l.p.n}">
                      <button class="qty-btn" id="qm_${idx}" data-cartqty="${idx}" data-delta="-1" aria-label="${l.qty === 1 ? 'Remove' : 'Decrease quantity of'} ${l.p.n}">−</button>
                      <span class="qty-val" aria-label="Quantity ${l.qty}">${l.qty}</span>
                      <button class="qty-btn" id="qp_${idx}" data-cartqty="${idx}" data-delta="1" aria-label="Increase quantity of ${l.p.n}">+</button>
                    </div>
                    <span class="price">${inr(l.line)}</span>
                  </div>
                </div>
                <button class="iconbtn" data-delcart="${idx}" aria-label="Remove ${l.p.n} from cart" title="Remove item" style="flex-shrink:0">${ic('trash', 16)}</button>
              </li>`
              )
              .join('')}
          </ul>
          <a class="btn sec sm" href="#browse">‹ Continue Shopping</a>
        </div>
        
        <div>
          <div class="card">
            <h2 style="font-size:20px;margin-bottom:16px">Order Summary</h2>
            ${totalsDl(t)}
            <p class="help" style="margin:8px 0 0">${t.del ? `Add ${inr(FREE_AT - t.sub)} more for free delivery.` : `Free delivery on orders of ${inr(FREE_AT)} and above.`}</p>
            <div class="card" style="background:var(--lav);margin:16px 0;padding:12px">
              <p style="margin:0;font-size:14px;font-weight:700">${ic('truck', 16)} Estimated delivery: by ${dt(t.eta)}</p>
            </div>
            <a class="btn" href="#checkout" style="width:100%">${ic('check', 20)} Proceed to Checkout</a>
            <p class="help" style="text-align:center;margin-top:10px">${DEMO_PAY}. You can review everything first.</p>
          </div>
        </div>
      </div>`
}
</section></div>`;
  },

  // --- Checkout Page ---
  checkout: () => {
    const t = cartTotals();
    if (!t.lines.length)
      return `<div class="wrap" style="max-width:760px"><section class="sec" style="margin-top:32px"><h1 style="font-size:32px">Checkout</h1><div class="empty-state"><div class="tile">${ic(
        'bag',
        32
      )}</div><h2>Your cart is empty</h2><p class="mut">Add a gift to your cart before checking out.</p>${btn('Continue Shopping', '#browse')}</div></section></div>`;

    const review = location.hash.split('/')[1] === 'review' && !Object.keys(vC(CHK)).length;
    const demo = `<div class="msg info">${ic('info')}<span><b>${DEMO_PAY}.</b> This is a prototype: no payment details are collected, no money moves and nothing is shipped.</span></div>`;
    const head = `<div class="wrap" style="max-width:760px"><section class="sec" style="margin-top:32px">${progress(['Delivery & payment', 'Review', 'Confirmation'], review ? 1 : 0)}<p class="crumb"><a href="#cart">Cart</a> › Checkout</p>`;

    if (review)
      return `${head}<h1 style="font-size:32px">Review your order</h1><p class="mut">Check everything before placing your order. You can go back and change anything.</p>
<div class="card" style="margin-bottom:16px"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h2 style="font-size:20px;margin:0;display:flex;align-items:center;gap:8px">${ic('pin', 22)} Delivering to</h2><a class="btn sec sm" href="#checkout" aria-label="Edit delivery details">Edit</a></div>
<p style="margin:12px 0 0;overflow-wrap:anywhere"><b>${esc(CHK.name)}</b><br>${esc(CHK.addr)}<br>${esc(CHK.city)} ${esc(CHK.pin)}<br>Phone: ${esc(CHK.phone)}</p></div>
<div class="card" style="margin-bottom:16px"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h2 style="font-size:20px;margin:0;display:flex;align-items:center;gap:8px">${ic('payment', 22)} Payment</h2><a class="btn sec sm" href="#checkout" aria-label="Edit payment method">Edit</a></div>
<p style="margin:12px 0 0">${PAY[CHK.pay] || PAY.upi}</p><p class="help" style="margin:4px 0 0">${DEMO_PAY}</p></div>
<div class="card" style="margin-bottom:16px"><div class="row" style="justify-content:space-between;flex-wrap:wrap"><h2 style="font-size:20px;margin:0;display:flex;align-items:center;gap:8px">${ic('bag', 22)} Items</h2><a class="btn sec sm" href="#cart" aria-label="Edit cart">Edit</a></div>
<ul class="ml" style="font-size:16px;margin:12px 0">${t.lines.map(l => `<li>${ic('gift', 18)} <span>${esc(l.p.n)} × ${l.qty} · ${inr(l.line)}</span></li>`).join('')}</ul>${totalsDl(t)}
<p class="help" style="margin:8px 0 0">${ic('truck', 16)} Estimated delivery: by ${dt(t.eta)}. This is an estimate.</p></div>
${demo}<button class="btn" data-placeorder style="width:100%;margin-top:8px">${ic('check', 20)} Place Order (${inr(t.tot)})</button><a class="btn sec" href="#checkout" style="width:100%;margin-top:12px">‹ Back to delivery details</a></section></div>`;

    return `${head}<h1 style="font-size:32px">Checkout</h1><p class="mut">Enter delivery details. They stay saved on this device if you leave this page.</p>
<form id="chkform" novalidate>
  <div data-errsum></div>
  <div class="card" style="margin-bottom:20px">
    <h2 style="font-size:20px;margin-bottom:16px;display:flex;align-items:center;gap:8px">${ic('pin', 22)} 1. Delivery details</h2>
    ${chkFields(true)}
  </div>

  <div class="card" style="margin-bottom:20px">
    <h2 style="font-size:20px;margin-bottom:16px;display:flex;align-items:center;gap:8px">${ic('payment', 22)} 2. Payment method</h2>
    ${demo}
    <fieldset class="optset" style="margin-top:12px"><legend class="sr">Payment method</legend><div class="rog">
      ${[['upi', 'payment'], ['card', 'payment'], ['cod', 'truck']]
        .map(x => `<label class="ro"><input type="radio" name="pay" value="${x[0]}" ${CHK.pay === x[0] ? 'checked' : ''}><span style="display:flex;align-items:center;gap:8px">${ic(x[1], 20)} ${PAY[x[0]]}</span></label>`)
        .join('')}
    </div></fieldset>
  </div>

  <div class="card" style="margin-bottom:24px">
    <h2 style="font-size:20px;margin-bottom:12px;display:flex;align-items:center;gap:8px">${ic('bag', 22)} 3. Order summary</h2>
    ${totalsDl(t)}
  </div>

  <button class="btn" type="submit" style="width:100%">Review Order ${ic('arrow', 20)}</button>
</form>
</section></div>`;
  },

  // --- Order Success Screen ---
  'order-success': () => {
    const o = ORDERS.find(x => x.id === location.hash.split('/')[1]);
    if (!o)
      return `<div class="wrap" style="max-width:640px"><section class="sec" style="margin-top:48px"><h1 style="font-size:32px">We couldn’t find that order</h1><p class="mut">Orders are saved on this device.</p>${btn('Browse Gifts', '#browse')}</section></div>`;
    return `<div class="wrap" style="max-width:640px"><section class="sec" style="margin-top:32px">${progress(['Delivery & payment', 'Review', 'Confirmation'], 3)}<div style="text-align:center">
<div class="logo-lg" style="margin:0 auto 20px;padding:8px"><img src="images/logo.png" alt="" class="welcome-logo-img"></div>
<h1 style="font-size:36px">Order Placed with Love! ♡</h1>
<p class="lead mut">Thank you! Your order <b style="color:var(--coral)">#${o.id}</b> has been saved.</p></div>
<div class="msg info">${ic('info')}<span><b>${DEMO_PAY}.</b> This is a prototype, so nothing is shipped and no SMS or email is sent.</span></div>
<div class="card" style="text-align:left;margin:16px 0;background:var(--lav)">
  <h2 style="margin:0 0 8px;font-size:18px;display:flex;align-items:center;gap:8px">${ic('truck')} Estimated delivery</h2>
  <p style="font-size:20px;font-weight:800;margin:0 0 4px">Arrives by ${fdt(o.at + o.eta * 864e5)}</p>
  <p class="help" style="margin:0;overflow-wrap:anywhere">To ${esc(o.addr.name)}, ${esc(o.addr.city)} ${esc(o.addr.pin)} · Total ${inr(o.tot)}</p>
</div>
<div class="row" style="justify-content:center;gap:12px;margin-top:24px;flex-wrap:wrap">
  <a class="btn" href="#order/${o.id}">${ic('truck', 18)} Track This Order</a>
  <a class="btn sec" href="#orders">${ic('box', 18)} My Orders</a>
  <a class="btn sec" href="#browse">Browse More Gifts</a>
</div>
</section></div>`;
  },

  // --- My Orders ---
  orders: () => {
    const row = o => {
      const n = o.items.reduce((a, i) => a + i.qty, 0);
      return `<li class="card">
  <div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px"><h3 style="margin:0">Order #${o.id}</h3>${ordTag(o)}</div>
  <p class="mut" style="margin:4px 0 8px;font-size:14px">Placed ${fdt(o.at)} · ${n} ${n === 1 ? 'item' : 'items'} · ${inr(o.tot)}</p>
  <p style="margin:0 0 4px">${o.items.map(i => esc(i.n) + ' × ' + i.qty).join(', ')}</p>
  <p style="margin:0 0 12px;font-weight:700">${ic('truck', 16)} ${o.cancelled ? 'Cancelled ' + fdt(o.cancelled) : ordDone(o) ? 'Delivered' : 'Estimated delivery: by ' + ordEta(o)}</p>
  <a class="btn sec sm" href="#order/${o.id}" aria-label="View details of order ${o.id}">View Details</a>
</li>`;
    };
    const cur = ORDERS.filter(o => !o.cancelled && !ordDone(o));
    const prev = ORDERS.filter(o => o.cancelled || ordDone(o));
    return `<div class="wrap" style="max-width:760px"><section class="sec" style="margin-top:32px">
<div class="tile">${ic('box')}</div>
<h1 style="font-size:32px">My Orders</h1>
<p class="mut">Orders you place are saved in this browser, on this device.</p>
${
  !ORDERS.length
    ? `<div class="empty-state" style="margin-top:24px"><div class="tile">${ic('box', 32)}</div><h2>No orders yet</h2><p class="mut">When you place an order, you can track it here.</p>${btn('Continue Shopping', '#browse')}</div>`
    : `${simNote()}<h2 style="margin-top:24px">Current orders (${cur.length})</h2>${
        cur.length ? `<ul class="pvl">${cur.map(row).join('')}</ul>` : '<p class="mut">Nothing on the way right now.</p>'
      }<h2 style="margin-top:24px">Previous orders (${prev.length})</h2>${prev.length ? `<ul class="pvl">${prev.map(row).join('')}</ul>` : '<p class="mut">Delivered and cancelled orders will appear here.</p>'}`
}
</section></div>`;
  },

  // --- Order Details ---
  order: () => {
    const o = orderOf();
    if (!o)
      return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px"><h1 style="font-size:32px">We couldn’t find that order</h1>${msg('warn', 'alert', 'Orders are saved on the device where they were placed.')}<div style="margin-top:24px">${btn('Back to My Orders', '#orders')}</div></section></div>`;
    const cnt = o.items.reduce((a, i) => a + i.qty, 0);
    return `<div class="wrap" style="max-width:760px"><section class="sec" style="margin-top:32px">
<p class="crumb"><a href="#orders">My Orders</a> › Order #${o.id}</p>
<div class="row" style="justify-content:space-between;flex-wrap:wrap;gap:8px"><h1 style="font-size:28px;margin:0;overflow-wrap:anywhere">Order #${o.id}</h1>${ordTag(o)}</div>
<p class="mut" style="margin-top:4px">Placed ${fdt(o.at)}</p>

<div class="card" style="margin-bottom:16px">
  <h2 style="font-size:20px">Delivery status</h2>
  <p style="font-size:20px;font-weight:800;margin:0 0 12px">${o.cancelled ? 'This order was cancelled' : ordDone(o) ? 'Delivered' : 'Estimated delivery: by ' + ordEta(o)}</p>
  ${timeline(o)}
  ${simNote()}
  ${
    o.cancelled || ordDone(o)
      ? ''
      : `<button class="btn sec sm" id="oadv" data-oadvance>Demo: move to next status</button><p class="help" style="margin:4px 0 0">For trying out the timeline without waiting.</p>`
  }
</div>

<div class="card" style="margin-bottom:16px">
  <h2 style="font-size:20px">Items</h2>
  <ul class="pvl" style="margin-bottom:8px">${o.items
    .map(
      i => `<li style="padding:0 0 8px;border-bottom:1px solid var(--line)"><div class="row" style="justify-content:space-between;gap:8px"><b>${esc(i.n)}</b><span>${inr(i.unit * i.qty)}</span></div><span class="help" style="display:block;margin:0 0 4px">Quantity: ${i.qty} · ${inr(i.unit)} each</span><span style="overflow-wrap:anywhere">${itemTags(i)}</span>${
        i.gm ? `<p class="help" style="margin:4px 0 0;overflow-wrap:anywhere">Card message: “${esc(i.gm)}”${i.gf ? ' from ' + esc(i.gf) : ''}</p>` : ''
      }</li>`
    )
    .join('')}</ul>
  ${totalsDl({ count: cnt, sub: o.sub, del: o.del, tot: o.tot })}
</div>

<div class="grid" style="margin-bottom:16px">
  <div class="card"><h2 style="font-size:20px;display:flex;align-items:center;gap:8px">${ic('pin', 22)} Delivery address</h2><p style="margin:0;overflow-wrap:anywhere"><b>${esc(o.addr.name)}</b><br>${esc(o.addr.addr)}<br>${esc(o.addr.city)} ${esc(o.addr.pin)}<br>Phone: ${esc(o.addr.phone)}</p></div>
  <div class="card"><h2 style="font-size:20px;display:flex;align-items:center;gap:8px">${ic('payment', 22)} Payment details</h2><p style="margin:0">${PAY[o.pay] || PAY.upi}</p><p class="help" style="margin:4px 0 0">${DEMO_PAY}</p></div>
</div>

<div class="card" style="margin-bottom:16px">
  <h2 style="font-size:20px;display:flex;align-items:center;gap:8px">${ic('support', 22)} Need help?</h2>
  <p class="mut">Tell us if this order is delayed, missing or something else is wrong.</p>
  <button class="btn sec sm" id="ohelp" data-support>Contact Support</button>
  ${
    (o.support || []).length
      ? `<h3 style="margin-top:16px">Your requests</h3><ul class="ml">${o.support
          .map(s => `<li>${ic('info', 16)} <span>${esc(s.type)} · ${fdt(s.at)}${s.note ? ': ' + esc(s.note) : ''}</span></li>`)
          .join('')}</ul><p class="help" style="margin:0">Saved on this device. No support team is connected in this prototype, so nobody has been contacted.</p>`
      : ''
  }
</div>

${
  o.cancelled
    ? ''
    : canCancel(o)
    ? `<div class="card" style="margin-bottom:16px"><h2 style="font-size:20px">Changed your mind?</h2><p class="mut">You can cancel until the order is shipped.</p><button class="btn danger sm" id="ocancel" data-ocancel>Cancel Order</button></div>`
    : ordDone(o)
    ? ''
    : `<p class="help">${ic('info', 14)} This order has shipped, so it can no longer be cancelled.</p>`
}
<a class="btn sec sm" href="#orders">‹ Back to My Orders</a>
</section></div>`;
  },

  // --- Browse All Products Page ---
  browse: () => {
    return `<div class="wrap"><section class="sec" style="margin-top:32px">
<div class="tile">${ic('gift')}</div>
<h1 style="font-size:32px">Browse All Gifts</h1>
<p class="mut">Handmade, personalized and eco-friendly gifts from makers across India.</p>

<div class="chips" role="group" aria-label="Category" style="margin:20px 0 16px">
  <button class="chip" id="bc_all" aria-pressed="${!B.cat}" data-bcat="">All (${PR.length})</button>
  ${CATS.map(c => `<button class="chip" id="bc_${c[0]}" aria-pressed="${B.cat === c[0]}" data-bcat="${c[0]}">${c[1]}</button>`).join('')}
</div>

<div class="card fp" style="margin-bottom:24px"><div class="fg bfg">
  <div class="bfq"><label for="bq">Search gifts</label><input class="in" id="bq" type="search" value="${esc(B.q)}" placeholder="e.g. candle" autocomplete="off"></div>
  <div><label for="bsort">Sort by</label><select class="in" id="bsort"><option value="featured">Featured</option>${SORTS.map(o => `<option value="${o[0]}" ${B.sort === o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></div>
  <div><label for="bbud">Budget</label><select class="in" id="bbud"><option value="">Any budget</option>${budOpts.map(o => `<option value="${o[0]}" ${B.bud === o[0] ? 'selected' : ''}>${LB(o[0], o[1])}</option>`).join('')}</select></div>
  <div><label for="bdel">Delivery date</label><select class="in" id="bdel"><option value="0">Any date</option>${[2, 3, 5].map(d => `<option value="${d}" ${B.del === d ? 'selected' : ''}>By ${dt(d)}</option>`).join('')}</select></div>
</div>
<fieldset class="optset" style="margin-top:16px"><legend>Gift type</legend><div class="chips" style="margin-top:8px">${TYPES.map(t => `<button class="fc" id="bt_${t[0]}" data-bt="${t[0]}" aria-pressed="${!!B[t[0]]}">${t[1]}</button>`).join('')}</div></fieldset>
</div>

<div id="bres">${browseBody()}</div>
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

<ul class="rl">${localProds.map(p => pcard(p, `<p class="why" style="margin:0 0 12px"><b>Maker:</b> ${p.mk || 'Local artisanal unit'}</p>`)).join('')}</ul>
</section></div>`;
  },

  // --- Gift Together ---
  together: () => {
    const q = new URLSearchParams(location.hash.split('?')[1] || '');
    const cost = Math.max(0, +q.get('cost') || 2000);
    const people = Math.min(10, Math.max(2, +q.get('people') || 4));
    return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px">
<div class="tile">${ic('split')}</div>
<h1 style="font-size:32px">Gift Together</h1>
<p class="mut">Work out how to split the cost of a special gift with friends, siblings or colleagues.</p>

<div class="card" style="margin:24px 0">
  <h2 style="font-size:20px;margin-bottom:12px">Split Calculator</h2>
  <label for="gt_cost">Gift Value (₹)</label>
  <input class="in" id="gt_cost" type="number" min="0" inputmode="numeric" value="${cost}" oninput="$('#gt_res').textContent=inr(Math.round((+this.value||0)/$('#gt_people').value))">
  
  <div style="margin-top:16px">
    <label for="gt_people">Number of Contributors: <b id="gt_pnum">${people}</b></label>
    <input id="gt_people" type="range" min="2" max="10" value="${people}" style="width:100%;height:44px;accent-color:var(--coral)" oninput="$('#gt_pnum').textContent=this.value;$('#gt_res').textContent=inr(Math.round((+$('#gt_cost').value||0)/this.value))">
  </div>
  
  <div class="card" style="background:var(--lav);margin-top:20px;text-align:center">
    <span>Each person pays only</span>
    <p style="font-size:36px;font-weight:800;line-height:1.2;color:var(--coral);margin:4px 0" id="gt_res" aria-live="polite">${inr(Math.round(cost / people))}</p>
    <p class="help" style="margin:0;color:inherit">Prototype: this works out the split and shares it. It doesn’t collect money from anyone.</p>
  </div>
</div>

<button class="btn" data-sharesplit style="width:100%">${ic('split', 20)} Copy a Link to This Split</button>
<div id="gt_link" aria-live="polite" style="margin-top:12px"></div>
</section></div>`;
  },

  // --- Corporate Gifting ---
  corporate: () => {
    return `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px">
<div class="row" style="align-items:center;gap:12px;margin-bottom:12px"><img src="images/logo.png" alt="Aapulki" style="width:48px;height:48px;border-radius:12px;object-fit:contain;background:#fff;padding:4px;border:1px solid var(--line);box-shadow:0 2px 8px rgba(0,0,0,0.06)"><span class="eyebrow" style="margin:0">Aapulki for Business</span></div>
<h1 style="font-size:32px">Corporate Gifting</h1>
<p class="mut">Thoughtful, sustainable gifts for employees, clients and festive hampers with custom branding.</p>

<form class="card" id="coform" novalidate style="margin-top:24px">
  <div data-errsum></div>
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
  <p class="help" style="margin:8px 0 0">Prototype: this form checks your details but isn’t connected to a team yet, so nothing is sent.</p>
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
      [p.ic, 'lav', 'close-up of the details']
    ];
    const v = vws[R.pv] || vws[0];
    const wl = [
      ok && f.i.length && `Matches ${w}’s interest in ${f.i.map(il).join(' and ').toLowerCase()}.`,
      ok && f.o && F.occ !== 'oother' && `Well suited to a ${lab('occ')} gift.`,
      p.h && 'Handmade, so each one is a little different.',
      p.s && 'Made with sustainable materials.',
      p.l && `Made locally in ${p.l}.`,
      ok && (inb ? `Within your ${lab('bud')} budget.` : 'warn')
    ].filter(Boolean);

    const from = R.from || (ok ? 'recommendations' : 'browse');
    const fromL = { recommendations: tr('rt', 'Gifts picked for them ♡'), browse: 'Browse All Gifts', saved: 'Saved Gifts', local: 'Sustainable Gifts', home: 'Home' }[from];
    return `<div class="wrap"><nav aria-label="Breadcrumb" style="margin-top:24px"><p class="crumb" style="margin:0">${
      from === 'recommendations' ? `<a href="#finder">Gift Finder</a> › ` : ''
    }<a href="#${from}">${fromL}</a> › <span aria-current="page">${p.n}</span></p></nav>
<div class="pd"><section class="a1" aria-label="Product images"><div class="pimg" style="background:var(--${v[1]})"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${pAlt(p)}${R.pv ? ', close-up' : ''}" class="pimg-main ${R.pv ? 'zoom' : ''}">${phTag(p)}</div><div class="chips" role="group" aria-label="Choose an image view" style="margin-top:12px">${vws
      .map(
        (x, k) =>
          `<button class="pth" id="pv${k}" data-pv="${k}" aria-pressed="${R.pv == k}" aria-label="Show ${x[2]}" style="background:var(--${x[1]})"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="" class="${k ? 'zoom' : ''}" style="width:100%;height:100%;object-fit:cover"></button>`
      )
      .join('')}</div><p class="help">${PHOTO_PH.includes(p.id) ? 'Placeholder photo: this picture shows a different product until a real photo is added.' : 'Sample photo for this prototype.'}</p></section>
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
<fieldset class="optset"><legend class="sr">Gift options</legend>${
      p.pe
        ? popt('pe', 'Personalize this gift', `${p.pe}. +${inr(PE)}, adds 1 day.`, o.pe)
        : `<p class="help" style="margin:0 0 12px">${ic('info', 14)} This gift can’t be engraved. A free message card is available.</p>`
    }${popt('wr', 'Gift wrapping', `Hand-wrapped with a ribbon and a tag. +${inr(WR)}, no delay.`, o.wr)}</fieldset>
<p class="price" aria-live="polite" style="margin:8px 0 16px">Total so far: ${inr(tot)}</p>
<div class="row" style="flex-wrap:wrap;gap:8px"><button class="btn" id="pdatc" data-pdatc style="flex:1 1 100%">${ic('bag', 20)} ${tr('atc', 'Add to Cart')}</button><a class="btn sec" href="#personalize/${id}" style="flex:1 1 auto">${tr('pcn', 'Personalize & Continue')} ${ic(
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
<p class="help" style="margin-top:24px">Prototype: stock, dates, prices and reviews are sample data.</p><a class="btn sec sm" href="#${from}">‹ Back to ${from === 'recommendations' ? 'gift picks' : fromL}</a></div></div></div>`;
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
${selsum(p, o)}<div class="card" style="margin-bottom:16px"><h2 style="font-size:20px">Price summary</h2>${sumry(p, o)}</div>
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
    )} Listen</button></div><div id="sayst" aria-live="polite" style="margin-top:8px"></div><div style="margin-top:16px">${selsum(p, o)}</div></div>
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
    return `<div class="wrap"><section class="sec" style="margin-top:32px">${prog(2)}<p class="crumb"><a href="#card/${id}">Greeting card</a> › Preview</p><h1 style="font-size:32px">Here’s how your gift will look</h1><p class="mut">This is a preview: nothing is in your cart yet. You can change anything first, and your choices are kept.</p>
${
  ms.length
    ? `<div role="alert">${msg('warn', 'alert', 'A few details are missing.')}<ul class="ml">${ms
        .map(m => `<li>${ic('alert', 16)} <a href="${m[1]}">${m[0]}</a></li>`)
        .join('')}</ul></div>`
    : ''
}
<div class="pvw"><div><h2 style="font-size:20px">Your gift</h2><div class="pimg" style="background:var(--${
      p.bg
    });position:relative;overflow:hidden;padding:0;display:flex;align-items:center;justify-content:center"><img src="${IMAGES[p.id] || 'images/candle.jpg'}" alt="${p.n}" class="pimg-main">${c.pe ? `<div class="plate" role="img" aria-label="Engraved text: ${esc(o.nm || '')}${o.ln ? ', ' + esc(o.ln) : ''}" style="position:absolute;bottom:16px">${plate(o)}</div>` : ''}</div><p class="help">${
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
    )}</button><button class="btn sec" id="sv_${id}" data-sv="${id}" aria-pressed="${sv}">${ic('heart', 20)} ${sv ? 'Saved' : 'Save Gift'}</button><a class="btn sec" href="${gc ? '#card/' : '#personalize/'}${id}">‹ Back</a></div>${
      ms.length ? `<p class="help e" id="atcn">${ic('alert', 14)} Finish the missing details above to add this gift.</p>` : ''
    }</section></div>`;
  },

  profile: () => `<div class="wrap" style="max-width:720px"><section class="sec" style="margin-top:32px"><div class="tile">${ic(
    'user'
  )}</div><h1 style="font-size:32px">${tr('n_profile', 'Profile & Settings')}</h1><p class="mut">Manage preferences, account settings, accessibility, and reminders.</p>
<div class="grid" style="margin-top:24px">
  <div class="card">
    <h3>${ic('box')} My Orders</h3>
    <p class="mut">${ORDERS.length ? ORDERS.length + (ORDERS.length === 1 ? ' order' : ' orders') + ' placed on this device.' : 'No orders yet.'}</p>
    <a class="btn ghost sm" href="#orders">View My Orders</a>
  </div>
  <div class="card">
    <h3>${ic('user')} Contact Details</h3>
    <p class="mut" style="overflow-wrap:anywhere">${CHK.name ? esc(CHK.name) + (CHK.phone ? ' · ' + esc(CHK.phone) : '') : 'Not added yet. Details you enter at checkout appear here.'}</p>
    <button class="btn ghost sm" id="edname" data-editdetails aria-label="Edit contact details">${CHK.name ? 'Edit' : 'Add'} Details</button>
  </div>
  <div class="card">
    <h3>${ic('pin')} Saved Address</h3>
    <p class="mut" style="overflow-wrap:anywhere">${CHK.addr ? esc(CHK.addr) + ', ' + esc(CHK.city) + ' ' + esc(CHK.pin) : 'No address saved yet.'}</p>
    <button class="btn ghost sm" id="edaddr" data-editdetails aria-label="Edit saved address">${CHK.addr ? 'Edit' : 'Add'} Address</button>
  </div>
</div>
<p class="help" style="margin-top:12px">Saved only in this browser, on this device. There are no accounts in this prototype.</p>
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
<section class="sec"><h2>Product card & modal</h2><div class="grid"><ul class="rl">${pcard(PR.find(p => p.id === 'candle'))}</ul><div class="card"><h3>Modal</h3><p class="mut">Used for confirmations, such as saving a gift.</p><button class="btn sec" data-open>Open modal</button></div></div></section>
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

  // Browse links can preset a filter (e.g. #browse?cat=plants)
  if (h === 'browse' && hashRaw.includes('?')) {
    const params = new URLSearchParams(hashRaw.split('?')[1]);
    B = { ...B0, sort: B.sort };
    if (CATS.some(c => c[0] === params.get('cat'))) B.cat = params.get('cat');
    if (+params.get('del')) B.del = +params.get('del');
    if (params.has('hd')) B.hd = 1;
    svB();
    history.replaceState(null, '', '#browse');
  }

  const prevH = render.h;
  if (k !== true) {
    if (prevH === 'browse') render.by = scrollY;
    render.h = h;
    if (['recommendations', 'browse', 'saved', 'local', 'home'].includes(h)) R.from = h;
  }

  if (h === 'recommendations' && k !== true && R.sig !== JSON.stringify(F)) {
    R.sig = JSON.stringify(F);
    loadR();
  }
  if (k !== true) {
    R.er = null;
    R.undo = null;
  }

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
  $('#ordersbtn').innerHTML = ic('box', 22);
  h === 'orders' || h === 'order' ? $('#ordersbtn').setAttribute('aria-current', 'page') : $('#ordersbtn').removeAttribute('aria-current');
  const cartBtn = $('#cart');
  const cartN = cartTotals().count;
  cartBtn.innerHTML = ic('bag', 22) + (cartN ? `<span class="badge-dot" aria-hidden="true">${cartN}</span>` : '');
  cartBtn.setAttribute('aria-label', cartN ? `Cart, ${cartN} ${cartN === 1 ? 'item' : 'items'}` : 'Cart, empty');

  $('#nav').innerHTML = NAV.map(
    n =>
      `<a href="#${n[0]}" ${
        h === n[0] || (h === 'access' && n[0] === 'profile') || (['recommendations', 'product', 'personalize', 'card', 'preview'].includes(h) && n[0] === 'finder')
          ? 'aria-current="page"'
          : ''
      }>${ic(n[2], 22)}<span>${tr('n_' + n[0], n[1])}</span></a>`
  ).join('');
  if (window.innerWidth >= 820) $('#nav').scrollLeft = 0;

  $('#ft').innerHTML = `<div class="wrap"><div class="cols"><div class="ft-brand"><div class="row" style="align-items:center;gap:12px;margin-bottom:12px"><img src="images/logo.png" alt="आपुलकी Logo" class="ft-logo"><div style="line-height:1.2"><b style="font:700 22px 'Noto Sans Devanagari',Nunito,sans-serif;display:block">आपुलकी</b> <span style="font-weight:700;color:var(--mut)">Aapulki</span></div></div><p class="mut">Gifts that carry a little love. Celebrate every bond.</p></div><div><b>Explore</b><a href="#finder">Gift Finder</a><a href="#browse">Browse Gifts</a><a href="#occasions">Occasions</a><a href="#saved">Saved Gifts</a></div><div><b>Help</b><a href="#orders">My Orders</a><a href="#cart">Cart</a><a href="#profile">Profile & Settings</a><a href="#access">Accessibility</a></div></div><p class="help" style="margin:24px 0 0;color:var(--ink)">Prototype store: products, prices, stock, ratings and delivery dates are sample data. No real payments or deliveries.</p><p class="help" style="margin:4px 0 0;color:var(--ink)">© 2026 Aapulki. Made with a little love.</p></div>`;
  const TITLES = { orders: 'My Orders', order: 'Order details', cart: 'Cart', checkout: 'Checkout', 'order-success': 'Order confirmation', browse: 'Browse Gifts', recommendations: 'Your gift picks', product: 'Gift details', personalize: 'Personalize', card: 'Greeting card', preview: 'Preview', home: 'Home', finder: 'Gift Finder', together: 'Gift Together', local: 'Sustainable & Local Gifts', corporate: 'Corporate Gifting', occasions: 'Occasions', recipients: 'Recipients', saved: 'Saved Gifts', profile: 'Profile & Settings', access: 'Accessibility' };
  document.title = w ? 'आपुलकी (Aapulki)' : 'आपुलकी · ' + (TITLES[h] || h);

  if (k !== true) {
    scrollTo(0, h === 'browse' && prevH === 'product' ? render.by || 0 : 0);
    if (render.n++) $('#app').focus({ preventScroll: true });
  }
}

function toast(t, kind = 'ok') {
  const e = $('#toast');
  e.className = 'msg ' + kind;
  e.innerHTML = ic(kind === 'ok' ? 'check' : 'alert') + '<span>' + t + '</span>';
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
    B.cat = bcat.dataset.bcat;
    svB();
    rr(bcat.id);
    return;
  }
  const bt = e.target.closest('[data-bt]');
  if (bt) {
    B[bt.dataset.bt] = B[bt.dataset.bt] ? 0 : 1;
    svB();
    rr(bt.id);
    return;
  }
  const brm = e.target.closest('[data-brm]');
  if (brm) {
    B[brm.dataset.brm] = B0[brm.dataset.brm];
    svB();
    rr('bsort');
    say('Filter removed. ' + bList().length + ' gifts shown.');
    return;
  }
  if (e.target.closest('[data-bclear]')) {
    B = { ...B0, sort: B.sort };
    svB();
    rr('bq');
    toast('Filters cleared.');
    say(bList().length + ' gifts shown.');
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
    const oc = OCCASIONS.find(o => o.id === docc.dataset.delocc);
    confirmDlg('Delete this occasion?', esc(oc ? oc.name : '') + ' will be removed from your list.', 'Delete Occasion', 'Keep It', () => {
      OCCASIONS = OCCASIONS.filter(o => o !== oc);
      sp();
      rr('addocc');
      toast('Occasion deleted.');
    });
    return;
  }

  // Delete Recipient
  const drec = e.target.closest('[data-delrec]');
  if (drec) {
    const rc = RECIPIENTS.find(r => r.id === drec.dataset.delrec);
    confirmDlg('Remove this recipient?', esc(rc ? rc.name : '') + ' will be removed from your list.', 'Remove Recipient', 'Keep Them', () => {
      RECIPIENTS = RECIPIENTS.filter(r => r !== rc);
      sp();
      rr('addrec');
      toast('Recipient removed.');
    });
    return;
  }

  // Modal triggers
  const mod = e.target.closest('[data-modal]');
  if (mod) {
    const type = mod.dataset.modal;
    if (type === 'add-occasion') {
      openDlg(`
        <h2 id="dt">Add an Occasion</h2>
        <p class="mut">Save a date for someone special. This prototype doesn’t send reminders.</p>
        <form id="addoccform" novalidate onsubmit="event.preventDefault();addOccasionHandler();">
          <div data-errsum></div>
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
              <label for="ao_date">Date</label>
              <input class="in" id="ao_date" type="date" required>
            </div>
          </div>
          <div style="margin-top:10px">
            <label for="ao_note">Preferences / Gift notes</label>
            <input class="in" id="ao_note" placeholder="e.g. Likes books and soothing scents">
          </div>
          <div class="row" style="margin-top:20px;justify-content:flex-end;gap:8px">
            <button type="button" class="btn sec sm" data-close>Cancel</button>
            <button type="submit" class="btn sm">Save Occasion</button>
          </div>
        </form>`);
      return;
    } else if (type === 'add-recipient') {
      openDlg(`
        <h2 id="dt">Add a Recipient</h2>
        <p class="mut">Save their preferences and gifting tastes.</p>
        <form id="addrecform" novalidate onsubmit="event.preventDefault();addRecipientHandler();">
          <div data-errsum></div>
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
        </form>`);
      return;
    }
  }

  if (e.target.closest('[data-editdetails]')) {
    openDlg(`<h2 id="dt">Your delivery details</h2><p class="mut">Used to fill in checkout. Saved only on this device.</p><form id="profform" novalidate><div data-errsum></div>${chkFields(false)}<div class="row" style="margin-top:20px;justify-content:flex-end;gap:8px"><button type="button" class="btn sec sm" data-close>Cancel</button><button type="submit" class="btn sm">Save Details</button></div></form>`);
    return;
  }

  if (e.target.closest('[data-cfmok]')) {
    $('#dlg').close();
    confirmDlg.fn();
    return;
  }

  if (e.target.closest('[data-sharesplit]')) {
    const link = location.href.split('#')[0] + `#together?cost=${+$('#gt_cost').value || 0}&people=${$('#gt_people').value}`;
    const fail = () => {
      $('#gt_link').innerHTML = `<label for="gt_url">Copy this link</label><input class="in" id="gt_url" readonly value="${esc(link)}">`;
      $('#gt_url').select();
      toast('Couldn’t copy automatically. Please copy the link below.', 'warn');
    };
    if (navigator.clipboard) navigator.clipboard.writeText(link).then(() => toast('Link copied. It opens this calculator with the same split.'), fail);
    else fail();
    return;
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
    if ('jump' in nx.dataset && ready()) {
      location.hash = '#recommendations';
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

  if (e.target.closest('[data-ocancel]')) {
    const o = orderOf();
    confirmDlg(
      'Cancel this order?',
      `Order #${o.id} will be cancelled and this can’t be undone. This was a demo payment, so nothing was charged and nothing needs refunding.`,
      'Yes, Cancel Order',
      'Keep Order',
      () => {
        if (canCancel(o)) o.cancelled = Date.now();
        sp();
        rr('ohelp');
        toast('Order cancelled.');
      }
    );
    return;
  }
  if (e.target.closest('[data-oadvance]')) {
    const o = orderOf();
    o.skew = (o.skew || 0) + stgTimes(o)[ordStage(o) + 1] - ordElapsed(o) + 1000;
    sp();
    rr('oadv');
    toast('Demo: status is now ' + ordStatus(o) + '.');
    return;
  }
  if (e.target.closest('[data-support]')) {
    const o = orderOf();
    openDlg(`<h2 id="dt">Contact Support</h2><p class="mut">Order #${o.id}. Estimated delivery: by ${ordEta(o)}.</p><form id="supform" novalidate><label for="su_type">What’s wrong?</label><select class="in" id="su_type"><option>Order is delayed</option><option>Order is missing</option><option>Something else</option></select><div style="margin-top:10px"><label for="su_note">Details (optional)</label><textarea class="in" id="su_note" maxlength="300"></textarea></div><p class="help">Prototype: no support team is connected. Your request is saved with this order on this device, and nobody is contacted.</p><div class="row" style="margin-top:20px;justify-content:flex-end;gap:8px"><button type="button" class="btn sec sm" data-close>Cancel</button><button type="submit" class="btn sm">Save Request</button></div></form>`);
    return;
  }

  if (e.target.closest('[data-placeorder]')) {
    placeOrder();
    return;
  }

  // Direct Cart navigation
  if (e.target.closest('#cart')) {
    location.hash = '#cart';
    return;
  }

  // Quick Add to Cart
  const addCart = e.target.closest('[data-addcart]');
  if (addCart) {
    const p = addToCart(addCart.dataset.addcart);
    rr(addCart.id);
    toast(`Added “${p ? p.n : 'Gift'}” to Cart!`);
    return;
  }

  // Cart quantity adjustment
  const cqty = e.target.closest('[data-cartqty]');
  if (cqty) {
    const idx = +cqty.dataset.cartqty;
    const delta = +cqty.dataset.delta;
    if (CART[idx]) {
      if ((CART[idx].qty || 1) + delta <= 0) {
        removeCartLine(idx);
        return;
      }
      CART[idx].qty = (CART[idx].qty || 1) + delta;
      sp();
      rr(cqty.id);
      toast(`Quantity updated to ${CART[idx].qty}.`);
    }
    return;
  }

  // Cart item removal, with undo
  const dcart = e.target.closest('[data-delcart]');
  if (dcart) {
    removeCartLine(+dcart.dataset.delcart);
    return;
  }
  if (e.target.closest('[data-undo]') && R.undo) {
    CART.splice(Math.min(R.undo.idx, CART.length), 0, R.undo.item);
    R.undo = null;
    sp();
    rr();
    toast('Item restored to your cart.');
    return;
  }
});

function addOccasionHandler() {
  const name = $('#ao_name').value.trim();
  const person = $('#ao_person').value.trim();
  const occ = $('#ao_type').value;
  const iso = $('#ao_date').value;
  const note = $('#ao_note').value.trim();
  const er = {};
  if (!name) er.ao_name = 'Please give this occasion a title.';
  if (!person) er.ao_person = 'Please enter who it is for.';
  if (!iso) er.ao_date = 'Please choose a date.';
  if (!formErrs($('#addoccform'), er)) return;
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  OCCASIONS.unshift({ id: 'o_' + Date.now(), name, person, occ, date, iso, note, who: 'wother' });
  sp();
  $('#dlg').close();
  rr();
  toast('Occasion saved.');
}

function addRecipientHandler() {
  const name = $('#ar_name').value.trim();
  const who = $('#ar_who').value;
  const occs = $('#ar_date').value.trim() || 'No date added';
  const notes = $('#ar_note').value.trim() || 'No notes added';
  if (!formErrs($('#addrecform'), name ? {} : { ar_name: 'Please enter their name.' })) return;
  const avatar = name.charAt(0).toUpperCase() || 'R';
  RECIPIENTS.unshift({ id: 'r_' + Date.now(), name, who, avatar, bg: 'blush', ints: ['selfcare', 'handmade'], occs, notes });
  sp();
  $('#dlg').close();
  rr();
  toast('Recipient added.');
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

document.addEventListener('submit', e => {
  if (e.target.id === 'profform') {
    e.preventDefault();
    const v = {};
    ['name', 'phone', 'addr', 'city', 'pin'].forEach(k => (v[k] = $('#c_' + k).value));
    if (!formErrs(e.target, prefix(vC(v), 'c_'))) return;
    Object.assign(CHK, v);
    sp();
    $('#dlg').close();
    rr();
    toast('Details saved on this device.');
    return;
  }
  if (e.target.id === 'supform') {
    e.preventDefault();
    const o = orderOf();
    o.support = o.support || [];
    o.support.push({ type: $('#su_type').value, note: $('#su_note').value.trim(), at: Date.now() });
    sp();
    $('#dlg').close();
    rr('ohelp');
    toast('Request saved on this device. Nobody has been contacted.');
    return;
  }
  if (e.target.id === 'coform') {
    e.preventDefault();
    const er = {};
    if (!$('#co_name').value.trim()) er.co_name = 'Please enter your company name.';
    if (!(+$('#co_cnt').value > 0)) er.co_cnt = 'Please enter how many gifts you need, for example 50.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($('#co_email').value.trim())) er.co_email = 'Please enter a valid email, for example hr@company.com.';
    if (formErrs(e.target, er)) toast('Your details look good, but this prototype didn’t send them to anyone.', 'warn');
    return;
  }
  if (e.target.id !== 'chkform') return;
  e.preventDefault();
  if (formErrs(e.target, prefix(vC(CHK), 'c_'))) {
    sp();
    location.hash = '#checkout/review';
  }
});

document.addEventListener('input', e => {
  const k = e.target.dataset.chk;
  if (!k) return;
  CHK[k] = e.target.value;
  sp();
  if (e.target.classList.contains('err') && !vC(CHK)[k]) fieldErr(e.target, '');
});

document.addEventListener('focusout', e => {
  const k = e.target.dataset && e.target.dataset.chk;
  if (k && CHK[k]) fieldErr(e.target, vC(CHK)[k] || '');
});

document.addEventListener('change', e => {
  if (e.target.name === 'pay') {
    CHK.pay = e.target.value;
    sp();
  }
});

document.addEventListener('input', e => {
  if (e.target.id !== 'bq') return;
  B.q = e.target.value;
  svB();
  $('#bres').innerHTML = browseBody();
  clearTimeout(say.q);
  say.q = setTimeout(() => say(bList().length + ' gifts shown.'), 500);
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
  if ((x = c('[data-rrm]'))) {
    const k = x.dataset.rrm;
    R[k] = k === 'cat' ? '' : k === 'ints' ? null : 0;
    rr('rsort');
    cnt();
    return;
  }
  if (c('[data-fclear]')) {
    Object.assign(R, { cat: '', del: 0, ints: null, pe: 0, hd: 0, lc: 0, su: 0 });
    rr('fbtn');
    toast('Filters cleared.');
    cnt();
    return;
  }
  if ((x = c('[data-rband]'))) {
    R.bud = x.dataset.rband === F.bud ? '' : x.dataset.rband;
    rr('fbtn');
    cnt();
    toast('Budget changed to ' + bl(x.dataset.rband) + '.');
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
  else if (id === 'rsort') R.sort = r.value;
  else if (['bsort', 'bbud', 'bdel'].includes(id)) {
    if (id === 'bsort') B.sort = r.value;
    if (id === 'bbud') B.bud = r.value;
    if (id === 'bdel') B.del = +r.value;
    svB();
    rr(id);
    say(bList().length + ' gifts shown.');
    return;
  } else return;
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
  if (c('[data-pdatc]')) {
    const o = PS[id] || {};
    if (Object.keys(vP(p, o)).length) {
      toast('Please add the name for your personalization first.', 'warn');
      location.hash = '#personalize/' + id;
      return;
    }
    addToCart(id, o);
    rr('pdatc');
    toast(`Added “${p.n}” to Cart!`);
    return;
  }
  if (c('[data-atc]')) {
    addToCart(id, PS[id] || {});
    toast(`Added “${p.n}” to Cart!`);
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
  const sp0 = PR.find(q => q.id === pid());
  if (g('selsum') && sp0) g('selsum').innerHTML = selRows(sp0, o);
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
