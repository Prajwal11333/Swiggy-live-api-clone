import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.cartSlicer.items);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // State to track if order is placed

  // Calculate total quantity
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  // Handle Place Order button click
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true); // Update state to show order is placed
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-4xl font-bold text-red-500">Secure Checkout</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6">Your Cart</h3>
            {items.map((value, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 py-4"
              >
                <div className="text-xl font-semibold">{value.name}</div>
                <div className="text-xl font-bold text-gray-700">
                  {value.quantity} item(s)
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-lg">Total Items</span>
                <span className="text-lg font-bold">{totalQuantity}</span>
              </div>
            </div>
            <button
              className={`w-full ${
                isOrderPlaced ? "bg-green-500" : "bg-red-500"
              } text-white py-3 rounded-lg mt-6 hover:${
                isOrderPlaced ? "bg-green-600" : "bg-red-600"
              } transition duration-300`}
              onClick={handlePlaceOrder}
              disabled={isOrderPlaced} // Disable button after order is placed
            >
              {isOrderPlaced ? "Order Placed" : "Place Order"}
            </button>
          </div>
        </div>
      </div>

      {/* Popup for Order Placed */}
      {isOrderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-lg">Thank you for your purchase.</p>
            <button
              className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              onClick={() => setIsOrderPlaced(false)} // Close popup
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}