import { React, useState } from "react";
import img5 from "../../assests/images/image5.png";
import img6 from "../../assests/images/image6.png";
import img7 from "../../assests/images/image7.png";
import img8 from "../../assests/images/image8.png";
import img9 from "../../assests/images/image9.png";
import img10 from "../../assests/images/image10.png";
import img11 from "../../assests/images/image11.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ShopList = () => {
  const [isShopList, setIsShopList] = useState(false);
  const shopImage = [
    { id: 1, src: img5, alt: "product 5" },
    { id: 2, src: img6, alt: "product 6" },
    { id: 3, src: img7, alt: "product 7" },
    { id: 4, src: img8, alt: "product 8" },
    { id: 3, src: img9, alt: "product 9" },
    { id: 4, src: img10, alt: "product 10" },
    { id: 1, src: img11, alt: "product 11" },
  ];
  const onClose = () => {
    setIsShopList(false);
  };
  return (
    <>
      {" "}
      <div className="w-full px-2 sm:px-6 md:px-16 lg:px-24 xl:px-48">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="hidden lg:flex ">
            <div>
              {/* Product Brand */}
              <div className="pt-6">
                <h1 className="font-bold text-md text-[#151875] underline">
                  Product Brand
                </h1>

                <ul className="flex flex-col gap-2 pt-2">
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Coaster Furniture
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Fusion Dot High Fashion
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Unique Furnitture Restor
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Dream Furnitture Flipping
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Young Repurposed
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Green DIY furniture
                  </li>
                </ul>
              </div>
              {/* Discount Offer */}
              <div className="pt-10">
                <h1 className="font-bold text-md text-[#151875] underline">
                  Discount Offer
                </h1>

                <ul className="flex flex-col gap-2 pt-2">
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    20% Cashback
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    5% Cashback Offer
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    25% Discount Offer
                  </li>
                </ul>
              </div>
              {/* Rating Item */}
              <div className="pt-10">
                <h1 className="font-bold text-md text-[#151875] underline">
                  Rating Item
                </h1>

                <ul className="flex flex-col gap-2 pt-2">
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    ⭐⭐⭐⭐ (234)
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    ⭐⭐⭐(1726)
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    ⭐⭐(258)
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    ⭐⭐(25)
                  </li>
                </ul>
              </div>
              {/* Categories */}
              <div className="pt-10">
                <h1 className="font-bold text-md text-[#151875] underline">
                  Categories
                </h1>

                <ul className="flex flex-col gap-2 pt-2">
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Prestashop
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Magento
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Bigcommerce
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    osCommerce
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    3dcart
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Bags
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    Watches
                  </li>
                </ul>
              </div>
              {/* Price Filter */}
              <div className="pt-10">
                <h1 className="font-bold text-md text-[#151875] underline">
                  Price Filter
                </h1>

                <ul className="flex flex-col gap-2 pt-2">
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    $0.00 - $150.00
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    $150.00 - $350.00
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    $150.00 - $504.00
                  </li>
                  <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                    $450.00 +
                  </li>
                </ul>
                <div className="pt-4">
                  <CiSearch className="absolute m-2 text-2xl   " />
                  <input
                    type="text"
                    placeholder="$10.00 - 20000$"
                    className="w-full py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
                  />
                </div>
              </div>
              {/* Filter By Color */}
              <div className="pt-10">
                <h1 className="font-bold text-md text-[#151875] underline">
                  Rating Item
                </h1>

                <div className="grid grid-cols-3 pt-4 ">
                  <div>
                    <ul className="space-y-2">
                      <li className="font-normal text-xs text-[#7E81A2]">
                        🔵Blue
                      </li>
                      <li className="font-normal text-xs text-[#7E81A2]">
                        🟢Green
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="font-normal list-none text-xs text-[#7E81A2]">
                        🟠Orange
                      </li>
                      <li className="font-normal list-none text-xs text-[#7E81A2]">
                        🟣Purple
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="font-normal list-none text-xs text-[#7E81A2]">
                        🟤Brown
                      </li>
                      <li className="font-normal text-xs list-none text-[#7E81A2]">
                        🔵Sky
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0D0E43] pt-0"
            onClick={() => setIsShopList(true)}
          >
            <FaBars className="text-lg" />
          </button>

          {/* Mobile menu dropdown */}

          <div className="col-span-3">
            <div className="grid grid-cols-1 gap-4">
              {shopImage.map((logo) => (
                <div
                  key={logo.id}
                  className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 p-4 md:p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/3 flex justify-center p-4 bg-[#F6F7FB] rounded-lg">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-auto h-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-3">
                    <h3 className="font-bold text-lg md:text-xl text-[#151875]">
                      {logo.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      <p className="font-medium text-base md:text-lg text-[#151875]">
                        $26.00
                      </p>
                      <p className="font-normal text-base md:text-lg text-[#FB2E86] line-through">
                        $52.00
                      </p>
                    </div>

                    <p className="font-normal text-sm md:text-base text-[#151875]">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      Magna in est adipiscing in phasellus non in justo.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isShopList && (
          <div
            className="fixed inset-0 bg-black/70 md:hidden z-50"
            onClick={onClose}
          >
            <div
              className=" absolute overflow-y-auto w-64 h-full shadow-md bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className=" grid grid-cols-2">
                <div className="flex flex-col items-center py-2 px-4">
                  {" "}
                  {/* Product Brand */}
                  <div className="pt-6">
                    <h1 className="font-bold text-md text-[#151875] underline">
                      Product Brand
                    </h1>

                    <ul className="flex flex-col gap-2 pt-2">
                      <li className="font-normal whitespace-nowrap text-sm text-[#7E81A2] cursor-pointer">
                        Coaster Furniture
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Fusion Dot High Fashion
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Unique Furnitture Restor
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Dream Furnitture Flipping
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Young Repurposed
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Green DIY furniture
                      </li>
                    </ul>
                  </div>
                  {/* Discount Offer */}
                  <div className="pt-10">
                    <h1 className="font-bold text-md text-[#151875] underline">
                      Discount Offer
                    </h1>

                    <ul className="flex flex-col gap-2 pt-2">
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        20% Cashback
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        5% Cashback Offer
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        25% Discount Offer
                      </li>
                    </ul>
                  </div>
                  {/* Rating Item */}
                  <div className="pt-10">
                    <h1 className="font-bold text-md text-[#151875] underline">
                      Rating Item
                    </h1>

                    <ul className="flex flex-col gap-2 pt-2">
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        ⭐⭐⭐⭐ (234)
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        ⭐⭐⭐(1726)
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        ⭐⭐(258)
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        ⭐⭐(25)
                      </li>
                    </ul>
                  </div>
                  {/* Categories */}
                  <div className="pt-10">
                    <h1 className="font-bold text-md text-[#151875] underline">
                      Categories
                    </h1>

                    <ul className="flex flex-col gap-2 pt-2">
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Prestashop
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Magento
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Bigcommerce
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        osCommerce
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        3dcart
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Bags
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        Watches
                      </li>
                    </ul>
                  </div>
                  {/* Price Filter */}
                  <div className="pt-10">
                    <h1 className="font-bold text-md text-[#151875] underline">
                      Price Filter
                    </h1>

                    <ul className="flex flex-col gap-2 pt-2">
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        $0.00 - $150.00
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        $150.00 - $350.00
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        $150.00 - $504.00
                      </li>
                      <li className="font-normal text-sm text-[#7E81A2] cursor-pointer">
                        $450.00 +
                      </li>
                    </ul>
                    <div className="pt-4">
                      <CiSearch className="absolute m-2 text-2xl   " />
                      <input
                        type="text"
                        placeholder="$10.00 - 20000$"
                        className="w-full py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
                      />
                    </div>
                  </div>
                  {/* Filter By Color */}
                  <div className="pt-10">
                    <h1 className="font-bold text-md text-[#151875] underline">
                      Rating Item
                    </h1>

                    <div className="grid grid-cols-3 pt-4 ">
                      <div>
                        <ul className="space-y-2">
                          <li className="font-normal text-xs text-[#7E81A2]">
                            🔵Blue
                          </li>
                          <li className="font-normal text-xs text-[#7E81A2]">
                            🟢Green
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2">
                          <li className="font-normal list-none text-xs text-[#7E81A2]">
                            🟠Orange
                          </li>
                          <li className="font-normal list-none text-xs text-[#7E81A2]">
                            🟣Purple
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="space-y-2">
                          <li className="font-normal list-none text-xs text-[#7E81A2]">
                            🟤Brown
                          </li>
                          <li className="font-normal text-xs list-none text-[#7E81A2]">
                            🔵Sky
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* close button */}
                <div className="p-6">
                  <button
                    className="text-[#FB2E86] text-lg font-bold mb-8 float-right"
                    onClick={onClose}
                  >
                    <ImCross />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopList;
