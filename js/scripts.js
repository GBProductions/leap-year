//Business Logic//

function isLeapYear(year) {
    return false
}

//User Logic//
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const year = $("input#year").val();

    const answer = isLeapYear(year)
    console.log(answer)
  });
});
