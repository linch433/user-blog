import NavigationLink from '../components/NavigationLink';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex h-16 items-center justify-between text-int-white-main bg-secondary-bg-black px-10'>
      <div className='text-3xl font-semibold italic'>
        <Link to='/'>UB</Link>
      </div>
      <div className='flex flex-row gap-2 md:gap-16'>
        <NavigationLink path={'/users'} name={'Users'} />
        <NavigationLink path={'/posts'} name={'Posts'} />
        <NavigationLink path={'/profile'} name={'Profile'} />
        <NavigationLink path={'/login'} name={'Join us!'} />
      </div>
    </div>
  );
};

export default Header;
