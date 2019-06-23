import './vendor/tablesort';
import templates from '../templates/templates';

export default units => {
  // Add table to DOM
  const tableHtml = templates.table({ units });
  document.querySelector('tbody').innerHTML = tableHtml;
  document.querySelector('table').classList.add('sortable');

  // Set sort order
  $.tablesort.defaults.compare = (a, b) => {
    const aIsNumber = parseInt(a);
    const bIsNumber = parseInt(b);
    const bothNumbers = aIsNumber && bIsNumber;
    const bothStrings = !aIsNumber && !bIsNumber;

    if (bothNumbers) return parseInt(a) - parseInt(b);
    if (bothStrings) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    if (aIsNumber) return -1;
    if (bIsNumber) return 1;
  };

  // Make table sortable
  $('table').tablesort();
};
