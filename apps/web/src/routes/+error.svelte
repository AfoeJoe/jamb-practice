<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Not Found!</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container mt-4">
  <div class="text-center">
    <!-- <img class="img-fluid" src="/img/404.gif" width="480" height="480" alt="404 Not Found" /> -->
    <div class="max-w-[480px] m-auto alert-danger" role="alert">
      <h1>{$page.status}: {$page.error?.message}</h1>
    </div>
  </div>
</div>

<style>
</style>
