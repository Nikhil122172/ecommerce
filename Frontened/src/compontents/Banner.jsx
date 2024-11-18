import React from 'react';
import clothesImage from '/public/k.jpg'; 

function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row items-center pt-24'>
       
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 space-y-6'>
          <h1 className='text-4xl font-bold text-gray-800 dark:text-white'>
            Welcome to <span className='text-orange-500'>FashionHub!</span>
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300'>
            Discover the latest trends in fashion. Our curated collection is designed to elevate your style.
          </p>
          <p className='text-lg text-gray-600 dark:text-gray-400'>
            Join our community of fashion enthusiasts and enjoy exclusive offers, style tips, and personalized recommendations tailored just for you.
          </p>
          <p className='text-lg text-gray-600 dark:text-gray-400'>
            Sign up for our newsletter to stay updated on the latest arrivals, bestsellers, and fashion events!
          </p>
          
        
          <label className="input input-bordered flex items-center gap-2 mt-4 w-full md:w-3/4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input 
              type="text" 
              className="grow p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-orange-300" 
              placeholder="Subscribe for fashion updates" 
            />
          </label>

        
          <button className="btn btn-accent mt-2 py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
            Explore Collection
          </button>
        </div>

      
        <div className='order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0'>
          <img 
            src={clothesImage} 
            alt="Clothing Collection" 
            className='w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105' 
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
