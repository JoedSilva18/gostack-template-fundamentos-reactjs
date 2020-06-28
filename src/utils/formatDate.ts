import { format, parseISO } from 'date-fns';

function formatDate(date: string): string {
  const compareDate = parseISO(date);
  const dateFormated = format(compareDate, 'dd/MM/yyyy');

  return dateFormated;
}

export default formatDate;
