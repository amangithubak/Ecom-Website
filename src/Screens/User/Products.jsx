import React from "react";
import ShopList from "../../Components/Products/ShopList";
import PageShortBy from "../../Components/Pages/PageShortBy";
import PartnerCompanies from "../../Components/Pages/PartnerCompanies";
import ProductsList from "../../Components/Products/ProductsList";

const Products = () => {
  return (
    <div>
      <ShopList />
      <PageShortBy />
      <ProductsList />
      <PartnerCompanies />
    </div>
  );
};

export default Products;
