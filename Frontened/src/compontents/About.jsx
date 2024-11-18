import React from 'react';
import { FaShoppingBag, FaHandsHelping, FaTshirt } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />
      
      <section
        id="about"
        className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 bg-gradient-to-r from-indigo-50 via-pink-100 to-yellow-100 rounded-lg shadow-lg"
      >
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-4">Our Story</h3>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
            At ClothHaven, we don't just sell clothes. We curate experiences that empower you. Our passion is to provide modern, trendy, and comfortable clothing for people from all walks of life. Whether it's a casual day out or a chic evening look, we believe everyone deserves to feel confident and stylish.
          </p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            It all started with a single idea: to bring high-quality, affordable fashion to everyone, while ensuring our customers feel special in every piece they wear.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <FaShoppingBag className="text-5xl text-indigo-600 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Affordable Fashion</h4>
            <p className="text-gray-600 text-sm">
              We ensure that style is accessible to everyone without compromising on quality.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <FaTshirt className="text-5xl text-pink-600 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Premium Quality</h4>
            <p className="text-gray-600 text-sm">
              Our fabrics are chosen with care, ensuring long-lasting wear and ultimate comfort.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <FaHandsHelping className="text-5xl text-yellow-600 mb-4" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Customer-Centric Approach</h4>
            <p className="text-gray-600 text-sm">
              Your satisfaction is our priority. We are here to provide you with exceptional service from start to finish.
            </p>
          </div>
        </div>

      
        <div className="mt-16 text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to make you feel beautiful and confident in everything you wear. We aim to reflect the diversity of the world through our designs, ensuring everyone can find something they love. Our commitment to sustainability is reflected in our eco-friendly practices and materials.
          </p>
          <a
            href="#shop"
            className="inline-block mt-6 px-8 py-3 bg-pink-600 text-white font-semibold rounded-full text-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Explore Our Collections
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
