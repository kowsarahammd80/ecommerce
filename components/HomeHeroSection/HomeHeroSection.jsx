"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "./HomeHeroSection.css";
import "swiper/css/bundle";
import Link from "next/link";


const HomeHeroSection = () => {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 2000,
  //     autoplaySpeed: 4000,
  //     cssEase: "fade"
  //   };

  return (
    <div className="pt-16">
      <div>
        <Swiper
          // install Swiper modules
          slidesPerView={1}
          loop
          effect="fade"
          autoplay
          speed="4000"
          modules={[EffectFade, Autoplay]}
        >
          {/* <SwiperSlide className='slideDiv'><div className='slideDiv' style={{ backgroundImage: `url(https://i.ibb.co/d4f7tFP/banner2-img-min-1.jpg)`
      }}>

        <div className='sliderTextMainDiv'>
           <div className='sliderTextDiv lg:ms-24 xl:ms-24 md:ms-0 '>
             
             <p className='eatFresh'>Grocery at home</p>
              <h1 className='yourDailyNeeds'>
                Your daily needs
              </h1>
              <p className='homeHeroPeratext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aspernatur possimus eaque quos necessitatibus porro maiores eum quidem fugiat molestias.</p>

              <div className='my-6'>
                 <button className='learMoreButton'>Learn More</button>
                 <button className='goShopButton ms-5'>Go Shop</button>
              </div>
              
           </div>
         </div>

        </div>
        </SwiperSlide> */}
          {/* <SwiperSlide className='slideDiv'><div className='slideDiv' style={{ backgroundImage: `url(https://i.ibb.co/d4f7tFP/banner2-img-min-1.jpg)`
      }}>

        <div className='sliderTextMainDiv'>
           <div className='sliderTextDiv'>
             <h1 className='heroSliderheadLine'>Wellcome to Empire</h1>
             <p className='heroSliderPera my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit in.Lorem ipsum dolor sit amet.</p>
             <button className='HeroExploreButton my-3'>Shop Now <i class="fa-solid fa-arrow-right p-1"></i> </button>
           </div>
         </div>

        </div>
        </SwiperSlide> */}
          {/* 
      <SwiperSlide className='slideDiv'><div className='slideDiv' style={{ backgroundImage: `url(https://i.ibb.co/1dW2ccN/banner3-img-min-1-1.jpg)`
      }}>

        <div className='sliderTextMainDiv'>
           <div className='sliderTextDiv'>
             <h1 className='heroSliderheadLine'>Wellcome to Empire</h1>
             <p className='heroSliderPera my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit in.Lorem ipsum dolor sit amet.</p>
             <button className='HeroExploreButton my-3'>Shop Now <i class="fa-solid fa-arrow-right p-1"></i> </button>
           </div>
         </div>

        </div>
        </SwiperSlide> */}
          <SwiperSlide className="slideDiv">
            <div className="heroSlidImgDiv">
              <img
                className="slidImg"
                src="https://mixtas.novaworks.net/wp-content/uploads/2024/01/m2_slide_01-scaled.jpg"
                alt=""
              />
            </div>

            <div className="slideTextContentMainDiv">
              <div className="flex justify-center lg:justify-start items-center contenTextDiv mx-0 lg:mx-24 xl:mx-24">
                <div className="slidTextDiv text-start lg:text-start xl:text-start md:text-start">
                  <h1 className="heroTagText">NEW ARRIVALS</h1>
                  <h1 className="hero2ndTagText">Stylish</h1>
                  <p className="hero2ndTagText w-72 lg:w-full">
                    Comfort for Fall Night
                  </p>
                  <div className="my-3 lg:my-5">
                    <Link href="/theShop/1">
                      <button className="heroButton px-3 lg:px-6 xl:px-6 py-1 lg:py-3 rounded-sm">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='slideDiv' style={{ backgroundImage: `url(https://i.ibb.co/1dW2ccN/banner3-img-min-1-1.jpg)`
      }}>
        

        <div className='sliderTextMainDiv'>
           <div className='sliderTextDiv'>
             <h1 className='heroSliderheadLine'>Wellcome to Empire</h1>
             <p className='heroSliderPera my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit in.Lorem ipsum dolor sit amet.</p>
             <button className='HeroExploreButton my-3'>Shop Now <i class="fa-solid fa-arrow-right p-1"></i> </button>
           </div>
         </div>

        </div> */}
          </SwiperSlide>
          <SwiperSlide className="slideDiv">
            <div className="heroSlidImgDiv">
              <img
                className="slidImg"
                src="https://mixtas.novaworks.net/wp-content/uploads/2024/01/m2_slide_02-scaled.jpg"
                alt=""
              />
            </div>

            <div className="slideTextContentMainDiv">
              <div className="flex justify-center lg:justify-start items-center contenTextDiv mx-0 lg:mx-24 xl:mx-24">
                <div className="slidTextDiv text-start lg:text-start xl:text-start md:text-start">
                  <h1 className="heroTagText">NEW ARRIVALS</h1>
                  <h1 className="hero2ndTagText">Stylish</h1>
                  <p className="hero2ndTagText w-72 lg:w-full">
                    Comfort for Fall Night
                  </p>
                  <div className="my-3 lg:my-5">
                    <button className="heroButton px-3 lg:px-6 xl:px-6 py-1 lg:py-3 rounded-sm">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='slideDiv' style={{ backgroundImage: `url(https://i.ibb.co/1dW2ccN/banner3-img-min-1-1.jpg)`
      }}>
        

        <div className='sliderTextMainDiv'>
           <div className='sliderTextDiv'>
             <h1 className='heroSliderheadLine'>Wellcome to Empire</h1>
             <p className='heroSliderPera my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit in.Lorem ipsum dolor sit amet.</p>
             <button className='HeroExploreButton my-3'>Shop Now <i class="fa-solid fa-arrow-right p-1"></i> </button>
           </div>
         </div>

        </div> */}
          </SwiperSlide>
          <SwiperSlide className="slideDiv">
            <div className="heroSlidImgDiv">
              <img
                className="slidImg"
                src="https://mixtas.novaworks.net/wp-content/uploads/2024/01/m2_slide_03-scaled.jpg"
                alt=""
              />
            </div>

            <div className="slideTextContentMainDiv">
              <div className="flex justify-center lg:justify-start items-center contenTextDiv mx-0 lg:mx-24 xl:mx-24">
                <div className="slidTextDiv text-start lg:text-start xl:text-start md:text-start">
                  <h1 className="heroTagText">NEW ARRIVALS</h1>
                  <h1 className="hero2ndTagText">Stylish</h1>
                  <p className="hero2ndTagText w-72 lg:w-full">
                    Comfort for Fall Night
                  </p>
                  <div className="my-3 lg:my-5">
                    <button className="heroButton px-3 lg:px-6 xl:px-6 py-1 lg:py-3 rounded-sm">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='slideDiv' style={{ backgroundImage: `url(https://i.ibb.co/1dW2ccN/banner3-img-min-1-1.jpg)`
      }}>
        

        <div className='sliderTextMainDiv'>
           <div className='sliderTextDiv'>
             <h1 className='heroSliderheadLine'>Wellcome to Empire</h1>
             <p className='heroSliderPera my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit in.Lorem ipsum dolor sit amet.</p>
             <button className='HeroExploreButton my-3'>Shop Now <i class="fa-solid fa-arrow-right p-1"></i> </button>
           </div>
         </div>

        </div> */}
          </SwiperSlide>
          {/* <SwiperSlide className='slideDiv'>
        
        <div className='heroSlidImgDiv'>  
            <img className='slidImg' src="https://mixtas.novaworks.net/wp-content/uploads/2024/01/m2_slide_02-scaled.jpg" alt="" />
        </div>

        <div className='slideTextContentMainDiv'>
            <div className='flex justify-start items-center contenTextDiv mx-24'>
              <div className='TextDiv '>
                  <h1 className='heroTagText'>NEW ARRIVALS</h1>
                  <h1 className='hero2ndTagText'>Stylish</h1>
                  <p className='hero2ndTagText'>Comfort for Fall Night</p>
                    <div className='my-5'>
                        <button className='heroButton px-6 py-3 rounded-sm'>Shop Now</button>
                     </div>
              </div>
            </div>
            
        </div>
        
      
        </SwiperSlide> 
      <SwiperSlide className='slideDiv'>
        
        <div className='heroSlidImgDiv'>  
            <img className='slidImg' src="https://mixtas.novaworks.net/wp-content/uploads/2024/01/m2_slide_03-scaled.jpg" alt="" />
        </div>

        <div className='slideTextContentMainDiv'>
            <div className='flex justify-start items-center contenTextDiv mx-24'>
              <div className='TextDiv '>
                  <h1 className='heroTagText'>NEW ARRIVALS</h1>
                  <h1 className='hero2ndTagText'>Stylish</h1>
                  <p className='hero2ndTagText'>Comfort for Fall Night</p>
                    <div className='my-5'>
                        <button className='heroButton px-6 py-3 rounded-sm'>Shop Now</button>
                     </div>
              </div>
            </div>
            
        </div>
        
        
        </SwiperSlide>  */}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeHeroSection;
