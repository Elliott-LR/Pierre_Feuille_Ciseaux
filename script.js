// Jeu Pierre-Feuille-Ciseaux
const jouer = () => {
    const choix = ["pierre", "feuille", "ciseaux"]; // Les choix possibles

    // Obtenir le choix de l'utilisateur
    let utilisateur = prompt("Pierre, feuille ou ciseaux ?").toLowerCase();
    while (!choix.includes(utilisateur)) {
        console.log("Choix utilisateur invalide :", utilisateur);
        utilisateur = prompt("Choix invalide. Essayez encore : pierre, feuille ou ciseaux ?").toLowerCase();
    }
    console.log("Choix utilisateur validé :", utilisateur);

    // Choix de l'ordinateur
    const ordinateur = choix[Math.floor(Math.random() * choix.length)];
    console.log("Choix de l'ordinateur :", ordinateur);

    // Déterminer le gagnant
    if (utilisateur === ordinateur) {
        console.log("Résultat : Égalité !");
        alert(`Égalité ! Vous avez tous les deux choisi ${utilisateur}.`);
    } else if (
        (utilisateur === "pierre" && ordinateur === "ciseaux") ||
        (utilisateur === "feuille" && ordinateur === "pierre") ||
        (utilisateur === "ciseaux" && ordinateur === "feuille")
    ) {
        console.log("Résultat : Vous avez gagné !");
        alert(`Bravo, vous avez gagné ! 🎉 (${utilisateur} bat ${ordinateur})`);
    } else {
        console.log("Résultat : L'ordinateur a gagné !");
        alert(`Dommage, l'ordinateur a gagné ! 🤖 (${ordinateur} bat ${utilisateur})`);
    }
};

// Lancer le jeu
jouer();