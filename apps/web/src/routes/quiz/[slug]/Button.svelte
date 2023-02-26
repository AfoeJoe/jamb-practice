<script lang="ts">
  import { page } from '$app/stores';
  import { getClassName } from '$lib/utils';

  import { Button } from 'flowbite-svelte';
  export let value: number;
  export let answer: string;
</script>

<Button
  type={!$page.form ? 'submit' : 'button'}
  name="selected"
  color={getClassName(value, +$page.form?.answerId, +$page.form?.selected)}
  id="quizo0"
  {value}
>
  {answer}
</Button>
