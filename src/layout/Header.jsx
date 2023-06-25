import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import NavigationLink from '../components/NavigationLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className='flex h-16 items-center justify-between text-int-white-main bg-secondary-bg-black px-10'>
        <div className='text-3xl font-semibold italic'>
          <Link to='/'>UB</Link>
        </div>
        <div className='hidden flex-row gap-2 md:gap-16 lg:flex'>
          <NavigationLink path={'/users'} name={'Users'} />
          <NavigationLink path={'/posts'} name={'Posts'} />
          <NavigationLink path={'/profile'} name={'Profile'} />
          <NavigationLink path={'/login'} name={'Join us!'} />
        </div>
        <div className='flex flex-col items-center lg:hidden'>
          <IoMenu className='cursor-pointer h-8 w-auto' onClick={toggleMenuOpen} color='white' />
        </div>
      </div>
      {isMenuOpen && (
        <div className='flex flex-col px-10 pb-2 bg-[#4b5176] text-int-white-main border-t-2 text-xl gap-2 lg:hidden'>
          <NavigationLink path={'/users'} name={'Users'} />
          <NavigationLink path={'/posts'} name={'Posts'} />
          <NavigationLink path={'/profile'} name={'Profile'} />
          <NavigationLink path={'/login'} name={'Join us!'} />
        </div>
      )}
    </>
  );
};

export default Header;
