//Business Logic//

function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false
  }
}

//User Logic//
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const year = $("input#year").val();

    const answer = isLeapYear(year)

    if (answer === true) {
        $("#yes").show();
        $("#no").hide();
    } else {
        $("#yes").hide();
        $("#no").show();
    };
  });
});
