<script lang="ts">
  import { Accordion, AccordionItem, Button } from 'flowbite-svelte';
  import close from '$lib/assets/icons/close.svg';
  import check from '$lib/assets/icons/check.svg';
  import type { Question } from 'db/src/entity/Question';
  import { game$ } from '$lib/store/game';

  export let correct: string = '';
  export let wrong: string = '';
  export let question: Question;
  export let index: number;

  $: {
    correct = question.answers[$game$.answers[index] || 0];
    wrong =
      $game$.answers[index] !== ($game$.selected[index] || 0)
        ? question.answers[$game$.selected[index] || 0]
        : '';
  }
</script>

<AccordionItem>
  <span slot="header" class="text-base flex gap-2">
    <img src={wrong ? close : check} alt="check-mark" width="24" height="24" />
    <span> {question.question}</span>
  </span>
  <div class="flex flex-col gap-4">
    <Button color="green">
      {correct}
    </Button>
    {#if wrong}<Button color="red">
        {wrong}
      </Button>
    {/if}
  </div>
</AccordionItem>
