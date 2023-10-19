export async function load({params}){
       const pokedexId = params.pokedexId
       
       try {
        // Remplacez cette URL par l'URL de votre API pokedex
        const apiUrl = `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokedexId}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération des données de l'API. Statut : ${response.status}`);
        }

        const data = await response.json();

        return {
            data:
                data
            
        };
    } catch (error) {
        console.error(error);
        return {
            error: 'Une erreur s\'est produite lors de la récupération des données depuis l\'API.'
        };
    }
}
