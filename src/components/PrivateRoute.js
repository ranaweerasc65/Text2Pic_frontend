import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = () => {
    const { currentUser } = useAuth();
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to={{ pathname: '/login', state: { from: location.pathname } }} />;
    }

    return <Outlet />;
};

export default PrivateRoute;
