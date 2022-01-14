$(document).ready(function(){
  $("#coolForm").submit(function(event){
    event.preventDefault();
    
    const numberCombo = parseInt($("input#numberCombo").val());
    const trueFalseCool = $("select#trueFalseCool").val();
    const offering = $("input#offering").val();
    const millionaire = $("select#millionaire").val();
    const licks = parseInt($("input#licks").val());

    if (numberCombo <= 1000000) {
      $(".language-result-circus").show();
    } else if (licks >= 1000 ) {
      $(".language-result-broke").show();
    } else if (millionaire === "fifty" ) {
      $(".language-result-java").show();
    } else if (trueFalseCool === "alsoTrueCool" && millionaire === "phone") {
      $(".language-result-ruby").show();
    } else {
      $(".language-result-python").show();
    }
  
  });
});