var createBoard = function() {
  for (var row = 0; row < 10; row++) {
    $("#game tbody").append("<tr>");
    for (var column = 0; column < 10; column++) {
      if (column === row) { // Condition for starting pattern
        var status = 'live';
      } else {
        var status = 'dead';
      }
      var id = 10*row + column;
      $("#game tbody").append("<td id='"+id+"' class='"+status+"'></td>");
    }
    $("#game tbody").append("</tr>");
  }
}

var findNeighbors = function(cellId) {
  return [cellId-11, cellId-10, cellId-9, cellId-1, cellId+1, cellId+9, cellId+10, cellId+11];
}

var isAlive = function(cellId) {
  return $("#"+cellId).hasClass("live");
}

var isDead = function(cellId) {
  return $("#"+cellId).hasClass("dead");
}

var liveNeighbors = function(cellId) {
  var neighbors = findNeighbors(cellId);
  var alive = 0;
  for (var index in neighbors) {
    if (isAlive(neighbors[index])) {
      alive++;
    }
  }
  return alive;
}

var willDie = function(cellId) {
  var livingNeighbors = liveNeighbors(cellId);
  return livingNeighbors < 2 || livingNeighbors > 3;
}

var willReturnFromDead = function(cellId) {
  var livingNeighbors = liveNeighbors(cellId);
  return livingNeighbors === 3;
}

var anyLivingCells = function() {
  for (var cellId = 0; cellId < 100; cellId++) {
    if (isAlive(cellId)) {
      return true;
    }
  }
  return false;
}


$(document).ready(function() {
  createBoard();
//  while (anyLivingCells()) {
debugger;
    $("td.live").each(function() {
      var id = $(this).attr('id');
      if (willDie(id)) {
        $(this).removeClass("live").addClass("dead");
      }
    });
    $("td.dead").each(function() {

      var id = $(this).attr('id');
      if (willReturnFromDead(id)) {
        $(this).removeClass("dead").addClass("live");
      }
    });
//  }
});
