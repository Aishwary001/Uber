import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName ] = useState('');
  const [ LastName, setLastName ] = useState(''); 
  const [ userData, setUserData ] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName : {
        firstName : FirstName,
        lastName : LastName
      },
      email : email,
      password : password
    })

    console.log(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h1 className="mb-10 text-5xl tracking-tight font-bold">Uber</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-xl font-semibold mb-2">What's your Name</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="First Name"
              className="bg-[#eeeeee] mb-7 rounded w-1/2 px-4 py-2 border  text-base placeholder:text-sm"
            />
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Last Name"
              className="bg-[#eeeeee] mb-7 rounded w-1/2 px-4 py-2 border text-base placeholder:text-sm"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">What's your email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded w-1/2 px-4 py-2 border w-full text-lg placeholder:text-base"
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
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-600">
              Click here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leadingt-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from
           Uber and its affiliates by automated means, from uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
