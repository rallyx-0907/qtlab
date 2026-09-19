<!-- src/pages/News.svelte — Daily digest fed by quniv/veen-news (static JSON, no backend) -->
<script>
  import { onMount } from 'svelte';

  const FEED_URL = 'https://cdn.jsdelivr.net/gh/quniv/veen-news@main/data/latest.json';

  const CATEGORY_ORDER = [
    'technology',
    'ai',
    'devops',
    'world',
    'vietnam',
    'innovations',
    'robotics',
    'open_source',
  ];

  const CATEGORY_LABELS = {
    technology: 'Technology',
    ai: 'AI',
    devops: 'DevOps',
    world: 'World',
    vietnam: 'Vietnam',
    innovations: 'Innovations',
    robotics: 'Robotics',
    open_source: 'Open Source',
  };

  let status = 'loading'; // 'loading' | 'error' | 'loaded'
  let errorMessage = '';
  let digest = null;
  let availableCategories = [];
  let selectedCategory = 'all';
  let showCursor = true;

  $: visibleArticles = digest
    ? selectedCategory === 'all'
      ? CATEGORY_ORDER.flatMap((cat) => digest.categories[cat] ?? [])
      : digest.categories[selectedCategory] ?? []
    : [];

  function selectCategory(id) {
    selectedCategory = id;
  }

  // Marker must be followed by whitespace, so prose like "-5% latency" isn't read as a bullet.
  const LIST_MARKER = /^\s*(?:[-*•–—·]+|\d+[.)])\s+/;

  // Returns bullet items, or null for pre-bullet digests that are still plain prose.
  function summaryBullets(text) {
    const lines = String(text ?? '')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    if (lines.length === 0 || !lines.every((line) => LIST_MARKER.test(line))) return null;
    return lines.map((line) => line.replace(LIST_MARKER, ''));
  }

  function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  async function loadFeed() {
    status = 'loading';
    errorMessage = '';
    try {
      const res = await fetch(FEED_URL, { cache: 'no-cache' });
      if (!res.ok) {
        throw new Error(`Feed responded with ${res.status}`);
      }
      const data = await res.json();
      digest = data;
      availableCategories = CATEGORY_ORDER.filter(
        (cat) => (data.categories?.[cat]?.length ?? 0) > 0
      );
      selectedCategory = 'all';
      status = 'loaded';
    } catch (err) {
      errorMessage = err instanceof Error ? err.message : 'Unknown error';
      status = 'error';
    }
  }

  onMount(() => {
    loadFeed();
    const id = setInterval(() => {
      showCursor = !showCursor;
    }, 530);
    return () => clearInterval(id);
  });
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
    margin: 0 0 0.6rem;
    line-height: 1.1;
  }

  .page-subhead {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--text-muted);
    letter-spacing: 0.5px;
  }

  .section-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.9rem;
  }

  .section-heading h2 {
    margin: 0;
    color: var(--text-primary);
    font-size: 1rem;
  }

  .section-heading span {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .digest-stats {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1px;
    margin: 0 0 2rem;
    overflow: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--border);
  }

  .digest-stat {
    padding: 1rem;
    background: var(--surface);
  }

  .digest-stat dt {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.58rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .digest-stat dd {
    margin: 0.35rem 0 0;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 1.1rem;
    font-weight: 700;
  }

  .daily-recap {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .recap-kicker {
    margin: 0 0 0.4rem;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .recap-title {
    margin: 0;
    color: var(--text-primary);
    font-size: 1.2rem;
    line-height: 1.3;
  }

  .recap-full-summary {
    margin: 1rem 0 0;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.75;
  }

  .recap-details {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  .recap-detail {
    align-self: start;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg);
  }

  .recap-detail summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.8rem 0.9rem;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.64rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    list-style: none;
  }

  .recap-detail summary::-webkit-details-marker {
    display: none;
  }

  .recap-detail summary::after {
    content: '+';
    color: var(--text-muted);
    font-size: 0.85rem;
  }

  .recap-detail[open] summary::after {
    content: '−';
  }

  .recap-detail p,
  .recap-detail ul {
    margin: 0;
    padding: 0 0.9rem 0.9rem;
    color: var(--text-muted);
    font-size: 0.8rem;
    line-height: 1.7;
  }

  .clusters-section {
    margin-bottom: 2rem;
  }

  .clusters-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 0.75rem;
  }

  .cluster-card {
    padding: 1.25rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .cluster-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.58rem;
    letter-spacing: 0.5px;
  }

  .cluster-card h3 {
    margin: 0;
    color: var(--text-primary);
    font-size: 0.9rem;
    line-height: 1.45;
  }

  .cluster-summary {
    margin: 0.75rem 0 0;
    color: var(--text-muted);
    font-size: 0.8rem;
    line-height: 1.7;
  }

  .summary-list {
    padding-left: 1.1rem;
    list-style: disc;
  }

  .summary-list li + li {
    margin-top: 0.3rem;
  }

  /* Detail panels pad 0.9rem; add room for the bullet markers on top of that. */
  .recap-detail ul.summary-list {
    padding-left: 2rem;
  }

  .summary-list li::marker {
    color: var(--text-muted);
  }

  .cluster-data {
    display: grid;
    gap: 0.65rem;
    margin: 1rem 0 0;
    padding-top: 0.85rem;
    border-top: 1px solid var(--border);
  }

  .cluster-data div {
    display: grid;
    gap: 0.25rem;
  }

  .cluster-data dt {
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.56rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .cluster-data dd {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin: 0;
  }

  .data-id {
    padding: 0.15rem 0.35rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.58rem;
  }

  main {
    padding: 2.5rem 2rem 4rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* ── Loading terminal ── */
  .terminal-wrap {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 1rem;
    background: var(--surface-2);
    border-bottom: 1px solid var(--border);
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--border-active);
  }

  .terminal-title {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-muted);
    letter-spacing: 2px;
    margin-left: 0.5rem;
    text-transform: uppercase;
  }

  .terminal-body {
    padding: 1.5rem;
    min-height: 160px;
  }

  .terminal-line {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.9;
  }

  .cursor-line {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--text-muted);
    padding-top: 0.8rem;
    letter-spacing: 1px;
    opacity: 0.5;
  }

  .cursor {
    display: inline-block;
    width: 7px;
    height: 0.9em;
    background: var(--text-muted);
    vertical-align: text-bottom;
    margin-left: 2px;
    opacity: 0;
    transition: opacity 0.1s;
  }

  .cursor.visible {
    opacity: 1;
  }

  /* ── Error state ── */
  .error-box {
    border: 1px solid var(--border-active);
    border-radius: var(--radius);
    padding: 1.75rem;
    background: var(--surface);
  }

  .error-title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    color: var(--status-error);
    text-transform: uppercase;
    margin: 0 0 0.6rem;
  }

  .error-message {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0 0 1.25rem;
  }

  .retry-button {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 1.5px;
    padding: 0.5rem 1.1rem;
    background: transparent;
    border: 1px solid var(--border-active);
    color: var(--text-secondary);
    cursor: pointer;
    border-radius: var(--radius);
    text-transform: uppercase;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  .retry-button:hover {
    color: var(--accent-dim);
    border-color: var(--color-primary);
    background: var(--accent-faint-md);
  }

  /* ── Category pills ── */
  .category-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .category-pill {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 1.5px;
    padding: 0.4rem 0.85rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    border: 1px solid var(--border-active);
    color: var(--text-muted);
    background: transparent;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  .category-pill:hover {
    color: var(--accent-dim);
    border-color: var(--color-primary);
  }

  .category-pill.active {
    color: var(--accent-dim);
    border-color: var(--accent);
    background: var(--accent-faint-md);
  }

  /* ── Article grid ── */
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .article-card {
    background: var(--surface);
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    transition: background 0.2s;
  }

  .article-card:hover {
    background: var(--surface-hover);
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .article-category {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 1px;
    padding: 0.18rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    border: 1px solid var(--border-active);
    color: var(--text-muted);
  }

  .article-source {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-muted);
    letter-spacing: 0.5px;
  }

  .article-score {
    margin-left: auto;
    padding: 0.18rem 0.5rem;
    border: 1px solid var(--accent);
    border-radius: var(--radius);
    color: var(--accent-dim);
    font-family: var(--font-mono);
    font-size: 0.58rem;
    letter-spacing: 0.5px;
  }

  .article-title {
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.4;
    text-decoration: none;
  }

  .article-title:hover {
    color: var(--blue);
  }

  .article-summary {
    font-size: 0.84rem;
    color: var(--text-muted);
    line-height: 1.72;
    margin: 0;
    flex: 1;
  }

  .article-date {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--text-muted);
    letter-spacing: 0.5px;
  }

  .article-footer {
    display: grid;
    gap: 0.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--border);
  }

  .article-identifiers {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .raw-digest {
    margin-top: 2rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .raw-digest summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 1rem;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }

  .raw-digest summary span {
    color: var(--text-muted);
    font-size: 0.55rem;
  }

  .raw-digest-body {
    padding: 0 1rem 1rem;
  }

  .raw-source {
    display: inline-block;
    margin-bottom: 0.75rem;
    color: var(--blue);
    font-family: var(--font-mono);
    font-size: 0.62rem;
  }

  .raw-digest pre {
    max-height: 520px;
    margin: 0;
    overflow: auto;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--bg);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 0.68rem;
    line-height: 1.6;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }

  .empty-state {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
    padding: 2rem;
    text-align: center;
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 2.5rem 1.25rem 2rem;
    }
    main {
      padding: 2rem 1.25rem 3rem;
    }
    .articles-grid {
      grid-template-columns: 1fr;
    }
    .recap-details {
      grid-template-columns: 1fr;
    }
    .digest-stats {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .digest-stat:last-child {
      grid-column: 1 / -1;
    }
  }
</style>

<!-- Bullet list for "- " summaries; plain paragraph for older prose digests. -->
{#snippet summaryText(text, className = '', fallback = '')}
  {@const bullets = summaryBullets(text)}
  {#if bullets}
    <ul class="{className} summary-list">
      {#each bullets as point, i (i)}
        <li>{point}</li>
      {/each}
    </ul>
  {:else}
    <p class={className}>{text || fallback}</p>
  {/if}
{/snippet}

<div class="page-header">
  <div class="page-label">// News</div>
  <h1 class="page-title">Daily Digest</h1>
  {#if status === 'loaded' && digest}
    <div class="page-subhead">
      {digest.date} · generated {formatDate(digest.generated_at)}
    </div>
  {:else}
    <div class="page-subhead">// feed.log</div>
  {/if}
</div>

<main>
  {#if status === 'loading'}
    <div class="terminal-wrap">
      <div class="terminal-bar">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <span class="terminal-title">veen-news · latest.json</span>
      </div>
      <div class="terminal-body">
        <div class="terminal-line">&gt; Fetching latest digest...</div>
        <div class="terminal-line">&gt; Connecting to cdn.jsdelivr.net...</div>
        <div class="cursor-line">
          &nbsp;<span class="cursor" class:visible={showCursor}></span>
        </div>
      </div>
    </div>
  {:else if status === 'error'}
    <div class="error-box">
      <p class="error-title">Feed unavailable</p>
      <p class="error-message">
        Couldn't load the news digest ({errorMessage}). The feed may be
        temporarily down or your connection may be offline.
      </p>
      <button class="retry-button" on:click={loadFeed}>Retry</button>
    </div>
  {:else if status === 'loaded' && digest}
    {#if digest.stats}
      <section aria-labelledby="pipeline-stats-heading">
        <div class="section-heading">
          <h2 id="pipeline-stats-heading">Pipeline Stats</h2>
          <span>stats</span>
        </div>
        <dl class="digest-stats">
          <div class="digest-stat">
            <dt>fetched</dt>
            <dd>{digest.stats.fetched}</dd>
          </div>
          <div class="digest-stat">
            <dt>after_filter</dt>
            <dd>{digest.stats.after_filter}</dd>
          </div>
          <div class="digest-stat">
            <dt>published</dt>
            <dd>{digest.stats.published}</dd>
          </div>
          <div class="digest-stat">
            <dt>clusters_formed</dt>
            <dd>{digest.stats.clusters_formed}</dd>
          </div>
          <div class="digest-stat">
            <dt>sources_crawled</dt>
            <dd>{digest.stats.sources_crawled}</dd>
          </div>
        </dl>
      </section>
    {/if}

    {#if digest.daily_recap}
      <section class="daily-recap" aria-labelledby="daily-summary-heading">
        <p class="recap-kicker">// daily_recap</p>
        <h2 class="recap-title" id="daily-summary-heading">Daily Summary</h2>

        {#if digest.daily_recap.full_summary}
          {@render summaryText(digest.daily_recap.full_summary, 'recap-full-summary')}
        {/if}

        <div class="recap-details">
          {#if digest.daily_recap.global_analysis}
            <details class="recap-detail">
              <summary>Global analysis</summary>
              {@render summaryText(digest.daily_recap.global_analysis)}
            </details>
          {/if}

          {#if digest.daily_recap.vietnam_analysis}
            <details class="recap-detail">
              <summary>Vietnam analysis</summary>
              {@render summaryText(digest.daily_recap.vietnam_analysis)}
            </details>
          {/if}

          {#if digest.daily_recap.watch_list}
            <details class="recap-detail">
              <summary>Watch list</summary>
              {@render summaryText(digest.daily_recap.watch_list)}
            </details>
          {/if}
        </div>
      </section>
    {/if}

    {#if digest.clusters?.length}
      <section class="clusters-section" aria-labelledby="clusters-heading">
        <div class="section-heading">
          <h2 id="clusters-heading">Topic Clusters</h2>
          <span>{digest.clusters.length} clusters</span>
        </div>
        <div class="clusters-grid">
          {#each digest.clusters as cluster (cluster.id)}
            <article class="cluster-card">
              <div class="cluster-header">
                <span>{cluster.id}</span>
                <span>{cluster.article_count} articles</span>
              </div>
              <h3>{cluster.topic}</h3>
              {@render summaryText(cluster.summary, 'cluster-summary')}
              <dl class="cluster-data">
                <div>
                  <dt>representative_id</dt>
                  <dd><code class="data-id">{cluster.representative_id ?? 'none'}</code></dd>
                </div>
                <div>
                  <dt>article_ids</dt>
                  <dd>
                    {#each cluster.article_ids ?? [] as articleId (articleId)}
                      <code class="data-id">{articleId}</code>
                    {/each}
                  </dd>
                </div>
              </dl>
            </article>
          {/each}
        </div>
      </section>
    {/if}

    {#if availableCategories.length > 0}
      <div class="category-row">
        <button
          class="category-pill"
          class:active={selectedCategory === 'all'}
          on:click={() => selectCategory('all')}
        >All</button>
        {#each availableCategories as cat (cat)}
          <button
            class="category-pill"
            class:active={selectedCategory === cat}
            on:click={() => selectCategory(cat)}
          >{CATEGORY_LABELS[cat] ?? cat}</button>
        {/each}
      </div>
    {/if}

    {#if visibleArticles.length > 0}
      <div class="articles-grid">
        {#each visibleArticles as article (article.id)}
          <div class="article-card">
            <div class="card-meta">
              <span class="article-category">{CATEGORY_LABELS[article.category] ?? article.category}</span>
              <span class="article-source">{article.source}</span>
              <span class="article-score">score {article.score ?? 'n/a'}</span>
            </div>
            <a
              class="article-title"
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >{article.title}</a>
            {@render summaryText(article.summary, 'article-summary', 'No summary provided.')}
            <div class="article-footer">
              <span class="article-date">{formatDate(article.published_at)}</span>
              <div class="article-identifiers">
                <code class="data-id">id {article.id}</code>
                <code class="data-id">cluster {article.cluster_id ?? 'none'}</code>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="empty-state">No articles in today's digest yet. Check back soon.</div>
    {/if}

    <details class="raw-digest">
      <summary>
        Raw JSON payload
        <span>all current and future fields</span>
      </summary>
      <div class="raw-digest-body">
        <a class="raw-source" href={FEED_URL} target="_blank" rel="noopener noreferrer">Open source JSON</a>
        <pre>{JSON.stringify(digest, null, 2)}</pre>
      </div>
    </details>
  {/if}
</main>
