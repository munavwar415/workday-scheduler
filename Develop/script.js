10;
var myEvents = [
  { start: 30, end: 150 }, // start and end are the minutes from midnight

  { start: 540, end: 600 }, // start and end go from calendar_start to calendar_end

  { start: 560, end: 620 },

  { start: 610, end: 670 },
];

// add events to the calendar

$("#calendar").addEvents(myEvents);

$("#calendar").layOutDay();
