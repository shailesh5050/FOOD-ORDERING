import { Link } from "react-router-dom";
import logo from "../assets/logofood.png";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
const Header = () => {
  return (
    <div className="border-b-2 border-b-orange py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
