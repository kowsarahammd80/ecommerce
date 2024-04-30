import UserProfileNav from "@/components/SheardComponents/UserProfileNav/UserProfileNav";
import React from "react";

const UserProfileLayOut = ({ children }) => {
  return (
    <div className="pt-20 mx-5 lg:mx-24">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="">
            <UserProfileNav/>
        </div>
       <div className="col-span-1 lg:col-span-3 flex items-center">
         <div className="w-full">
          {children}
         </div>
       </div>
      </section>
    </div>
  );
};

export default UserProfileLayOut;
