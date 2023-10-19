<script>
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
      console.log(searchData)
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
  function handleClick(id) {
    console.log(`ID de l'élément cliqué : ${id}`);
    // Effectuez d'autres actions avec l'ID ici
}
</script>
<main>
  <Form bind:name={searchName} onSearch={handleSeach} />

  <section class="container">
    {#if searchData.length > 0}
      {#each searchData as item, id}
        <Card
        id={item}
          name={item.name.fr}
          picture={item.sprites.regular}
          pokedexId={item.pokedexId}
        />
      {/each}
    {:else}
      <p>chargement en cours...</p>
    {/if}
  </section>
  
</main>

<style>
 main{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #faf5cd;
 }
  .container {
    
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: "Archivo Black", sans-serif;
    gap: 20px;
    margin: auto;
  }
</style>