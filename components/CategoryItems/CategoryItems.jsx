"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }


const CategoryItems = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
        //       nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
            }
          }
        ]
      };
    return (
        <div className='py-10 mx-3 lg:mx-24 xl:mx-24 md:16'>


            {/* slider */}
           <section className='my-5 p-5'>
            
           <div>
                <h1 className='text-2xl font-semibold my-1'>Slect your catagory</h1>
            </div>
           <Slider {...settings}>
             <div className='p-2'>
      <div className="card w-full  image-full">
  <figure><img src="https://www.shutterstock.com/image-photo/young-man-wearing-white-blank-260nw-328594940.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center items-center h-full">
      <button className="btn ">Boys</button>
    </div>
  </div>
</div>
              </div>
             <div className='p-2'>
      <div className="card w-full  image-full">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center items-center h-full">
      <button className="btn ">Boys</button>
    </div>
  </div>
</div>
              </div>
             <div className='p-2'>
      <div className="card w-full  image-full">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center items-center h-full">
      <button className="btn ">Boys</button>
    </div>
  </div>
</div>
              </div>
             <div className='p-2'>
      <div className="card w-full  image-full">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center items-center h-full">
      <button className="btn ">Boys</button>
    </div>
  </div>
</div>
              </div>
             <div className='p-2'>
      <div className="card w-full  image-full">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    
    <div className="card-actions justify-center items-center h-full">
      <button className="btn ">Boys</button>
    </div>
  </div>
</div>
              </div>
     
    </Slider>
          </section>

        </div>
    );
};

export default CategoryItems;