import React, { useEffect } from 'react'
import "./style.css"
import { Helmet } from 'react-helmet'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoCallOutline, IoLayersOutline, IoSettingsOutline } from 'react-icons/io5'
import { FaFacebook, FaGlobeAmericas, FaInstagram } from 'react-icons/fa'
import { PiChartBar } from 'react-icons/pi'
import { FaXTwitter } from 'react-icons/fa6'
import Aos from "aos";
import { Link } from 'react-router-dom'
const data = [
  {
    icon: <IoLayersOutline className='text-[1.6rem] text-white' />,
    heading: "Creative Ideas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
  },
  {
    icon: <PiChartBar className='text-[1.6rem]  text-white' />,
    heading: "Best Features",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaGlobeAmericas className='text-[1.6rem] text-white' />,
    heading: "Experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.",
  },
  {
    icon: <IoSettingsOutline className='text-[1.6rem] text-white' />,
    heading: "Easy Solutions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const teamData = [
  {
    image: "/images/about/team1.png",
    name: "Sarah Jasmine",
    title: "Founder & CEO",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    image: "/images/about/team2.png",
    name: "John Carter",
    title: "Founder & CEO",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    image: "/images/about/team3.png",
    name: "Daisy Stella",
    title: "Founder & CEO",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  }
]
function About() {
  // for animation 
  useEffect(() => {
    Aos.init({
      disable: 'mobile',
      duration: 2000
    })
  }, [])
  return (
    <>
      <Helmet>
        <title>About - AIWIZE LABS</title>
      </Helmet>

      {/* hero section start  */}
      <div  className="text-white overflow-x-hidden">
      <div className={`bg-[url(/images/about/BannerHeroVideo.png)] bg-auto bg-no-repeat w-screen h-screen md:h-[500px] sm:h-screen lg:h-screen z-[-1]`}>
          <div className='hero-section-group-one'>
            <div className="">
              <p className='text-3xl text-center'>Our Story</p>
              <div className='flex items-center justify-center'>
                <h3 className='hero-section-heading text-center'>ABOUT US</h3>
                <img src="/gif/about/hero.gif" className='w-[60px] lg:w-[150px]' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end  */}

      <div className="p-3 py-10 md:py-8 md:px-32 w-100">
        {/* vision start   */}
        <div data-aos="fade-up" className="h-100 flex">
          <div className="flex flex-col lg:flex-row lg:justify-between md:p-8">
            <div className='w-100 lg:w-[50%] '>
              <p className='text-center lg:text-start mb-3'>
                <span className='pt-2 pb-1 px-3 bg-[var(--yellow)] rounded-full text-[12px] font-bold'>OUR VISION</span>
              </p>
              <h3 className='text-[2rem] text-center lg:text-start lg:text-[3rem] mb-3'>Turn Your <span className='text-[var(--yellow)]'>Ideas</span> Into <span className='text-[var(--yellow)]'>Reality</span>.</h3>
              <ul className='about-text-list'>
                <li>
                  <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Esse vero eligendi facilis quis autem sit! Consectetur.</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline />
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet. Lorem, ipsum amet consectetur adipisicing elit. Perspiciatis, architecto!</p>
                </li>
                <li>
                  <IoIosCheckmarkCircleOutline />
                  <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.lorem5 Lorem  consectetur adipisicing elit. Perspiciatis, architecto!</p>
                </li>
              </ul>
            </div>
            <div className='w-100 lg:w-[50%]'>
              <img src="images/about/ourVisionImg.png" alt="" className='bg-contain' />
            </div>
          </div>
        </div>
        {/* vision end */}

        {/* counting section start  */}
        <div data-aos="fade-down" className="about-count flex flex-wrap justify-around py-10">
          <div className=''>
            <h3>1128+</h3>
            <span>Successful Work</span>
          </div>
          <div className=''>
            <h3>908+</h3>
            <span>Successful Work</span>
          </div>
          <div className=''>
            <h3>258+</h3>
            <span>Successful Work</span>
          </div>
          <div className=''>
            <h3>564+</h3>
            <span>Successful Work</span>
          </div>

        </div>
        {/* counting end  */}

        {/* core values  */}
        <div data-aos="fade-up-right" className="h-100 flex">
          <div className="flex flex-col lg:flex-row lg:justify-between md:p-8">
            <div className='w-100  '>
              <p className='text-center lg:text-start mb-3 uppercase'>
                <span className='pt-2 pb-1 px-3 bg-[var(--yellow)] rounded-full text-[12px] font-bold'>Growing with our Clients</span>
              </p>
              <div className="flex justify-between items-start capitalize">
                <h3 className='text-[2rem] text-center lg:text-start lg:text-[3rem] mb-3'>Our core <span className='text-[var(--yellow)]'>values</span> & <span className='text-[var(--yellow)]'>principles</span>.</h3>
                <p className='hidden lg:flex justify-cente items-center'>
                  <span className='px-3 py-2 text-center bg-black text-[var(--yellow)] text-[13px] font-bold cursor-pointer rounded-full normal-case'>Get in touch</span>
                </p>
              </div>
              <p className='w-100 lg:w-[75%] text-center lg:text-start'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Esse vero eligendi facilis quis autem sit! Consectetur.</p>

              <div className="flex flex-col lg:flex-row justify-between mt-3">
                {
                  data.map((item, index) => {
                    return (
                      <div className='w-100 lg:w-1/3 p-5' key={index}>
                        <div className="border border-[#EAEAEA] rounded-xl py-3 px-4">
                          <div className='w-[40px] p-2 h-[40px] bg-black rounded-full flex justify-center items-center'>
                            {item.icon}</div>
                          <h3 className='text-[18px]  font-semibold py-3 leading-6'>{item.heading}</h3>
                          <p className='text-[#595566] leading-5'>{item.text}</p>
                        </div>
                      </div>
                    )
                  })
                }
                <p className='lg:hidden flex justify-center my-5 overflow-x-hidden'>
                  <span className='px-3 py-2 text-center bg-black text-[var(--yellow)] text-[14px] font-bold cursor-pointer rounded-full normal-case button'>Get in touch</span>
                </p>
              </div>

              {/* <div className="flex justify-between mt-3 relative lg:hidden">
                {
                  <div className='w-100 lg:w-1/3 p-5'>
                    <div className="border border-[#EAEAEA] rounded-xl py-3 px-4">
                      <IoLayersOutline className='bg-black p-2 text-white w-[40px] h-[40px] rounded-full' />
                      <h3 className='text-[18px]  font-semibold py-3 leading-6'>Creative Ideas</h3>
                      <p className='text-[#595566] leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, harum.</p>
                    </div>
                  </div>

                }
              </div> */}
            </div>
          </div>
        </div>
        {/* core valuse end */}

        {/* our history start  */}
        <div data-aos="fade-up-left" className="h-100 my-5-3">
          <div className='w-100'>
            <p className='text-center  mb-3'>
              <span className='pt-2 pb-1 px-3 bg-[var(--yellow)] rounded-full text-[12px] font-bold'>Our History</span>
            </p>
            <h3 className='text-[2rem] text-center  lg:text-[3rem] mb-3'>How <span className='text-[var(--yellow)]'>Aiwize</span> Evolved</h3>
            <p className='px-3 mb-5 lg:px-36 text-[#595566] leading-5 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ea temporibus magni facilis doloribus rerum expedita ipsa quae! Amet, ducimus?</p>
            <div>
              <img src="/images/about/history.png" alt="" />
            </div>
          </div>
        </div>
        {/* our history end  */}
      </div>

      {/* our team start  */}
      <div  data-aos="zoom-in" className="p-3 py-10 md:py-8 md:px-32 w-100 bg-black">
        <div className="h-100 my-5-3 py-10">
          <div className='w-100 lg:w-10/12'>
            <p className='text-center lg:text-start  mb-5'>
              <span className='pt-2 pb-1 px-3 bg-[var(--yellow)] rounded-full text-[12px] font-bold'>Our History</span>
            </p>
            <h3 className='text-[1.2rem] text-center lg:text-start text-white  lg:text-[45px] mb-3 uppercase lg:leading-[52px]'>
              We champion the bold to achieve the <span className='text-[var(--yellow)]'>Extraordinary</span></h3>
            <p className=' mb-5  text-[#595566] leading-5 text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ea temporibus magni facilis doloribus rerum expedita ipsa quae! Amet, ducimus?</p>
          </div>
          <div className=" w-100 flex flex-col lg:flex-row justify-between ">
            {
              teamData.map((item, index) =>
                <div className='w-100 lg:w-1/3 mt-5' key={index}>
                  <div className="p-3">
                    <div className='relative w-fit'>
                      <img src={item.image} alt="" className='rounded mb-5' />
                      <span className='absolute bottom-6 text-[12px] right-3 py-1 px-4 bg-[var(--yellow)] rounded-full font-bold'>{item.title}</span>
                    </div>
                    <h3 className='text-center text-[var(--yellow)] text-2xl mb-3'>{item.name}</h3>
                    <p className='text-white text-[12px] text-center px-2 leading-5 mb-5'>{item.description}</p>
                  </div>
                  <div className="flex justify-center gap-11">
                    <FaInstagram className='text-[var(--yellow)] w-[24px] h-[24px] cursor-pointer' />
                    <FaFacebook className='text-[var(--yellow)] w-[24px] h-[24px] cursor-pointer' />
                    <FaXTwitter className='text-[var(--yellow)] w-[24px] h-[24px] cursor-pointer' />
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      {/* our team end */}

      {/* call start  */}
      <div data-aos="zoom-in-up" className="px-4 md:px-40 py-24 md:py-32">
        <div className="bg-[#181818] rounded-3xl flex flex-col lg:flex-row">
          <div className="lg:hidden flex w-100 justify-start mb-3">
            <div className='px-5'>
              <img src="images/about/aboutContact.png" alt="" />
            </div>
          </div>

          <div className="w-100 lg:w-[60%] flex items-center">
            <div className="p-5 lg:p-14">
              <h3 className='text-white text-[24px] text-center lg:text-start  lg:text-[40px] uppercase lg:leading-[46px] mb-3'>Better Consult, <span className='text-[var(--yellow)]'>Better</span> Results</h3>
              <p className='text-white text-[12px] lg:text-[14px] text-center lg:text-start lg:leading-6 mb-3'>Lorem ipsum dolor sit amet consectetur. Amet in sed accumsan amet dolor velit. A amet sit diam sed. Lacinia est vivamus egestas quis semper. Facilisi et molestie nunc tristique tellus eget.</p>
              <div className='flex justify-center lg:justify-start pb-10'>
                <Link to={"tel:800 1234 654"} className='rounded-full bg-[var(--yellow)] text-[16px] py-2 px-5 flex items-center justify-center w-[280px] h-[60px]'><IoCallOutline /> +800 1234 654 </Link>
              </div>
            </div>
          </div>
          <div className="hidden w-[40%] lg:flex justify-start">
            <div className='px-5'>
              <img src="images/about/aboutContact.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* call end */}

    </>
  )
}

export default About