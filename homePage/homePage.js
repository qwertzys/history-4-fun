var row = 4;
var column = 4;

var currTile;
var otherTile;

window.load = function(){
    // initialize board
    for (let i = 0; i < row; i++){
        for (let j = 0; j < column; j++){
            let tile = document.createElement("img");
            // tile.src = // Insert image here

            document.getElementById("board").append(tile);
        }
    }
}