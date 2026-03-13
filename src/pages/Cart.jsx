import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";

export default function Cart({ open, setOpen }) {

  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[420px] bg-white shadow-xl z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">

          <div className="flex items-center gap-2">
            <ShoppingBagOutlinedIcon />
            <h2 className="text-lg font-semibold">
              Your Cart ({cart.length} items)
            </h2>
          </div>

          <button onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>

        </div>

        {/* CART ITEMS */}
        <div className="p-5 space-y-4 overflow-y-auto h-[70%]">

          {cart.length === 0 ? (

  <div className="flex flex-col items-center justify-center h-full text-center py-16">

    {/* Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16 text-gray-400 mb-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 7h18l-2 12H5L3 7zM8 7V5a4 4 0 118 0v2"
      />
    </svg>

    {/* Title */}
    <h3 className="text-lg font-semibold text-gray-800">
      Your cart is empty
    </h3>

    {/* Subtitle */}
    <p className="text-gray-500 mt-2">
      Add some products to your cart
    </p>

    {/* Button */}
    <button
      onClick={() => setOpen(false)}
      className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Continue Shopping
    </button>

  </div>

) : (

  cart.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

)}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full p-5 border-t">

          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>Total:</span>
            <span>${total}.00</span>
          </div>

          <div className="flex gap-3">

            {/* CLEAR CART */}
            <button
              onClick={clearCart}
              className="flex-1 border rounded-lg py-2 hover:bg-gray-100"
            >
              Clear Cart
            </button>

            {/* CHECKOUT */}
            <button
              onClick={() => {
                setOpen(false);
                navigate("/checkout");
              }}
              className="flex-1 bg-black text-white rounded-lg py-2 hover:bg-gray-800"
            >
              Checkout
            </button>

          </div>

        </div>

      </div>
    </>
  );
}