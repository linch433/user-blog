import NavigationLink from '../components/NavigationLink';

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-evenly text-int-white-main bg-main-bg-black">
      <NavigationLink path={'/'} name={'Home'} />
      <NavigationLink path={'/profile'} name={'Profile'} />
    </div>
  );
};

export default Header;
