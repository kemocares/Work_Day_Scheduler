const currentDayParagraph = $("#currentDay");
const currentDay = moment().format("dddd, MMMM Do");

$(document).ready(function () {
  currentDayParagraph.text(currentDay);
  createTimeBlocks();
  addEventListeners();
  loadEvents();
});
// Create time blocks from 9AM to 5PM
function createTimeBlocks() {
  const timeBlock = $('<div>')
  timeBlock.addClass('time-block')

  const row = $('<div>')
  row.addClass('row')

  const hour = $('<div>')
  hour.addClass('hour')

  const textArea = $('<textarea>')
  textArea.addClass('description')

  const saveBtn = $('<button>')
  saveBtn.addClass('saveBtn')
  // Add an aria-label to the button
  saveBtn.attr('aria-label', 'Save button')
