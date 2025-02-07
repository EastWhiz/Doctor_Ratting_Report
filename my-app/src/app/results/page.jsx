"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DebitCardForm from "@/components/cardinfo/page";
import "./resultpage.css";

export default function Results() {
  const [doctorInfo] = useState({
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    clinic: "Health First Clinic",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleGenerateReport = () => {
    alert("Report is being generated...");
  };

  return (
    <div className="bg-[#E5EEFB] h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full border-4 border-t-4 border-blue-500 w-16 h-16 mb-4"></div>
            <p className="text-lg text-gray-700 animate-[float-up_2s_ease-in-out_infinite]">
              Progressing...
            </p>
            <ul className="text-sm text-gray-600 space-y-2 mt-4">
              <li>Loading your report data...</li>
              <li>Fetching doctor information...</li>
              <li>Preparing your debit card form...</li>
              <li>Almost there...</li>
            </ul>
          </div>
        ) : (
          <div>
            <h1 className="result_page_heading">
              Get a full report on <br />
              Dr. John Doe
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Debit Card Form */}
              <div className="p-2 bg-white rounded-3xl shadow-lg w-full md:w-[70%] mx-auto">
                <DebitCardForm onSubmit={handleGenerateReport} />
              </div>

              {/* Doctor Information Card */}
              <div className="p-8 bg-white rounded-3xl shadow-lg flex flex-col gap-4 w-full md:w-[70%] mx-auto">
                {/* First Row */}
                <div className="flex gap-4">
                  {/* Doctor's Profile Image */}
                  <div className="bg-[#ADD8FF] p-2 overflow-hidden rounded-lg flex items-center justify-center">
                    <Image
                      src="/assets/dr.png" // Path from the public directory
                      alt="Doctor's profile"
                      width={160}
                      height={158}
                      className="object-cover"
                    />
                  </div>

                  {/* Doctor name */}
                  <div>
                    <div className="dr_name">
                      <p>
                        {doctorInfo.name}
                        <br />
                        {doctorInfo.specialty}
                      </p>
                    </div>
                    {/* Doctor rating widget */}
                    <div className="flex items-center gap-4 dr_rating_widget">
                      <div className="text-left">
                        <p className="rate-label">
                          Customer <br /> Rating
                        </p>
                      </div>
                      <div className="flex items-baseline">
                      <h5 className="rating-score">
                        <span className="rating-number">9</span>
                        <span className="rating-total">/10</span>
                      </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8">
  {/* Years of Practice */}
  <div className="years_practice_widget flex gap-2 items-center justify-center rounded-2xl p-6 shadow-lg">
    <div className="text-left">
      <p className="practice-label">
        Years of <br /> Practice
      </p>
    </div>
    <div className="flex items-baseline">
      <h5 className="practice-score">
        <span className="practice-number">24</span>
      </h5>
    </div>
  </div>

  {/* Amount of Operations per Year */}
  <div className="operations_widget flex items-center justify-center rounded-2xl p-4 shadow-lg">
    <div className="text-left">
      <p className="operations-label">
        Amount of <br /> Operations per Year
      </p>
    </div>
    <div className="flex items-baseline">
      <h5 className="operations-score">
        <span className="operations-number">204</span>
      </h5>
    </div>
  </div>
</div>


                {/* Additional Information */}
               <div className="flex comments">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
               </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
