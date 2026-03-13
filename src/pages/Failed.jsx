import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Failed = () => {
    const orderId = "ORD-" + Math.floor(Math.random() * 1000000);
  const date = new Date().toLocaleString();
  return (
    <div className="min-h-screen bg-gray-100 py-14 px-6">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center">

        <ErrorOutlineIcon
          style={{ fontSize: 70, color: "#ef4444" }}
        />

        <h1 className="text-3xl font-bold mt-4">
          Payment Failed
        </h1>

        <p className="text-gray-600 mt-2">
          Unfortunately your payment could not be processed.
          Please try again or choose a different payment method.
        </p>

      </div>


      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow mt-10">

        {/* ORDER INFO */}
        <div className="p-6 border-b">

          <h2 className="text-xl font-semibold">
            Order #{orderId}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Attempted on {date}
          </p>

        </div>


        {/* FAILURE DETAILS */}
        <div className="p-6">

          <h3 className="font-semibold mb-3">
            What happened?
          </h3>

          <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
            <li>Payment was cancelled or interrupted.</li>
            <li>Your bank declined the transaction.</li>
            <li>Network issues during payment processing.</li>
          </ul>

        </div>


        {/* ACTION BUTTONS */}
        <div className="border-t p-6 flex flex-wrap gap-4 justify-center">
          <Link to="/">
            <button className="border px-6 py-2 rounded-lg hover:bg-gray-100">
              Return Home
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Failed
