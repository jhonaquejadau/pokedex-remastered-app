import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { PublicRoutes } from "@/models/index";

const Navbar = () => {


  return (
    <nav className="layout-row px-4 py-2 bg-slate-300">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 logo" />
      </Link>
      <ul className="layout-row mx-auto capitalize">
        <Link to="/">
          <li className="mr-4">home</li>
        </Link>
        <Link to={`/${PublicRoutes.POKEDEX}`}>
          <li className="mx-10">pokedex</li>
        </Link>
        <li>documentation</li>
      </ul>
      <Link to={`/${PublicRoutes.LOGIN}`}>
        <div className="layout-row px-2 rounded login">
          <p className="mr-2">Login</p>
          <AccountCircle />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
