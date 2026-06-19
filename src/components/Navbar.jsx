import { NavLink } from "react-router-dom"

function Navbar(props) {

    function changeBG(color){
        props.setBgColor(`${color}`)
    }
    return (
        <>
            <header>
                <h2>Authorization</h2>
                <ul>
                    <li><NavLink to="/home">
                        <i className="fas fa-home "></i>
                        Home
                        </NavLink></li>
                    <li><NavLink to="/users">
                        <i className="fas fa-users "></i>
                        Users
                        </NavLink></li>
                    <li><NavLink to="/profile">
                        <i class="fas fa-user user-i"></i>
                        Profile
                        </NavLink></li>
                </ul>
                <div className="bg-color-btns">
                    <button className="black" 
                            onClick={() => changeBG('black')}>
                                Bg Black</button>
                    <button className="red" 
                            onClick={() => changeBG('red')}>
                                Bg Red</button>
                    <button className="blue" 
                            onClick={() => changeBG('blue')}>
                                Bg Blue</button>
                    <button className="green" 
                            onClick={() => changeBG('green')}>
                                Bg Green</button>
                </div>
            </header>
        </>
    )
}

export default Navbar