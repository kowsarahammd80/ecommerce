import React from "react";
import TheShopSignlePage from "./[theShopId]/page";
import TheShopCategoriesLIst from "@/components/TheShopCategoriesLIst/TheShopCategoriesLIst";

const TheShopLayout = ({ children }) => {
  return (
    <div>
      <section className="">
        <div>
          <TheShopCategoriesLIst />
        </div>
        <div>
          {children}
        </div>
      </section>
    </div>
  );
};

export default TheShopLayout;
