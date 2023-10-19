<script>
    export async function load({ params }) {
    // Récupérez l'ID de l'élément à partir des paramètres d'URL
    const { id } = params;

    // Récupérez les données de l'élément spécifique en utilisant l'ID
    const itemData = await fetchItemData(id);

    return {
      props: {
        itemData,
      },
    };
  }

  async function fetchItemData(id) {
    // Effectuez une requête pour récupérer les données de l'élément en utilisant l'ID
    // Retournez les données de l'élément
  }
</script>