import React from "react";

const UserProfileNav = () => {
  return (
    <div className="">
      <div>
        <span className="opacity-60 font-light">Home / Deshboard</span>
      </div>
      <div>
        <h1 className="text-3xl lg:text-4xl my-8">My Account</h1>
      </div>
      {/* pc */}
      <section className="hidden lg:block">
        <div className="border-b">
           <p className="my-5 flex items-center"><span className="text-2xl me-2"><i class="fa-solid fa-table-columns"></i></span>Deshboard</p>
        </div>
        <div className="border-b">
           <p className="my-5 flex items-center"><span className="text-2xl me-2"><i class="fa-solid fa-clipboard-list"></i></span>Orders</p>
        </div>
        <div className="border-b">
           <p className="my-5 flex items-center"><span className="text-2xl me-2"><i class="fa-regular fa-file-lines"></i></span>Address</p>
        </div>
        <div className="border-b">
           <p className="my-5 flex items-center"><span className="text-2xl me-2"><i class="fa-regular fa-user"></i></span>Setting</p>
        </div>
        <div className="border-b">
           <p className="my-5 flex items-center"><span className="text-2xl me-2"><i class="fa-solid fa-arrow-right-from-bracket"></i></span>Log Out</p>
        </div>
      </section>
      {/* phone */}
      <section className="block lg:hidden">
         <div className="grid grid-cols-3 gap-4">
            <p className="border-b text-center p-1"><span className=""></span> Deshboard</p>
            <p className="border-b text-center p-1"><span></span> Orders</p>
            <p className="border-b text-center p-1">Addresss</p>
            <p className="border-b text-center p-1">Setting</p>
            <p className="border-b text-center p-1">Log out</p>
         </div>
      </section>
    </div>
  );
};

export default UserProfileNav;
