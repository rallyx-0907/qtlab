<script>
  import { getTheme, toggleTheme } from '../theme.js';

  let theme = $state(getTheme());
  let isDark = $derived(theme === 'dark');

  function handleToggle() {
    theme = toggleTheme(theme);
  }
</script>

<button
  class="theme-toggle"
  type="button"
  onclick={handleToggle}
  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
  aria-pressed={isDark}
>
  {#if isDark}
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.4 15.5A8.5 8.5 0 0 1 8.5 3.6 8.5 8.5 0 1 0 20.4 15.5Z"></path>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    width: 34px;
    height: 34px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-active);
    border-radius: var(--radius);
    background: var(--accent-faint);
    color: var(--accent);
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
  }

  .theme-toggle:hover {
    border-color: var(--accent);
    background: var(--accent-faint-md);
    transform: translateY(-1px);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  svg {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (prefers-reduced-motion: reduce) {
    .theme-toggle {
      transition: none;
    }
  }
</style>
