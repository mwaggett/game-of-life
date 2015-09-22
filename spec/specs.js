describe('findNeighbors', function() {
  it("returns array of eight surrounding cells", function() {
    expect(findNeighbors(22)).to.eql([11,12,13,21,23,31,32,33]);
  });
  it("doesn't include cells that would be out of range", function() {
    expect(findNeighbors(1)).to.eql([0,2,10,11,12]);
  });
});

describe('isAlive', function() {
  it("returns true when index has value 'alive'", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(isAlive(2, startStatus)).to.equal(true);
  });

  it("returns false when index has value 'dead'", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(isAlive(3, startStatus)).to.equal(false);
  });
});

describe('isDead', function() {
  it("returns true when index has value 'dead'", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(isDead(3, startStatus)).to.equal(true);
  });

  it("returns false when index has value 'alive'", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(isDead(2, startStatus)).to.equal(false);
  });
});

describe('liveNeighbors', function() {
  it("counts how many of the surrounding neighbors are alive", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(liveNeighbors(12, startStatus)).to.equal(2);
  });

  it("returns 0 if surrounded by all dead neighbors", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(liveNeighbors(85, startStatus)).to.equal(0);
  });
});

describe('willDie', function() {
  it("returns true when there are too few live neighbors", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willDie(2, startStatus)).to.equal(true);
  });

  it("returns true when there are too many live neighbors", function() {
    var startStatus = ["dead", "alive", "alive", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "alive", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willDie(2, startStatus)).to.equal(true);
  });

  it("returns false when there are 2 or 3 live neighbors", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willDie(12, startStatus)).to.equal(false);
  });

  it("returns false when already dead", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willDie(1, startStatus)).to.equal(false);
  });
});

describe('willReturnFromDead', function() {
  it("returns true when there are exactly 3 live neighbors", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willReturnFromDead(11, startStatus)).to.equal(true);
  });

  it("returns false when there are too few live neighbors", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willReturnFromDead(8, startStatus)).to.equal(false);
  });

  it("returns false when there are too many live neighbors", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willReturnFromDead(11, startStatus)).to.equal(false);
  });

  it("returns false when already alive", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    expect(willReturnFromDead(2, startStatus)).to.equal(false);
  });
});

describe('kill', function() {
  it("changes 'alive' to 'dead' in status array", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    kill(2, startStatus);
    expect(startStatus[2]).to.equal("dead");
  });
  it("updates status arary", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    kill(2, startStatus);
    expect(startStatus).to.eql(["dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"]);
  });
});

describe('revive', function() {
  it("changes 'dead' to 'alive' in status array", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    revive(3, startStatus);
    expect(startStatus[3]).to.equal("alive");
  });
  it("updates status arary", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    revive(3, startStatus);
    expect(startStatus).to.eql(["dead", "dead", "alive", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"]);
  });
});

describe('lifeCycle', function() {
  it("changes status of appropriate cells", function() {
    var startStatus = ["dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    var endStatus = ["dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "alive", "alive", "alive", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead", "dead"];
    //console.log(lifeCycle(startStatus));
    expect(lifeCycle(startStatus)).to.eql(endStatus);
  });
});
