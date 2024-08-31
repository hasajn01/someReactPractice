
import './css/style.min.css'
import Listitem from '../listitem/Listitem'
function App() {
    return (
        <>

        <header className="header">
        <div className="header__search">
            <form action="#">
                <input type="text" placeholder="Поиск" />
            </form>
        </div>
        <div className="header__logo">
            <img src="assets/icons/Logotype.svg" alt="" />
        </div>
    </header>


    <main className="promo">

    <div className="promo__menu">
            <nav className="promo__menu-list">
                <ul>
                    <li><a className="promo__menu-item promo__menu-item_active" href="#">Фильмы</a></li>
                    <li><a className="promo__menu-item" href="#">Сериалы</a></li>
                    <li><a className="promo__menu-item" href="#">Мультфильмы</a></li>
                    <li><a className="promo__menu-item" href="#">Клипы</a></li>
                    <li><a className="promo__menu-item" href="#">Трейлеры</a></li>
                </ul>
            </nav>
        </div>

    <div className="promo__content">
    <div className="promo__bg">
                <div className="promo__genre">Драма</div>
                <div className="promo__title">МАРСИАНИН</div>
                <div className="promo__descr">ИСТОРИЯ ЧЕЛОВЕКА, ВЫЖИВШЕГО НА ЧУЖОЙ ПЛАНЕТЕ В ОДИНОЧКУ</div>
                <div className="promo__ratings">
                    <span>IMDb: 8.0</span>
                    <span>Кинопоиск: 7.7</span>
                </div>
            </div>

            <div className="promo__interactive">
                <div>
                    <div className="promo__interactive-title">ПРОСМОТРЕННЫЕ ФИЛЬМЫ</div>
                        <Listitem />
                </div>
                <div>
                    <form className="add">
                        <div className="promo__interactive-title">ДОБАВИТЬ НОВЫЙ ФИЛЬМ</div>
                        <span>Введите название фильма</span>
                        <input className="adding__input" type="text" placeholder="Что уже посмотрено...?" />
                        <span>Сделать его любимым?</span>
                        <input type="checkbox" />
                        <span className="yes">Да!</span>
                        <button>Подтвердить</button>
                    </form>
                </div>
            </div>



    </div>
    
    </main>
        </>
    )
}

export default App