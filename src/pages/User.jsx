import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function User(props) {
    const navigate = useNavigate()
        function handleLogout(){
            localStorage.setItem('userRole', '')
            navigate('/')
        }
    return (
        <section style={{backgroundColor: props.bgColor,height: '100vh'}}>
            <Navbar setBgColor={props.setBgColor} />
            <h1 className="user-h1">User page</h1>
            <button onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default User
