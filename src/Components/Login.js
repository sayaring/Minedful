import {React, useState, useEffect} from 'react'
import { Helmet } from 'react-helmet';
import axios from "axios";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Added state for password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const submit = async e => {
  //   e.preventDefault();
  //   const user = {
  //         username: username,
  //         password: password
  //        };
  //   //Create the POST requuest
  //   const {data} = await axios.post('http://localhost:8000/token/',
  //                  user ,
  //                  {headers: 
  //                   {'Content-Type': 'application/json'}})

  //  //Initialize the access & refresh token in localstorage.      
  //  localStorage.clear();
  //  localStorage.setItem('access_token', data.access);
  //  localStorage.setItem('refresh_token', data.refresh);
  //  axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
  //  window.location.href = '/'
  // }
  console.log(password)
  return (
    
    <div>
        <Helmet>
        	<title>Minedful | Login</title>
    	</Helmet>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm rounded-xl shadow-xl p-5">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900" >Username</label>
        <div class="mt-2">
          <input id="email" 
          name="email" 
          type="email" 
          autocomplete="email" 
          placeholder="Enter Username" 
          required 
          onChange={e => setUsername(e.target.value)}
          class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>

        </div>
      </div>

      {/* <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900" >Password</label>
          <div class="text-sm">
            <a href="forgotpass" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" 
          name="password" 
          type="password" 
          autocomplete="current-password" 
          placeholder="Enter Password" 
          required 
          onChange={e => setPassword(e.target.value)}
          class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </input>
        </div>
      </div> */}
      <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="text-sm">
                    <a href="forgotpass" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div className="mt-2 relative rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'} // Toggle password visibility
                    autoComplete="current-password"
                    placeholder="Enter Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6zm-2-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m4 7a4 4 0 100-8 4 4 0 000 8z"
                        />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 7a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3V10a3 3 0 00-3-3"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Not a member? 
      <a href="signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 p-2">Sign-Up</a>
    </p>
  </div>
  </div>
  </div>
      </div>
  )
}

export default Login
