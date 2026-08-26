/** Inline SVG icons — no icon font, no external requests. */
const wrap = (body, extra = '') =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"${extra}>${body}</svg>`;

export const icons = {
  code: wrap('<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/>'),
  layers: wrap(
    '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 14 9 5 9-5"/>'
  ),
  shield: wrap('<path d="M12 3 4.5 6v5.5c0 4.4 3.1 7.9 7.5 9.5 4.4-1.6 7.5-5.1 7.5-9.5V6L12 3Z"/><path d="M9.5 12.2 11.4 14l3.4-3.6"/>'),
  network: wrap(
    '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2v4.3M12 11.5 6.4 17M12 11.5 17.6 17"/>'
  ),
  database: wrap(
    '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>'
  ),
  devops: wrap(
    '<path d="M12 2.8 20.2 7v10L12 21.2 3.8 17V7L12 2.8Z"/><path d="M3.8 7 12 11.4 20.2 7"/><path d="M12 11.4v9.8"/>'
  ),
  server: wrap(
    '<rect x="3" y="4" width="18" height="6" rx="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.6"/><path d="M7 7h.01M7 17h.01"/>'
  ),
  check: wrap('<circle cx="12" cy="12" r="9"/><path d="m8.5 12.3 2.4 2.4 4.6-5"/>'),
  briefcase: wrap(
    '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7"/><path d="M3 12.5h18"/>'
  ),
  cap: wrap('<path d="m12 4 9.5 4.7L12 13.4 2.5 8.7 12 4Z"/><path d="M6.5 11v4.6c0 1.4 2.5 2.6 5.5 2.6s5.5-1.2 5.5-2.6V11"/>'),
  award: wrap('<circle cx="12" cy="9" r="5"/><path d="m8.6 13.4-1.3 6.6L12 17.7l4.7 2.3-1.3-6.6"/>'),
  certificate: wrap(
    '<rect x="3.5" y="4" width="17" height="12" rx="2"/><path d="M7.5 8h6M7.5 11.5h4"/><path d="M16.5 15.5v5l-2-1.4-2 1.4v-5"/>'
  ),
  mail: wrap('<rect x="3" y="5" width="18" height="14" rx="2.4"/><path d="m3.8 6.8 7.3 5.4a1.5 1.5 0 0 0 1.8 0l7.3-5.4"/>'),
  phone: wrap(
    '<path d="M6.2 3.5h2.9l1.4 3.6-1.8 1.3a11.5 11.5 0 0 0 5.4 5.4l1.3-1.8 3.6 1.4v2.9a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z"/>'
  ),
  pin: wrap('<path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/>'),
  download: wrap('<path d="M12 3.5v11"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M4.5 19.5h15"/>'),
  arrow: wrap('<path d="M5 12h13"/><path d="m12.5 5.8 6.2 6.2-6.2 6.2"/>'),
  external: wrap('<path d="M14 4.5h5.5V10"/><path d="M19.5 4.5 11 13"/><path d="M18 14.5v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6h4"/>'),
  spark: wrap('<path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.4l-1.9-5.6-5.6-1.9L10.1 9 12 3.5Z"/>'),
  sun: wrap('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19"/>'),
  moon: wrap('<path d="M20 13.4A8.2 8.2 0 0 1 10.6 4a8.5 8.5 0 1 0 9.4 9.4Z"/>'),
  menu: wrap('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: wrap('<path d="M6 6l12 12M18 6 6 18"/>')
};

export const brandIcons = {
  github: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>`,
  linkedin: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.8v1.5h.05a4.2 4.2 0 0 1 3.75-2c4 0 4.75 2.5 4.75 5.8v5.7h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.1h-4v-11Z"/></svg>`
};
