<script lang="ts">
  import { browser } from '$app/environment';
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { game$ } from '$lib/store/game';
  import type { ESubject } from '$lib/utils';
  import { Card, Spinner } from 'flowbite-svelte';
  export let iconName: string;
  export let name: string;
  export let subject: ESubject;
  export let description: string | number;
  let loading = false;
</script>

<form
  action=""
  class="w-44  flex-1"
  method="post"
  use:enhance={async ({ cancel }) => {
    loading = true;
    // const result = confirm('Want to delete?');

    // if (!result) cancel();
    return async ({ result, update }) => {
      await update();
      //@ts-ignore
      if (result.type === 'success') game$.init(result.data ?? {});
      loading = false;
      if (browser) goto(`${base}/quiz/${$game$?.questions?.[0].slug}`);
    };
  }}
>
  <button class="w-full inline" type="submit" value={subject} name="subject">
    <Card node="button" type="submit" class="items-center aspect-square justify-center">
      <img src={`${base}/${iconName}`} alt="" width="30" height="30" />
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
        {name}
      </p>
      <div class="w-fit">
        {description}
      </div>
    </Card>
  </button>
</form>

{#if loading}
  <Spinner />
{/if}
