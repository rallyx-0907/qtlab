export function normalizeExternalUrl(value) {
  if (!value) return '';
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export function displayExternalUrl(value) {
  return normalizeExternalUrl(value)
    .replace(/^https?:\/\//i, '')
    .replace(/\/$/, '');
}

export function phoneHref(value) {
  return `tel:${value.replace(/[^\d+]/g, '')}`;
}
