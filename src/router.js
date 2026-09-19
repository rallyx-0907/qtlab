// src/router.js — History-API routing for the top-level sections (no dependency)
import { writable } from 'svelte/store';

const SITE_TITLE = 'Technology Innovation Labs — qtlab.dev';

export const ROUTES = [
  { id: 'home',     path: '/',         title: SITE_TITLE },
  { id: 'news',     path: '/news',     title: `News — qtlab.dev` },
  { id: 'work',     path: '/work',     title: `Work — qtlab.dev` },
  { id: 'services', path: '/services', title: `Services — qtlab.dev` },
  { id: 'team',     path: '/team',     title: `Team — qtlab.dev` },
];

// Old or singular spellings that should land on the canonical path.
const ALIASES = new Map([['/service', '/services']]);

function normalize(pathname) {
  const path = pathname.replace(/\/+$/, '').toLowerCase() || '/';
  return ALIASES.get(path) ?? path;
}

function resolve(pathname) {
  return ROUTES.find((r) => r.path === normalize(pathname)) ?? null;
}

export function pathFor(id) {
  return ROUTES.find((r) => r.id === id)?.path ?? '/';
}

function apply(entry) {
  document.title = entry.title;
  route.set(entry.id);
}

export const route = writable('home');

export function navigate(id) {
  const entry = ROUTES.find((r) => r.id === id) ?? ROUTES[0];
  if (window.location.pathname !== entry.path) {
    window.history.pushState({}, '', entry.path);
  }
  apply(entry);
  window.scrollTo(0, 0);
}

// Plain left-clicks navigate in-app; modifier/middle clicks keep native new-tab behaviour.
export function linkClick(event, id) {
  if (event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  navigate(id);
}

export function startRouter() {
  const sync = () => {
    const entry = resolve(window.location.pathname);
    if (!entry) {
      // Unknown path: show home and fix the URL so it matches the content.
      window.history.replaceState({}, '', '/');
      apply(ROUTES[0]);
      return;
    }
    if (entry.path !== window.location.pathname) {
      window.history.replaceState({}, '', entry.path + window.location.search + window.location.hash);
    }
    apply(entry);
  };

  sync();
  window.addEventListener('popstate', sync);
  return () => window.removeEventListener('popstate', sync);
}
