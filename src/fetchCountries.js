import {
  error,
  defaultModules,
} from "../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyDesktop from "../node_modules/@pnotify/desktop/dist/PNotifyDesktop.js";
import "../node_modules/@pnotify/core/dist/PNotify.css";
import "../node_modules/@pnotify/desktop/dist/PNotifyDesktop.css";
import '@pnotify/core/dist/BrightTheme.css';
import countriesTemplate from '../src/countries.hbs';



defaultModules.set(PNotifyDesktop, {});

const fetchCountries = function (event) {
  document.querySelector('.countries').innerHTML = '';
  event.target.value === '' ? document.querySelector('.countries-list').textContent = "" : ""
  fetch(`https://restcountries.eu/rest/v2/name/${event.target.value}`)
    .then(response => (response.ok) ? response.json() : Promise.reject(`Status ` + response.status))
    .then(data => {
      if (data.length > 10) {
        error("Too many entries found. Please enter a more specific query!");
      }
      return data;
    }
    )
    .then(data => {
      if (data.length >= 2 && data.length < 10) {
        data.forEach(el => document.querySelector('.countries-list').insertAdjacentHTML('beforeend', `<li class="list-item">${el.name}</li>`))
        document.querySelector('.countries-list').addEventListener('click', (event) => {
          data.forEach(el => {
            if (el.name === event.target.textContent) {
              let markup = countriesTemplate(el);
              document.querySelector('.countries').innerHTML = markup;
              document.querySelector('.countries-list').textContent = ""
            }
          })
        }
        )
      }
      return data
    }
    )
    .then(data => {
      if (data.length === 1) {
        console.log(data)
        let markup = countriesTemplate(data[0])
        document.body.insertAdjacentHTML('beforeend', markup);
      }
      return data;
    }
  )
    .catch(error => document.querySelector('.countries').innerHTML = `<h2 style="text-align: center; color: red">${error}. The country was not found. Try again</h2>`)
}


export default fetchCountries

//       const showCountry = function (event) {
//   console.log(event.target.textContent)
  
//   const markup = countriesTemplate(event.target)
//   document.body.insertAdjacentHTML('beforeend', markup);
// }