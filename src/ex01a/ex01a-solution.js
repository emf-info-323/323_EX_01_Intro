// Événement 'load' = page complètement chargée, scripts chargés, ...
// ... le navigateur a affiché la page et attend sur l'utilisateur.
window.addEventListener("load", (event) => {
    console.log("Initialisation en cours...");
    initialisation();
});

function initialisation() {
    console.log("Installation des écouteurs...");
    document.querySelector('#idActionStart').addEventListener('click', actionStart);
}

function actionStart() {
    console.log("actionStart() en cours...");

    const jsonData = convertirCSVEnObjet(DATA);

    // Afficher le résultat final de notre lecture et transformation
    const container = document.getElementById("output");
    container.innerHTML = JSON.stringify(jsonData, null, 3);
}

function convertirCSVEnObjet(contenuCSV) {

    // Constituer une liste de tous les empereurs
    let empereurs = [];
    const lignesCSV = DATA.split("\n");
    for (let i = 1; i < lignesCSV.length; i++) {   // Ignorer la 1ère ligne = entêtes
        // Extraire chaque empereur et ses infos utiles de cette ligne
        const elementsCSV = lignesCSV[i].split(";");
        const empereur = {
            number: parseInt(elementsCSV[0]),
            name: elementsCSV[1],
            deathCause: elementsCSV[10],
            dynasty: elementsCSV[12],
        };
        // L'ajouter à la liste uniquement s'il y a toutes les infos utiles
        if (empereur.number && empereur.name && empereur.dynasty)
            empereurs.push(empereur);
    }

    // Trier la liste de tous les empereurs par "number"
    for (let i = 0; i < empereurs.length - 1; i++) {
        for (let j = i + 1; j < empereurs.length; j++) {
            if (empereurs[i].number > empereurs[j].number) {
                const temp = empereurs[i];
                empereurs[i] = empereurs[j];
                empereurs[j] = temp;
            }
        }
    }

    // Créer le résultat final escompté
    let jsonData = {};
    for (let i = 0; i < empereurs.length - 1; i++) {
        // Supprimer cette clé "dynasty" qu'on ne veut pas conserver
        const dyn = empereurs[i].dynasty;
        delete empereurs[i].dynasty;
        // Créer la liste si elle n'existe pas déjà
        if (!jsonData[dyn]) {
            jsonData[dyn] = [];
        }
        // Y ajouter cet empereur sous la bonne dynastie
        jsonData[dyn].push(empereurs[i]);
    }

    return jsonData;
}

