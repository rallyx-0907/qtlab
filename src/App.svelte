<!-- src/App.svelte — Root layout -->
<script>
  import { onDestroy } from 'svelte';
  import TopNav from './components/TopNav.svelte';
  import Home from './pages/Home.svelte';
  import Work from './pages/Work.svelte';
  import Services from './pages/Services.svelte';
  import Team from './pages/Team.svelte';
  import News from './pages/News.svelte';
  import { route, navigate, startRouter } from './router.js';

  // Runs before first render so a deep link like /news never flashes Home.
  onDestroy(startRouter());
</script>

<style>
  .content {
    padding-top: var(--nav-height);
    min-height: 100vh;
  }
</style>

<TopNav activeTab={$route} />

<div class="content">
  {#if $route === 'home'}
    <Home onNavigate={navigate} />
  {:else if $route === 'work'}
    <Work />
  {:else if $route === 'services'}
    <Services />
  {:else if $route === 'team'}
    <Team />
  {:else if $route === 'news'}
    <News />
  {/if}
</div>
