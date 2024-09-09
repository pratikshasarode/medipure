import React from 'react'
import footerLogo from "../assets/footer11.svg"
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaTwitter } from 'react-icons/fa'
import { FaSquarePhone } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='py-12 bg-gray-100 px-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
         <div className='space-y-6 mr-14'>
          <div className='flex items-center space-x-2'>
            <img src={footerLogo} alt="footer logo" className='w-10 h-auto' />
            <h1 className='text-blue-999 text-2xl font-bold'>MEDIPURE</h1>
          </div>
          <p className='text-para'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt accusamus voluptas laboriosam Vitae, saepe recusandae!
          </p>
          <div className='flex space-x-4'>
              <a href="#" className='bg-gray-200 text-red-300 rounded-full size-10 flex items-center justify-center hover:bg-red-300 hover:text-white'>
                <FaFacebookF className='text-xl'/>
              </a>
              <a href="#" className='bg-gray-200 text-red-300 rounded-full size-10 flex items-center justify-center
              hover:bg-red-300 hover:text-white'>
                 <FaTwitter className='text-xl'/>
              </a>
              <a href="#" className='bg-gray-200 text-red-300 rounded-full size-10 flex items-center justify-center
             hover:bg-red-300 hover:text-white'>
                 <FaInstagram className='text-xl'/>
              </a>
             <a href="#" className='bg-gray-200 text-red-300 rounded-full size-10 flex items-center justify-center
             hover:bg-red-300 hover:text-white'>
                <FaLinkedin className='text-xl'/>
             </a>
          </div>
         </div>

         <div className='space-y-6'>
             <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
             <ul className='space-y-3'>
              <li>
              <a href="#home" className='hover:underline text-gray-700'>Home</a>
              </li>
              <li><a href="#about"  className='hover:underline text-gray-700'>About Us</a></li>
              <li><a href="#services" className='hover:underline text-gray-700'>Services</a></li>
              <li><a href="#contact" className='hover:underline text-gray-700'>Contact Us</a></li>
             </ul>
         </div>

         <div className='space-y-6'>
            <h3 className='text-xl font-semibold mb-4'>Support</h3>
            <ul className='space-y-3'>
          <li>
              <a href="#faq" className='hover:underline text-gray-700'>FAQs</a>
              </li>
              <li><a href="#terms of service"  className='hover:underline text-gray-700'>Term Of Service</a></li>
              <li><a href="#Privacy policy" className='hover:underline text-gray-700'>Privacy Policy</a></li>
              <li><a href="#support center" className='hover:underline text-gray-700'>Sapport Center</a></li>
            </ul>
         </div>

          <div className='space-y-6'>
              <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
              <ul className='space-y-3'>
              <li className='flex items-center gap-2'>
                 <FaMapMarkedAlt className= 'text-red-300'/>
                 <p className='text-gray-700'>123 street, city, country</p>
              </li>
              <li className='flex items-center gap-2'>
                  <FaSquarePhone className='text-red-300'/>
                  <p className='text-gray-700'>+123 456 7890</p>
              </li>
                  <li className='flex items-center gap-2'>
                  <FaEnvelope className='text-red-300'/>
                  <p className='text-gray-700'>info@medipure.com</p>
             </li>
             </ul>
         </div>
      </div>
    </div>
  )
}

export default Footer