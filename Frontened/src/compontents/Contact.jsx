import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import { IoLogoYoutube } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from "./Navbar";
import Footer from './Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <section id='contact' className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">We'd Love to Hear From You!</h2>
          <p className="text-lg text-gray-600">Have any questions or feedback? Reach out to us below.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 p-4">
            <div className="contact-info bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Let's Get in Touch</h3>
              <p className="text-gray-600 mb-4">We’re available via these channels.</p>

              <div className="space-y-4 mb-4">
                <div className="information flex items-center">
                  <FaMapMarkerAlt className="icon w-6 h-6 mr-3 text-blue-600 hover:text-blue-800 transition-all duration-300" />
                  <p className="text-gray-700">Dharmawal, Herberput, Dehradun (UK) 248142, India</p>
                </div>
                <div className="information flex items-center">
                  <MdEmail className="icon w-6 h-6 mr-3 text-blue-600 hover:text-blue-800 transition-all duration-300" />
                  <p className="text-gray-700">sakshigakhar16@gmail.com</p>
                </div>
                <div className="information flex items-center">
                  <FaPhoneAlt className="icon w-6 h-6 mr-3 text-blue-600 hover:text-blue-800 transition-all duration-300" />
                  <p className="text-gray-700">+91 9720812364</p>
                </div>
              </div>

              <div className="social-media mt-6">
                <p className="text-gray-600 mb-2">Follow us on:</p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110" />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <IoLogoYoutube className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-4">
            <div className="contact-form bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
              <form action="index.html" autoComplete="off" className="space-y-4">
                <div className="relative">
                  <input type="text" name="name" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-blue-600" required />
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Username</label>
                </div>
                <div className="relative">
                  <input type="email" name="email" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-blue-600" required />
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Email</label>
                </div>
                <div className="relative">
                  <input type="tel" name="phone" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-blue-600" required />
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Phone</label>
                </div>
                <div className="relative">
                  <textarea name="message" className="border-b-2 w-full p-3 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-blue-600 h-24" required></textarea>
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Message</label>
                </div>
                <input type="submit" value="Send" className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
