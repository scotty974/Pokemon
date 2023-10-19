<script>
  export let name= '';
  export let onSearch;
  function search(){
    onSearch()

  }
</script>
<div>
    <input type="text" name="pokemon" id="pokemon" placeholder="Cherchez un pokemon" bind:value={name}>
    <button on:click={search}>Envoyer</button>
</div>



<style>
    div{
        display: flex;
        justify-content: space-around;
        margin-bottom: 32px;
        padding: 32px;
    }

    input{
      all: unset;
        height: 40px;
        width: 500px;
        border-bottom: solid black 3px;
        font-family: "Archivo Black", sans-serif;
    }
    button{
      all: unset;
      font-family: "Archivo Black", sans-serif;
      border: solid black 3px;
      width: 200px;
      text-align: center;
      border-radius: 20px;
    }
    button:hover{
      cursor: pointer;
      background-color: black;
      color: white;
    }
</style>