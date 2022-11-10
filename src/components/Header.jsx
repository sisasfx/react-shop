import React, {useState, useContext} from "react";
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg'
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const [toggleOrders, setToggleOrders] = useState(false);

  const {state} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <Link to={"/"}>All</Link>
          </li>
          <li>
            <Link to={"/clothes"} >Clothes</Link>
          </li>
          <li>
            <Link to={"/electronic"}>Electronics</Link>
          </li>
          <li>
            <Link to={"/furniture"}>Furnitures</Link>
          </li>
          <li>
            <Link to={"/toys"}>Toys</Link>
          </li>
          <li>
            <Link to={"/"}>Others</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart" 
          onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;