import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Products from './Components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './Components/TopProducts/TopProducts'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Popup from './Components/PopUp/Popup'
const App = () => {
  const [orderPopUp,setOrderPopUp]=useState(false)
  const handleOrderPopUp=()=>{
    setOrderPopUp(!orderPopUp)
  }
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-out-sine',
      delay:100,
    });
    AOS.refresh()
  },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handleOrderPopUp={handleOrderPopUp}/>
      <Hero handleOrderPopUp={handleOrderPopUp}/>
      <Products/>
      <TopProducts handleOrderPopUp={handleOrderPopUp}/>  
      <Banner/>
      <Subscribe/>
      <Products/>
      <Testimonials/>
      <Footer/>
      <Popup orderPopUp={orderPopUp} setOrderPopUp={setOrderPopUp}/>
    </div>
  )
}

export default App