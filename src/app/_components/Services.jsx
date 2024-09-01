"use client"
import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';


function Services() {
  const {ref:sectionRef, inView:isInView}=useInView({
    triggerOnce:true,
    threshold:0.2,
  })
  return (
    <section id="services" className='p-6 pt-20'>
      <motion.div className='flex flex-col justify-center items-center px-4'
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.div className='flex flex-col items-center justify-center px-4 gap-6'>
          <span className='text-[#00ADB5] text-3xl font-semibold'>Services</span>
          <h1 className='text-3xl md:text-5xl font-semibold text-center'>Our Healthcare Services</h1>
        </motion.div>
        <motion.p className='text-center text-[#8C96A7] text-base md:text-lg font-normal leading-6 px-4 md:px-20 lg:px-40 mt-6'>
        We provide our Services 24x7 as per your medical needs you can get our services via Contact us.
        </motion.p>
      </motion.div>

      <motion.div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mt-8 '
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
      >
        <motion.div className={`m-4 p-10 rounded-xl shadow-2xl shadow-[#00ADB5] group hover:bg-[#00ADB5] hover:text-white transition duration-700 ease-in-out hover:z-10`}
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <motion.div>
                <iframe src="https://lottie.host/embed/85c0c33b-d5c3-4885-a4f0-04b0ddc04604/jIXsgx2eQo.json"
                width={100}
                height={100}></iframe>
            </motion.div>
          <motion.div className='rounded-lg mt-4 hover:text-white'>
            <motion.h4 className='text-2xl font-bold mb-4 group-hover:text-white'
            // ref={sectionRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1, type:'spring', ease: 'easeOut' }}
            >Attendent</motion.h4>
            <motion.p className='mb-6 text-[#8C96A7] font-normal group-hover:text-white'
            // ref={sectionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5}}
            >Personal Care Assistant, Mobility Support, Meal Assistant etc. you can get from here.</motion.p>
          </motion.div>
        </motion.div>
        <motion.div className='m-4 p-10 rounded-xl shadow-2xl shadow-[#00ADB5] group hover:bg-[#00ADB5] hover:text-white transition duration-700 ease-in-out'
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}>
        <motion.div className="service-icon mb-25">
            <Image src='/nurse.png' alt='' width={60} height={60}/>
			</motion.div>
          <motion.div className='rounded-lg mt-4'>
            <motion.h4 className='text-2xl font-bold mb-4'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 1, type:'spring', ease: 'easeOut' }}
            >Nursing Care</motion.h4>
            <motion.p className='mb-6 text-[#8C96A7] font-normal group-hover:text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5}}
            >Providing a cost-effective male or female attendant to care for a senior.</motion.p>
          </motion.div>
        </motion.div>
        <motion.div className='m-4 p-10 rounded-xl shadow-2xl shadow-[#00ADB5] group hover:bg-[#00ADB5] hover:text-white transition duration-700 ease-in-out'
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}>
            <motion.div className="service-icon mb-25">
            <svg xmlns="http://www.w3.org/2000/svg" width="43.302" height="58.633" viewBox="0 0 43.302 58.633">
								<g id="noun_womb_1744327" transform="translate(-22.94 -12.449)">
									<path id="Path_81" data-name="Path 81" d="M59,49.642V50c0,.434-.868.583-1.167.655a2.227,2.227,0,0,1-1.843-.135,8.716,8.716,0,0,1-1.48-1.252l-1.793-1.7L51.68,46.526a.755.755,0,1,0-1.067,1.067A4.98,4.98,0,0,1,52.2,50.439c.192,1.722-1.423,3.223-2.782,3.963a12.192,12.192,0,0,1-5.841,1.124,7.947,7.947,0,0,1-5.635-2.277A17.36,17.36,0,0,1,33.673,46.4a7.57,7.57,0,0,1-.384-2.355v-.064a2.583,2.583,0,0,0-.975-1.971A6.88,6.88,0,1,1,43.427,35.22a7.115,7.115,0,0,1,.043,2.618A1.515,1.515,0,0,1,41.7,39.048l-.178-.043a5.329,5.329,0,0,0-1.473-.213H39.2a.754.754,0,0,0-.761.6.711.711,0,0,0,.711.854h.9a3.643,3.643,0,0,1,1.85.512l.512.313.406.228.27.157a.711.711,0,0,0,.9-.121l1-1.025a.953.953,0,0,1,1.323-.1.968.968,0,0,1,.27,1.124l-.939,2.8a1.615,1.615,0,0,1-1.53,1.1H42.695a.861.861,0,0,0,0,1.715h2.013a3.1,3.1,0,0,0,2.938-2.134l.975-3.095a2.277,2.277,0,0,1,2.213-1.594h.036a2.191,2.191,0,0,1,1.885,1.06l3.778,6.311a3.458,3.458,0,0,0,1.878,1.416A.776.776,0,0,1,59,49.642Z" transform="translate(-0.985 -4.655)" fill="#00adb5"></path>
									<path id="Path_82" data-name="Path 82" d="M66.242,34.145A21.651,21.651,0,1,0,26.177,45.49h0l.183.256a23.146,23.146,0,0,0,1.582,2.2L44.569,71.082,61.247,47.973a20.214,20.214,0,0,0,1.582-2.2l.183-.249h0A21.461,21.461,0,0,0,66.242,34.145Zm-39.991-.051A18.311,18.311,0,0,1,58.786,22.528a1.714,1.714,0,0,1-.842.168,3.171,3.171,0,0,0-3.281,3.281A1.3,1.3,0,0,1,53.2,27.443a3.164,3.164,0,0,0-3.274,3.274,1.3,1.3,0,0,1-1.465,1.465,3.171,3.171,0,0,0-2.351.923.953.953,0,0,0,1.348,1.348,1.34,1.34,0,0,1,1.091-.359A3.157,3.157,0,0,0,51.82,30.82a1.3,1.3,0,0,1,1.465-1.465,3.164,3.164,0,0,0,3.281-3.318,1.3,1.3,0,0,1,1.465-1.465,3.369,3.369,0,0,0,1.875-.535A18.311,18.311,0,1,1,26.251,34.094Z" fill="#393e46"></path>
									<path id="Path_83" data-name="Path 83" d="M59.013,49.974v-.356a.776.776,0,0,0-.62-.712,3.462,3.462,0,0,1-1.838-1.475L52.78,41.084a2.194,2.194,0,0,0-1.888-1.061h-.036a2.28,2.28,0,0,0-2.215,1.6l-.983,3.1a3.106,3.106,0,0,1-2.942,2.137H42.7a.862.862,0,0,1,0-1.717h1.425a1.617,1.617,0,0,0,1.532-1.1l.926-2.743a.969.969,0,0,0-.271-1.126.955.955,0,0,0-1.339.114l-.99,1.012a.712.712,0,0,1-.9.121l-.264-.121-.406-.228-.513-.313a3.647,3.647,0,0,0-1.852-.513h-.862a.712.712,0,0,1-.712-.855.755.755,0,0,1,.712-.648h.826a5.336,5.336,0,0,1,1.475.214l.178.043a1.517,1.517,0,0,0,1.8-1.2,7.124,7.124,0,0,0-.036-2.622,6.91,6.91,0,1,0-11.1,6.775,2.586,2.586,0,0,1,.976,1.973v.064a7.58,7.58,0,0,0,.385,2.358,17.382,17.382,0,0,0,4.274,6.853,7.957,7.957,0,0,0,5.642,2.28,12.14,12.14,0,0,0,5.849-1.126c1.368-.712,2.978-2.244,2.785-3.968a4.987,4.987,0,0,0-1.589-2.849.756.756,0,1,1,1.069-1.069l1,1.069,1.76,1.7a8.727,8.727,0,0,0,1.482,1.254,2.23,2.23,0,0,0,1.845.135C58.144,50.558,59.013,50.4,59.013,49.974Z" transform="translate(-0.997 -4.602)" fill="#00adb5"></path>
								</g>
							</svg>
			    </motion.div>
          <motion.div className='rounded-lg mt-4'>
            <motion.h4 className='text-2xl font-bold mb-4'
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
             transition={{ duration: 1, type:'spring', ease: 'easeOut' }}
             >Baby Care</motion.h4>
            <motion.p className='mb-6 text-[#8C96A7] font-normal group-hover:text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5}}>we offer services for newborn care including monitoring the baby's growth and development, assisting with feeding and diaper changes, and keeping an eye out for any signs of illness or health concerns.</motion.p>
          </motion.div>
        </motion.div>
        <motion.div className='m-4 p-10 rounded-xl shadow-2xl shadow-[#00ADB5] group hover:bg-[#00ADB5] hover:text-white transition duration-700 ease-in-out'
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}>
        <motion.div className="service-icon mb-25">
              <Image src='/elderly.png' alt='' width={60} height={60}/>
						</motion.div>
          <motion.div className='rounded-lg mt-4'>
            <motion.h4 className='text-2xl font-bold mb-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1, type:'spring', ease: 'easeOut' }}>Elder Care</motion.h4>
            <motion.p className='mb-6 text-[#8C96A7] font-normal group-hover:text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5}}>We can offer you an attendant and affordable elder services to help you in your latter years.</motion.p>
          </motion.div>
        </motion.div>
        <motion.div className='m-4 p-10 rounded-xl shadow-2xl shadow-[#00ADB5] group hover:bg-[#00ADB5] hover:text-white transition duration-700 ease-in-out'
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}>
        <motion.div className="service-icon mb-25">
              <Image src='/physical-therapy.png' alt='' width={60} height={60}/>
						</motion.div>
          <motion.div className='rounded-lg mt-4'>
            <motion.h4 className='text-2xl font-bold mb-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1, type:'spring', ease: 'easeOut' }}>Physiothe<br className='md:block hidden'/>rapy</motion.h4>
            <motion.p className='mb-6 text-[#8C96A7] font-normal group-hover:text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5}}>In an emergency, we can arrange for the best physiotherapist to visit you at home.</motion.p>
          </motion.div>
        </motion.div>
        <motion.div className='m-4 p-10 rounded-xl shadow-2xl shadow-[#00ADB5] group hover:bg-[#00ADB5] hover:text-white transition duration-700 ease-in-out'
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}>
        <motion.div className="service-icon mb-25">
							<iframe src='https://lottie.host/embed/565bbed9-c841-44ed-9235-9db41507a657/Xh6AcNGXB6.json'
              width={100}
              height={100}/>
						</motion.div>
          <motion.div className='rounded-lg mt-4'>
            <motion.h4 className='text-2xl font-bold mb-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1, type:'spring', ease: 'easeOut' }}>ICU care</motion.h4>
            <motion.p className='mb-6 text-[#8C96A7] font-normal group-hover:text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5}}>In an emergency, we provide ICU Care at your home in The Competitive Price Range.</motion.p>
          </motion.div>
        </motion.div>
        <motion.div className='m-4 p-10 rounded-xl shadow-2xl shadow-[#00ADB5] group hover:bg-[#00ADB5] hover:text-white transition duration-700 ease-in-out'
        ref={sectionRef}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 60 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}>
        <motion.div className="service-icon mb-25">
              <Image src='/surgical.png' alt='' width={60} height={60}/>
						</motion.div>
          <motion.div className='rounded-lg mt-4'>
            <motion.h4 className='text-2xl font-bold mb-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 1, type:'spring', ease: 'easeOut' }}>Medical Equipments on rent</motion.h4>
            <motion.p className='mb-6 text-[#8C96A7] font-normal group-hover:text-white'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 1.5}}>We offer medical equipment such as wheelchairs, oxygen concentrators, and hospital beds etc.</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services
