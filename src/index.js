import getUnits from './js/units';
import makeTable from './js/table';
import './css/styles.css';
if (module.hot) module.hot.accept();

(async () => {
  const units = await getUnits();
  makeTable(units);
})();
