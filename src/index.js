import './styles.css';
import './fetchCountries.js';
import fetchCountries from './fetchCountries.js';
import debounce from '../node_modules/lodash.debounce/index.js';

const list = document.querySelector('.countries-list');



document.querySelector('input').addEventListener(
'input',
  debounce(fetchCountries, 500),
)

