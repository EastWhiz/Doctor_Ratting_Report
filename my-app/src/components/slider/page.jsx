import React from 'react'
import Image from "next/image";
const MySlider = () => {
  return (
    <div className="flex justify-between p-7">
      {/* Card 1 */}
         {/* Card 2 */}
         <div className="bg-[#ADD8FF] p-6 rounded-2xl shadow-lg flex items-center w-[370px]">
      <Image
        src="/assets/dr.png" 
        alt="Doctor's profile"
        width={150}
        height={148}
        className="object-cover"/>
        <div className="ml-4">
          <h2 className="font-bold text-lg">Dr. Bryson</h2>
          <p className="text-sm text-gray-700">Plastic Surgeon</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-center">
              <p className="text-xl font-bold">9</p>
              <p className="text-xs">/10</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">17</p>
              <p className="text-xs">Cases</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">240</p>
              <p className="text-xs">Reports</p>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-[#0F152B] text-white rounded-lg">
            Generate Report
          </button>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-[#F5F6DA] p-6 rounded-2xl shadow-lg flex items-center w-[370px]">
      <Image
        src="/assets/dr.png" 
        alt="Doctor's profile"
        width={150}
        height={148}
        className="object-cover"/>
        <div className="ml-4">
          <h2 className="font-bold text-lg">Dr. Bryson</h2>
          <p className="text-sm text-gray-700">Plastic Surgeon</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-center">
              <p className="text-xl font-bold">9</p>
              <p className="text-xs">/10</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">17</p>
              <p className="text-xs">Cases</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">240</p>
              <p className="text-xs">Reports</p>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-[#0F152B] text-white rounded-lg">
            Generate Report
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#DCEEFD] p-6 rounded-2xl shadow-lg flex items-center w-[370px]">
      <Image
        src="/assets/dr.png" 
        alt="Doctor's profile"
        width={150}
        height={148}
        className="object-cover"/>
        <div className="ml-4">
          <h2 className="font-bold text-lg">Dr. Bryson</h2>
          <p className="text-sm text-gray-700">Plastic Surgeon</p>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-center">
              <p className="text-xl font-bold">9</p>
              <p className="text-xs">/10</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">17</p>
              <p className="text-xs">Cases</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">240</p>
              <p className="text-xs">Reports</p>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-[#0F152B] text-white rounded-lg">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default MySlider