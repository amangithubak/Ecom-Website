import React from "react";
import ShopLeftSidebar from "../../Components/Shop/ShopLeftSidebar";
import PageShortBy from "../../Components/Pages/PageShortBy";
import PartnerCompanies from "../../Components/Pages/PartnerCompanies";
import ShopList from "../../Components/Shop/ShopList";

const Shop = () => {
  return (
    <div>
      <ShopLeftSidebar />
      <PageShortBy />
      <ShopList />
      <PartnerCompanies />
    </div>
  );
};

export default Shop;
