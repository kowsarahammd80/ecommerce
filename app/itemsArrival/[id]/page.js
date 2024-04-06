import React from "react";
import "./singleProductBy.css";

const DinamicDetailsSingleItems = () => {
  return (
    <div className="pt-16">
      <section className="mx-8 lg:mx-24 xl:mx-24 md:mx-12">
        <div className="my-1">
          <p className="opacity-75">Nylon shopper bag with pockets</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="productShowMainDiv  mb-5">
            <div className="itemDispleLarzeDiv">
              <img
                className="itemDispleLarzeImage"
                src="https://mixtas.b-cdn.net/wp-content/uploads/2024/01/m10_01_1.jpg"
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-2 my-3">
              <div className="itemsSideImgDiv">
                <img
                  className="itemsSideImg"
                  src="https://mixtas.b-cdn.net/wp-content/uploads/2024/01/m10_03_1.jpg"
                  alt=""
                />
              </div>
              <div className="itemsSideImgDiv">
                <img
                  className="itemsSideImg"
                  src="https://mixtas.b-cdn.net/wp-content/uploads/2024/01/m10_03_1.jpg"
                  alt=""
                />
              </div>
              <div className="itemsSideImgDiv">
                <img
                  className="itemsSideImg"
                  src="https://mixtas.b-cdn.net/wp-content/uploads/2024/01/m10_03_1.jpg"
                  alt=""
                />
              </div>
              <div className="itemsSideImgDiv">
                <img
                  className="itemsSideImg"
                  src="https://mixtas.b-cdn.net/wp-content/uploads/2024/01/m10_03_1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="self-start sticky left-0">
            <div className="headlineDiv">
              <h1 className="itemsNameHeadLine">
                Nylon shopper bag with pockets
              </h1>
              <p className="singleItemsPrice mt-5 mb-3">$69.99</p>
            </div>
            <div className="reviewDiv my-5 cursor-pointer">
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-solid fa-star me-1"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="border-t">
              <div className="my-5">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
                  hic porro nesciunt voluptas sint reiciendis aliquid. Minus,
                  consequuntur excepturi tenetur minima tempora reprehenderit
                  cumque eum illum neque. Dolorum id beatae in nulla officia.
                  Deserunt repellendus odio at, molestias voluptates officia
                  facilis architecto reiciendis culpa. Perspiciatis minus sit
                  accusamus voluptates! Quod. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Neque omnis aliquam quis
                  praesentium eius reiciendis quae, dicta aliquid beatae unde!
                </p>
              </div>
              <div className="">
                <span className="text-lg sizeText">Size : Small</span>
                <div className="grid grid-cols-4 lg:grid-cols-5 gap-2 my-5">
                  <button className="sixeButton border activeSixeButton p-1">
                    Small
                  </button>
                  <button className="sixeButton border p-1">Medium</button>
                  <button className="sixeButton border p-1">Large</button>
                </div>
              </div>
            </div>
            <div className="itemsCountDiv flex items-center my-5">
              <div className="countButtonDiv border">
                <button className="py-2 lg:py-3 xl:py-3 md:py-2 px-4 lg:px-8 xl:px-8 md:px-4 text-lg opacity-50">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span className="text-lg opacity-60">1</span>
                <button className="py-2 lg:py-3 xl:py-3 md:py-2 px-4 lg:px-8 xl:px-8 md:px-6 text-lg opacity-50">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="ms-5">
                <button className="border py-2 lg:py-3 xl:py-3 md:py-2 px-5 lg:px-8 xl:px-8 md:px-4 itemsAddToCardButton flex items-center">
                  Add To Bag{" "}
                  <svg
                    className="mt-1 ms-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <path
                      d="M3.50856 19.643H13.6343C15.4114 19.643 16.8571 18.1972 16.8571 16.4201V6.78582C16.8571 6.47153 16.6 6.21439 16.2857 6.21439H12.8571V5.35725C12.8571 2.99439 10.9343 1.07153 8.57142 1.07153C6.20856 1.07153 4.2857 2.99439 4.2857 5.35725V6.21439H0.857134C0.542848 6.21439 0.285706 6.47153 0.285706 6.78582V16.4201C0.285706 18.1972 1.73142 19.643 3.50856 19.643ZM5.42856 5.35725C5.42856 3.62296 6.83713 2.21439 8.57142 2.21439C10.3057 2.21439 11.7143 3.62296 11.7143 5.35725V6.21439H5.42856V5.35725ZM1.42856 7.35725H4.2857V8.78582C4.2857 9.1001 4.54285 9.35725 4.85713 9.35725C5.17142 9.35725 5.42856 9.1001 5.42856 8.78582V7.35725H11.7143V8.78582C11.7143 9.1001 11.9714 9.35725 12.2857 9.35725C12.6 9.35725 12.8571 9.1001 12.8571 8.78582V7.35725H15.7143V16.4201C15.7143 17.5658 14.78 18.5001 13.6343 18.5001H3.50856C2.36285 18.5001 1.42856 17.5658 1.42856 16.4201V7.35725Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="byNowButtonDiv mb-3">
              <button className="itemsBuyNowButton p-4 md:p-3">Buy Now </button>
            </div>
            <div className="border-t">
              <div className="my-3">
                <p>Our Payment Method</p>
              </div>
              <div className="paymentMethodIconDiv flex">
                <img
                  className="paymentMethodIcon "
                  src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg"
                  alt=""
                />
                <img
                  className="paymentMethodIcon ms-4"
                  src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png"
                  alt=""
                />
                <img
                  className="paymentMethodIcon ms-4"
                  src="https://play-lh.googleusercontent.com/cCVvEEwDQSPmDO8F-kryWhvzy53JllG1FGtHGDG-SDgfVTvvYSvWEXXDbgAY0hf7Bg"
                  alt=""
                />
                <img
                  className="paymentMethodIcon ms-4"
                  src="https://iconape.com/wp-content/png_logo_vector/dutch-bangla-rocket-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* reiew */}

      <section className="mx-8 lg:mx-24 xl:mx-24 md:mx-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 border-t gap-3 lg:gap-10">
          <div className="clientReviewMainDiv my-3 lg:my-5 xl:my-5 border-b lg:border-b-0 xl:border-b-0">
            <h1 className="text-lg lg:text-xl xl:text-xl md:text-xl font-semibold">CUSTOMER REVIEWS</h1>
            <div>
              <p className="font-semibold opacity-70 mt-3">Rating</p>
              <div className="reviewDiv cursor-pointer">
                <i class="fa-regular fa-star me-1"></i>
                <i class="fa-regular fa-star me-1"></i>
                <i class="fa-regular fa-star me-1"></i>
                <i class="fa-regular fa-star me-1"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <form>
               <div className="my-3">
                 <p className="font-semibold opacity-60 mb-2">Review Title</p>
                 <input type="text" placeholder="Type your review" className="input input-bordered w-full max-w-lg" />
               </div>
               <div className="my-3">
                 <p className="font-semibold opacity-60 mb-2">Review</p>
                 <textarea className="textarea textarea-bordered w-full max-w-lg h-36" placeholder="Right Your Review"></textarea>
               </div>
               <div className="my-3">
                 <p className="font-semibold opacity-60 mb-2">Product Image</p>
                 <input type="file" className="file-input file-input-bordered w-full max-w-lg" />
               </div>
               <div className="my-3">
                 <p className="font-semibold opacity-60 mb-2">Name</p>
                 <input type="text" placeholder="Type your Name" className="input input-bordered w-full max-w-lg" />
               </div>
               <div className="my-3">
                 <p className="font-semibold opacity-60 mb-2">Email</p>
                   <input type="text" placeholder="Type your Email" className="input input-bordered w-full max-w-lg" />
               </div>
               <div className="reviewPolicyTextDiv">
                  <p className="opacity-70 my-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit commodi voluptatibus reiciendis repellat sed eaque deserunt consectetur distinctio culpa quia.</p>
               </div>

               <div className="mb-5">
                  <button className="bg-black p-3 text-white font-semibold reviewPolicyTextDiv"> Submit Review </button>
               </div>

            </form>
          </div>

          <div className="clientReviewMainDiv my-2 lg:my-5 xl:my-5">
            <h1 className="text-lg lg:text-xl xl:text-xl md:text-xl font-semibold">CUSTOMER REVIEWS SHOW</h1>

            <div className="">
               <div className="my-5 border-b">
                  <div className="reviewDiv cursor-pointer w-full my-2">
                     <div>
                       <p className="font-semibold">DREA LYNN</p>
                     </div>
                   <i class="fa-solid fa-star me-1"></i>
                   <i class="fa-solid fa-star me-1"></i>
                   <i class="fa-solid fa-star me-1"></i>
                   <i class="fa-solid fa-star me-1"></i>
                   <i class="fa-regular fa-star"></i>
                   <div>
                   <p>16/3/2024</p>
                  </div>
                 </div>
                
                 <div className="w-full">
                    <p className="w-full mb-4 text-justify">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, magnam dignissimos in consectetur, ratione voluptatem adipisci accusantium, quibusdam cumque facere inventore tempore eum illum! Atque enim excepturi sint hic. Repudiandae ullam nisi beatae vero ratione tenetur quam, maxime fugiat ad.
                    </p>
                    <div className="reviewImageDiv mb-3">
                       <img className="reviewImage" src="https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m1_12_2-700x700.jpg" alt="" />
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DinamicDetailsSingleItems;
