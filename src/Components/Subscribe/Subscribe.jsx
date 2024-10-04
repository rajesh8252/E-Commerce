import React from 'react'
import Banner from "../../assets/website/orange-pattern.jpg"
import { MdHeight } from 'react-icons/md'
const Subscribe = () => {
    const BannerImg={
        backgroundImage:`url(${Banner})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:"100%",
        width:"100%"
    }
  return (
    <div
        data-aos="zoom-in"
        className='bg-gray-100 dark:bg-gray-800 text-white'
        style={BannerImg}
    >
        <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1
                    className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'
                    >Get Notification About New Products</h1>
                    <input
                    data-aos="fade-up"
                    type='text'
                    placeholder='Enter your mail'
                    className='w-full py-3'
                    />
                </div>
        </div>
    </div>
  )
}

export default Subscribe