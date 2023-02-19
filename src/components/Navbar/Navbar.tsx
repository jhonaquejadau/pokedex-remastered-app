import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "@/models/index";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store: any) => store.user);

  return (
    <nav className="layout-row h-[6vh] px-4 bg-orange-500 text-white font-bold">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 logo" />
      </Link>
      <ul className="layout-row gap-8 mx-auto capitalize">
        {user.name ? (
          <Link to={`/${PrivateRoutes.PRIVATE}`}>
            <li>dashboard</li>
          </Link>
        ) : (
          <Link to="/">
            <li>home</li>
          </Link>
        )}
        <Link to={`/${PublicRoutes.POKEDEX}`}>
          <li>pokedex</li>
        </Link>
        <li>documentation</li>
      </ul>
      {!user.name && (
        <Link to={`/${PublicRoutes.LOGIN}`}>
          <div className="layout-row p-2 rounded login">
            <p className="mr-2">Login</p>
            <AccountCircle />
          </div>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
