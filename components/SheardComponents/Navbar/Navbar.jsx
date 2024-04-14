"use client";

import Link from "next/link";
import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="fixed z-50 w-full shadow-sm navBar-background">
      <header className="mx-0 xl:mx-16 lg;mx-16">
        {/* <Image src={navLogo} alt="" className='navLogo-set'/> */}

        <Link href="/" className=" cursor-pointer font-semibold navTeaxt">
          <div className="navLogoDiv">
            <img
              className="navLog"
              src="https://mixtas.b-cdn.net/wp-content/themes/mixtas/assets/images/logo.svg"
              alt=""
            />
          </div>
        </Link>

        <nav
          ref={navRef}
          onClick={showNavbar}
          className="nav-link mt-0 lg:mt-2 xl:mt-2"
        >
          <Link className="navLink-hover" href="/">
            Home
          </Link>
          <Link className="navLink-hover" href="/theShop/2">
            Shope
          </Link>
          <Link className="navLink-hover" href="/itemsArrival">
            Best Sell
          </Link>
          <Link onClick={showNavbar} className="navLink-hover" href="">
            Contact
          </Link>

          <button className="nav-btn nav-close-btn">
            <i class="fa-regular fa-circle-xmark"></i>
          </button>
        </nav>

        <div className="ms-20">
          <Link href="" className="navAvatar ms-4 me-3 lg:me-5 xl:me-5 md:me-4">
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <g clip-path="url(#clip0_188_1484)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.10276 1.53575C1.83186 2.44932 -0.014983 4.82626 0.26654 8.33725C0.477821 10.9722 1.93049 13.1153 3.64664 14.7279C5.36367 16.3412 7.39577 17.4739 8.89721 18.0966C9.41075 18.3095 9.98779 18.3219 10.512 18.1223C12.0881 17.5221 14.1129 16.3949 15.8125 14.7748C17.5105 13.1563 18.9254 11.004 19.1783 8.35972C19.6544 4.79448 17.7508 2.42314 15.4153 1.52878C13.4653 0.782019 11.0862 1.04962 9.7063 2.64136C8.31911 1.03756 6.02213 0.763589 4.10276 1.53575ZM4.59785 2.76642C6.37434 2.05175 8.28816 2.53025 9.1221 4.13032C9.23724 4.35131 9.46656 4.48909 9.71577 4.487C9.96498 4.48493 10.192 4.34333 10.3035 4.12045C11.0791 2.56964 13.0744 2.05275 14.941 2.76758C16.7373 3.45545 18.2576 5.26658 17.8619 8.19549C17.8607 8.20434 17.8596 8.21327 17.8588 8.22211C17.6487 10.4557 16.4499 12.3346 14.8972 13.8147C13.3432 15.2959 11.4761 16.3357 10.0401 16.8826C9.8371 16.9598 9.61062 16.9563 9.40536 16.8713C8.01666 16.2954 6.13049 15.2415 4.55499 13.7611C2.9786 12.28 1.76454 10.4225 1.58883 8.23122C1.35374 5.29932 2.86493 3.46358 4.59785 2.76642Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <span className="cartNoti px-1">2</span>
          </Link>

          <Link href="" className="navAvatar me-3 lg:me-5 xl:me-5 md:me-4 ">
            <svg
              className="mt-1"
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
            <span className="cartNoti px-1">5</span>
          </Link>

          <Link href="/userProfile" className="navAvatar me-4 lg:me-0 xl:me-0 md:me-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <g clip-path="url(#clip0_188_1479)">
                <path
                  d="M0.833313 19.6666C0.833313 15.0641 4.56415 11.3333 9.16665 11.3333H10.8333C15.4358 11.3333 19.1666 15.0641 19.1666 19.6666"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 11.3333C12.7614 11.3333 15 9.09468 15 6.33325C15 3.57183 12.7614 1.33325 10 1.33325C7.23858 1.33325 5 3.57183 5 6.33325C5 9.09468 7.23858 11.3333 10 11.3333Z"
                  stroke="currentColor"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_188_1479">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0 0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </header>
    </div>
  );
};

export default Navbar;
