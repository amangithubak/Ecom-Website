import React from "react";
import ShopByGrid from "../../Components/Pages/ShopByGrid";
import PartnerCompanies from "../../Components/Pages/PartnerCompanies";
import PageShortBy from "../../Components/Pages/PageShortBy";
import EcommerceImage from "../../Components/Pages/EcommerceImage";

const Pages = () => {
  return (
    <div>
      <ShopByGrid />
      <PageShortBy />
      <EcommerceImage />
      <PartnerCompanies />
    </div>
  );
};

export default Pages;
