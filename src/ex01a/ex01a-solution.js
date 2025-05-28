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
    convertirCSVEnObjets(DATA);
}

function convertirCSVEnObjets(contenuCSV) {

    // C'est là-dedans qu'on veut lire et extraire ces données CSV dans contenuCSV
    let jsonData = {};

    // Lecture et transformation de ces données CSV

    // Raw data is stored in the constant named DATA as a string
    const lines = DATA.split("\n");

    // First we sort emperors by number
    // We start at 1 to skip the header line
    // We end at lines.length-1 to skip the last empty line
    const emperors = [];
    for (let i = 1; i < lines.length - 1; i++) {
        const lineItems = lines[i].split(";");
        const emperor = {
            number: parseInt(lineItems[0]),
            name: lineItems[1],
            deathCause: lineItems[10],
            dynasty: lineItems[12],
        };

        let j = 0;
        let inserted = false;
        while (j < emperors.length && !inserted) {
            if (emperor.number < emperors[j].number) {
                emperors.splice(j, 0, emperor);
                inserted = true;
            }
            j++;
        }

        if (!inserted) {
            emperors.push(emperor);
        }
    }

    // Then we group emperors by dynasty
    for (let i = 0; i < emperors.length; i++) {
        if (!jsonData[emperors[i].dynasty]) {
            jsonData[emperors[i].dynasty] = [];
        }

        jsonData[emperors[i].dynasty].push(emperors[i]);

        // We remove the dynasty property from each emperor
        delete emperors[i].dynasty;
    }


    // Afficher le résultat final de notre lecture et transformation
    const container = document.getElementById("output");
    container.innerHTML = JSON.stringify(jsonData, null, 3);
}

