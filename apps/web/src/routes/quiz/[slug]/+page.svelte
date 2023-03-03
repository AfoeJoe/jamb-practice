<script lang="ts">
  import { page } from '$app/stores';
  import { game$ } from '$lib/store/game';
  import type { PageData } from './$types';
  import type { AnswerList } from 'db/src/types';
  import { getClassName } from '$lib/utils';
  import Button from './Button.svelte';
  import { afterNavigate, goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { enhance } from '$app/forms';
  import { beforeUpdate, onMount } from 'svelte';

  export let data: PageData;

  let question: string, answers: AnswerList;
  $: {
    if ($game$.gameId) {
      question = $game$.questions[$game$.cIdx]?.question;
      answers = $game$.questions[$game$.cIdx]?.answers;
    }
  }

  $: {
    if ($page.form && game$) {
      game$.select($page.form.answerId, $page.form.selected);
      // $page.form = null;
    }
  }
  console.log('Called');

  function handleSubmit() {
    setTimeout(function () {
      if ($game$.cIdx < $game$.questions.length - 1) {
        game$.next();
        console.log('Called timer');

        if (browser) goto(`${base}/quiz/${$game$?.questions[$game$.cIdx].slug}`);
      } else {
        if (browser) goto(`${base}/quiz-result`);
      }
    }, 2000);
  }
</script>

<div class="h-[calc(100vh_-_231px)] grid  px-4 py-8">
  <div class="my-auto">
    <form id="quizWrap mx-auto" method="post" on:submit={handleSubmit} use:enhance>
      <input type="hidden" name="questionId" value={$game$.questions[$game$.cIdx]?.id || ''} />
      <input type="hidden" name="cIdx" value={$game$.cIdx} />
      <input type="hidden" name="gameId" value={$game$.gameId} />

      <div id="quizQn" class="text-2xl max-w-[800px] my-0 mx-auto  font-semibold text-center">
        {question || ''}
      </div>
      <div id="quizAns">
        {#if answers?.length > 0}
          {#each answers as answer, value}
            <Button {value} {answer} />
          {/each}
        {/if}
      </div>
    </form>
  </div>
</div>

<style>
  @media (max-width: 991px) {
    #quizAns {
      grid-template-columns: repeat(1, calc(100% - 0px)) !important;
      grid-row-gap: 10px;
    }
  }

  #quizAns {
    padding-top: 40px;
    margin: 10px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 1135px;
    padding-top: 40px;
    padding-bottom: 80px;
  }

  #quizAns input[type='radio'] {
    display: none;
  }

  .btn {
    font-size: 16px;
  }
  .btn {
    color: #000000;
    background: #ffffff;
    border: 2px solid #e7e7e7;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    line-height: 3;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .btn.correct {
    /*background: #d8ffc4;*/
    background: #0f9d58;
    color: #ffffff;
    border: 1px solid #60a03f;
  }
  .btn.wrong {
    /*background: #ffe8e8;*/
    background: linear-gradient(14deg, #eb3252 0%, #f82c28 100%);
    color: #ffffff;
    border: 1px solid #c78181;
  }
</style>
