import React,{useRef, useState} from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowUpRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import 'swiper/css';
import 'swiper/css/autoplay';

import writeImage from './assets/write.png';
import homeImage from "./assets/homelar.png";
import bulbImage from "./assets/bulb.jpg"
import adobeImage from "./assets/adobe.png"
import colorImage from "./assets/color.png"
import eightImage from "./assets/eight.png"
import fifthImage from "./assets/fifth.png"
import mongoImage from "./assets/mongo.png"
import nodeImage from "./assets/node.png"
import reactImage from "./assets/reacctnative.png"
import secondImage from "./assets/second.png"
import seventhImage from "./assets/seventh.png"
import sixthImage from "./assets/sixth.png"
import thirdImage from "./assets/third.png"
import wordImage from "./assets/word.png"
import fourthImage from "./assets/fourth.png"
import oneImage from "./assets/one.png"

import bulbImageTwo from "./assets/bulb 2.jpg";




const portfolios = [
    "UI/UX Development  Built on the vision of Swami Vivekananda, Digicon Marketer was founded in 2022 by Anamitra Sarkhel",
    "Web Development",
    "App Development",
    "Google Marketing",
    "Shopify Store Development",
  ];
  const features = [
    { title: "10+", text: "Years of Helping Businesses Succeed" },
    { title: "Custom Websites & Apps", text: "Made Just for You" },
    { title: "Trusted by", text: "Businesses Like Yours" },
    { title: "Get Expert Advice", text: "with a Free Consultation" },
    { title: "Digital Marketing", text: "That Gets Results" }
  ];

const techTools = [
    { img: colorImage, name: "Figma" },
    { img: reactImage, name: "React Native" },
    { img: wordImage, name: "WordPress" },
    { img: mongoImage, name: "MongoDB" },
    { img: adobeImage, name: "Adobe" },
    { img: nodeImage, name: "Node.js" },
  ];


  const services = [
    { name: "Custom Website", img: oneImage ,description:"Tailor-made, high-performance websites designed for speed, scalability, and seamless user experience to elevate your brand’s online presence."},
    { name: "SEO Optimization", img: secondImage ,description:"Feature-rich, conversion-focused eCommerce solutions built for effortless shopping experiences and maximized sales growth."},
    { name: "Social Media Marketing", img: thirdImage,description:"Fully customized WordPress websites with stunning design, speed optimization, and powerful functionalities for any business." },
    { name: "WordPress Development", img: fourthImage ,description:"High-converting Shopify stores with custom themes, integrations, and seamless checkout experiences"
},
    { name: "E-commerce Solutions", img: fifthImage,description:"ROI-driven Google Ads, PPC, and search marketing strategies to boost visibility, traffic,conversions." },
    { name: "App Development", img: sixthImage,description:"Engaging, data-driven campaigns to build brand loyalty,increase followers,and drive sales." },
    { name: "App Development", img: seventhImage,description:"Intuitive, visually stunning designs that enhance user experience andboost engagement." },
    { name: "App Development", img: eightImage,description:"Scalable, feature-packed mobile apps for iOS and Android,designed for seamless performance." },
    
  ];
  const testimonials = [
    {
      name: "Rajesh Sharma",
      text: "Digicon Marketer transformed my business with a custom website and SEO strategy. My online presence skyrocketed, and leads doubled within months!",
    },
    {
      name: "Sneha Verma",
      text: "Their custom app development exceeded expectations! User-friendly, seamless, and perfectly tailored to our needs.",
    },
    {
      name: "Amit Khanna",
      text: "Google Ads and PPC campaigns by Digicon Marketer delivered outstanding ROI. Our sales and brand visibility have never been better!",
    },
    {
      name: "Priya Desai",
      text: "From website design to SEO, their expertise is unmatched. Professional, results-driven, and highly reliable.",
    },
    {
      name: "Vikram Joshi",
      text: "Excellent CRM solutions! Helped streamline our business operations and improve customer relations significantly.",
    },
    {
      name: "Neha Kapoor",
      text: "The social media marketing strategy increased our engagement rates by 300%! Highly recommended!",
    },
  ];


const Large = () => {
  
    
    const scrollRef = useRef(null);
    const slides = [...features, ...features];
    const [mobile, setMobile] = useState("");

    const scroll = (direction) => {
      if (scrollRef.current) {
        const scrollAmount = direction === "left" ? -200 : 200;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };
   

   
    const handleMobileChange = (e) => {
      const value = e.target.value.replace(/\D/g, ""); 
      if (value.length <= 10) {
        setMobile(value);
      }
    };
  return (
    <div className="w-full min-h-screen bg-gray-100">
   
   <header className="bg-white shadow p-4 flex justify-between items-center fixed w-full top-0 z-50">
  <div className="flex flex-col ms-4 sm:ms-8">
    <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">DIGICON</h1>
    <span className="text-sm sm:ms-13">MARKETER</span>
  </div>

  <div className="flex space-x-3 sm:space-x-6 me-4 sm:me-20">
    <button className="bg-gray-200 text-blue-700 px-4 sm:px-7 py-2 rounded-lg border-blue-500 text-sm sm:text-base">
      Support
    </button>
    <button className="bg-blue-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base">
      Get Quotes
    </button>
  </div>
</header>


    
    <section className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center text-white text-center" style={{ backgroundImage: `url('${homeImage}')` }}>
    
    </section>

    
    <section className="p-6 text-center">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={15}
        slidesPerView={1.5} 
        slidesPerGroup={1}
        breakpoints={{
          480: { slidesPerView: 2, slidesPerGroup: 1 },
          640: { slidesPerView: 3, slidesPerGroup: 1 },
          1024: { slidesPerView: 4, slidesPerGroup: 1 } 
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true} 
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-[135px] h-[124px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] flex flex-col justify-center items-center text-white text-xs sm:text-base font-semibold rounded-full bg-gradient-to-b from-blue-300 to-blue-600 shadow-lg p-3 sm:p-4">
              <span className="text-lg sm:text-2xl font-bold">{item.title}</span>
              <span className="text-xs sm:text-sm">{item.text}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>


  

    <section className="p-10 flex flex-col md:flex-row items-center justify-center gap-10">
      
      <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-400 relative w-full h-auto md:w-1/2">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full shadow-lg"></div>
        <form className="space-y-4 w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={handleMobileChange}
            maxLength={10} 
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select Service</option>
            <option>Web Development</option>
            <option>SEO Optimization</option>
            <option>Marketing</option>
          </select>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
            Get Free Consultation
          </button>
        </form>
      </div>

   
      <div className="relative w-full md:w-3/7 group">
        
        <div className="relative">
          <img
            src={bulbImage}
            alt="Business Lightbulb Off"
            className="rounded-lg shadow-lg w-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
        
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              I’ll illuminate your business for every
            </h2>  
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              customer powered
            </h2>  
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              by the expertise of
            </h2>
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Digicon Marketer!
            </h2>
          </div>
        </div>

       
        <img
          src={bulbImageTwo}
          alt="Business Lightbulb On"
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />

       
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-600"></div>
      </div>
    </section>

    <section className="py-12 w-full">
  <div className="container mx-auto px-6 relative">
  
    <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-start">
      Using Our Technology Tools
    </h2>

   
    <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 swiper-button-prev">
      <ChevronLeft size={28} />
    </button>

    <button className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 swiper-button-next">
      <ChevronRight size={28} />
    </button>

    
    <Swiper
      modules={[Autoplay, Navigation]}
      slidesPerView={2.5}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 25 },
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
      loop={true}
    >
      {techTools.map((tool, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-[160px] h-[100px] transition-transform transform hover:scale-105 hover:shadow-lg ms-20">
            <img src={tool.img} alt={tool.name} className="h-14 object-contain" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>





    
    <section className="p-10 text-center bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-start">What We Provide</h3>
        <p className="text-md text-start">
          Empowering Businesses with Cutting-Edge Digital Solutions – Custom
          Websites, Apps, SEO, PPC, CRM, Google Marketing, and Blockchain
          Development to Drive Growth,
        </p>
        <p className="text-md text-start mb-8">
          Maximize ROI, and Outshine the Competition!
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
             
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-60 object-cover"
              />

             
              <div className="p-4 text-start">
                <h4 className="text-xl font-semibold mb-2">{service.name}</h4>
                <p className="text-gray-600">{service.description}</p>

               
                <div className="flex items-center justify-between gap-1 mt-4">
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Get Estimate
                  </a>
                  <ArrowUpRight className="text-blue-600 w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="p-10 text-start">
      <h3 className="text-3xl font-bold mb-2">Our Portfolios</h3>
      <p className="text-md">
        Showcasing Excellence Across Industries – From Custom Websites and Apps to SEO, PPC, CRM, and Blockchain Solutions. Our portfolio reflects innovation, performance,
      </p>
      <p className="mb-6">
        and success in delivering tailored digital solutions for businesses worldwide.
      </p>

     
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {portfolios.map((portfolio, index) => (
          <div
            key={index}
            className={`relative bg-cover bg-center text-white rounded-lg transition-all duration-500 ease-in-out flex items-center justify-center group
              ${index === 0 ? "h-[300px] w-[320px] hover:w-[170px]" : "h-[300px] w-[170px] hover:w-[300px] ml-6"}
            `}
            style={{ backgroundImage: `url('${writeImage}')` }}
          >
            <p
              className={`text-lg font-semibold bg-opacity-50 p-2 transition-all duration-500 ease-in-out text-center
                ${index !== 0 ? "rotate-90 group-hover:rotate-0" : ""}
              `}
            >
              {portfolio}
            </p>
          </div>
        ))}
      </div>
    </section>


   
<section className="p-10 text-center bg-gray-200">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-4 text-start">What Our Clients Say</h3>
        <p className="text-md text-start">
          Our clients trust Digicon Marketer for delivering exceptional digital solutions. 
          From custom websites and apps to SEO, PPC, and CRM, our expertise drives real growth, 
          higher conversions, and long-term business success!
        </p>

        
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="mt-6"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm">
                <p className="text-gray-800 italic">"{testimonial.text}"</p>
                <h4 className="text-blue-600 font-semibold mt-4">{testimonial.name}</h4>
                <p className="text-yellow-500">★★★★★ Google</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>


   
      <footer className="bg-blue-900 text-white py-10 px-6 mt-8 text-sm">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
    
   
    <div>
      <h2 className="text-4xl font-bold">DIGICON</h2>
      <span className='text-lg block mt-1 ms-16'>MARKETER</span>
      <p className="mt-4">
        A leading app development agency in Kolkata, specializing in custom eCommerce web development, 
        SEO, PPC, and digital marketing solutions to help businesses grow.
      </p>
    </div>

    
    <div>
      <h3 className="text-lg font-semibold">Contact Information</h3>
      <p className="flex items-center mt-2"><FaPhone className="mr-2" /> 9877888888</p>
      <p className="flex items-center mt-2"><FaPhone className="mr-2" /> 6678888888 / 8888888888</p>
      <p className="flex items-center mt-2"><FaEnvelope className="mr-2" /> 7jsthsmag@gmail.com</p>
      <p className="flex items-center mt-2"><FaMapMarkerAlt className="mr-2" /> 
        Shibani Mahamaya Housing, Street 43, Block AC 64, NewTown, Kolkata 700163
      </p>
    </div>

    
    <div className="flex flex-col md:flex-row items-start justify-between w-full">
  
  
  <div className="w-full md:w-1/2">
    <h3 className="text-lg font-semibold">Our Best Services</h3>
    <ul className="mt-2 space-y-2">
      <li>App Developer in Kolkata</li>
      <li>Website Developer in Kolkata</li>
      <li>Ecommerce Developer in Kolkata</li>
      <li>SEO Agency in Kolkata</li>
      <li>Digital Marketing Agency in Kolkata</li>
    </ul>
  </div>

 
  <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
    
   
    <div className="flex gap-4 mt-6 md:mt-0">
      <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-gray-200">
        Get Quotes
      </button>
      <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-gray-200">
        Call Us
      </button>
    </div>

   
    <div className="flex space-x-4 mt-4">
      <FaLinkedin className="cursor-pointer text-2xl" />
      <FaInstagram className="cursor-pointer text-2xl" />
      <FaYoutube className="cursor-pointer text-2xl" />
      <FaFacebook className="cursor-pointer text-2xl" />
    </div>
    
  </div>
</div>


  </div>

  
  <div className="mt-6 border-t border-gray-600 pt-4 text-center text-xs flex flex-col md:flex-row justify-between">
    <p>&copy; Copyright Digicon Marketer - 2025 All Rights Reserved</p>
    <p>Design & Developed By: <span className="font-bold">Reboot AI Pvt. Ltd.</span></p>
  </div>
</footer>

  </div>
  )
}

export default Large
