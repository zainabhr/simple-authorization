import { useNavigate } from "react-router-dom"

function Users() {
    const navigate = useNavigate()
    return (
        <section className="sections">
            <h1>Users Page</h1>
            <p>Comming Soon...</p>
            <button className="go-back-btn" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </section>
    )
}

export default Users
