<script>
  import { Button } from 'flowbite-svelte';
</script>

<section
  class="bg-white dark:bg-gray-900 text-center flex 
  items-center md:items-start  h-[calc(100vh_-_231px)] md:h-[calc(100vh_-_154px)]"
>
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 md:mt-20">
    <h1
      class="font-display capitalize mb-8 md:mb-11 text-3xl font-extrabold tracking-tight  text-gray-900  md:text-5xl lg:text-6xl dark:text-white"
    >
      JAMB & WASCCE Practice Questions
    </h1>
    <p
      class="mb-8 md:mb-20 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      Nothing new under the sun!
    </p>
    <div class="md:mt-11">
      <Button href="/quiz" pill={true} class="font-display" size="lg">Start now</Button>
    </div>
  </div>
</section>
