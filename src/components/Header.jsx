import Logo from '../assets/logo.png';
import userIcon from '../assets/userIcon.jpg';
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user= useSelector(store =>store.user);
  

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
       navigate('/error');
    });
    
  }
  return (
    <div className='absolute px-32 py-2 bg-gradient-to-b from-black to-transparent w-full flex justify-between items-center z-10'>
      <img className='w-48' src={Logo} alt="Logo" />

      {user && (<div className='flex'>
        <img className='w-12 h-12  rounded-full'
        src={user?.photoURL ? user?.photoURL : userIcon} 
        alt="user-icon" />
        <button 
        onClick={handleSignOut} 
        className='font-bold text-white'>
          (Sign Out)
          </button>
      </div>)
}
    </div>
  )
}


export default Header;
