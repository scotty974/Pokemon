<script>
  export let name;
  export let picture;
export let pokedexId
  export let id;
  
  let itemClicked;
  function handleClick(item) {
    console.log(item.pokedexId);
    itemClicked = item.pokedexId;
  }
</script>

<a
  data-sveltekit-reload
  href="/about/{itemClicked}"
  class="card"
  on:click={() => handleClick(id)}
>
  <img src={picture} alt={name} />
  <span>#{pokedexId}</span>
  <h2>{name}</h2>
</a>

<style>
  .card {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
    border-radius: 20px;
    border: solid black 1px;
    font-family: "Archivo Black", sans-serif;
    padding: 16px;
    box-shadow: black 5px 10px 0 0;
    background-color: white;
  }
  .card:hover {
    cursor: pointer;
    background-color: antiquewhite;
  }
  img {
    max-width: 100%;
    background-color: #d1eaef;
    border-radius: 50%;
    padding: 8px;
  }
  h2 {
    text-align: center;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: rgb(49, 49, 49);
  }
  span{
    margin-top: 24px;
    color: lightgray;
  }
</style>
