var row = 4;
var col = 4;

var currTile;
var otherTile;

window.onload = function() {
    // initialize board
    for (let r = 0; r < row; r++){
        for (let c = 0; c < col; c++){
            let tile = document.createElement("img");
            tile.src = "./puzzleImages/blank.jpg";

            // Drag Functionalities
            tile.addEventListener("dragstart", dragStart); // click on img to drag
            tile.addEventListener("dragover", dragOver); // drag on img
            tile.addEventListener("dragenter", dragEnter); // drag img into another
            tile.addEventListener("dragleave", dragLeave); // drag img away from another
            tile.addEventListener("drop", dragDrop); // drop image on another
            tile.addEventListener("dragend", dragEnd); // after completing dragDrop
        
            
            document.getElementById("board").append(tile);
        }
    }

    // pieces
    let pieces = [];
    for (let i=1;i<=row*col;i++){
        pieces.push(i.toString());
    }

    // Shuffle piece
    pieces.reverse();
    for (let i=0; i < pieces.length;i++){
        let j = Math.floor(Math.random() *pieces.length);
        
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    // load pieces
    for (let i = 0;i<pieces.length;i++){
        let tile = document.createElement("img");
        tile.src = "./puzzleImages/" + pieces[i] + ".jpg";

        // Drag Functionalities
        tile.addEventListener("dragstart", dragStart); // click on img to drag
        tile.addEventListener("dragover", dragOver); // drag on img
        tile.addEventListener("dragenter", dragEnter); // drag img into another
        tile.addEventListener("dragleave", dragLeave); // drag img away from another
        tile.addEventListener("drop", dragDrop); // drop image on another
        tile.addEventListener("dragend", dragEnd); // after completing dragDrop

        document.getElementById("pieces").append(tile);
    }
}

function navigateToProfile() {
    window.location.href = "../profilePage/profilePage.html"
}

function navigateToHome() {
    window.location.href = "../homePage/homePage.html"
}

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
    currTile.src = otherImg;
    otherTile.src = currImg;
}