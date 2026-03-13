import { useState, useContext } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logo from "../assets/emborium-logo.jpg";
import Cart from "../pages/Cart";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <>
    
      <nav className="sticky top-0 z-50 bg-white px-10 py-5 flex justify-between items-center shadow-sm">

        {/* Left Side */}
        <Link to="/">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-25 h-25 object-contain"
          />

          <h1 className="text-xl tracking-wide text-black">
            NICK WHOLESALE EMBORIUM
          </h1>
        </div></Link>

        {/* Right Side */}
        <button
          onClick={() => setCartOpen(true)}
          className="relative"
        >
          <div className="bg-gray-100 p-3 rounded-lg shadow-sm hover:bg-gray-200 transition">
            <ShoppingBagOutlinedIcon style={{ color: "#000" }} />
          </div>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>

      </nav>

      <Cart open={cartOpen} setOpen={setCartOpen} />

    </>
  );
}