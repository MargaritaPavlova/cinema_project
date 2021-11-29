const films = [
    {   time: "10:00",
        name: "Человек-паук",
        genres: ["Фантастика", "боевик", "приключения"],
    },
    {
        time: "12:00",
        name: "Собачья жизнь 2",
        genres: ["Фэнтези", "драма", "комедия"],
    },
    {
        id: 12,
        time: "14:00",
        name: "История игрушек 4",
        genres: ["Мульфильм", "фэнтези", "комедия"],
    },
    {
        time: "16:00",
        // adult: true,
        name: "Люди в черном: Интэрнэшнл",
        genres: ["Фантастика", "боевик", "комедия"],
    },
];

let tbody = document.getElementById('block03-table-body');

tbody.innerHTML = '';

const filmHelper = {
    getId () {
        return this.id || `${this.name.replaceAll(" ", "-")}-${this.time}`
    },
    getTitle () {
        return this.name;
    },
    getTime () {
        return this.time;
    },
    getGenres () {
        return this.genres.join(", ");
    }
};

function renderFilmTableItem(film){
    return `
    <tr>
        <td>
            <input type="checkbox"
            class="block03__checkbox"
            id="${filmHelper.getId.apply(film)}"/>
                <label for="${filmHelper.getId.apply(film)}">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z"
                                fill="white"/>
                    </svg>
                </label>
        </td>
        <td>${filmHelper.getTime.apply(film)}</td>
        <td>${filmHelper.getTitle.apply(film)}</td>
        <td>${filmHelper.getGenres.apply(film)}</td>
    </tr>
    `
}


for (let film of films) {
    if (!film.adult) {
        tbody.innerHTML += renderFilmTableItem(film);
    }
}






