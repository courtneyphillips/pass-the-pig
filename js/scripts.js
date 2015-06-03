function Player(name, score) {
  this.name = name;
  this.score = 0;
}

Player.prototype.roll = function() {
  var pos1 = Math.floor((Math.random() * 5) + 1);
  var pos2 = Math.floor((Math.random() * 5) + 1);

  if (pos1 === pos2) {
    if (pos1 === 1) {
      this.score += 1;
    } else if (pos1 === 2 || 3) {
      this.score += 20;
    } else if (pos1 === 4) {
      this.score += 40;
    } else if (pos1 === 5) {
      this.score += 60;
    }
  } else {
      if (pos1 === 1) {
        this.score = this.score + 0;
      } else if (pos1 === 2) {
        this.score = this.score + 5;
      } else if (pos1 === 3) {
        this.score = this.score + 5;
      } else if (pos1 === 4) {
        this.score = this.score + 10;
      } else if (pos1 === 5) {
        this.score = this.score + 15;
      } else {
        alert("fail");
      }

      if (pos2 === 1) {
        this.score = this.score + 0;
      } else if (pos2 === 2) {
        this.score = this.score + 5;
      } else if (pos2 === 3) {
        this.score = this.score + 5;
      } else if (pos2 === 4) {
        this.score = this.score + 10;
      } else if (pos2 === 5) {
        this.score = this.score + 15;
      } else {
        alert("fail");
      }
    }
    return this.score;
  }

Player.prototype.wins = function(otherPlayer) {
  if (this.score >= 100) {
    return this;
  } else if (otherPlayer.score >= 100 ){
    return otherPlayer;
  } else {
    return "roll again"
  }

}

$(document).ready(function() {
  $("#game").hide();
  $("#intro").hide();
  var playerOne = new Player ("Player One")
  var playerTwo = new Player ("Player Two")

  $(".enter").click(function() {
    $("#welcome").hide();
    $("#intro").show();
  });

  $("form#team").submit(function(event){
    $("#intro").hide();
    $("#game").show();
    event.preventDefault();
    $("#welcome").hide();
    var playerPigs = [];
    $(':checkbox:checked').each(function(i){
      playerPigs[i] = $(this).val();
    });
    var player1Pigs = []
    var player2Pigs = []
    player1Pigs.push(playerPigs[0])
    player1Pigs.push(playerPigs[1])
    player2Pigs.push(playerPigs[2])
    player2Pigs.push(playerPigs[3])

  });

  $("#roll1").click(function() {
    playerOne.roll()
    $("#roll1").hide();
    $("#roll2").show();
    $("#score1").text(playerOne.score)
    if (playerOne.wins(playerTwo) === playerOne) {
      alert("Player One Wins");
    }
  });

    $("#roll2").click(function() {
      $("#roll2").hide();
      $("#roll1").show();
      playerTwo.roll()
      $("#score2").text(playerTwo.score)

      if (playerTwo.wins(playerOne) === playerTwo) {
        alert("Player Two Wins");
      }

  });


});
