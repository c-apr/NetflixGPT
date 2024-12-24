import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='absolute px-32 py-2 bg-gradient-to-b from-black to-transparent w-full flex justify-between items-center z-10'>
      <img className='w-48' src={Logo} alt="Logo" />
    </div>
  )
}


export default Header;
