import React from "react";

const UserSettingPage = () => {
  return (
    <div>
      {/* besic info secrtion */}

      <section className="border p-5 rounded">
        <h1 className="text-xl lg:text-3xl xl:text-3xl font-semibold">Becie Info</h1>
        <form className="grid grid-cols-1 lg:grid-cols-1 xl:gird-cols-1 gap-5 my-10">
          <div>
            <p className="mb-2">Name</p>
            <input
              type="text"
              readOnly
              placeholder="Md. Kowsar Ahamde"
              className="input input-bordered w-full mb-2"
            />
            <p className="mb-2">Number</p>
            <input
              type="text"
              readOnly
              placeholder="01760075031"
              className="input input-bordered w-full mb-2"
            />
            <p className="mb-2">Email</p>
            <input
              type="text"
              readOnly
              placeholder="kowsar@gmail.com"
              className="input input-bordered w-full mb-2"
            />
          </div>
          <div>
            <p className="mb-2">Address</p>
            <textarea
              className="textarea textarea-bordered w-full h-36"
              placeholder="Jahirul islam city, aftab nagar, B-A,S-2,R-3,H-20,Dhaka-1212"
              readOnly
            ></textarea>
          </div>
          <div>
             <button className="bg-black text-white px-2 lg:px-4 py-2 lg:py-3 rounded">Save Change</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserSettingPage;
