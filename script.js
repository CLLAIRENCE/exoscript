


//liste de musique

let  musique= ["aya nakamura- chérie", "anissa-wejdene","jolie go - shay","luidji-igné","tayc-dodo"];

console.table(musique);



const greg = new greg ("greg",) (10); //je n'ai pas pu afficher le perso sur html ;/
console.log(greg.santeMentale);
constructor(sante) 
{
    this.sante = sante;
this.nbEssais = 30;
}
    


  if (greg.sante <= 0) {
    console.log("Greg a épuisé sa santé mentale.");
  } else {
    console.log("explosion" + greg.sante);
  }

  if (musique === 1) {
    santeMentale += 5; 
  } else if (musique === 2) {
    santeMentale -= 3;
  }


  while (santeMentale > 0 && nbEssais < 30) {
    const porte = choisirPorte();
    console.log(`Le joueur a choisi la porte ${porte}. Santé mentale actuelle : ${santeMentale}`);
  }
  
  if (santeMentale <= 0) {
    console.log("greg a épuisé sa santé mentale.");
  } else {
    console.log("greg a terminé l'aventure avec une santé mentale finale de : " + santeMentale);
  }
  
  console.log(`Nombre d'essais effectués : ${nbEssais}`);
  