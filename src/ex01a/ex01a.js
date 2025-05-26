
// C'est là-dedans qu'on veut lire et extraire ces données CSV
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

// Afficher le résultat final de notre lecture et transformation
const container = document.getElementById("output");
container.innerHTML = JSON.stringify(jsonData, null, 2);
