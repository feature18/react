import {Link} from 'react-router-dom';
import './Destruction.css';
export function Destruction () {
    return (
        <div id="choice">
            <Link id="asteroids " to="/">Астероиды</Link>
            <label id="destruction"to="/destruction">Уничтожение</label>
        </div>
    );
}