// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro(o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).

// chiedo all'utente di scegliere la difficoltà
let difficultySet = parseInt(prompt(`Seleziona il livello di difficoltà:
1 per facile
2 per medio
3 per difficile`));
console.log(difficultySet);

// il numero dei quadrati varia in base alla difficoltà scelta
// - difficulty == 1 , genero 100 quadrati
// - difficulty == 2 , genero 81 quadrati
// - difficulty == 3 , genero 49 quadrati
let squareNum = 0;
if (difficultySet === 1) {
    squareNum = 100;
} else if (difficultySet === 2) {
    squareNum = 81;
} else if (difficultySet === 3) {
    squareNum = 49;
}
console.log(squareNum);

// genero in pagina i quadrati
const squareCont = document.getElementById("grid")
for (let i = 1; i <= squareNum; i++) {

    let node = newElement ("div", "square");

    node.addEventListener ('click',
        function () {
            this.classList.add("clicked-true");
            node.innerHTML = i;
        }
    );

    squareCont.append(node);
}

// modifico la dimensione dei quadrati per ottenere sempre una griglia uniforme
let squaresSelect = document.getElementsByClassName("square");
let radice = Math.sqrt(squareNum);
console.log(radice);
for (let i = 0; i < prova.length; i++) {
    squaresSelect[i].style.width = `calc(100% / ${radice})`;
    squaresSelect[i].style.height = `calc(100% / ${radice})`;
}

// funzioni
function newElement (newElementTag, newElementClass) {
    let element = document.createElement(newElementTag);
    element.classList.add(newElementClass);
    return element;
}