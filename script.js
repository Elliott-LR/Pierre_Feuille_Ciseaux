// Jeu Pierre-Feuille-Ciseaux
const jouer = () => {
    // Choix possibles
    const choixPossibles = ["pierre", "feuille", "ciseaux"];

    // Fonction pour obtenir le choix de l'utilisateur
    const obtenirChoixUtilisateur = () => {
        let choix = prompt("Choisissez pierre, feuille ou ciseaux :").toLowerCase();
        while (!choixPossibles.includes(choix)) {
            choix = prompt("Choix invalide. Choisissez pierre, feuille ou ciseaux :").toLowerCase();
        }
        return choix;
    };

    // Fonction pour obtenir le choix de l'ordinateur
    const obtenirChoixOrdinateur = () => {
        const index = Math.floor(Math.random() * choixPossibles.length);
        return choixPossibles[index];
    };

    // Déterminer le gagnant
    const determinerGagnant = (utilisateur, ordinateur) => {
        if (utilisateur === ordinateur) {
            return "Égalité !";
        }
        if (
            (utilisateur === "pierre" && ordinateur === "ciseaux") ||
            (utilisateur === "feuille" && ordinateur === "pierre") ||
            (utilisateur === "ciseaux" && ordinateur === "feuille")
        ) {
            return "Vous avez gagné ! 🎉";
        } else {
            return "L'ordinateur a gagné ! 🤖";
        }
    };

    // Déroulement du jeu
    const choixUtilisateur = obtenirChoixUtilisateur();
    const choixOrdinateur = obtenirChoixOrdinateur();
    console.log(`Vous avez choisi : ${choixUtilisateur}`);
    console.log(`L'ordinateur a choisi : ${choixOrdinateur}`);
    alert(determinerGagnant(choixUtilisateur, choixOrdinateur));
};

// Lancer le jeu
jouer();
