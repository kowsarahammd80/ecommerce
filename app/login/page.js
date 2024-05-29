import React from "react";
import Link from "next/link";

const LogInPage = () => {
  return (
    <div className="pt-16 mx-5 lg:mx-24 xl:mx-24 md:mx-16">
      <h1 className="HeadLine text-center mt-5">Log In</h1>
      <section className="flex justify-center my-10">
        <div className="w-full lg:w-4/12 xl:w-4/12 md:w-8/12">
          <form action="">
            <p className="mb-2">Your Email</p>
            <input
              type="text"
              placeholder="Type here email"
              className="input input-bordered w-full mb-4"
            />
            <p className="mb-2">Your Password</p>
            <input
              type="text"
              placeholder="Type here password"
              className="input input-bordered w-full mb-4"
            />
            <p className="text-sm"> Lost your password ? </p>
            <button className="bg-black text-white font-semibold mt-5 mb-4 w-full py-3 rounded">Login</button>
            <Link href='/register' className="text-sm text-center">Not a mamber ? <span className="cursor-pointer font-semibold underline">Register</span></Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LogInPage;
