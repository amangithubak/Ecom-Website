import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className="w-full h-auto bg-[#F2F0FF] py-10 grid content-center grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-10 md:px-40 gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[38px] text-[#000000]">Hekto</h1>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full border-2 border-blue-300"
            />

            <button
              type="button"
              className="border-2 bg-[#FB2E86] border-neutral-50 px-4 text-xs font-medium"
            >
              Sign Up
            </button>
          </div>

          <p className="font-normal text-sm text-[#8A8FB9]">Contact Info</p>
          <p className="font-normal text-sm text-[#8A8FB9]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[22px] text-[#000000]">
            Catagories
          </h3>
          <div className="py-6 flex flex-col gap-3">
            <p className="font-normal text-sm text-[#8A8FB9]">
              Laptops & Computers
            </p>
            <p className="font-normal text-sm text-[#8A8FB9]">
              Cameras & Photography
            </p>
            <p className="font-normal text-sm text-[#8A8FB9]">
              Smart Phones & Tablets
            </p>
            <p className="font-normal text-sm text-[#8A8FB9]">
              Video Games & Consoles
            </p>
            <p className="font-normal text-sm text-[#8A8FB9]">
              Waterproof Headphones
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[22px] text-[#000000]">
            Customer Care
          </h3>
          <div className="py-6 flex flex-col gap-3">
            <p className="font-normal text-sm text-[#8A8FB9]">My Account</p>
            <p className="font-normal text-sm text-[#8A8FB9]">Discount</p>
            <p className="font-normal text-sm text-[#8A8FB9]">Returns</p>
            <p className="font-normal text-sm text-[#8A8FB9]">Orders History</p>
            <p className="font-normal text-sm text-[#8A8FB9]">Order Tracking</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[22px] text-[#000000]">Pages</h3>
          <div className="py-6 flex flex-col gap-3">
            <p className="font-normal text-sm text-[#8A8FB9]">Blog</p>
            <p className="font-normal text-sm text-[#8A8FB9]">
              Browse the Shop
            </p>
            <p className="font-normal text-sm text-[#8A8FB9]">Category</p>
            <p className="font-normal text-sm text-[#8A8FB9]">Category</p>
            <p className="font-normal text-sm text-[#8A8FB9]">
              Visual Composer Elements
            </p>
            <p className="font-normal text-sm text-[#8A8FB9]">
              WooCommerce Pages
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
