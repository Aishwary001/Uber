import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 

  // Calling API
    useEffect(()=>{
        if(!token){
            navigate('/captain-login');
            return;
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/captain/logout`,{
            headers : {
                Authorization : `Bearer ${token}`,
            },
            withCredentials : true, // if we use cookies in the backend or if the backend developer use cookies
        }).then((response)=>{
            if(response.status === 200){
                localStorage.removeItem('token');
                navigate('/captain-login');
    
            }
        }).catch((err)=>{
            console.error("Logout failed...",err)
            navigate('/captain-login')
        })
    },[token])

  return (
    <div>CaptainLogout</div>
  )
}

export default CaptainLogout