<script lang="ts">
  import { onMount } from "svelte";
  import { pokemon } from "./generation";
  import Card from "../components/card.svelte";
  import Form from "../components/form/Form.svelte";
  let apiData;
  let searchName;
  const apiUrl = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";
  let searchData = [];

  onMount(async () => {
    try {
      apiData = await pokemon(apiUrl);
      searchData = apiData;
    } catch (error) {
      return error;
    }
  });

  function handleSeach() {
    if (searchData.length === 0) {
      searchData = apiData;
    } else {
      searchData = apiData.filter((pokemon) =>
        pokemon.name.fr.toLowerCase().includes(searchName.toLowerCase())
      );
    }
  }
</script>

<Form bind:name={searchName} onSearch={handleSeach} />

<section class="container">
  {#if searchData.length > 0}
    {#each searchData as item, id}
      <Card
        name={item.name.fr}
        picture={item.sprites.regular}
        generation={item.generation}
      />
    {/each}
  {:else}
    <p>chargement en cours...</p>
  {/if}
</section>

<style>
  .container {
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: auto;
  }
</style>
