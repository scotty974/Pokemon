<script>
  export let data;
  console.log(data);
</script>

<section class="container">
  <div class="left">
    <div>
      <img src={data.data.sprites.regular} alt={data.data.name.fr} id="tortank"/>
      <h1 id="title">{data.data.name.fr}</h1>
    </div>

    <div class="content">
      <img src={data.data.types[0].image} alt={data.data.types[0].name} />
      <h2>{data.data.name.fr}</h2>
    </div>
  </div>
</section>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .container {
    margin: auto;
    display: flex;
  }

  .left {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: darksalmon;
    z-index: 1;
  }
  #tortank{
    position: relative;
    z-index: 2;
  }
  #title {
    position: absolute;
    font-size: 120px;
    font-family: "Archivo Black", sans-serif;
    color: #f3f3f3;
    top: 200px;
  }

  .content {
    margin: 8px;
    display: flex;

    align-items: center;
  }
  .content h2 {
    margin-left: 24px;
    font-family: "Archivo Black", sans-serif;
    color: rgb(43, 43, 43);
    color: white;
  }
</style>
