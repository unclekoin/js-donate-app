import moment from 'moment';

export const calculateSumOfNumbers = (numbers) => {
  return numbers.reduce((sum, number) => sum + number, 0);
}

export const getFormattedTime = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
