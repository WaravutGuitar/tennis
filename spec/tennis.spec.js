function Tennis(){
  var scoreA ;
  var scoreB ;
  this.start = function() {
      scoreA = 0;
      scoreB = 0;
  };

  this.scoreA = function() {
    if(scoreA === 0){
      scoreA = 15;
    }
    if(scoreA === 15){
    scoreA = 30;
    }
    if(scoreA === 30){
      scoreA = 40;
    }
    if(scoreA === 40){
      scoreA = 50;
    }

  }
  this.echo = function() {
    if(scoreA === 0 && scoreB === 0){
      return 'Love - Love';
    }
    if(scoreA === 15 && scoreB === 0){
      return 'Fifteen - Love';
    }
    if(scoreA === 30 && scoreB === 0){
      return 'Thirty - Love';
    }
    if(scoreA === 40 && scoreB === 0){
      return 'Forty - Love';
    }
    if(scoreA > 40 && scoreB === 0){
      return 'player A won';
    }
 }
}


describe('Tennis game', function(){
    var tennis = new Tennis();
  it('should echo "Love - Love" when starting the game', function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })

});
