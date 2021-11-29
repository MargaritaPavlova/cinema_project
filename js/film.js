// function getRandomTime () {
//     treturn Math.ceil(Math.random())
//     this.time = `$(Math.ceil(Math.random() * 13) - 1):${Math.ceil(Math.random() * 61) - 1}`;
// }


// function Film(filmData) {
//     this._data = filmData;
//     this.time = `$(Math.ceil(Math.random()*13) - 1):${Math.ceil(Math.random() * 61) - 1}`;
// }


// function Film(filmData) {
//     this._data = filmData;
// }

// Film.prototype.isNotForAdult = function () {
//     return this._data.rate == "R" && this._data.rate !== "NC-17";
// }

// Film.prototype.getTitle = function() {
//     return this._data.title || this._data.name;
// }

// Film.prototype.getTime = function() {
//     return this._data.time;
// }

// Film.prototype.getGenres= function() {
//     return this._data.genres.join(", ");
// }

// Film.prototype.getId = function() {
//     return this._data.id || `${this._data.name.replaceAll(" ", "-")}-${this._data.time}`;
// }

// Film.prototype.renderFilmTableItem = function () {
//     return `
//     <tr>
//         <td>
//             <input type="checkbox"
//             class="block03__checkbox"
//             id="${this.getId()}"/>
//                 <label for="${this.getId()}">
//                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd"
//                                 d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z"
//                                 fill="white"/>
//                     </svg>
//                 </label>
//         </td>
//         <td>${this.getTime}</td>
//         <td>${this.getTitle}</td>
//         <td>${this.getGenres}</td>
//     </tr>
//     `;
// }

