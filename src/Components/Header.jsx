import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-center md:justify-between">
      <div className="flex items-center justify-center flex-grow">
        <img src={Logo} className="p-2 w-20 h-20" alt="SRM Logo" />
        <h1 className="text-2xl font-bold text-white ml-2">Admin Dashboard</h1>
      </div>
      <button id="toggleNav" className="text-white md:hidden">
        ☰
      </button>
    </header>
  );
};

export default Header;
