import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";


const Contact = () => {
   const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [phone,setPhone] = useState("")
   const [country,setCountry] = useState("");
   const [Message,setMessage] = useState("");
   const [showModel,setShowModal] = useState(false);

  const handleSubmit = (e) => {
       e.preventDefault();
       const data = {
        name,
        email,
        phone,
        country,
        Message
       }
      //  console.log(data);
      if(!data){
        alert("Please fill all fields")
        return;
      }
      setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setName("")
    setEmail("")
    setPhone("")
    setCountry("")
    setMessage("")

  }
  return (
    <div className='bg-heroBg flex items-start justify-center py-28 px-8' id='contact'>
      <div className='container mx-auto'>
          <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
               {/* left side */}
               <div className='space-y-8'>
                     <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make An Appointment</h2>
                     <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                        <div className='flex items-start gap-4'>
                          <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                          <FaUser className='text-red-300'/>
                          </div>
                          <div className='space-y-1'>
                          <h3 className='text-lg font-medium'>24 Hours Services</h3>
                          <p>Lorem ipsum is simply dummy of the printing</p>
                          </div>
                        </div>
                 
                    <div className='flex items-start gap-4'>
                       <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                       <FaEnvelopeCircleCheck className='text-red-300'/>
                      </div>
                       <div className='space-y-1'>
                       <h3 className='text-lg font-medium'>Expert Therapist</h3>
                       <p>Lorem ipsum is simply dummy of the printing</p>
                 </div>
              </div>
                   <div className='flex items-start gap-4'>
                       <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                       <FaPhoneSquare className='text-red-300'/>
                       </div>
                       <div className='space-y-1'>
                       <h3 className='text-lg font-medium'>High Quality Care</h3>
                         <p>Lorem ipsum is simply dummy of the printing</p>
                       </div>
                   </div>
                      <div className='flex items-start gap-4'>
                      <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                      <BsGlobe
                      className='text-red-300'/></div>
                      <div className='space-y-1'>
                      <h3 className='text-lg font-medium'>Trusted Clinic</h3>
                      <p>Lorem ipsum is simply dummy of the printing</p>
                  </div>
                 </div>
                 </div>
                  </div>
                    
                  {/* right side */}
                  <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                       <h3 className='text-2xl font-bold mb-4'>Book Appointment</h3>
                       <form onSubmit={handleSubmit} className='space-y-8'> 
                          <div className='flex sm:flex-row flex-col gap-4'>
                                <input 
                                onChange={e => setName(e.target.value)}
                                type="text" placeholder='Name' className='w-full p-4 rounded-md focus:outline-none focus:ring focus:ring-red-100 shadow' />
                                <input 
                                onChange={e => setEmail(e.target.value)}
                                type="email" placeholder='Email Adress' className='w-full p-4 rounded-md focus:outline-none focus:ring 
                               focus:ring-red-100 shadow' />
                          </div>
                          <div className='flex sm:flex-row flex-col gap-4'>
                            <input 
                            onChange={e => setPhone(e.target.value)}
                            type="tel" placeholder='Contact Number' className='w-full p-4 rounded-md
                            focus:outline-none focus:ring 
                           focus:ring-red-100 shadow' />
                           <input 
                           onChange={e => setCountry(e.target.value)}
                           type="text" placeholder='Country' className='w-full p-4 rounded-md
                           focus:outline-none 
                           focus:ring 
                         focus:ring-red-100 shadow' />
                        </div>
                         <textarea 
                          onChange={e => setMessage(e.target.value)}
                         rows="5"
                         placeholder='Write Your Message...' className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-200 shadow'></textarea>
                         <button
                         type='submit'
                         className='w-full p-3 bg-red-300 text-white rounded-md hover:bg-red-300/80'
                         >Send Message</button>
                   </form>
              </div>
           </div>
       </div>
         {
             showModel && (
             <div className='fixed inset-0  flex items-center justify-center bg-black bg-opacity-90'>
              <div className='bg-white p-8 rounded-md shadow-lg'>
                 <h2 className='text-2xl font-bold mb-4'>Thank You!</h2>
                 <p>Thank You, {name}, for submiting your query.</p>
                 <button 
                 onClick={closeModal}
                 className='mt-4 px-4 py-2 bg-red-300 text-white rounded-md'>Close</button>
              </div>
             </div>
          )
         }
    </div>
  )
}

export default Contact