<script>
    export let name;
    export let picture;
    export let generation;
</script>

<div class="card">
    <img src="{picture}" alt="{name}">
    <h2>{name}</h2>
    <p>Génération : {generation}</p>
</div>

<style>
    .card{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 24px;
        border-radius: 20px;
    }
    .card:hover{
        cursor: pointer;
        background-color: antiquewhite;
    }
    img{
        max-width: 100%;
    }
    h2{
        text-align: center;
    }
</style>