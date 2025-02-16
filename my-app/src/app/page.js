"use client"
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/results?query=${searchQuery}`);
  };

  return (
    <div style={{ background: "#E5EEFB" }}>
      <div className="container mx-auto min-h-screen flex flex-col justify-center py-10">
        <div className="w-full max-w-full p-4 md:p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-4 md:mb-6">Find Your Doctor</h1>
          
          <form onSubmit={handleSearchSubmit} className="flex flex-col items-center">
            <div className="mb-4 md:mb-6 w-full max-w-md relative">
              <input
                type="text"
                id="search"
                name="search"
                className="w-full pl-10 pr-4 py-2 md:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search doctor by name or department"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <CiSearch className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            <button type="submit" className="bg-blue-600 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg hover:bg-blue-500 transition duration-300">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}