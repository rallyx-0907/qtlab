<script>
  export let activeTab = 'home';

  let mobileOpen = false;

  const tabs = [
    { id: 'home',     label: 'Home',       icon: '🏠' },
    { id: 'work',     label: 'Work',       icon: '⚒️' },
    { id: 'services', label: 'Services',   icon: '📦' },
    { id: 'team',     label: 'Team',       icon: '👥' },
    // { id: 'blog',     label: 'Blog & Lab', icon: '📓' },
  ];

  function selectTab(id) {
    activeTab = id;
    mobileOpen = false;
  }

  function toggleMobile() {
    mobileOpen = !mobileOpen;
  }
</script>

<style>
  /* ── Hamburger (mobile only) ── */
  .hamburger {
    display: none;
    position: fixed;
    top: 14px;
    left: 14px;
    z-index: 300;
    background: var(--surface);
    border: 1px solid var(--border-active);
    color: var(--accent);
    font-size: 1.2rem;
    line-height: 1;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    border-radius: var(--radius-sm);
    transition: background 0.2s, border-color 0.2s;
  }

  .hamburger:hover {
    background: var(--accent-faint-md);
    border-color: var(--accent);
  }

  .hamburger:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* ── Sidebar ── */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100vh;
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    z-index: 200;
    box-shadow: 4px 0 32px var(--shadow);
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* ── Logo / Title ── */
  .sidebar-logo {
    padding: 1.8rem 1.5rem 1.4rem;
    border-bottom: 1px solid var(--border-subtle);
  }

  .pickle-icon {
    font-size: 2.2rem;
    display: block;
    text-align: center;
    animation: pickleFloat 3s ease-in-out infinite;
    cursor: pointer;
    user-select: none;
    background: none;
    border: none;
    padding: 0;
    width: 100%;
    border-radius: var(--radius-sm);
  }

  .pickle-icon:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  @keyframes pickleFloat {
    0%, 100% { transform: rotate(-6deg) translateY(0); }
    50%       { transform: rotate(6deg) translateY(-3px); }
  }

  /* ── Nav ── */
  nav {
    flex: 1;
    padding: 1rem 0;
    overflow-y: auto;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    color: var(--text-muted);
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.3px;
    position: relative;
    transition: color 0.18s ease, background 0.18s ease;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    border-left: 3px solid transparent;
    border-radius: 0;
  }

  .nav-item:hover {
    color: var(--text-secondary);
    background: var(--accent-faint);
  }

  .nav-item.active {
    color: var(--accent);
    background: var(--accent-faint-md);
    border-left-color: var(--accent);
    font-weight: 500;
  }

  .nav-item:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: -2px;
    background: var(--accent-faint);
  }

  .nav-icon {
    font-size: 1rem;
    flex-shrink: 0;
    width: 20px;
    text-align: center;
  }

  /* ── Footer strip ── */
  .sidebar-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--border-subtle);
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--text-dim);
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  /* ── Mobile overlay backdrop ── */
  .backdrop {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 8, 58, 0.72);
    z-index: 199;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    .sidebar {
      transform: translateX(-100%);
    }

    .sidebar.open {
      transform: translateX(0);
    }

    .backdrop {
      display: block;
    }
  }
</style>

<!-- Mobile hamburger -->
<button class="hamburger" on:click={toggleMobile} aria-label="Toggle menu">
  {mobileOpen ? '✕' : '☰'}
</button>

<!-- Backdrop (mobile) -->
{#if mobileOpen}
  <div class="backdrop" on:click={toggleMobile} role="presentation"></div>
{/if}

<aside class="sidebar" class:open={mobileOpen}>
  <div class="sidebar-logo">
    <button class="pickle-icon" on:click={() => selectTab('home')} title="Home">🥒</button>
  </div>

  <nav>
    {#each tabs as tab (tab.id)}
      <button
        class="nav-item"
        class:active={activeTab === tab.id}
        on:click={() => selectTab(tab.id)}
      >
        <span class="nav-icon">{tab.icon}</span>
        {tab.label}
      </button>
    {/each}
  </nav>

  <div class="sidebar-footer">
    <span>v0.2.0</span>
  </div>
</aside>
