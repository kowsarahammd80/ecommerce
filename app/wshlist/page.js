import React from 'react';

const WisListPage = () => {

    return (
        <div className="pt-20 mx-5 lg:mx-24">
        <div>
          <p className="opacity-60 my-8">
            <span className="font-normal lg:font-semibold xl:font-semibold">
              Home
            </span>{" "}
            <span>/</span>{" "}
            <span className="font-normal lg:font-semibold xl:font-semibold">
              {" "}
              Wishlist
            </span>
          </p>
          <p className="text-xl lg:text-3xl xl:text-3xl font-semibold">
            Your Wishlist
          </p>
        </div>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* product section */}
            <div className=" overflow-x-scroll  lg:overflow-x-hidden col-span-1 lg:col-span-2">
              <table className="table table-zebra my-5">
                {/* head */}
                <thead className="bg-black text-white text-center">
                  <tr className="">
                    <th>Product</th>
                    <th>Price</th>
                    <th>Variation</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="">
                      <div className="flex items-center">
                        <div className="addToCardProductImgDiv">
                          <img
                            className="addToCardProductImg"
                            src="
                  https://mixtas.b-cdn.net/wp-content/uploads/2023/12/m1_09_2-700x700.jpg"
                            alt=""
                          />
                        </div>
                        <p className="ms-2">Lorem ipsum dolor sit amet.</p>
                      </div>
                    </td>
                    <td className="">1200 TK</td>
                    <td className="">Small</td>
                    <td>
                      <div className="border flex justify-evenly items-center p-2">
                        <span className="p-3 lg:p-1">
                          <i class="fa-solid fa-minus"></i>
                        </span>
                        <span className="text-lg">1</span>
                        <span className="p-3 lg:p-1">
                          <i class="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </td>
                    <td className="">1200 TK</td>
                    <td className="">
                      <span className="bg-black text-white px-3 py-2">
                        <i class="fa-regular fa-trash-can"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="my-5 bg-black text-white px-5 py-2 font-normal lg:font-semibold xl:font-semibold">
                {" "}
                <i class="fa-solid fa-arrow-left-long me-3"></i> Continue Shopping
              </button>
            </div>
  
            {/* total box */}
            <div>
              <div className="my-5 border p-3">
                <div className="flex justify-around">
                  <div>
                    <p className="text-lg font-semibold">Total</p>
                    <p className="text-sm opacity-60">without shippping cost</p>
                  </div>
                  <p className="font-semibold">1200 TK</p>
                </div>
                <div className="my-10 flex justify-center ">
                  <button className="bg-black text-white px-5 py-2 font-normal lg:font-semibold xl:font-semibold">
                    Proceed To Checkout
                    <i class="fa-solid fa-arrow-right-from-bracket ms-3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

};

export default WisListPage;