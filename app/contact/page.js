import React from "react";

const ContactPage = () => {
  return (
    <div className="pt-20 mx-5 lg:mx-24 xl:mx-24 md:mx-16">
      <div className="text-center">
        <h1 className="HeadLine ">Contact Us</h1>
        <span>Home</span> <span>/</span> <span>Contact</span>
      </div>

      <section className="my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          <div className="">
            <div>
              <h1 className="text-3xl">Get In tuch</h1>
            </div>
            <form className="border p-5 my-3">
              <p className="mb-1">Your Name</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mb-3"
              />
              <p className="mb-1">Cntact Number</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mb-3"
              />
              <p className="mb-1">Email</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mb-3"
              />
              <p className="mb-1">Your Sunject</p>
              <textarea
                className="textarea textarea-bordered w-full h-24"
                placeholder="Your Subject"
              ></textarea>
              <button className="mt-5 w-full bg-black text-white py-3 rounded">
                Submit
              </button>
            </form>
          </div>

          <div className="w-full">
            <div>
              <h1 className="text-3xl">Contact Info</h1>
            </div>
            <div className="flex items-center h-full w-full">
              <div className="w-full">
                <div className="border p-3 w-full flex items-center my-4">
                <p className="text-4xl">
                  <i class="fa-solid fa-location-dot"></i>
                </p>
                <p className="ms-5 text-lg font-semibold">Jahirul Islam City, Aftab Nagar, House-10, Road-10, Sector-3, Block-A </p>
                </div>
                <div className="border p-3 w-full flex items-center my-4">
                <p className="text-4xl">
                <i class="fa-solid fa-phone"></i>
                </p>
                <p className="ms-5 text-lg font-semibold"> +880176-0075031 </p>
                </div>
                <div className="border p-3 w-full flex items-center my-4">
                <p className="text-4xl">
                <i class="fa-solid fa-envelope"></i>
                </p>
                <p className="ms-5 text-lg font-semibold"> companygmail@gmail.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}
     
     <section className="my-16">
       <div>
       <iframe className="w-full h-60"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4538398677378!2d90.42399048012324!3d23.76684802363333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c724c210ee87%3A0xe915e5903ff62b6c!2sAftabnagar%20B%20Block!5e0!3m2!1sen!2sbd!4v1715683241383!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
     </section>

    </div>
  );
};

export default ContactPage;
