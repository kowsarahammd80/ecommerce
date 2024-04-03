import React from "react";
import "./TrandingItems.css";

const TrandingItems = () => {
  return (
    <div>
      <section className="py-10 lg:py-20 xl:py-20 md:py-20 mx-4 xl:mx-28 lg:mx-28 md:mx-16">
        {/* header section start */}

        <section>
          <div className="flex-none lg:flex justify-between items-center w-full">
            <div className="">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Trandin Items
              </h1>

              <p className="font-light lg:font-normal text-muteColor my-3 lg:my-4">
                Shop the latest products from the most popular items
              </p>

              {/* <label className="input input-bordered flex items-center gap-2 w-full my-2">
                <input type="text" className="grow" placeholder="Search" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label> */}
            </div>

            <div className="flex items-center cursor-pointer">
              <h1 className="text-gray-500">See More Items </h1>
              <span className="text-gray-400 ms-1">
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </section>

        {/* Items Section staer*/}

        <section className="py-5">

          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 gap-x-6"> 

            <div className="cardMainDiv">
              <div className="imageDiv">
                <img
                  src="https://img.ltwebstatic.com/images3_pi/2021/09/24/163247162950ecd7e22909c61062f2814e28818c0a_thumbnail_750x.webp"
                  alt=""
                  className="trandingImage"
                />
              </div>
                 
              <div className="flex justify-between text-white offerTagDiv">
                   <div>
                   <span className=" text-sm newTag px-2 font-semibold ms-1">New</span>
                   <br />
                   {/* <span className="text-sm offerTag px-2 font-semibold ms-1">50%</span> */}
                   </div>
                   <div>
                   {/* <span className=" text-sm stockInTag px-2 font-semibold me-1">Stokin</span> */}
                   {/* <br /> */}
                   <span className="text-sm stockOutTag px-2 font-semibold me-1">Stock Out</span>  
                   </div>
              </div>

               <div className="cardAddToDiv ">
  
               <div className=" flex justify-end">              
                
                <div className="me-3">
                  <p className="iconP my-3">
                    <i class="fa-solid fa-heart text-black text-sm lg:text-sm p-2 lg:p-3 xl:p-3 md:p-2"></i>
                  </p>
                  <p className="iconP">
                    <i class="fa-solid fa-cart-shopping text-sm text-black lg:text-sm p-2 lg:p-3 xl:p-3 md:p-2"></i>
                     
                  </p>
                </div>

               </div>

               <div className="h-4/6 lg:h-3/5 xl:h-4/6 md:h-3/4 flex items-end p-3 w-full">
                   <button className="w-full iTemsByButton">Buy Now</button>
               </div>           

               </div>
              

              <div className="mt-4 ms-1">
                <h1 className="itemName"> Black Print T-Shirt</h1>
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="itemsMoney">100 TK</p>
                    </div>
                    <div className="me-1 felx justify-around starDiv">
                      <span>
                        <i class="fa-solid fa-star me-1"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star me-1"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star me-1"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star me-1"></i>
                      </span>
                      <span>
                        <i class="fa-regular fa-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           

        
          </div>
        </section>
      </section>
    </div>
  );
};

export default TrandingItems;
