import { Link } from "react-router-dom";

function Sidebar(props) {
    function changeBG(color){
        props.setBgColor(`${color}`)
    }
    return (
        <div className="sidebar">
            <h2>Authorization</h2>
            <ul>
                <li><Link to="/home"><i className="fas fa-home "></i>Home</Link></li>
                <li><Link to="/users"><i className="fas fa-users "></i>Users</Link></li>
                <li><Link to="/setting"><i className="fas fa-cog"></i>Setting</Link></li>
            </ul>
            <div className="bg-color-btns">
                <button className="black" onClick={() => changeBG('black')}>Bg Black</button>
                <button className="red" onClick={() => changeBG('red')}>Bg Red</button>
                <button className="blue" onClick={() => changeBG('blue')}>Bg Blue</button>
                <button className="green" onClick={() => changeBG('green')}>Bg Green</button>
            </div>
        </div>
    );
}


export default Sidebar;