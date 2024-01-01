import React, { useEffect, useState }  from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';

const LoginPage = ({ isLoggedIn, setisLoggedIn,setUser,sst}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      const user = response.data.email;
      const id = response.data._id;
      sst(response.data.token)
      setUser({ _id: id, email: user });
      console.log('Login successful');
      setisLoggedIn(true)
      console.log('IsLoggedIn:', isLoggedIn);
      navigate('/dashboard')
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="w-full flex">
        {/* Left column with background image (hidden on small screens) */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
            className="w-full"
          />
        </div>

        {/* Right column with login form (flex container) */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 xl:p-12 flex flex-col justify-center items-center w-full">
        <div>
        <h1>Login</h1>
        <label>
          Email:
          <input 
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input 
          className="input w-full hover:bg-blue-900 text-blue-900 hover:text-white"
          type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <button 
        className="mb-4 btn-signup bg-blue-600 hover:bg-blue-900 text-white w-full rounded-lg"
        onClick={handleLogin}>Login</button>
        {token && <p>Token: {token}</p>}
        <p className="text-sm font-semibold mt-2 text-black">
        Create Account?{' '}
        <Link to="/signUp" className="text-blue-600 hover:text-blue-900">
          SignUp
        </Link>
      </p>
      </div>

      
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
