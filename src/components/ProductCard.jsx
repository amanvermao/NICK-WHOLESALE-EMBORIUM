import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-white rounded-xl border shadow-sm overflow-hidden transition hover:shadow-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        <img
          src={product.image}
          className={`w-full h-[260px] object-cover transition duration-500 ${
            hover ? "scale-110" : "scale-100"
          }`}
        />

        {/* HOVER CART ICON */}
        <button
          onClick={() => addToCart(product)}
          className={`absolute top-4 right-4 bg-white p-2 rounded-full shadow transition ${
            hover ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <ShoppingCartOutlinedIcon fontSize="small" />
        </button>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        {/* TITLE + PRICE */}
        <div className="flex justify-between items-start">
          
          <div>
            <h3 className="font-medium text-gray-800">
              {product.title}
            </h3>

            <p className="text-gray-700">
              {product.code}
            </p>
          </div>

          <div className="text-right font-semibold">
            ₹{product.price}
            <div className="text-sm">{product.currency}</div>
          </div>

        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-500 mt-3">
          {product.description}
        </p>

        {/* RATING */}
        <div className="flex text-yellow-400 mt-4">
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" className="opacity-30" />
        </div>

        {/* BUTTON */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}