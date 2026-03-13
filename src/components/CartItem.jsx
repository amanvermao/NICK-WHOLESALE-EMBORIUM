import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CloseIcon from "@mui/icons-material/Close";

export default function CartItem({ item }) {

  const { removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b">

      {/* PRODUCT IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-cover rounded-lg"
      />

      {/* PRODUCT INFO */}
      <div className="flex-1">

        <h4 className="font-medium text-sm">
          {item.title} {item.code}
        </h4>

        <p className="text-gray-500 text-sm line-clamp-1">
          {item.description}
        </p>

        <p className="font-semibold mt-1">
          ${item.price} <span className="text-sm">INR</span>
        </p>

      </div>

      {/* QUANTITY CONTROLS */}
     <button
  onClick={() => decreaseQty(item.id)}
  className="border rounded px-2 py-1"
>
  -
</button>

<span>{item.quantity}</span>

<button
  onClick={() => increaseQty(item.id)}
  className="border rounded px-2 py-1"
>
  +
</button>

      {/* REMOVE BUTTON */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-gray-500 hover:text-red-500"
      >
        <CloseIcon fontSize="small" />
      </button>

    </div>
  );
}