<!-- src/pages/Work.svelte — Projects showcase -->
<script>
  import { projects } from '../orgData.js';
  import { onMount } from 'svelte';

  const GITHUB_API_VERSION = '2026-03-10';
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const projectRepositories = projects
    .map((project) => ({
      id: project.id,
      repository: parseGitHubRepository(project.repo),
    }))
    .filter((project) => project.repository);
  const repositoryOwners = [...new Set(
    projectRepositories.map((project) => project.repository.owner)
  )];

  let showCursor = $state(true);
  let updatesLoading = $state(true);
  let projectUpdates = $state.raw([]);
  let projectsWithUpdates = $derived(
    projects.map((project) => ({
      ...project,
      lastUpdate: projectUpdates.find((update) => update.id === project.id)?.lastUpdate ?? null,
    }))
  );

  function parseGitHubRepository(repoUrl) {
    if (!repoUrl) return null;

    try {
      const url = new URL(repoUrl);
      if (url.hostname !== 'github.com') return null;

      const [owner, rawRepo] = url.pathname.split('/').filter(Boolean);
      if (!owner || !rawRepo) return null;

      return {
        owner,
        repo: rawRepo.replace(/\.git$/, ''),
      };
    } catch {
      return null;
    }
  }

  async function fetchOwnerRepositories(owner, signal) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(owner)}/repos?per_page=100&type=owner`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            'X-GitHub-Api-Version': GITHUB_API_VERSION,
          },
          signal,
        }
      );

      if (!response.ok) return { owner, repositories: [] };

      const repositoryData = await response.json();
      return {
        owner,
        repositories: Array.isArray(repositoryData) ? repositoryData : [],
      };
    } catch {
      return { owner, repositories: [] };
    }
  }

  async function loadProjectUpdates(signal) {
    const repositoriesByOwner = await Promise.all(
      repositoryOwners.map((owner) => fetchOwnerRepositories(owner, signal))
    );

    const updates = projectRepositories.map((project) => {
      const expectedFullName = `${project.repository.owner}/${project.repository.repo}`.toLowerCase();
      const ownerData = repositoriesByOwner.find(
        (entry) => entry.owner === project.repository.owner
      );
      const repositoryData = ownerData?.repositories.find(
        (repository) => repository.full_name?.toLowerCase() === expectedFullName
      );
      const lastUpdate = typeof repositoryData?.pushed_at === 'string'
        ? repositoryData.pushed_at
        : null;

      return { id: project.id, lastUpdate };
    });

    if (!signal.aborted) {
      projectUpdates = updates;
      updatesLoading = false;
    }
  }

  function formatLastUpdate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? '' : dateFormatter.format(date);
  }

  function formatUpdateTitle(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? '' : date.toLocaleString();
  }

  onMount(() => {
    const abortController = new AbortController();
    const id = setInterval(() => { showCursor = !showCursor; }, 530);
    loadProjectUpdates(abortController.signal);

    return () => {
      abortController.abort();
      clearInterval(id);
    };
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
    margin: 0;
    line-height: 1.1;
  }

  main {
    padding: 2.5rem 2rem 4rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-bottom: 3rem;
  }

  .project-card {
    background: var(--surface);
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    transition: background 0.2s;
  }

  .project-card:hover { background: var(--surface-hover); }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    flex-wrap: wrap;
  }

  .project-title {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
    flex: 1;
  }

  .status-badge {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    letter-spacing: 1.5px;
    padding: 0.18rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .status-badge.live {
    color: var(--status-success);
    border: 1px solid var(--status-success-border);
    background: var(--status-success-bg);
  }

  .status-badge.wip {
    color: var(--status-warning);
    border: 1px solid var(--status-warning-border);
    background: var(--status-warning-bg);
  }

  .project-desc {
    font-size: 0.84rem;
    color: var(--text-muted);
    line-height: 1.72;
    margin: 0;
    flex: 1;
  }

  .stack-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .stack-chip {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-muted);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 0.12rem 0.45rem;
    letter-spacing: 0.5px;
  }

  .last-update {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 1rem;
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--text-muted);
    letter-spacing: 0.5px;
  }

  .last-update::before {
    content: '↻';
    color: var(--accent);
  }

  .last-update.loading {
    opacity: 0.55;
  }

  .card-links {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .card-link {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 1.5px;
    padding: 0.35rem 0.9rem;
    background: transparent;
    border: 1px solid var(--border-active);
    text-decoration: none;
    color: var(--text-secondary);
    transition: color 0.2s, border-color 0.2s, background 0.2s;
    border-radius: var(--radius);
  }

  .card-link:hover {
    color: var(--accent-dim);
    border-color: var(--color-primary);
    background: var(--accent-faint-md);
  }

  .terminal-footer {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    letter-spacing: 1px;
    padding: 1rem 0;
    border-top: 1px solid var(--border);
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

  .cursor.visible { opacity: 1; }

  @media (max-width: 768px) {
    .page-header { padding: 2.5rem 1.25rem 2rem; }
    main { padding: 2rem 1.25rem 3rem; }
    .projects-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="page-header">
  <div class="page-label">// Work</div>
  <h1 class="page-title">Projects</h1>
</div>

<main>
  <div class="projects-grid">
    {#each projectsWithUpdates as p (p.id)}
      <div class="project-card">
        <div class="card-header">
          <h3 class="project-title">{p.title}</h3>
          <span class="status-badge {p.status}">{p.status === 'live' ? '● live' : '○ wip'}</span>
        </div>

        <p class="project-desc">{p.description}</p>

        {#if p.stack.length > 0}
          <div class="stack-row">
            {#each p.stack as s (s)}
              <span class="stack-chip">{s}</span>
            {/each}
          </div>
        {/if}

        {#if updatesLoading && p.repo}
          <div class="last-update loading" aria-hidden="true">Checking activity…</div>
        {:else if p.lastUpdate}
          <time
            class="last-update"
            datetime={p.lastUpdate}
            title={formatUpdateTitle(p.lastUpdate)}
          >Last updated {formatLastUpdate(p.lastUpdate)}</time>
        {/if}

        {#if p.url || p.repo}
          <div class="card-links">
            {#if p.url}
              <a class="card-link" href={p.url} target="_blank" rel="noopener noreferrer">↗ Live</a>
            {/if}
            {#if p.repo}
              <a class="card-link" href={p.repo} target="_blank" rel="noopener noreferrer">⌥ Repo</a>
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class="terminal-footer">
    > shipping beats perfection...<span class="cursor" class:visible={showCursor}></span>
  </div>
</main>
