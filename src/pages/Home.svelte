<!-- src/pages/Home.svelte — Landing page -->
<script>
  import { onMount } from 'svelte';
  import { org, missions } from '../orgData.js';
  import TechStack from '../components/TechStack.svelte';

  export let onNavigate = () => {};

  let dotPhase = 0;
  onMount(() => {
    const id = setInterval(() => { dotPhase = (dotPhase + 1) % 2; }, 900);
    return () => clearInterval(id);
  });
</script>

<style>
  /* ── Hero ── */
  .hero {
    min-height: calc(100vh - var(--nav-height));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem 5rem;
    background: var(--background-gradient);
  }

  .hero-label {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 5px;
    color: rgba(245, 247, 250, 0.72);
    text-transform: uppercase;
    margin-bottom: 2.2rem;
  }

  .hero-title {
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    font-weight: 700;
    color: var(--color-surface);
    letter-spacing: -1.5px;
    line-height: 1.06;
    margin: 0 0 2rem;
    max-width: 760px;
  }

  .hero-status {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 4px;
    color: rgba(245, 247, 250, 0.78);
    text-transform: uppercase;
    margin-bottom: 3.5rem;
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-primary-light);
    flex-shrink: 0;
    transition: opacity 0.5s;
  }

  .dot.dim { opacity: 0.15; }

  .cta-group {
    display: flex;
    gap: 0.9rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 0.6rem 1.75rem;
    background: transparent;
    border: 1px solid rgba(245, 247, 250, 0.46);
    color: var(--color-background);
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
    border-radius: var(--radius);
  }

  .btn:hover {
    color: var(--color-surface);
    border-color: var(--color-surface);
    background: rgba(255, 255, 255, 0.08);
  }

  .btn.primary {
    border-color: var(--color-surface);
    background: var(--color-surface);
    color: var(--color-primary-dark);
  }

  .btn.primary:hover {
    border-color: var(--color-background);
    background: var(--color-background);
    color: var(--color-primary);
  }

  /* ── Sections ── */
  .section {
    max-width: 1100px;
    margin: 0 auto;
    padding: 4rem 2rem;
    border-top: 1px solid var(--border);
  }

  .section-label {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 4px;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 2.5rem;
  }

  /* ── Mission grid ── */
  .missions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .mission-card {
    background: var(--surface);
    padding: 2rem 1.75rem;
    transition: background 0.2s;
  }

  .mission-card:hover {
    background: var(--surface-hover);
  }

  .mission-icon {
    font-size: 1.4rem;
    margin-bottom: 1.1rem;
    display: block;
  }

  .mission-card h3 {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.65rem;
    letter-spacing: 0.3px;
  }

  .mission-card p {
    font-size: 0.83rem;
    color: var(--text-muted);
    line-height: 1.75;
    margin: 0;
  }

  /* ── Footer ── */
  footer {
    border-top: 1px solid var(--border);
    padding: 2.5rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .footer-links a {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: var(--text-muted);
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s;
  }

  .footer-links a:hover { color: var(--text-secondary); }

  .footer-copy {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 2px;
    color: var(--text-muted);
    opacity: 0.5;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .missions-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .hero { padding: 3rem 1.5rem 4rem; }
    .section { padding: 3rem 1.25rem; }
  }
</style>

<section class="hero">
  <div class="hero-label">QTLAB.DEV</div>
  <h1 class="hero-title">Technology Innovation Labs</h1>
  <div class="hero-status">
    <span class="dot" class:dim={dotPhase === 0}></span>
    <span>{org.tagline}</span>
    <span class="dot" class:dim={dotPhase === 1}></span>
  </div>
  <div class="cta-group">
    <button class="btn primary" on:click={() => onNavigate('work')}>View Work</button>
    <button class="btn" on:click={() => onNavigate('services')}>Services</button>
  </div>
</section>

<div class="section">
  <div class="section-label">Mission</div>
  <div class="missions-grid">
    {#each missions as m (m.id)}
      <div class="mission-card">
        <span class="mission-icon">{m.icon}</span>
        <h3>{m.title}</h3>
        <p>{m.body}</p>
      </div>
    {/each}
  </div>
</div>

<div class="section">
  <div class="section-label">Stack</div>
  <TechStack />
</div>

<footer>
  <div class="footer-links">
    <a href={org.github} target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href={org.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </div>
  <div class="footer-copy">© 2026 Technology Innovation Labs</div>
</footer>
