import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "./StateProvider.";

const Header = () => {
  const [{basket}, dispatch] = useStateValue()
  return (
    <nav className=''>
      <div className="header ">
      <Link to="/" className="header__link">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search  hidden sm:flex">
        <input type="text" className="header__searchinput" />
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header__nav">
        <Link to="/login"  className="header__link">
          <div className="header__option hidden sm:flex">
            <span className="header__optionlineone">Hello mat</span>
            <span className="header__optionlinetwo">Sign In</span>
          </div>
        </Link>

        <Link to="/login"  className="header__link">
          <div className="header__option hidden sm:flex">
            <span className="header__optionlineone" >Returns</span>
            <span className="header__optionlinetwo">& Orders</span>
          </div>
        </Link>

        <Link to="/login"  className="header__link">
          <div className="header__option hidden sm:flex">
            <span className="header__optionlineone">Your</span>
            <span className="header__optionlinetwo">Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className="header__link">
        <div className="header__optionbasket">
        <ShoppingCartIcon />
        <span className="header__optionlinetwo header__basketcount">{basket.length }</span>
        </div>
        </Link>
      </div>
      </div>
      <div className="header__search  flex sm:hidden">
        <input type="text" className="header__searchinput" />
        <SearchIcon className="header__searchicon" />
      </div>
    </nav>
  );
};

export default Header;
