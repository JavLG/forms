import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const imgUrl = "./assets/logo.png";
  const menuClasses = [
    styles.navbar,
    "w-full fixed tracking-wider bg-blue-400 border-b-2 border-blue-700 h-14 text-yellow-100 z-10",
  ].join(" ");

  return (
    <div>
      <div className={[menuClasses, styles["brand-name"]].join(" ")}>

          <div className="mx-7 w-full flex justify-between items-center h-14">
            <Link to="/">
              <div
                id="logo"
                className="brand-logo flex flex-row items-center gap-x-4"
              >
                <img className="w-10 h-10" src={imgUrl} alt="brand-logo" />
                <p className="mt-1 text-xl"> WebForms</p>
              </div>
            </Link>
            <div className="links flex items-center justify-evenly mt-1 w-96 text-xl">
              <Link to="/">
                <span>Home</span>
              </Link>
              <Link to="/users">
                <span>Users</span>
              </Link>
              <Link to="/about">
                <span>About</span>
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
