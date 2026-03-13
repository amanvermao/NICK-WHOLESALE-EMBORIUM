export const handlePayment = (amount, onSuccess, onFailure) => {

  const options = {
    key: "rzp_live_SQcxPzUFlpSx25",
    amount: amount * 100,
    currency: "INR",
    name: "Emborium",
    description: "Order Payment",

    handler: function (response) {
      onSuccess(response);
    },

    modal: {
      ondismiss: function () {
        onFailure();
      }
    },

    theme: {
      color: "#033767"
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
