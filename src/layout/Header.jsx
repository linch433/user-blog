import NavigationLink from '../components/NavigationLink';

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between text-int-white-main bg-secondary-bg-black px-10">
      <div className='text-3xl font-semibold '>USER-BLOG</div>
      <div className='flex flex-row gap-16'>
        <NavigationLink path={'/'} name={'Home'}/>
        <NavigationLink path={'/profile'} name={'Profile'}/>
        <NavigationLink path={'/login'} name={'Log In'}/>
      </div>
    </div>
  );
};

export default Header;
