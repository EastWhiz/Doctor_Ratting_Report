import React from 'react';
import './fullreport.css';
import { MessageSquareMore, Route } from 'lucide-react';
import Image from "next/image";
import MySlider from '@/components/slider/page';

const Page = () => {
  return (
    <div>
      {/* Header */}
      <div className='header'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className="flex flex-col sm:flex-row md:flex-row justify-between">
            <div className="mb-8 sm:mb-0">
              <h1 className='name'>Dr. John Doe</h1>
              <p className="specialty">Plastic Surgeon</p>
              <p className="text-base font-thin w-full sm:w-[75%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorum
                accusamus sapiente eos fugit magnam tenetur quasi quae doloremque
                deserunt dolor voluptatem excepturi molestiae, magni autem suscipit
                doloribus quam nemo.
              </p>
            </div>
            <div>
              <h6 className='click_name'>At Blah Clinic</h6>
              <div className="flex items-center gap-4 dr_rating_widget">
                <div className="text-left">
                  <p className="rate-label">Excellent</p>
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
        </div>
      </div>

      {/* Key Insights */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 key_insights'>
        <h2 className='fullresultpg_headings'>Key Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-4 service">
              <MessageSquareMore className="text-blue-500" />
              <p className="title font-semibold text-lg">Talkative</p>
            </div>
            <p className="text text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, voluptas nemo hic est saepe!
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 service">
              <Route className="text-green-500" />
              <p className="title font-semibold text-lg">Beside Manner</p>
            </div>
            <p className="text text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, voluptas nemo hic est saepe!
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 service">
              <MessageSquareMore className="text-red-500" />
              <p className="title font-semibold text-lg">Lorem Ipsum</p>
            </div>
            <p className="text text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa, voluptas nemo hic est saepe!
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className="fullresultpg_headings mt-16">Top Testimonials</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          <div className='testimonials_card'>
            <div className='flex gap-3'>
              <Image
                src="/assets/dr.png"
                alt="Doctor's profile"
                width={160}
                height={158}
                className="object-cover"
              />
              <div>
                <h6 className='font-bold'>John Doe</h6>
                <p className='text-[#B9B9B9]'>Rhinoplasty</p>
              </div>
            </div>
            <p className='text-center p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, at. Molestias soluta laboriosam explicabo nulla pariatur. Explicabo unde illum atque!</p>
          </div>
          <div className='testimonials_card'>
            <div className='flex gap-3'>
              <Image
                src="/assets/dr.png"
                alt="Doctor's profile"
                width={160}
                height={158}
                className="object-cover"
              />
              <div>
                <h6 className='font-bold'>John Doe</h6>
                <p className='text-[#B9B9B9]'>Rhinoplasty</p>
              </div>
            </div>
            <p className='text-center p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, at. Molestias soluta laboriosam explicabo nulla pariatur. Explicabo unde illum atque!</p>
          </div>
          <div style={{ background: "#FFE7E7" }} className='testimonials_card'>
            <div className='flex gap-3'>
              <Image
                src="/assets/dr.png"
                alt="Doctor's profile"
                width={160}
                height={158}
                className="object-cover"
              />
              <div>
                <h6 className='font-bold'>John Doe</h6>
                <p className='text-[#B9B9B9]'>Rhinoplasty</p>
              </div>
            </div>
            <p className='text-center p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, at. Molestias soluta laboriosam explicabo nulla pariatur. Explicabo unde illum atque!</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='fullresultpg_headings mt-8'>Summary</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate labore reprehenderit quaerat quo sed quibusdam, fugit eaque error sint voluptas iure dicta nobis, quas nihil blanditiis perferendis assumenda cumque veritatis sapiente reiciendis. Ullam consequatur assumenda error ab debitis officia eveniet corrupti cupiditate non mollitia, pariatur impedit, placeat a aliquam nostrum numquam inventore porro tenetur asperiores aut possimus! Voluptatum enim maiores at excepturi, architecto reprehenderit impedit aspernatur, esse ratione corrupti quibusdam maxime incidunt, quae id suscipit culpa. Fugit natus dolor eaque assumenda asperiores, fugiat ipsam perspiciatis temporibus magni molestias veritatis suscipit ex architecto excepturi eius ullam mollitia modi ab velit soluta?</p>
      </div>

      {/* Footer */}
      <div className='footer bg-[#E5EEFB] py-7 mt-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='footer-heading'>Get Reports on Other Doctors</h2>
          <MySlider />
        </div>
      </div>
    </div>
  );
};

export default Page;