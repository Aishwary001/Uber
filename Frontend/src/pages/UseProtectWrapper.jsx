import { React, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useContext } from 'react';

function UseProtectWrapper({ children }) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);
    console.log("UseProtect Wala token", token);

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setUser(response.data.user);
                setIsLoading(false);
            }
        }).catch((err) => {
            console.error(err, user);
            localStorage.removeItem('token');
            navigate('/login');
        });

    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
}

export default UseProtectWrapper;
