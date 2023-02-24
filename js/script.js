const currentDayParagraph = $("#currentDay");
const currentDay = moment().format("dddd, MMMM Do");

$(document).ready(function () {
  currentDayParagraph.text(currentDay);
  createTimeBlocks();
  addEventListeners();
  loadEvents();
});
