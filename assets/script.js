jQuery(document).ready(function () {
  // current day, month, date
  var now = moment().format("dddd MMM Do");
  currentDay.append(now);

  // function for adding and removing classes for different hours
  var colorCode = function () {
    var currentHour = moment().hour(); //get current time hour
    $(".time-block").each(function () {
      var val = parseInt($(this).attr("id"));
      // controls which class is added or removed depending on the time
      if (val < currentHour) {
        $(this).removeClass("present future").addClass("past");
        // $(this).find(".comment").prop("disabled", true);
      } else if (val === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
      //refreshes the page every 30 minutes
      var countdown = 30 * 60 * 1000;
      setTimeout(function () {
        location.reload();
      }, countdown);
    });
  };
  // saves task within a specific hour on click
  $(".saveBtn").on("click", function () {
    var timeEl = $(this).parent().attr("id");
    var taskInput = $(this).siblings(".comment").val();
    localStorage.setItem(timeEl, taskInput);
    console.log(localStorage);
  });

  var myTime = function () {
    $("#9 .comment").val(localStorage.getItem("9"));
    $("#10 .comment").val(localStorage.getItem("10"));
    $("#11 .comment").val(localStorage.getItem("11"));
    $("#12 .comment").val(localStorage.getItem("12"));
    $("#13 .comment").val(localStorage.getItem("13"));
    $("#14 .comment").val(localStorage.getItem("14"));
    $("#15 .comment").val(localStorage.getItem("15"));
    $("#16 .comment").val(localStorage.getItem("16"));
    $("#17 .comment").val(localStorage.getItem("17"));
    $("#18 .comment").val(localStorage.getItem("18"));
    $("#19 .comment").val(localStorage.getItem("19"));
    $("#20 .comment").val(localStorage.getItem("20"));
    $("#21 .comment").val(localStorage.getItem("21"));
  };
  // activates the functions
  myTime();
  colorCode();
});
