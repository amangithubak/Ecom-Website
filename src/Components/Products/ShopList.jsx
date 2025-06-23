import React from "react";

const ShopList = () => {
  return (
    <div className="w-full h-[286px] bg-[#F2F0FF]">
      <div className="flex flex-col py-32 px-6 xl:px-44 sm:place-items-start text-lg sm:text-2xl md:text-3xl ">
        <div>
          <h1 className="font-bold text[#101750]">Shop List</h1>
        </div>

        <div>
          <ul className="flex gap-3">
            <li>Home</li>
            <li>Pages</li>
            <li className="text-[#FB2E86]">Shop List</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
