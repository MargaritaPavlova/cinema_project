const films = [
    {
    time: "10:00",
    name: "Человек-паук",
    genres: ["Фантастика", "боевик", "приключения"],
    },
    {
    time: "12:00",
    name: "Собачья жизнь 2",
    genres: ["Фэнтези", "драма", "комедия"],
    },
    {
    time: "14:00",
    name: "История игрушек 4",
    genres: ["Мульфильм", "фэнтези", "комедия"],
    },
    {
    time: "16:00",
    name: "Люди в черном: Интэрнэшнл",
    genres: ["фантастика", "боевик", "комедия"],
    },
];

let tbody = document.getElementById('block03-table-body');

console.log(tbody.innerHTML);

tbody.innerHTML = '';

for (let index = 0; index < films.length; index++) {
    tbody.innerHTML += `
    <tr>
        <td>
            <input type="checkbox" class="block03__checkbox" id="block03__checkbox1">
            <label for="block03__label">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z"
                            fill="white"/>
                </svg>
            </label>
        </td>
        <td>${films[index].time}</td>
        <td>${films[index].name}</td>
        <td>${films[index].genres.join(', ')}</td>
    </tr>
   `;
}













