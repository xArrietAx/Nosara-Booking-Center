export function format(dateString, pattern = 'yyyy-MM-dd') {

  if (!dateString) return ""

  const date = new Date(dateString);

  const utcDate = new Date(date.toUTCString());

  const year = utcDate.getUTCFullYear();
  const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(utcDate.getUTCDate()).padStart(2, '0');

  const map = {
    yyyy: year,
    MM: month,
    dd: day,
  };

  return pattern.replace(/yyyy|MM|dd/g, matched => map[matched]);
}