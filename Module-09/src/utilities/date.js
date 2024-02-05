export const getTimeAgo = (dateString) => {
  const publishDate = new Date(dateString);
  const currentDate = new Date();

  const timeDifference = currentDate - publishDate;

  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const weeksDifference = Math.floor(daysDifference / 7);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (secondsDifference < 60) {
    return `${secondsDifference} second${
      secondsDifference === 1 ? "" : "s"
    } ago`;
  } else if (minutesDifference < 60) {
    return `${minutesDifference} minute${
      minutesDifference === 1 ? "" : "s"
    } ago`;
  } else if (hoursDifference < 24) {
    return `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"} ago`;
  } else if (daysDifference < 7) {
    return `${daysDifference} day${daysDifference === 1 ? "" : "s"} ago`;
  } else if (weeksDifference === 1) {
    return `${weeksDifference} week ago`;
  } else if (weeksDifference <= 4) {
    return `${weeksDifference} weeks ago`;
  } else if (monthsDifference < 12) {
    return `${monthsDifference} month${monthsDifference === 1 ? "" : "s"} ago`;
  } else if (yearsDifference === 1) {
    return `1 year ago`;
  } else if (yearsDifference > 1) {
    return `${yearsDifference} years ago`;
  } else {
    return `Today`;
  }
};
