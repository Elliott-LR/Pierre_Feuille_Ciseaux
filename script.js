//role : donner la possibilité au joueur de chosir entre feuille, ciseaux et pierre 
//paramétre : non
// retour : le choix du joueur 

function choixJoueur(){
    let choixJ=prompt("Choisissez feuille, ciseaux ou pierre");
    return choixJ; 
}

//role : L'ordinateur choisis de maniére aléatoire un chiffre entre 1 et 3 
//paramétre : non
//retour : le choix de l'ordinateur sous forme de chaine de caractére 
function choixOrdi() {
   return Math.ceil(Math.random()*3);
}


//role : convertir les chiffres en mot 
//paramétre : le nbr choisi par l'ordi 
//retourne : le mot 
// 1=papier, 2=ciseaux, 3=pierre
function conversion(nbr){

    let choixO;
    if (nbr === 1){
    choixO="papier"
    }
    else if (nbr===2){
        choixO="ciseaux"
    }else if (nbr===3){
        choixO="pierre"
    }
return choixO;
}


//role: Comparer le choix du joueur et le choix de l'ordi 
// parametre : choix du joueur et choix de l'ordinateur 
// retour : le gagnant 

function compare(choixJoueur, choixOrdinateur){

    let result;

    if (choixJoueur === choixOrdinateur){
        result="égalité"
    }
    else if (
        (choixJoueur==="ciseaux"&&choixOrdinateur==="papier")||
        (choixJoueur==="papier"&&choixOrdinateur==="pierre")||
        (choixJoueur==="pierre"&&choixOrdinateur==="ciseaux")
    ){
        result="Vous avez gagné"
    }
    else {
        result="l'ordinateur gagne ! looser "
    }
    return result;
}

//role: Afficher les choix et le gagnants dans un alert
//paramétre : choix du joueur, choix de l'ordinateur, resultat
//retourne : 

function affiche(choixJ, choixO, resultat){
    alert(`choix du joueur:${choixJ} // chois de l'ordinateur: ${choixO} // ${resultat} `)
}

//role: lancer le jeu en lancant les fonctions dans le bon ordre 
// paramétre: non
//retour: non
function jouer(){
    let choixJ=choixJoueur();
    let nombre=choixOrdi();
    let choixO=conversion(nombre);
    let result=compare(choixJ,choixO);
    affiche(choixJ,choixO,result);
}
let maBoiteResultat=document.getElementById('.resultat')
maBoiteResultat.innerHTML("<p>vous avez gagné</p>")