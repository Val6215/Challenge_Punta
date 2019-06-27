//creer les formes
var color=["green","red","blue","yellow","purple"]
var formeAleatoire=["carre","cercle"];
let scoretext;

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

Ecran_de_Jeu= document.createElement('div');
Ecran_de_Jeu.classList.add('game');
container.appendChild(Ecran_de_Jeu);

for (i = 0; i < 17 ; i++) {
    //crée des formes de couleurs
    var formes= document.createElement("div");
    formes.classList.add(formeAleatoire[Math.floor(Math.random() * formeAleatoire.length)]);
    document.body.appendChild(formes);
    formes.classList.add(color[Math.floor(Math.random() * color.length)]);
}
for (i = 0; i < 3 ; i++) {
    //crée des formes de couleurs
    var formes= document.createElement("div");
    formes.classList.add(formeAleatoire[Math.floor(Math.random() * formeAleatoire.length)]);
    document.body.appendChild(formes);
    formes.classList.add("black");
}
positionFormes();


function positionFormes(){
var positionAleatoire = document.querySelectorAll("div");

for ( i = 0;i < positionAleatoire.length;i++) {
positionAleatoire[i].style.position='absolute';  
positionAleatoire[i].style.top=Math.random()*(500-0)+'px';
positionAleatoire[i].style.left=Math.random()*(500-0)+'px';
}
}

/*Fonction d'affichage du score
let score= 0;
function Score() {

    score++;
    
}*/

//fonction de creation de boutton
function createButton(chosequichange){
    let btnNoob= document.createElement("button");
    btnNoob.id=chosequichange;
    document.body.appendChild(btnNoob);
    btnNoob.textContent=chosequichange;
}

var tableDiv= document.querySelectorAll("div");
let score=0;
console.log(tableDiv);
//for pour effacer les formes
for ( i  = 0; i < 20; i++) {
    //console.log(tableDiv[i]);
    tableDiv[i].addEventListener('click', function(event){
        score++;
        console.log(event);
        let color = event.target.classList[1];
        if(color == 'black'){
            console.log(color);
            confirm("GAME OVER");
        }
        else if(color == 'yellow'){
            alert('1 point gagné');
        }
        else if(score == 17){
          console.log(score);
          confirm("Vous avez gagné");
        }
        console.log(event.target.classList[1]);
        //console.log("jai cliqué");
        this.remove();
        positionFormes();
    });
}

createButton("Level_Noob");
createButton("Level_Hardcore");
createButton("Level_Ultraviolence");

//Faire en sorte qu'il y est 17 formes de couleurs + 3 formes de couleurs noires



