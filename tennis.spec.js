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
    else if(scoreA === 15){
    scoreA = 30;
    }
    else if(scoreA === 30){
      scoreA = 40;
    }
    else if(scoreA === 40){
      scoreA = 50;
    }

  }
  this.scoreB = function() {
    if(scoreB === 0){
      scoreB = 15;
    }
    else if(scoreB === 15){
    scoreB = 30;
   }
  else if(scoreB === 30){
     scoreB = 40;
   }
   else if(scoreB === 40){
      scoreB = 50;
    }

  }

  this.echo = function() {
    if(scoreA === 0 && scoreB === 0){
      return 'Love - Love';
    }
    else if(scoreA === 15 && scoreB === 0){
      return 'Fifteen - Love';
    }
    else if(scoreA === 30 && scoreB === 0){
      return 'Thirty - Love';
    }
    else if(scoreA === 40 && scoreB === 0){
      return 'Forty - Love';
    }
    else if(scoreA > 40 && scoreB === 0){
      scoreA = 0;
      return 'player A won';
    }
    else if(scoreA === 0 && scoreB === 15){
    return 'Love - Fifteen';
    }
    else if(scoreA === 0 && scoreB === 30){
   return 'Love - Thirty';
   }
   else if(scoreA === 0 && scoreB === 40){
    return 'Love - Forty';
    }
   else if(scoreA === 0 && scoreB > 40){
     scoreB = 0;
     return 'player B won';
   }
   else if(scoreA === 15 && scoreB === 15){
    return 'Fifteen - Fifteen';
    }
    else if(scoreA === 30 && scoreB === 15){
    return 'Thirty - Fifteen';
    }
 }
}


describe('Tennis game', function(){
    var tennis = new Tennis();

  it('should echo "Love - Love" when starting the game', function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })
  it('should echo "Fifteen - Love" when starting the game', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  })
  it('should echo "Thirty - Love" when starting the game', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Thirty - Love');
  })
  it('should echo "Forty - Love" when starting the game', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('Forty - Love');
  })
  it('should echo "player A won" when starting the game', function(){
    tennis.scoreA();
    expect(tennis.echo()).toEqual('player A won');
  })
  it('should echo "Love - Fifteen" when starting the game', function(){
        tennis.scoreB();
        expect(tennis.echo()).toEqual('Love - Fifteen');
  })
  it('should echo "Love - Thirty" when starting the game', function(){
        tennis.scoreB();
        expect(tennis.echo()).toEqual('Love - Thirty');
  })
  it('should echo "Love - Forty" when starting the game', function(){
        tennis.scoreB();
        expect(tennis.echo()).toEqual('Love - Forty');
  })
  it('should echo "player B won" when starting the game', function(){
        tennis.scoreB();
        expect(tennis.echo()).toEqual('player B won');
  })



});
