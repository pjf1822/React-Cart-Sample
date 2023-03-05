import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../context/CartState.js";
import "./Navbar.css";
const Navbar = () => {
  const { cartItems, showHideCart, setNavHeight, ourSearchFunction } =
    useContext(CartContext);
  const ref = useRef(null);

  useEffect(() => {
    setNavHeight(ref.current.clientHeight);
  }, []);
  return (
    <nav ref={ref}>
      <div className="nav__left"></div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input
            type="text"
            placeholder="Search Products"
            onChange={(event) => ourSearchFunction(event.target.value)}
          />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className="item__count">
              <span style={{ fontSize: 12 }}>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
