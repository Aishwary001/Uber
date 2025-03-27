import { useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

function CaptainLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ CaptainData, setCaptainData ] = useState(''); 
    const submitHandler = (e) => {
      e.preventDefault();
      console.log({email, password});
      setCaptainData({
        email : email,
        password : password
      })
      setEmail('');
      setPassword('');
    }
    return <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <h1 className="mb-10 text-5xl tracking-tight font-bold">Uber</h1>
          <form onSubmit={(e)=>submitHandler(e)}>
            <h3 className="text-xl font-semibold mb-2">What's your Captain email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email@example.com"
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
            <h3 className="text-xl font-semibold mb-2">Enter Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg mb-7 placeholder:text-base"
            />
            <button className="bg-[#111] text-white w-full text-semibold px-4 py-2 font-s text-lg">
              Submit
            </button>
            <p className="text-center">
              New here? <Link to='/captain-signup' className="text-blue-600">Create new Account As Captain</Link>
            </p>
          </form>
        </div>
        <div>
          <Link to='/login' className="bg-[#d5622d] flex items-center justify-center text-white w-full text-semibold px-4 py-2 font-s text-lg">
            Sign in as User
          </Link>
        </div>
      </div>
}

export default CaptainLogin