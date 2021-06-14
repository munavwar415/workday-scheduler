// 10;
// var myEvents = [
//   { start: 30, end: 150 }, // start and end are the minutes from midnight

//   { start: 540, end: 600 }, // start and end go from calendar_start to calendar_end

//   { start: 560, end: 620 },

//   { start: 610, end: 670 },
// ];

// // add events to the calendar

// $("#calendar").addEvents(myEvents);

// $("#calendar").layOutDay();

// $(function () {
//   $("#saveButton").click(function () {
//     var data = document.getElementById("comment").Value;
//     $('input[type="text"]').each(function () {
//       localStorage.setItem(data);
//     });
//   });
// });
// var data = document.getElementById("#comment").Value;
// var button = document.getElementById("#saveButton");
// var saveTasks = function (button) {
//   localStorage.setItem("data", JSON.stringify(tasks));
//   if (!data) {
//     data = {
//       comment: [],

//     };
// };

// var loadTasks = function () {
//   tasks = JSON.parse(localStorage.getItem("data"));
// };

// loadTasks();

// $("#saveButton").on("click", function () {
//   $("#comment").each(function () {
//     var id = $(this).attr("id");
//     var value = $(this).val();
//     localStorage.setItem("#comment" JSON.stringify(#comment));
//   });
// });
jQuery(document).ready(function () {
  $("#saveButton").click(function () {
    alert("Save button clicked");
  });

  $("#saveButton").on("click", function () {
    var timeEl = $(this).parent().attr("id");
    var taskInput = $(this).siblings(".comment").val();
    localStorage.setItem(timeEl, taskInput);
  });

  var myTime = function () {
    $("#9.comment").val(localStorage.getItem("9"));
  };
  myTime();
});
