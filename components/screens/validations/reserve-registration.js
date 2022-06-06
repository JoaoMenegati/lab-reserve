function validateDate(date) {
  const currentDate = new Date();
  const splittedDate = date.split("/");

  const currentYear = currentDate.getFullYear();
  if (splittedDate[2] < currentYear) {
    return false;
  }

  const isCurrentYear = parseInt(splittedDate[2]) === currentYear;
  const currentMonth = currentDate.getMonth() + 1; //Jan === 0
  if (isCurrentYear && splittedDate[1] < currentMonth) {
    return false;
  }

  const isCurrentMonth = parseInt(splittedDate[1]) === currentMonth;
  const currentDay = currentDate.getDate();
  if (
    isCurrentYear &&
    isCurrentMonth &&
    parseInt(splittedDate[0]) < currentDay
  ) {
    return false;
  }

  return true;
}

function validateStartHour(hour) {
  const currentDate = new Date();
  const splittedHour = hour.split(":");

  const currentHour = currentDate.getHours();
  if (parseInt(splittedHour[0]) < currentHour) {
    return false;
  }

  const isCurrentHour = parseInt(splittedHour[0]) === currentHour;
  if (isCurrentHour && parseInt(splittedHour[1]) < currentDate.getMinutes()) {
    return false;
  }

  return true;
}

function validateEndHour(hour, startHour) {
  const splittedEndHour = hour.split(":");
  const splittedStartHour = startHour.split(":");

  if (splittedEndHour[0] < splittedStartHour[0]) {
    return false;
  }

  const isCurrentHour = splittedEndHour[0] === splittedStartHour[0];
  if (isCurrentHour && splittedEndHour[1] < splittedStartHour[1]) {
    return false;
  }

  return true;
}

function isCurrentDate(date) {
  const currentDate = new Date();
  const splittedDate = date.split("/");

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  if (parseInt(splittedDate[0]) !== currentDay) {
    return false;
  }

  if (parseInt(splittedDate[1]) !== currentMonth) {
    return false;
  }

  if (parseInt(splittedDate[2]) !== currentYear) {
    return false;
  }

  return true;
}

export { validateDate, validateStartHour, validateEndHour, isCurrentDate };
