// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro(o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// chiedo all'utente di scegliere la difficoltà
let difficulty = parseInt(prompt(`Seleziona il livello di difficoltà:
1 per facile
2 per medio
3 per difficile`));
console.log(difficulty);

// il numero dei quadrati varia in base alla difficoltà scelta
// - difficulty == 1 , genero 100 quadrati
// - difficulty == 2 , genero 81 quadrati
// - difficulty == 3 , genero 49 quadrati
if (difficulty === 1) {
    difficulty = 100;
} else if (difficulty === 2) {
    difficulty = 81;
} else if (difficulty === 3) {
    difficulty = 49;
}
console.log(difficulty);

// genero in pagina i quadrati
const squareCont = document.getElementById("container")
for (let i = 1; i <= difficulty; i++) {
    let node = newElement ("div", "square");
    node.innerHTML = i;
    squareCont.append(node);
}

// funzioni
function newElement (newElementTag, newElementClass) {
    let element = document.createElement(newElementTag);
    element.classList.add(newElementClass);
    return element;
}