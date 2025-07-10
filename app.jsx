import React, { useState } from "react";

function App() {
  const [credits, setCredits] = useState(6000); // default credits
  const [daysLeft, setDaysLeft] = useState(10); // default days
  const [showShop, setShowShop] = useState(false);

  const shopItems = [
    { credits: 500, days: 5 },
    { credits: 1000, days: 10 },
    { credits: 3500, days: 35 },
    { credits: 5000, days: 50 },
  ];

  const handlePurchase = (item) => {
    if (credits >= item.credits) {
      setCredits(credits - item.credits);
      setDaysLeft(daysLeft + item.days);
    } else {
      alert("Not enough credits!");
    }
  };


  import React, { useState } from "react";

function App() {
  const [credits, setCredits] = useState(6000); // default credits
  const [daysLeft, setDaysLeft] = useState(10); // default days
  const [showShop, setShowShop] = useState(false);

  const shopItems = [
    { credits: 500, days: 5 },
    { credits: 1000, days: 10 },
    { credits: 3500, days: 35 },
    { credits: 5000, days: 50 },
  ];

  const handlePurchase = (item) => {
    if (credits >= item.credits) {
      setCredits(credits - item.credits);
      setDaysLeft(daysLeft + item.days);
    } else {
      alert("Not enough credits!");
    }
  };

  return (
    <div className="p-6">
      {/* Account Info */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Account</h2>
        <p>Credits: {credits}</p>
        <p>Days Left: {daysLeft}</p>
      </div>

      {/* Shop Modal */}
      {showShop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            {shopItems.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.credits} credits = +{item.days} days</span>
                <button
                  onClick={() => handlePurchase(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:bg-gray-400"
                  disabled={credits < item.credits}
                >
                  Buy
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowShop(false)}
              className="mt-4 text-sm text-gray-600 underline"
            >
              Close Shop
            </button>
          </div>
        </div>
      )}

      {/* Shop Toggle Button */}
      <button
        onClick={() => setShowShop(true)}
        className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-green-700"
      >
        🛒 Shop
      </button>
    </div>
  );
}

export default App;
