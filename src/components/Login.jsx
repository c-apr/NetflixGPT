import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";  
import { auth } from "../utils/Firebase"; 
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import userIcon from '../assets/userIcon.jpg';

const Login = () => {
  
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  
  const dispatch =useDispatch();

  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick = () => {
     //Validate the form data
     const nameValue = isSignInForm ? null : name.current.value;
     const message= checkValidData(nameValue,email.current.value,password.current.value);
     setErrorMessage(message);

     if(message){
       return;
     }

     if(!isSignInForm){
      //Sign Up Logic
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL: userIcon
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName,photoURL} =auth.currentUser;
                        dispatch(addUser(
                          {
                            uid:uid,
                            email:email,
                            displayName:displayName,
                            photoURL:photoURL
                          }));
              }).catch((error) => {
                // An error occurred
                 setErrorMessage(error.message+" - "+error.code);
              });
              
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
               setErrorMessage(errorMessage+" - "+errorCode);
            });
              }
     else{
       //Sign In Logic
       signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage+" - "+errorCode);
        });
     }

       
  }

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
      <form onSubmit={(e)=>e.preventDefault()}
         className="absolute my-36 w-3/12 mx-auto left-0 right-0 bg-black bg-opacity-80 text-white p-8 rounded-lg">
        <h1 
        className="text-3xl font-bold py-4">
          {isSignInForm ?"Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && 
        (<input 
        ref={name}
        type="text" 
        placeholder="Full Name"  
        className="p-4 my-4 w-full  bg-transparent border-2 rounded-md" 
        />)}

        <input 
        ref={email}
         type="text" placeholder="Email"  
         className="p-4 my-4 w-full  bg-transparent border-2 rounded-md"
          />

        <input 
          ref={password}
          type="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-transparent border-2 rounded-md"
           />
        <p className="text-red-500 font-semibold text-lg py-2">{errorMessage}</p>
        <button 
          className="p-4 my-6 bg-red-600 w-full rounded-md" onClick={handleButtonClick}>
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
