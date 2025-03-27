import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen bg-cover bg-center pt-8 bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZmZpYyUyMGxpZ2h0JTIwcGhvdG9hfGVufDB8fDB8fHww)] w-full flex flex-col justify-between">
      <h1 className='text-5xl tracking-tight font-bold ml-8'>Uber</h1>
      <div className="py-4 pb-7 px-4 bg-white">
        <h2 className="text-2xl font-bold">Get started with Uber</h2>
        <Link to='/login' className="flex items-center justify-center mt-4 w-full py-3 bg-black text-white rounded">
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Home;
