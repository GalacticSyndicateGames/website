<script>
  import { page } from '$app/stores';

  const paths =[
    {
      href:"/about-us",
      title: "About us"
    },
    {
      href:"/portfolio",
      title: "Portfolio"
    },
    {
      href:"/blog",
      title: "Blog"
    },
    {
      href:"/contact",
      title: "Contact"
    },
  ]
</script>


<header class="absolute top-0 left-0 w-full h-headerHeight px-wrapper flex items-center justify-start bg-transparent">
  <nav class="space-x-8">
    {#each paths as p}
      <a href={p.href} class="font-aldrich text-4xl uppercase text-yellow transition-opacity hover:opacity-80">{p.title}</a>	
    {/each}
  </nav>
</header>