import React from "react";
import Link from "next/link";

const UserProfileNav = () => {
  return (
    <div className="">
      <div>
        <span className="opacity-60 font-light"> Home / Deshboard </span>
      </div>
      <div>
        <h1 className="text-3xl lg:text-4xl my-8"> My Account </h1>
      </div>
      {/* pc */}
      <section className="hidden lg:block">
        <Link href="/userProfile">
          <div className="border-b">
            <p className="my-5 flex items-center">
              <span className="text-2xl me-2">
                <i class="fa-solid fa-table-columns"></i>
              </span>
              Deshboard
            </p>
          </div>
        </Link>
        <Link href="/userProfile/userOrder">
          <div className="border-b">
            <p className="my-5 flex items-center">
              <span className="text-2xl me-2">
                <i class="fa-solid fa-clipboard-list"></i>
              </span>
              Orders
            </p>
          </div>
        </Link>
        {/* <Link href=''>
        <div className="border-b">
           <p className="my-5 flex items-center"><span className="text-2xl me-2"><i class="fa-regular fa-file-lines"></i></span>Address</p>
        </div>
        </Link> */}
        <Link href="/userProfile/userSetting">
          <div className="border-b">
            <p className="my-5 flex items-center">
              <span className="text-2xl me-2">
                <i class="fa-solid fa-gears"></i>
              </span>
              Setting
            </p>
          </div>
        </Link>
        <Link href="/login">
          <div className="border-b">
            <p className="my-5 flex items-center opacity-40">
              <span className="text-2xl me-2">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </span>
              Log Out
            </p>
          </div>
        </Link>
      </section>
      {/* phone */}
      <section className="block lg:hidden">
        <div className="grid grid-cols-3 gap-4">
          <Link href='/userProfile'>
            <p className="border-b text-center p-1">
              <span className=""></span> Deshboard
            </p>
          </Link>
          <Link href='/userProfile/userOrder'>
            <p className="border-b text-center p-1">
              <span className=""></span> Orders
            </p>
          </Link>
          <Link href='/userProfile/userSetting'>
            <p className="border-b text-center p-1">
              <span className=""></span>Setting
            </p>
          </Link>
          <Link href='/login'>
            <p className="border-b text-center p-1 opacity-45">
              Log out
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UserProfileNav;
