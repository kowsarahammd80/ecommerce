import React from "react";

const UserOrderPage = () => {
  return (
    <div className="">
      <div className="mb-10">
        <h1 className="text-2xl">Your Order List</h1>
      </div>
      {/* <section className="w-full overflow-x-scroll lg:overflow-x-hidden">
        <div className="grid grid-cols-7 bg-black text-white text-xl p-3 text-center rounded">
           <p>Date</p>
           <p>Order Id</p>
           <p>Name</p>
           <p>Number</p>
           <p>Quantity</p>
           <p>Totals</p>
           <p>Ditails</p>
        </div>
        <div className="grid grid-cols-7 text-xl p-3 text-center my-2 border-b hover:bg-gray-200">
           <p>12-12-2024</p>
           <p>12345678</p>
           <p>Shuvo</p>
           <p>01760075031</p>
           <p>12</p>
           <p>12000</p>
           <p className="bg-black text-white rounded text-lg cursor-pointer">Ditails</p>
        </div>
        <div className="grid grid-cols-7 text-xl p-3 text-center my-2 border-b hover:bg-gray-200">
           <p>12-12-2024</p>
           <p>12345678</p>
           <p>Shuvo</p>
           <p>01760075031</p>
           <p>12</p>
           <p>12000</p>
           <p className="bg-black text-white rounded text-lg cursor-pointer">Ditails</p>
        </div>
      </section> */}
      <section>
      <div className=" overflow-x-scroll  lg:overflow-x-hidden">
  <table className="table table-zebra my-5">
    {/* head */}
    <thead className="bg-black text-white text-center">
      <tr className="">
        <th>Date</th>
        <th>Order Id</th>
        <th>Nammber</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Detials</th>
      </tr>
    </thead>
    <tbody className="text-center">
      <tr>
      <td className=""> 12/12/2024</td>
      <td className="">12345678</td>
        <td className="">01760075031</td>
        <td className="">Md. Kowsar Ahamed Shuvo</td>
        <td className="">1200</td>
        <td className="">120000</td>
        <td className=""><span className="bg-black text-white px-3 py-2">Details</span></td>
      </tr>
    </tbody>
  </table>
</div>
      </section>
    </div>
  );
};

export default UserOrderPage;
