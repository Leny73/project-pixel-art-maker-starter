// When size is submitted by the user, call makeGrid()
$("#button").on("click",function(event){
event.preventDefault();
makeGrid();
});
// Function that creates the grid
function makeGrid() {
const width = $("#input_width").val();
const height = $("#input_height").val();
let grid = $("#pixel_canvas");
grid.children().remove();
for(var r = 0 ; r<height; r++){
    grid.append('<tr class ="tr"></tr>');
    for(var c = 0; c<width; c++){
        grid.children().last().append('<td class="td"> </td>');
    }
}
//Event listener that colors the cells with specific color
$(".td").on("click", function() {
    const color = $("#colorPicker").val();
    $(this).css("background-color",color);
});
//Event listener on the button to clear the canvas
$("#clearbutton").on("click",function(event){
    event.preventDefault();
    $(".td").css("background-color","#ffffff");
});
//Event listener on the button to clear the cell on double click
$(".td").on("dblclick",function(event){
    event.preventDefault()
    $(this).css("background-color", "#ffffff");
});
}

