import getUnits from './js/units';
import makeTable from './js/table';

(async () => {
  const units = await getUnits();
  makeTable(units);
})();
