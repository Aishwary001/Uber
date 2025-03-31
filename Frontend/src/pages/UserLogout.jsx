import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UserLogout() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if token is present
        if (!token) {
            console.log("No token found in localStorage");
            navigate('/login');
            return;
        }

        // Perform logout
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true // Important if using cookies
        })
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
        .catch((err) => {
            console.error("Logout failed:", err);
            navigate('/login');
        });
    }, [token]);

    return <>Logging out...</>;
}

export default UserLogout;
