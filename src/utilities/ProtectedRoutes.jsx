import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
    const user = localStorage.getItem('userRole')
    return (
        user === 'admin' ? <Outlet /> : <Navigate to='/' />
    )
}

export default ProtectedRoutes