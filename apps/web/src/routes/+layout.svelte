<script>
  import '../app.postcss';
  import Header from '$lib/components/header/Header.svelte';
  import Footer from '$lib/components/footer/footer.svelte';
</script>

<Header />

<main class="relative container mx-auto">
  <slot />
</main>

<Footer />

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&family=Source+Sans+Pro&display=swap"
    rel="stylesheet"
  />
</svelte:head>
