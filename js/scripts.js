var createBoard = function() {
  for (var row = 1; row <= 12; row++) {
    $("#game tbody").append("<tr>");
    for (var column = 1; column <= 12; column++) {
      if (column === row) { // Condition for starting pattern
        var status = 'live';
      } else {
        var status = 'dead';
      }
      $("#game tbody").append("<td class='"+status+"'></td>");
    }
    $("#game tbody").append("</tr>");
  }
};



$(document).ready(function() {
  createBoard();
});
