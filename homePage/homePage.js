var row = 4;
var column = 4;

var currTile;
var otherTile;

window.load = function(){
    // initialize board
    for (let i = 0; i < row; i++){
        for (let j = 0; j < column; j++){
            let tile = document.createElement("img");
            tile.src = "./blank.jpg";// Insert image here

                // Drag functionality
            tile.addEventListener("dragstart", dragStart); // click on mg to drag
            tile.addEventListener("dragover", dragOver); // drag img
            tile.addEventListener("dragenter", dragEnter); // drag img to another
            tile.addEventListener("dragleave", dragLeavet); // drag img away from another
            tile.addEventListener("dragdrop", dragDrop); // drop img
            tile.addEventListener("dragend", dragEnd); // after dropping, end state
            document.getElementById("board").append(tile);
        }
    }
}

// pieces
let pieces = [];
// initialize pieces into array
for (let i=1;i <= rows*columns; i++){
    pieces.push(i.toString());
}

// Shuffle pieces
pieces.reverse();
for (let i=0;i<pieces.length;i++){
    let j=Math.floor(Math.random() * pieces.length);

    // swap index
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
}
// Load Pieces
for (let i=0;i<pieces.length;i++){
    let tile = document.createElement("img");
    tile.src = "./blank.jpg" // Place holder, later add iamge based on number
    
    // Drag functionality
    tile.addEventListener("dragstart", dragStart); // click on mg to drag
    tile.addEventListener("dragover", dragOver); // drag img
    tile.addEventListener("dragenter", dragEnter); // drag img to another
    tile.addEventListener("dragleave", dragLeavet); // drag img away from another
    tile.addEventListener("dragdrop", dragDrop); // drop img
    tile.addEventListener("dragend", dragEnd); // after dropping, end state
    document.getElementById("pieces").append(tile);
}

// Drag Functions
function dragStart(){
    currTile = this;
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this;
}

function dragEnd(){
    if (currTile.src.includes("blank")){
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    // Swap
    currTile.src = otherImg;
    otherImg.src = currImg;
}

