jQuery(document).ready(function () {
  var now = moment().format("dddd MMM Do");
  currentDay.append(now);

  var time = moment().set("hour", 17);
  console.log(time);

  //   var hourEL = function () {
  //   var currentTime = moment().hour();
  //   $(".time-block").each(function () {
  //     var taskTime = parseInt($(this).attr("id"));
  //     if (taskTime < 6) {
  //       taskTime += 12;
  //     }

  //     if (taskTime < currentTime) {
  //       $(this).removeClass(["present", "future"]).addClass("past");
  //       $(this).find(".comment").prop("disabled", true);
  //     } else if (taskTime === currentTime) {
  //       $(this).removeClass(["past", "future"]).addClass("present");
  //     } else {
  //       $(this).removeClass(["past", "present"]).addClass("future");
  //     }
  //     update();
  //     setInterval(update, 1000);
  //   });
  //   };
  //   hourEL();

  var currentHour = moment().hour(); //get current time hour
  console.log(currentHour);
  var colorCode = function () {
    $(".row").each(function () {
      var val = parseInt($(this).attr("id"));
      if (val < 6) {
        val += 12;
      }
      if (val < currentHour) {
        $(this).removeClass(["present", "future"]).addClass("past");
        $(this).find(".comment").prop("disabled", true);
      } else if (val === currentHour) {
        $(this).removeClass(["past", "future"]).addClass("present");
      } else {
        $(this).removeClass(["past", "present"]).addClass("future");
      }
      update();
      setInterval(update, 1000);
    });
  };

  $(".saveButton").click(function () {
    alert("Save button clicked");
  });

  $(".saveButton").on("click", function () {
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
    $("#1 .comment").val(localStorage.getItem("1"));
    $("#2 .comment").val(localStorage.getItem("2"));
    $("#3 .comment").val(localStorage.getItem("3"));
    $("#4 .comment").val(localStorage.getItem("4"));
    $("#5 .comment").val(localStorage.getItem("5"));
    $("#6 .comment").val(localStorage.getItem("6"));
    $("#7 .comment").val(localStorage.getItem("7"));
    $("#8 .comment").val(localStorage.getItem("8"));
    $("#9 .comment").val(localStorage.getItem("9"));
    $("#14 .comment").val(localStorage.getItem("14"));
  };
  myTime();
  colorCode();
  console.log(localStorage);
});
