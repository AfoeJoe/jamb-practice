<script lang="ts">
  import { Accordion, Button } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import { game$ } from '$lib/store/game';
  import AccordionItem from './AccordionItem.svelte';

  export let data: PageData;
  $: totalScore = $game$.selected.reduce((acc, cur, index) => {
    return cur === $game$.answers[index] ? (acc || 0) + 1 : acc || 0;
  }, 0);
</script>

<div class=" h-[calc(100vh_-_231px)] md:h-[calc(100vh_-_145px)]">
  <section class="space-y-8 text-center mt-8">
    <p>{`You answered ${totalScore} out of ${$game$.questions.length} questions correctly`}</p>
    <form class="flex justify-center gap-8" method="post" action="/quiz">
      <Button class="" type="submit" value={$game$.subject} name="subject" on:click>Continue</Button
      >
    </form>
  </section>

  <section>
    <Accordion flush>
      {#each $game$.questions as question, index}
        <AccordionItem correct={question.answers[$game$.answers[index] || 0]} {question} {index} />
      {/each}
    </Accordion>
  </section>
</div>
