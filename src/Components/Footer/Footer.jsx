import React from 'react'
import Logo from "../../assets/logo.png"
import Banner from "../../assets/website/footer-pattern.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';
const Footer = () => {
    const BannerImg = {
        backgroundImage: `url(${Banner})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      };
    const FooterLinks = [
        {
          title: "Home",
          link: "/#",
        },
        {
          title: "About",
          link: "/#about",
        },
        {
          title: "Contact",
          link: "/#contact",
        },
        {
          title: "Blog",
          link: "/#blog",
        },
      ];
  return (
    <div className='text-white' style={BannerImg}>
            <div className='container'>
                    <div className='grid md:grid-cols-3 pb-44 pt-5'data-aos="zoom-in">
                        {/* Comapany Details */}
                        <div className="py-8 px-4">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            <img src={Logo} alt="" className="max-w-[50px]" />
                            Shopsy
                            </h1>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in
                            beatae ea recusandae blanditiis veritatis.
                            </p>
                        </div>
                        {/* Footer Links */}
                        <div className='grid grid-cols-2 md:grid-col-3 col-span-2 md:pl-10'>
                            <div>
                                <div className='py-8 px-4'>
                                    <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                    <ul>
                                        {
                                            FooterLinks.map((obj)=>(
                                                <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={obj.title}>
                                                    <span>{obj.title}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center gap-3 mt-6'>
                                        <a href='#'>
                                            <FaInstagram className='text-3xl'/>
                                        </a>
                                        <a href='#'>
                                            <FaFacebook className='text-3xl'/>
                                        </a>
                                        <a href='#'>
                                            <FaLinkedin className='text-3xl'/>
                                        </a>
                                </div>
                                <div className='mt-6'>
                                        
                                        <div className='flex items-center gap-3'>
                                                <FaLocationArrow/>
                                                <p>Tenkasi,Tamil Nadu</p>
                                        </div> <div className='flex items-center gap-3'>
                                                <FaMobileAlt/>
                                                <p>+91-6382527242</p>
                                        </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Footer