var createBoard = function(lifeStatusArray) {
  for (var row = 0; row < 10; row++) {
    $("#game tbody").append("<tr>");
    for (var column = 0; column < 10; column++) {
      var id = 10*row + column;
      var status = lifeStatusArray[id];
      $("#game tbody").append("<td id='"+id+"' class='"+status+"'></td>");
    }
    $("#game tbody").append("</tr>");
  }
}

var startPattern = function() {
  var lifeStatus = [];
  for (var i = 0; i < 100; i++) {
    if ((i > 43 && i < 47) || (i > 52 && i < 56)) {
      lifeStatus.push('alive');
    } else {
      lifeStatus.push('dead');
    }
  }
  return lifeStatus;
}

var findNeighbors = function(cellId) { // for 10x10 board
  var possibleNeighbors = [cellId-11, cellId-10, cellId-9, cellId-1, cellId+1, cellId+9, cellId+10, cellId+11];
  var actualNeighbors = [];
  for (var index in possibleNeighbors) {
    if (possibleNeighbors[index] >= 0 && possibleNeighbors[index] < 100) {
      actualNeighbors.push(possibleNeighbors[index]);
    }
  }
  return actualNeighbors;
}

var isAlive = function(cellId, statusArray) {
  return statusArray[cellId] === "alive";
}

var isDead = function(cellId, statusArray) {
  return statusArray[cellId] === "dead";
}

var liveNeighbors = function(cellId, statusArray) {
  var neighbors = findNeighbors(cellId);
  var livingNeighbors = 0;
  for (var index in neighbors) {
    if (isAlive(neighbors[index], statusArray)) {
      livingNeighbors++;
    }
  }
  return livingNeighbors;
}

var willDie = function(cellId, statusArray) {
  var livingNeighbors = liveNeighbors(cellId, statusArray);
  return isAlive(cellId, statusArray) && (livingNeighbors < 2 || livingNeighbors > 3);
}

var willReturnFromDead = function(cellId, statusArray) {
  var livingNeighbors = liveNeighbors(cellId, statusArray);
  return isDead(cellId, statusArray) && (livingNeighbors === 3);
}

var kill = function(cellId, statusArray) {
  statusArray[cellId] = "dead";
}

var revive = function(cellId, statusArray) {
  statusArray[cellId] = "alive";
}

var lifeCycle = function(statusArray) {
  var toRevive = [];
  var toKill = [];

  for (var index in statusArray) {
    if (willDie(index, statusArray)) {
      toKill.push[index];
    } else if (willReturnFromDead(index, statusArray)) {
      toRevive.push[index];
    }
  }

  for (var index in statusArray) {
    for (var killIndex in toKill) {
      if (index === toKill[killIndex]) {
        kill(index, statusArray);
      }
    }
    for (var reviveIndex in toRevive) {
      if (index === toRevive[reviveIndex]) {
        revive(index, statusArray);
      }
    }
  }
  return statusArray;
}

// var anyLivingCells = function() {
//   for (var cellId = 0; cellId < 100; cellId++) {
//     if (isAlive(cellId)) {
//       return true;
//     }
//   }
//   return false;
// }


$(document).ready(function() {
  var lifeStatus = startPattern();
  createBoard(lifeStatus);

  $("#cycle").click(function() {
    lifeStatus = lifeCycle(lifeStatus);
    $("tbody").empty();
    createBoard(lifeStatus);
  });

//  while (anyLivingCells()) {
    // $(".live").each(function() {
    //   var id = $(this).attr('id');
    //   if (willDie(id)) {
    //     $(this).removeClass("alive").addClass("dead");
    //   }
    // });
    // $(".dead").each(function() {
    //
    //   var id = $(this).attr('id');
    //   if (willReturnFromDead(id)) {
    //     $(this).removeClass("dead").addClass("alive");
    //   }
    // });
//  }
});
