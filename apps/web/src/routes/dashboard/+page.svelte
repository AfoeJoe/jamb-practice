<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  $: ({ totalGames, totalScore } = data);
  console.log(data);
  $: accuracy = Math.floor((totalScore / (totalGames * 5)) * 100);
</script>

<div class=" h-[calc(100vh_-_231px)] md:min-h-[calc(100vh_-_145px)]">
  <section class="space-y-5 mt-5 mx-3">
    <h2>Practice Test Performance</h2>

    <div class="flex flex-wrap justify-center items-center gap-11 h-full ">
      <Card node="button" type="submit" class="h-40 items-center aspect-square justify-center">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Total Score</p>
        <div class="w-fit">
          {totalScore || 0}
        </div>
      </Card>

      <Card node="button" type="submit" class="h-40 items-center aspect-square justify-center">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
          Total tests taken
        </p>
        <div class="w-fit">
          {totalGames || 0}
        </div>
      </Card>

      <Card node="button" type="submit" class="h-40 items-center aspect-square justify-center">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Accuracy</p>
        <div class="w-fit">{`${accuracy}`}%</div>
      </Card>
    </div>
    <div />
  </section>
  <!--  <section>
    <h2>Practice Test History</h2>
  </section> -->
</div>
