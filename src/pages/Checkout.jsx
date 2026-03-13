import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { handlePayment } from "../services/payment";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const { cart, clearCart } = useContext(CartContext);

  const [method, setMethod] = useState("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

const [saved, setSaved] = useState(false);
const [showToast, setShowToast] = useState(false);
const handleSave = () => {

  if (!form.name || !form.email || !form.phone || !form.address) {
    alert("Please fill all required fields");
    return;
  }

  setSaved(true);
  setShowToast(true);

  setTimeout(() => {
    setShowToast(false);
  }, 3000);
};

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = total * 0.08;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const paymentMethods = [
    { id: "upi", label: "UPI" },
    { id: "card", label: "Credit / Debit Card" },
    { id: "netbanking", label: "Net Banking" },
    { id: "cod", label: "Cash On Delivery" }
  ];

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-8 md:p-10">

      <div className="max-w-6xl mx-auto">

        {/* BACK BUTTON */}
        <Link to="/" className="text-gray-600 mb-4 inline-block">
          ← Back to Shopping
        </Link>

       <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Checkout
        </h1>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* SHIPPING FORM */}

          <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-6">
              Shipping Information
            </h2>

            <div className="space-y-4">

              <div>
                <label>Full Name</label>
                <input
                  name="name"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label>Email</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label>Phone</label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

              </div>

              <div>
                <label>Street Address</label>
                <input
                  name="address"
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div>
                  <label>City</label>
                  <input
                    name="city"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label>State</label>
                  <input
                    name="state"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div>
                  <label>ZIP</label>
                  <input
                    name="zip"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

              </div>

            </div>


            {/* save address*/}

            <h2 className="text-xl font-semibold mt-8 mb-4">
  Save Shipping Details
</h2>

<button
  onClick={handleSave}
  className="bg-[#033767] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
>
  Save Details
</button>

          </div>


          {/* ORDER SUMMARY */}

         <div className="bg-white p-6 rounded-xl shadow h-fit lg:sticky lg:top-24">

            <h3 className="text-lg font-semibold mb-4">
              Order Summary
            </h3>

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between text-sm mb-2"
              >

                <span>{item.title}</span>

                <span>₹{item.price}</span>

              </div>

            ))}

            <div className="border-t mt-4 pt-4 space-y-2 text-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-bold">

              <span>Total</span>

              <span>₹{(total + tax).toFixed(2)}</span>

            </div>

        <button
  disabled={!saved}
 onClick={() => {

  const orderData = {
    form,
    cart,
    subtotal: total,
    tax,
    total: total + tax,
    date: new Date().toLocaleString(),
    orderId: "ORD-" + Math.floor(Math.random() * 1000000)
  };

  handlePayment(

    total + tax,

    // SUCCESS
    () => {

      localStorage.setItem("lastOrder", JSON.stringify(orderData));

      clearCart();

      navigate("/success");

    },

    // FAILURE
    () => {

      navigate("/failed");

    }

  );

}}
  className="w-full mt-6 bg-[#033767] text-white py-3 rounded-lg font-semibold disabled:bg-gray-400"
>
  Proceed To Pay
</button>

          </div>

        </div>

      </div>
{showToast && (
  <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
    Shipping details saved successfully ✅
  </div>
)}
    </div>
    

  );
}