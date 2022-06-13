import MobileNavbar from './components/MobileNavbar';

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
