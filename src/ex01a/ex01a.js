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

    // C'est là-dedans qu'on veut lire et extraire ces données CSV dans contenuCSV
    let jsonData = {};

    // -----------------------------------------------------------------------------
    //
    //               )        (                 ) (           (         (
    //            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
    //      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
    //      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
    //     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
    //     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
    //     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
    //      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
    //       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
    //
    // ----------------------------------------------------------------------------
    //
    // Lecture et transformation de ces données CSV
    // Elles sont actuellement 'brutes de fonderie' dans la constante nommée DATA, comme chaîne de caractères, dans le fichier 'ex01a-data.js'.
    //
    // Essayez donc ceci :
    // console.log(DATA); // Décommenter pour y jeter un oeil
    //
    // => DEBROUILLEZ-VOUS pour lire, interpréter et extraire les informations de cette chaîne afin d'obtenir les données
    // structurées comme souhaité.
    //

    return jsonData;
}

