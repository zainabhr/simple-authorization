import Sidebar from "../components/Sidebar"

function Admin(props) {
    
    return (
        <section style={{backgroundColor: props.bgColor,height: '100vh'}}>
            <Sidebar setBgColor={props.setBgColor} />
            <h1 className="admin-h1">Admin page</h1>
        </section>
    )
}

export default Admin
