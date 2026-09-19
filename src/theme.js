const STORAGE_KEY = 'qtlab-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function isTheme(value) {
  return value === DARK_THEME || value === LIGHT_THEME;
}

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_THEME
    : LIGHT_THEME;
}

function updateThemeColor(theme) {
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute('content', theme === DARK_THEME ? '#00083a' : '#ffffff');
  }
}

export function getTheme() {
  const currentTheme = document.documentElement.dataset.theme;
  return isTheme(currentTheme) ? currentTheme : getStoredTheme() ?? getSystemTheme();
}

export function setTheme(theme, { persist = true } = {}) {
  const nextTheme = isTheme(theme) ? theme : LIGHT_THEME;

  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;
  updateThemeColor(nextTheme);

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // The active theme still applies when browser storage is unavailable.
    }
  }

  return nextTheme;
}

export function initializeTheme() {
  return setTheme(getStoredTheme() ?? getSystemTheme(), { persist: false });
}

export function toggleTheme(currentTheme = getTheme()) {
  return setTheme(currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
}
