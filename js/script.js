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
  const timeBlock = $("<div>");
  timeBlock.addClass("time-block");

  const row = $("<div>");
  row.addClass("row");

  const hour = $("<div>");
  hour.addClass("hour");

  const textArea = $("<textarea>");
  textArea.addClass("description");

  const saveBtn = $("<button>");
  saveBtn.addClass("saveBtn");
  // Add an aria-label to the button
  saveBtn.attr("aria-label", "Save button");

  // Add a fontawesome icon to the button
  const icon = $("<i>");
  icon.addClass("fas fa-save");
  saveBtn.append(icon);

  row.append(hour);
  row.append(textArea);
  row.append(saveBtn);

  timeBlock.append(row);

  // Loop through the time blocks
  for (let i = 9; i <= 17; i++) {
    // Create a new time block
    const newTimeBlock = timeBlock.clone();
    // Set the data-hour attribute as 12 hour format
    newTimeBlock.attr("data-hour", moment(i, "H").format("hA"));
    // Set the hour text
    newTimeBlock.find(".hour").text(moment(i, "H").format("hA"));
    // Add class to the time block based on the current hour
    if (i < moment().hour()) {
      newTimeBlock.addClass("past");
    } else if (i === moment().hour()) {
      newTimeBlock.addClass("present");
    } else {
      newTimeBlock.addClass("future");
    }
    // Append the time block to the container
    $(".container").append(newTimeBlock);
  }
}

function addEventListeners() {
  // Save button click event
  $(".saveBtn").on("click", function () {
    // Get the data-hour attribute
    const hour = $(this).parent().parent().attr("data-hour");
    // Get the text from the textarea
    const text = $(this).siblings("textarea").val();
    // Save the text to local storage
    localStorage.setItem(hour, text);
  });
}

function loadEvents() {
  // Loop through the time blocks
  $(".time-block").each(function () {
    // Get the data-hour attribute
    const hour = $(this).attr("data-hour");
    // Get the text from local storage
    const text = localStorage.getItem(hour);
    // Set the textarea text
    $(this).find("textarea").text(text);
  });
}
