import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../../assets/icons/Icon";
import "./style.scss";

const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);

  //   console.log(
  //     useSelector((store) => {
  //       console.log("store", store);
  //     })
  //   );

  return (
    <nav>
      <div className="nav-bar">
        <p>Redux - Toolkit | Practice</p>
        <div>
          <CartIcon />
          <span>{amount}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
