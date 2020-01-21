var height, width, color;

$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
  //console.log("Height: " + height + " and width: " + width);
})



function makeGrid(h, w) {
  $("tr").remove();

  for(var i = 1; i <= h; i++) {
    $("#pixelCanvas").append("<tr id=table"+ i + "></tr>");
    for(var j = 1; j <= w; j++) {
      $("#table" + i).append("<td></td>");
    }
  }

  $("td").click(function addColor() {
    color = $("#colorPicker").val();

    if($(this).attr("style")) {
       $(this).removeAttr("style")
    }else {
      $(this).attr("style", "background-color:" + color);
    }
  })

}
