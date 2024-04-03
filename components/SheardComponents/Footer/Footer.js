import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-20">
      <section className="fotterBg py-16 px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 lg:gap-10">
          <div>
            <div className="footerLogoDiv">
              <img
                className="footerLogo"
                src="https://mixtas.b-cdn.net/wp-content/themes/mixtas/assets/images/logo_light.svg"
                alt=""
              />
            </div>
            <div className="font-light my-4">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, veniam!
              </p>
              <p className="text-white text-lg mt-2">Help Line: 0000000000</p>
            </div>
          </div>
          <div>
            <div className="flex-none lg:flex md:flex-none justify-center">
              <div>
                <p className="text-white text-xl">About Us</p>
                <ul className="text-white my-4">
                  <Link href="" mb-2>
                    <li>Home</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Shope</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Best Sell</li>
                  </Link>
                  <Link href="" mb-2>
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white">
            <div>
              <p className="text-xl">Get Ouer Mamber Ship</p>
            </div>
            <div className="my-4">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <ul>
              <Link href="">
                <li>Register Now</li>
              </Link>
            </ul>
          </div>
          <div className="">
            <div>
              <p className="text-xl text-white">Get In Tuch</p>
            </div>
            {/* input */}
            <form className="my-4 footerInputDiv">
              <div className="">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="footerButtonDiv flex items-center">
                <button className="px-4"><i class="fa-solid fa-arrow-right setgit text-black text-2xl"></i></button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
