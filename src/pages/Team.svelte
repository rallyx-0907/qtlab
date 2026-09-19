<!-- src/pages/Team.svelte — Team member cards -->
<script>
  import { team } from '../orgData.js';

  const SLOTS = 4;
  const emptySlotIndices = Array.from({ length: SLOTS - team.length }, (_, i) => i);
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

  .mission-strip {
    font-size: 0.9rem;
    color: var(--text-muted);
    letter-spacing: 0.3px;
    margin-bottom: 2.5rem;
    line-height: 1.7;
    font-style: italic;
  }

  /* ── Team grid ── */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 4rem;
  }

  .member-card {
    background: var(--surface);
    padding: 2rem 1.5rem;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.55rem;
    transition: background 0.2s;
    cursor: pointer;
  }

  .member-card:hover { background: var(--surface-hover); }

  .member-profile-link {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .member-profile-link:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: -3px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .member-profile-link {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .member-profile-link:focus-visible {
    outline: 2px solid var(--text-primary);
    outline-offset: -3px;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .member-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 1px solid var(--border-active);
    margin-bottom: 0.4rem;
    object-fit: cover;
    filter: grayscale(20%);
    transition: filter 0.3s, border-color 0.3s;
  }

  .member-card:hover .member-avatar {
    filter: grayscale(0%);
    border-color: var(--color-primary);
  }

  .member-name {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: 0.3px;
  }

  .member-role {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--text-muted);
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .member-bio {
    font-size: 0.78rem;
    color: var(--text-muted);
    line-height: 1.65;
    margin: 0.25rem 0 0;
    text-align: left;
    opacity: 0.8;
  }

  .skills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    justify-content: center;
    margin-top: 0.2rem;
  }

  .skill-chip {
    font-family: var(--font-mono);
    font-size: 0.58rem;
    color: var(--text-muted);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 0.12rem 0.4rem;
    letter-spacing: 0.5px;
  }

  .member-links {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.35rem;
    position: relative;
    z-index: 2;
  }

  .member-link {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--text-muted);
    text-decoration: none;
    letter-spacing: 1px;
    padding: 0.22rem 0.6rem;
    border: 1px solid var(--border-active);
    border-radius: var(--radius);
    transition: color 0.2s, border-color 0.2s;
  }

  .member-link:hover {
    color: var(--accent-dim);
    border-color: var(--color-primary);
  }

  /* ── Empty slot ── */
  .slot-empty {
    background: var(--surface);
    border: none;
    padding: 2rem 1.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 160px;
  }

  .slot-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-muted);
    letter-spacing: 2px;
    opacity: 0.4;
  }

  @media (max-width: 1000px) {
    .team-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .team-grid { grid-template-columns: 1fr; }
    .page-header { padding: 2.5rem 1.25rem 2rem; }
    main { padding: 2rem 1.25rem 3rem; }
  }
</style>

<div class="page-header">
  <div class="page-label">// Team</div>
  <h1 class="page-title">Who We Are</h1>
</div>

<main>
  <div class="section-label">People</div>
  <p class="mission-strip">A small group of engineers who build things that actually work.</p>

  <div class="team-grid">
    {#each team as m (m.id)}
      <article class="member-card">
        <a class="member-profile-link" href={m.profileUrl} target="_blank" rel="noopener noreferrer">
          <span class="visually-hidden">Open {m.name}'s profile in a new tab</span>
        </a>
        <img class="member-avatar" src={m.avatar} alt={m.name} />
        <h3 class="member-name">{m.name}</h3>
        <div class="member-role">{m.role}</div>
        <p class="member-bio">{m.bio}</p>
        <div class="skills-row">
          {#each m.skills as s (s)}
            <span class="skill-chip">{s}</span>
          {/each}
        </div>
        <div class="member-links">
          {#if m.links.github}
            <a class="member-link" href={m.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {/if}
          {#if m.links.linkedin}
            <a class="member-link" href={m.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/if}
        </div>
      </article>
    {/each}

    {#each emptySlotIndices as idx (idx)}
      <div class="slot-empty">
        <div class="slot-label">+ TBD</div>
      </div>
    {/each}
  </div>
</main>
