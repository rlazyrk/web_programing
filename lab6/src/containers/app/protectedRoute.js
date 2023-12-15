import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const loginCheck = localStorage.getItem('userIsLogined')
    if(loginCheck === 'true'){
        return (
            <Outlet/>
        )
    }
    else{
        return (
            <Navigate to="/login"/>
        )
    }

}

export default ProtectedRoute