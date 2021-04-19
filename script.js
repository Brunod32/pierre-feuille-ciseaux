let ordi = document.getElementById('ia');
let humain = document.getElementById('joueur');
let gagnant = document.getElementById('gagnant');


function comparer(choix1, choix2) {
  if (choix1 === choix2) {
    return 'Egalité'
  } else if  (choix1 === 'pierre') {
    if (choix2 === 'feuille') {
      return 'Feuille'
    } else if (choix2 === 'ciseaux') {
      return 'Pierre'
    } 
  } else if (choix1 === 'feuille') {
    if (choix2 === 'ciseaux') {
      return 'Ciseaux'
    } else if(choix2 === 'pierre') {
      return 'Feuille'
    }
  } else if (choix1 === 'ciseaux') {
    if (choix2 === 'pierre') {
      return 'Pierre'
    } else if (choix2 === 'feuille') {
      return 'Ciseaux'
    }
  } 
}

const joueur = prompt('Choississez entre pierre / feuille / ciseaux :');

let ia = Math.ceil(Math.random() * 3);
if (ia < 1) {
  ia = 'pierre';
} else if (ia <= 2) {
  ia = 'feuille';
} else if (ia <=3) {
  ia = 'ciseaux'
}
console.log('ia a joué :' ,ia);

resultat = comparer(joueur, ia);
console.log('Le gagnant est : ', resultat);

ordi.value = ia;
humain.value = joueur;
gagnant.value = resultat;

function refreshPage(){
  window.location.reload();
  }