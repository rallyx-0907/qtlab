<!-- src/pages/Blog.svelte — Lab notes + blog feed
<script>
  import { labNotes } from '../orgData.js';

  const published = labNotes.filter(n => n.status === 'published');

  const typeLabel = { lab: 'LAB', blog: 'BLOG' };
</script>

<style>
  .page-header {
    padding: 3.5rem 2rem 2.5rem;
    border-bottom: 1px solid var(--border);
    max-width: 900px;
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
    max-width: 900px;
    margin: 0 auto;
  }

  /* ── Empty state ── */
  .placeholder {
    background: var(--surface-raised);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2.5rem 2rem;
    text-align: center;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }

  /* ── Published posts ── */
  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 2rem;
  }

  .post-card {
    background: var(--surface);
    padding: 1.6rem 1.75rem;
    transition: background 0.2s;
  }

  .post-card:hover { background: var(--surface-hover); }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.65rem;
    flex-wrap: wrap;
  }

  .post-date {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-muted);
    letter-spacing: 1px;
  }

  .post-type {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 1.5px;
    padding: 0.12rem 0.45rem;
    border-radius: var(--radius);
    color: var(--text-secondary);
    border: 1px solid var(--border-active);
  }

  .post-title {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.5rem;
    letter-spacing: 0.2px;
    line-height: 1.4;
  }

  .post-excerpt {
    font-size: 0.84rem;
    color: var(--text-muted);
    line-height: 1.72;
    margin: 0 0 0.9rem;
  }

  .post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }

  .post-tag {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-muted);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 0.1rem 0.4rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    .page-header { padding: 2.5rem 1.25rem 2rem; }
    main { padding: 2rem 1.25rem 3rem; }
  }
</style>

<div class="page-header">
  <div class="page-label">// Blog</div>
  <h1 class="page-title">Lab Notes</h1>
</div>

<main>
  {#if published.length === 0}
    <div class="placeholder">No lab notes or blog posts yet — coming soon.</div>
  {:else}
    <div class="posts-list">
      {#each published as post (post.id)}
        <div class="post-card">
          <div class="post-meta">
            <span class="post-date">{post.date}</span>
            <span class="post-type">{typeLabel[post.type] ?? post.type.toUpperCase()}</span>
          </div>
          <h3 class="post-title">{post.title}</h3>
          <p class="post-excerpt">{post.excerpt}</p>
          <div class="post-tags">
            {#each post.tags as t (t)}
              <span class="post-tag">{t}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main> -->
