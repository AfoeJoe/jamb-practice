<script lang="ts">
  import Card from './Card.svelte';
  import { SUBJECTS_DATA } from '$lib/utils/constants';
  import { ESubject } from '$lib/utils/types';
  import type { PageServerData } from './$types';
  import { page } from '$app/stores';
  import { game$ } from '$lib/store/game';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { Button } from 'flowbite-svelte';

  export let data: PageServerData;

  if ($page.form) {
    $game$ = $page.form;
    game$.init($page.form ?? {});
    if (browser) goto(`${base}/quiz/${$game$?.questions[0].slug}`);
  }
  console.log($page);
</script>

{#if $page.form}
  <Button href={`${base}/quiz/${$game$?.questions[0].slug}`}>Start Game</Button>
{/if}
<div
  class="h-[calc(100vh_-_231px)] mx-4 md:h-[calc(100vh_-_154px)] flex justify-center items-center"
>
  <section class="flex flex-wrap gap-4">
    {#each Object.values(ESubject) as subject}
      <Card
        {subject}
        name={SUBJECTS_DATA[subject].name}
        iconName={SUBJECTS_DATA[subject].iconName}
        description={data.summary?.find((item) => item.subjectCount === subject)?.count || 0}
      />
    {/each}
  </section>
</div>
