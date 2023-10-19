<script>
  export let name= '';
  export let onSearch;
  function search(){
    onSearch()
    console.log(onSearch())
  }
</script>
<div>
    <input type="text" name="pokemon" id="pokemon" placeholder="Cherchez un pokemon" bind:value={name}>
    <button on:click={search}>Envoyer</button>
</div>



<style>
    div{
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
    }

    input{
        height: 40px;
        width: 500px;
    }
</style>