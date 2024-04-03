import React from "react";
import "./Branding.css";

const Branding = () => {
  return (
    <div>
      <section className="my-5">
        <div className="brandingImageDiv">
          <img
            className="brandingImage"
            src="https://shreethemes.in/cartzio/layouts/assets/images/hero/bg6.jpg"
            alt=""
          />
          <div className="brandingContentDiv flex items-center justify-center">
            <div className="text-center mx-5 lg:mx-80 xl:mx-80 md:mx-52">
              <p className="text-white text-lg lg:text-3xl xl:text-3xl md:text-lg font-semibold mb-3 mx-6 lg:mx-24">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-white text-sm font-extralight lg:text-xl xl:text-xl md:text-sm mb-3 mx-10 lg:mx-24 xl:mx-24 md:mx-10">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
              <button className="border bg-white py-1 lg:py-2 px-3 lg:px-6 font-semibold text-sm rounded"> Shop Now </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branding;
