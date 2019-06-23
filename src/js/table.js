import 'stupid-table-plugin';
import templates from '../templates/templates';

export default units => {
  // Add table to DOM
  const tableHtml = templates.table({ units });
  document.getElementById('table-container').innerHTML = tableHtml;

  // Make data sortable
  const table = $('table').stupidtable({
    alphanum: (a, b) => {
      const aIsNumber = parseInt(a);
      const bIsNumber = parseInt(b);
      const bothNumbers = aIsNumber && bIsNumber;
      const bothStrings = !aIsNumber && !bIsNumber;
      if (bothNumbers) return parseInt(a) - parseInt(b);
      if (bothStrings) return a - b;
      if (aIsNumber) return -1;
      if (bIsNumber) return 1;
    }
  });

  // Add sorting indicator classes
  table.bind('aftertablesort', (event, { direction, $th }) => {
    const dir = direction === 'asc' ? 'ascending' : 'descending';
    $th.addClass(`sorted ${dir}`);
    $th.removeClass(`sorting-asc sorting-desc`);
  });

  table.bind('beforetablesort', (event, { direction, $th }) => {
    $th
      .parent()
      .children('th')
      .removeClass(`sorting-asc sorting-desc sorted ascending descending`);
  });
};
