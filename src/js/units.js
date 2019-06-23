import 'whatwg-fetch'; // fetch polyfill
import ky from 'ky';

export default async () => {
  const units = await ky
    .get('https://private-66479-hospiqtest.apiary-mock.com/units')
    .json();

  return units;
};
