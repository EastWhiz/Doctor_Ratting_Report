"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DebitCardForm from "@/components/cardinfo/page";
import "./resultpage.css";
import { TiTick } from "react-icons/ti";
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
    <div className="bg-[#E5EEFB] min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="loader"></div>
            <ul className="text-sm text-gray-600 space-y-2 mt-4">
                <li className="text_animation" style={{ animationDelay: "0s" }}>
                  <TiTick className="inline" />Loading your report data
                </li>
                <li className="text_animation" style={{ animationDelay: "0.8s" }}>
                  <TiTick className="inline" />Fetching doctor information
                </li>
                <li className="text_animation" style={{ animationDelay: "1.5s" }}>
                <TiTick className="inline" /> Preparing your debit card form
                </li>
                <li className="text_animation" style={{ animationDelay: "2.5s" }}>
                  <TiTick className="inline" />Almost there
                </li>
              </ul>
          </div>
        ) : (
          <div>
            <h1 className="result_page_heading text-4xl md:text-7xl font-bold mb-8 md:mb-16">
              Get a full report on <br />
              Dr. John Doe
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Debit Card Form */}
              <div className="p-4 bg-white rounded-3xl shadow-lg w-full md:w-[70%] mx-auto">
                <DebitCardForm onSubmit={handleGenerateReport} />
              </div>

              {/* Doctor Information Card */}
              <div className="p-4 md:p-8 bg-white rounded-3xl shadow-lg flex flex-col gap-4 w-full md:w-[70%] mx-auto">
                {/* First Row */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Doctor's Profile Image */}
                  <div className="bg-[#ADD8FF] p-2 overflow-hidden rounded-lg flex items-center justify-center w-40 h-40 mx-auto md:mx-0">
                    <Image
                      src="/assets/dr.png" // Path from the public directory
                      alt="Doctor's profile"
                      width={160}
                      height={158}
                      className="object-cover"
                    />
                  </div>

                  {/* Doctor name and rating */}
                  <div className="text-center md:text-left">
                    <div className="dr_name">
                      <p className="text-xl md:text-2xl font-semibold">
                        {doctorInfo.name}
                        <br />
                        <span className="text-lg md:text-xl text-gray-600">
                          {doctorInfo.specialty}
                        </span>
                      </p>
                    </div>
                    {/* Doctor rating widget */}
                    <div className="flex items-center justify-center md:justify-start gap-4 dr_rating_widget mt-4">
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

                {/* Second Row - Years of Practice and Operations */}
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Years of Practice */}
                  <div className="years_practice_widget flex gap-2 items-center justify-center rounded-2xl p-4 shadow-lg flex-1">
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
                  <div className="operations_widget flex items-center justify-center rounded-2xl p-4 shadow-lg flex-1">
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
                <div className="comments mt-4 flex justify-between gap-2">
                  <p className="text-sm text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                  </p>
                  <p className="text-sm text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                  </p>
                  <p className="text-sm text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}