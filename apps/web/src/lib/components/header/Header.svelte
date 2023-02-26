<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte';
</script>

<header class="sticky top-0 z-20 left-0 border-b">
  <Navbar navClass="p-3 container mx-auto" let:hidden let:toggle>
    <NavBrand href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        BestBrains
      </span>
    </NavBrand>
    <div class="flex md:order-2">
      <!-- color="alternative" -->
      <!--  -->
      <Button
        color="blue"
        data-collapse-toggle="mobile-menu-3"
        aria-controls="mobile-menu-3"
        aria-expanded="false"
        class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 dark:text-white"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          /></svg
        >
      </Button>
      <div class="hidden relative md:block">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 dark:text-white"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            /></svg
          >
        </div>
        <Input id="search-navbar" class="pl-10" placeholder="Search..." />
      </div>

      <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden}>
      <NavLi href="/quiz" active={true} class="text-lg">Quiz</NavLi>
      <NavLi href="/dashboard" class="text-lg">Dashboard</NavLi>
    </NavUl>
  </Navbar>
</header>
