/* Language switching.
   - Japanese is the source of truth written in index.html (default).
   - English is selected by URL: /en/ (path) or ?lang=en (query).
   - The <head> inline script sets <html data-lang> before first paint;
     this module swaps every [data-i18n] / [data-i18n-attr] element and
     then marks the document ready (body is hidden until then for "en"). */
import en from './i18n/en.js';

const html = document.documentElement;
export const LANG = html.dataset.lang === 'en' ? 'en' : 'ja';
const dict = LANG === 'en' ? en : null;

/* t(key, jaText): English from the dictionary, otherwise the Japanese text. */
export function t(key, ja) {
  if (dict && key in dict) return dict[key];
  return ja;
}

if (dict) {
  document.title = dict['meta.title'];
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = dict['meta.description'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (k in dict) el.innerHTML = dict[k];
    else console.warn('[i18n] missing key:', k);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const i = pair.indexOf(':');
      const attr = pair.slice(0, i).trim(), k = pair.slice(i + 1).trim();
      if (k in dict) el.setAttribute(attr, dict[k]);
      else console.warn('[i18n] missing key:', k);
    });
  });
}

/* language switcher links: keep the current #anchor when switching */
const links = document.querySelectorAll('[data-lang-link]');
function syncLinks() {
  links.forEach(a => {
    const l = a.dataset.langLink;
    a.href = (l === 'en' ? '/en/' : '/') + location.hash;
    a.classList.toggle('on', l === LANG);
    if (l === LANG) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}
syncLinks();
addEventListener('hashchange', syncLinks);

html.dataset.i18nReady = '1';
