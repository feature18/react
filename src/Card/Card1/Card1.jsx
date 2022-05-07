import './Card1.css';
import dino from '../../FilePNG/Dino.png'
import smallAsteroid from "../../FilePNG/SmallAsteroid.png";

export function Card1 () {
    return (
        <div className="position">
            <div id="card1">
                <img className="dino" src={dino} alt="Динозавр"/>
                <img id="smallasteroid" src={smallAsteroid} alt="Маленький астероид"/>
                <label className="name">2021 FQ</label>
                <label className="description">
                    <label className="date">Дата...........................12 сентября 2021</label>
                    <label className="distance">Расстояние.......................7 235 024 км</label>
                    <label className="size">Размер............................................85 м</label>
                </label>
                <label id="rate">Оценка:</label>
                <label id="rate1">не опасен</label>
                <div className="button">
                    <button className="destroy">На уничтожение</button>
                </div>
            </div>
        </div>
    );
}
