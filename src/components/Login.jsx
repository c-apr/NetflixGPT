import { useState } from "react"
import Header from "./Header"

const Login = () => {
  
  const [isSignInForm,setIsSignInForm]=useState(true);


  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className="absolute">
      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" 
        alt="Background-Image" 
      />
      </div>
      <form className="absolute my-36 w-3/12 mx-auto left-0 right-0 bg-black bg-opacity-80 text-white p-8 rounded-lg">
        <h1 
        className="text-3xl font-bold py-4">
          {isSignInForm ?"Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && 
        (<input 
        type="text" 
        placeholder="Full Name"  
        className="p-4 my-4 w-full  bg-transparent border-2 rounded-md" 
        />)}

        <input 
         type="text" placeholder="Email or mobile number"  
         className="p-4 my-4 w-full  bg-transparent border-2 rounded-md"
          />

        <input 
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-transparent border-2 rounded-md"
           />

        <button 
          className="p-4 my-6 bg-red-600 w-full rounded-md">
            {isSignInForm ?"Sign In" : "Sign Up"}
            </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
            {isSignInForm ?"New to Netflix? Sign up now." : "Already registered? Sign in now."}
        </p>
      </form>
    </div>
  )
}

export default Login
