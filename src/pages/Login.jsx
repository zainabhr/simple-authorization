import { useNavigate } from "react-router-dom"
function Login() {
    const navigate = useNavigate()
    return (
        <>
            <div className="form">
                <label htmlFor="name">Enter Your Name</label>
                <input type="text" name='name' id='name'/>
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" name="email" id="email" />
                <div>
                    <button className="user" onClick={() => navigate('/user')}>
                        Sign In as User
                    </button>
                    <button className="admin" onClick={() => navigate('/admin')}>
                        Sign In as admin
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login