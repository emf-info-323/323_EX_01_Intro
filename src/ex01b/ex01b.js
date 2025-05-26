

function afficher(msg) {
    const output = document.getElementById('output');
    output.textContent = msg;
}

function demo01() {
    const resultat = [1, 2, 3].map(x => x * x).join(", ");
    afficher(resultat);
}

function demo02() {
    afficher("Demo02 !");
}

function demo03() {
    afficher("Date/Heure : " + new Date().toLocaleString());
}

function demo04() {
    afficher("La couleur de fond a changé !");
}

function demo05() {
    afficher("coucou !");
}
