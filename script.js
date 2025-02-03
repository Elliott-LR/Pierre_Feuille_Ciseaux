// Liste des choix possibles
const choix = ["pierre", "feuille", "ciseaux"];

// Sélection des éléments HTML
const boutons = document.querySelectorAll(".choix-btn");
const resultatDiv = document.querySelector(".result");
const choixUtilisateurDiv = document.querySelector(".choix-utilisateur");
const choixOrdinateurDiv = document.querySelector(".choix-ordinateur");

// Fonction pour générer un choix aléatoire pour l'ordinateur
function choixOrdinateur() {
    return choix[Math.floor(Math.random() * choix.length)];
}

// Fonction pour déterminer le gagnant
function determinerGagnant(utilisateur, ordinateur) {
    if (utilisateur === ordinateur) {
        return "Égalité ! 😐";
    } 
    if (
        (utilisateur === "pierre" && ordinateur === "ciseaux") ||
        (utilisateur === "feuille" && ordinateur === "pierre") ||
        (utilisateur === "ciseaux" && ordinateur === "feuille")
    ) {
        return "Vous avez gagné ! 🎉";
    }
    return "L'ordinateur a gagné ! 🤖";
}

// Fonction qui gère le jeu quand un bouton est cliqué
function jouer(event) {
    const choixUtilisateur = event.target.dataset.choix; // Récupère le choix du bouton cliqué
    const choixOrdi = choixOrdinateur(); // Génère un choix pour l'ordi

    // Afficher les choix
    choixUtilisateurDiv.textContent = `Vous : ${choixUtilisateur}`;
    choixOrdinateurDiv.textContent = `Ordi : ${choixOrdi}`;

    // Déterminer le gagnant et afficher le résultat
    const resultat = determinerGagnant(choixUtilisateur, choixOrdi);
    resultatDiv.textContent = resultat;
}

// Ajout des écouteurs d'événements sur les boutons
boutons.forEach(bouton => {
    bouton.addEventListener("click", jouer);
});
