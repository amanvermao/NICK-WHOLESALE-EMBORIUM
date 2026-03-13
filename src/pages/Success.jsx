import { Link, useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect } from "react";

export default function Success() {

  const navigate = useNavigate();

  // Read order from localStorage
  const order = JSON.parse(localStorage.getItem("lastOrder"));

  useEffect(() => {
    if (!order) {
      navigate("/");
    }
  }, [order, navigate]);

  const { form, cart = [], subtotal = 0, tax = 0, total = 0, orderId, date } =
    order || {};

  return (
    <div className="min-h-screen bg-gray-100 py-14 px-6">

      {/* SUCCESS HEADER */}
      <div className="max-w-5xl mx-auto text-center">

        <CheckCircleOutlineIcon
          style={{ fontSize: 70, color: "#16a34a" }}
        />

        <h1 className="text-3xl font-bold mt-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 mt-2">
          Thank you for your purchase. Your order has been confirmed.
        </p>

      </div>

      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow mt-10">

        {/* ORDER HEADER */}
        <div className="flex justify-between items-center p-6 border-b">

          <div>
            <h2 className="text-xl font-semibold">
              Order #{orderId}
            </h2>

            <p className="text-gray-500 text-sm">
              Placed on {date}
            </p>
          </div>

          <Link to="/">
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
              Continue Shopping
            </button>
          </Link>

        </div>

        {/* SHIPPING INFO */}
        <div className="p-6 border-b">

          <h3 className="font-semibold mb-3">
            Shipping Information
          </h3>

          <p className="text-gray-600 text-sm">
            {form?.name}
          </p>

          <p className="text-gray-600 text-sm">
            {form?.address}, {form?.city}, {form?.state}
          </p>

          <p className="text-gray-600 text-sm">
            Phone: {form?.phone}
          </p>

          <p className="text-gray-600 text-sm">
            Email: {form?.email}
          </p>

        </div>

        {/* ORDER ITEMS */}
        <div className="p-6 border-b">

          <h3 className="font-semibold mb-4">
            Order Items
          </h3>

          {cart.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >

              <div className="flex gap-4">

                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded"
                />

                <div>

                  <h4 className="font-medium">
                    {item.title} {item.code}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="font-semibold">
                  ₹{item.price}
                </p>

                <p className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* TOTALS */}
        <div className="p-6">

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal?.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>₹0.00</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Tax</span>
            <span>₹{tax?.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mt-3">
            <span>Total</span>
            <span>₹{total?.toFixed(2)}</span>
          </div>

        </div>

        {/* FOOTER */}
        <div className="border-t p-6 text-center text-sm text-gray-600">

          A confirmation email has been sent.

          <div className="mt-4">

            <Link to="/">
              <button className="border px-6 py-2 rounded-lg hover:bg-gray-100">
                Continue Shopping →
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}