import './Card3.css';
import dino from "../../FilePNG/Dino.png";
import bigAsteroid from "../../FilePNG/BigAsteroid.png";

export function Card3 () {
    return (
        <div className="position">
            <div id="card3">
                <img className="dino" src={dino} alt="Динозавр"/>
                <img id="bigasteroid" src={bigAsteroid} alt="Большой астероид"/>
                <label className="name">2022 QQ</label>
                <label className="description">
                    <label className="date">Дата...................................3 марта 2021</label>
                    <label className="distance">Расстояние........................2 866 012 км</label>
                    <label className="size">Размер...........................................850 м</label>
                </label>
                <label id="rate">Оценка:</label>
                <label id="rate3">опасен</label>
                <div className="button">
                    <button className="destroy">На уничтожение</button>
                </div>
            </div>
        </div>
    );
}
