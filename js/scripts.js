$(document).ready(function(){
  $("#coolForm").submit(function(event){
    event.preventDefault();
    
    const numberCombo = parseInt($("input#numberCombo").val());
    const trueFalseCool = $("select#trueFalseCool").val();
    const offering = $("input#offering").val();
    const millionaire = $("select#millionaire").val();
    const licks = parseInt($("input#licks").val());

    $(".survey-result").fadeOut();

    if (numberCombo <= 1000) {
      $(".language-result-circus").fadeIn();
    } else if (licks >= 1000000 ) {
      $(".language-result-broke").fadeIn();
    } else if (millionaire === "fifty" ) {
      $(".language-result-java").fadeIn();
    } else if (trueFalseCool === "alsoTrueCool" && millionaire === "phone") {
      $(".language-result-ruby").fadeIn();
    } else {
      $(".language-result-python").fadeIn();
    }
  
  });
});