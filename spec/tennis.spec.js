function fizzbuzz(number){
  if(number%3 === 0 ){
      return 'Fizz';
  }
  else if(number%5 === 0 ){
      return 'Buzz';
  }

}

describe("fizzbuzz()", function(){

  it('should be "Fizz" when I put 3' , function() {
    var str = fizzbuzz(3);
    expect(str).toEqual('Fizz');
  });

  it('should be "Buzz" when I put 5' , function() {
    var str = fizzbuzz(5);
    expect(str).toEqual('Buzz');
  });

});
