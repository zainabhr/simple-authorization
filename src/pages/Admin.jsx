import Sidebar from "../components/Sidebar"
import { useNavigate } from "react-router-dom"

function Admin(props) {
    const navigate = useNavigate()
    function handleLogout(){
        localStorage.setItem('userRole', '')
        navigate('/')
    }
    return (
        <section style={{backgroundColor: props.bgColor,height: '100vh'}}>
            <Sidebar setBgColor={props.setBgColor} />
            <h1 className="admin-h1">Admin page</h1>
            <button className="admin-logout" onClick={handleLogout}>Logout</button>
        </section>
    )
}

export default Admin
