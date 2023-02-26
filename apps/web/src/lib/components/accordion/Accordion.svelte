<script>
  import { Accordion, AccordionItem } from 'flowbite-svelte';
  import close from '$lib/assets/icons/close.svg';
  import check from '$lib/assets/icons/check.svg';
  export let
</script>

<Accordion flush>
  <AccordionItem>
    <span slot="header" class="text-base flex gap-2">
      <img src={close} alt="check-mark" width="24" height="24" />
      <span> My Header 1</span>
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint
      explicabo...
    </p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a
        href="/"
        target="_blank"
        rel="noreferrer"
        class="text-blue-600 dark:text-blue-500 hover:underline">get started</a
      > and start websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    <span slot="header" class="text-base flex gap-2">
      <img src={check} alt="check-mark" width="24" height="24" />

      <span> My Header 2</span>
    </span>
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus
      sintexplicabo...
    </p>
  </AccordionItem>
</Accordion>
