var height, width, color;

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
})


// Makes grid based on user input.

function makeGrid(h, w) {
  $("tr").remove();

  for(var i = 1; i <= h; i++) {
    $("#pixelCanvas").append("<tr id=table"+ i + "></tr>");
    for(var j = 1; j <= w; j++) {
      $("#table" + i).append("<td></td>");
    }
  }
// Adds color to clicked cell

  $("td").click(function addColor() {
    color = $("#colorPicker").val();
    $(this).attr("style", "background-color:" + color)
  });
}
