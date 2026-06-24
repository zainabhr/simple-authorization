import { useNavigate } from "react-router-dom"
// import { useState } from "react"
function Login() {
    const navigate = useNavigate()
    function handleLogin(role){
        localStorage.setItem('userRole', role)
        navigate(role == 'admin' ? '/admin' : '/user')
    }

    return (
        <>
            <div className="form">
                <label htmlFor="name">Enter Your Name</label>
                <input type="text" name='name' id='name'/>
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" name="email" id="email" />
                <div>
                    <button className="user" onClick={() => handleLogin('user')}>
                        Sign In as User
                    </button>
                    <button className="admin" onClick={() => handleLogin('admin')}>
                        Sign In as admin
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login