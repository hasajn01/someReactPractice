import React, { useState } from 'react';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

function MovieList() {
    // Инициализируем состояние movies с массивом из объекта movieDB
    const [movies, setMovies] = useState(movieDB.movies);

    // Функция для сортировки массива
    const sortMovies = () => {
        // Создаем новый отсортированный массив
        const sortedMovies = [...movies].sort();
        // Обновляем состояние отсортированным массивом
        setMovies(sortedMovies);
    };

    return (
        <div>
            <ul className="promo__interactive-list">
                {movies.map((movie, index) => (
                    <li key={index} className="promo__interactive-item">{movie}</li>
                ))}
            </ul>
            <button onClick={sortMovies} className='sortedButton'>Сортировать фильмы</button>
        </div>
    );
}

export default MovieList;