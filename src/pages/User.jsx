import Navbar from "../components/Navbar"

function User(props) {
    
    return (
        <section style={{backgroundColor: props.bgColor,height: '100vh'}}>
            <Navbar setBgColor={props.setBgColor} />
            <h1 className="user-h1">User page</h1>

        </section>
    )
}

export default User
