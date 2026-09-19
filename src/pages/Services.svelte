<!-- src/pages/Services.svelte — Services + Pricing -->
<script>
  import { org, services, pricing } from '../orgData.js';
</script>

<style>
  .page-header {
    padding: 3.5rem 2rem 2.5rem;
    border-bottom: 1px solid var(--border);
    max-width: 1100px;
    margin: 0 auto;
  }

  .page-label {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 4px;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .page-title {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.5px;
    margin: 0;
    line-height: 1.1;
  }

  main {
    padding: 2.5rem 2rem 4rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .section-label {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 4px;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 1.75rem;
  }

  /* ── Service cards ── */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 4rem;
  }

  .service-card {
    background: var(--surface);
    padding: 2rem 1.75rem;
    transition: background 0.2s;
    position: relative;
  }

  .service-card:hover { background: var(--surface-hover); }

  .service-icon {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    display: block;
  }

  .service-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.6rem;
    letter-spacing: 0.3px;
  }

  .service-desc {
    font-size: 0.84rem;
    color: var(--text-muted);
    line-height: 1.72;
    margin: 0 0 1.1rem;
  }

  .tags-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .tag {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-muted);
    border: 1px solid var(--border-active);
    border-radius: var(--radius);
    padding: 0.12rem 0.45rem;
    letter-spacing: 0.5px;
  }

  /* ── Pricing ── */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 3rem;
  }

  .pricing-card {
    background: var(--surface);
    padding: 2rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: background 0.2s;
    position: relative;
  }

  .pricing-card:hover { background: var(--surface-hover); }

  .pricing-card.highlight {
    background: var(--surface-highlight);
  }

  .pricing-card.highlight:hover {
    background: var(--surface-highlight-hover);
  }

  .pricing-card.highlight::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent);
  }

  .pricing-label {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 3px;
    color: var(--text-muted);
    text-transform: uppercase;
  }

  .pricing-price {
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.5px;
    line-height: 1;
  }

  .pricing-desc {
    font-size: 0.83rem;
    color: var(--text-muted);
    line-height: 1.65;
    margin: 0;
  }

  .pricing-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
  }

  .pricing-bullets li {
    font-size: 0.82rem;
    color: var(--text-muted);
    padding-left: 1rem;
    position: relative;
    line-height: 1.5;
  }

  .pricing-bullets li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--text-secondary);
  }

  .contact-btn {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 1.5px;
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid var(--border-active);
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
    border-radius: var(--radius);
    color: var(--text-secondary);
    text-decoration: none;
    display: inline-block;
    text-align: center;
    margin-top: auto;
  }

  .contact-btn:hover {
    color: var(--accent-dim);
    border-color: var(--color-primary);
    background: var(--accent-faint-md);
  }

  /* ── Contact strip ── */
  .contact-strip {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2.5rem 2rem;
    text-align: center;
  }

  .contact-strip h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.6rem;
    letter-spacing: 0.3px;
  }

  .contact-strip p {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin: 0 0 1.2rem;
    line-height: 1.65;
  }

  .email-link {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--text-secondary);
    text-decoration: none;
    letter-spacing: 1px;
    transition: color 0.2s;
  }

  .email-link:hover { color: var(--text-primary); }

  .philosophy-note {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--text-muted);
    letter-spacing: 2px;
    margin: 0.9rem 0 0;
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    .services-grid { grid-template-columns: 1fr; }
    .pricing-grid  { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .page-header { padding: 2.5rem 1.25rem 2rem; }
    main { padding: 2rem 1.25rem 3rem; }
  }
</style>

<div class="page-header">
  <div class="page-label">// Services</div>
  <h1 class="page-title">What We Do</h1>
</div>

<main>
  <div class="section-label">Services</div>
  <div class="services-grid">
    {#each services as s (s.id)}
      <div class="service-card">
        <div class="service-icon">{s.icon}</div>
        <h3 class="service-title">{s.title}</h3>
        <p class="service-desc">{s.description}</p>
        <div class="tags-row">
          {#each s.tags as t (t)}
            <span class="tag">{t}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  <div class="section-label">Pricing</div>
  <div class="pricing-grid">
    {#each pricing as p (p.id)}
      <div class="pricing-card" class:highlight={p.highlight}>
        <div class="pricing-label">{p.label}</div>
        <div class="pricing-price">{p.price}</div>
        <p class="pricing-desc">{p.description}</p>
        <ul class="pricing-bullets">
          {#each p.bullets as b, bi (bi)}
            <li>{b}</li>
          {/each}
        </ul>
        <a class="contact-btn" href="mailto:{org.email}">Contact</a>
      </div>
    {/each}
  </div>

  <div class="contact-strip">
    <h3>Ready to build something?</h3>
    <p>Tell us what you're trying to solve. We'll figure out if we're the right fit.</p>
    <a class="email-link" href="mailto:{org.email}">{org.email}</a>
    <p class="philosophy-note">reputation-based · affordable · ships</p>
  </div>
</main>
