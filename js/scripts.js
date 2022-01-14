$(document).ready(function(){
  $("#coolForm").submit(function(event){
    event.preventDefault();
    
    const numberCombo = parseInt($("input#numberCombo").val());
    const trueFalseCool = $("select#trueFalseCool").val();
    const offering = $("input#offering").val();
    const millionaire = $("select#millionaire").val();
    const licks = parseInt($("input#licks").val());

    if (numberCombo < 1000000) {
      $(".language-result-circus").show();
    }
  
  });
});