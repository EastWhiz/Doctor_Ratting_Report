"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../app/results/resultpage.css";

export default function DebitCardForm({ onSubmit }) {
  const router = useRouter();
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  // Validate card name (only alphabets)
  const handleCardNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setCardName(value);
    }
  };

  // Validate and format card number (only digits, 16 max, spaces every 4 digits)
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    const formattedValue = value
      .slice(0, 16) // Limit to 16 digits
      .replace(/(.{4})/g, "$1 ") // Add space after every 4 digits
      .trim();
    setCardNumber(formattedValue);
  };

  // Handle expiry date input change
  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length > 2) {
      setExpiryDate(`${value.slice(0, 2)}/${value.slice(2, 4)}`); // Insert "/" after MM
    } else {
      setExpiryDate(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); // Call the onSubmit prop if needed
    router.push("/fullreport"); // Redirect to the fullreport route
  };

  return (
    <div className="bg-white rounded-3xl shadow-md w-full">
      <form onSubmit={handleSubmit} className="card_infor_form">
        {/* Card Name */}
        <div className="p-4">
          <h3 className="card_info_heading">Enter card details</h3>
          <div className="card_info_form">
            <label className="block" htmlFor="cardName">
              Card Name
            </label>
            <input
              type="text"
              id="cardName"
              value={cardName}
              onChange={handleCardNameChange}
              className="w-full border-b-2 border-[#000000] px-4 mb-4 focus:outline-none focus:ring-0 focus:border-blue-500"
              required
            />
          </div>

          {/* Card Number */}
          <div className="card_info_form">
            <label className="block" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full border-b-2 border-[#000000] px-4 mb-4 py-1 focus:outline-none focus:ring-0 focus:border-blue-500"
              maxLength="19" // 16 digits + 3 spaces
              required
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="grid grid-cols-2 gap-4 card_info_form">
            <div>
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className="w-full border-b-2 border-[#000000] px-4 py-1 focus:outline-none focus:ring-0 focus:border-blue-500"
                maxLength="5"
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="cvv">
                CVV
              </label>
              <input
                type="password"
                id="cvv"
                placeholder="e.g., 123"
                className="w-full border-b-2 border-[#000000] px-4 py-1 focus:outline-none focus:ring-0 focus:border-blue-500"
                maxLength="3"
                required
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="agreeTerms"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <label htmlFor="agreeTerms" className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="font-semibold">terms and conditions</span>
            </label>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="saveCardDetails"
              className="h-4 w-4 text-blue-600 border-[#1070FF] rounded focus:ring-blue-500"
            />
            <label htmlFor="saveCardDetails" className="text-sm text-gray-600">
              Save card details for future use
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0F152B] text-white py-2 rounded-lg transition mt-6"
          >
            Generate Full Report
          </button>
        </div>
      </form>
    </div>
  );
}
