import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import serviceImg1 from "../assets/service1.jpg"
import serviceImg2 from "../assets/service2.jpg"
import serviceImg3 from "../assets/service3.jpg"
import serviceImg4 from "../assets/service4.jpg"

import {motion} from "framer-motion"
import {fadeIn} from "../utillis/AnimationVariants"

const Services = () => {
  return (
    <div id="services" className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's dummy text ever since the 1500s</p>
        </motion.div>

        {/* services category */}
        <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs>
      <motion.TabList 
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
        <Tab>Couple Counseling</Tab>
        <Tab>Parenting Skills</Tab>
        <Tab>Feeling Stuck</Tab>
        <Tab>Self-Confidence</Tab>
        </motion.TabList>

            <TabPanel>
              < motion.div 
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-red-300 mb-4 '>Couple Counseling</h3>
              <p className='mb-8'>Lorem ipsum has been the industry's standard dummy text ever since the 1500s unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <h4 className='text-xl font-medium text-black mb-4'>Benifits</h4>
              <ul className='list-disc list-inside space-y-3'>
              <li>Understanding Relationship Dynamics</li>
              <li>Understanding Relationship Dynamics</li>
              <li>Understanding Relationship Dynamics</li>
              </ul>
              </div>
              <div className='md:w-1/2'>
               <img src={serviceImg1} alt=""  className='w-full h-auto rounded-2xl object-cover'/>
              </div>
           </motion.div>
              </TabPanel>

               <TabPanel>
                     <motion.div 
                     variants={fadeIn('up', 0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once: false, amount: 0.7}}
                     className='flex flex-col md:flex-row gap-8 mt-8'>
                    <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                    <h3 className='text-3xl font-semibold text-red-300 mb-4 '>Parenting Skills</h3>
                     <p className='mb-8'>Lorem ipsum has been the industry's standard dummy text ever since the 1500s unknown printer took a 
                    galley of type and scrambled it to make a type specimen book.</p>
                    <h4 className='text-xl font-medium text-black mb-4'>Benifits</h4>
                    <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                   </ul>
                  </div>
                     <div className='md:w-1/2'>
                        <img src={serviceImg2} alt=""  className='w-full  h-auto rounded-2xl object-cover'/>
                     </div>
                   </motion.div>
                  </TabPanel>
       
             <TabPanel>
                  <motion.div 
                   variants={fadeIn('up', 0.2)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{once: false, amount: 0.7}}
                  className='flex flex-col md:flex-row gap-8 mt-8'>
                  <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-red-300 mb-4 '>Feeling Stuck</h3>
                  <p className='mb-8'>Lorem ipsum has been the industry's standard dummy text ever since the 1500s unknown printer took
                   galley of type and scrambled it to make a type specimen book.</p>
                   <h4 className='text-xl font-medium text-black mb-4'>Benifits</h4>
                   <ul className='list-disc list-inside space-y-3'>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                  <li>Understanding Relationship Dynamics</li>
                   </ul>
                </div>
                    <div className='md:w-1/2'>
                      <img src={serviceImg3} alt=""  className='w-full h-auto rounded-2xl object-cover'/>
                   </div>
                </motion.div>
            </TabPanel>
    
          
              <TabPanel>
                     <motion.div 
                       variants={fadeIn('up', 0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once: false, amount: 0.7}}
                      className='flex flex-col md:flex-row gap-8 mt-8'>
                     <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                     <h3 className='text-3xl font-semibold text-red-300 mb-4 '>Self-Confidence</h3>
                     <p className='mb-8'>Lorem ipsum has been the industry's standard dummy text ever since the 1500s unknown printer took
                     galley of type and scrambled it to make a type specimen book.</p>
                     <h4 className='text-xl font-medium text-black mb-4'>Benifits</h4>
                     <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                 </ul>
                </div>
               <div className='md:w-1/2'>
                    <img src={serviceImg4} alt=""  className='w-full h-auto rounded-2xl object-cover'/>
               </div>
            </motion.div>
          </TabPanel>
                 

         </Tabs>
        </div>
    </div>
  </div>
      
    
  )
}

export default Services