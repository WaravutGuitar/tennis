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
  }
  this.echo = function() {
    if(scoreA === 0 && scoreB === 0){
    return 'Love - Love';
    }
  }

}


describe('Tennis game', function(){
    var tennis = new Tennis();
  it('should echo "Love - Love" when starting the game', function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  })

})
