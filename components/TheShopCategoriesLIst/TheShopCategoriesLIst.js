import React from "react";
import Link from "next/link";

const TheShopCategoriesLIst = () => {
  return (
    <div className="pt-20">
      <div>
        <div className="text-center">
          <h1 className="HeadLine">The Shop</h1>
          <p className="latestProductText mx-10">TOP PRODUCTS CHOOSE YOUR CATEGORY</p>
        </div>
        <div className="flex justify-center">
          <div className="my-5">
            <Link href="/theShop/tshirt">
              <button className="bg-black text-white py-0 lg:py-1 px-2 lg:px-3 me-1 lg:me-2 rounded-lg">
                T-Shirt
              </button>
            </Link>
            <Link href="/theShop/shirt">
              <button className="bg-black text-white py-0 lg:py-1 px-2 lg:px-3 me-1 lg:me-2 rounded-lg">
                Shirt
              </button>
            </Link>
            <Link href="/theShop/panjabi">
              <button className="bg-black text-white py-0 lg:py-1 px-2 lg:px-3 me-1 lg:me-2 rounded-lg">
                Panjabi
              </button>
            </Link>
            <Link href="/theShop/panjabi">
              <button className="bg-black text-white py-0 lg:py-1 px-2 lg:px-3 me-1 lg:me-2 rounded-lg">
                Pant
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheShopCategoriesLIst;
