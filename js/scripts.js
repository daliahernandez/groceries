$(document).ready(function(){
  $('#userInput').submit(function(event){

    var idTags = ['itemOne', 'itemTwo', 'itemThree', 'itemFour']

    var alphabeticalInput = idTags.map(function(idTags){
      var userInput = $('input#' + idTags).val();
      return userInput.toUpperCase();
    });
    alphabeticalInput.sort();
    $('#upperAndAlpha').text(alphabeticalInput);
    event.preventDefault();
  });
});
