/**
 * If day or month < 10 it adds an 0 in the beginning
 * @param {String} date string of day or month
 */
export const dateLabel = (date) => {
  if (!Number.isInteger(date)) {
    return;
  }

  return (date < 10) ? '0' + date : date;
};

/**
 * Converte a string date to DD/MM/YYYY
 * @param {String} dateString date string to be converted
 * @returns {String}
 */
const convertDate = (dateString) => {
  var date = new Date(dateString);
  if (!date instanceof Date || isNaN(date)) {
    return '00/00/0000';
  }

  return [dateLabel(date.getDate()), dateLabel(date.getMonth() + 1), date.getFullYear()].join('/');
};

export default convertDate;
