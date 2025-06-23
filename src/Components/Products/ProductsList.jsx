import React from "react";
import img5 from "../../assests/images/image5.png";
import img6 from "../../assests/images/image6.png";
import img7 from "../../assests/images/image7.png";
import img8 from "../../assests/images/image8.png";
import img9 from "../../assests/images/image9.png";
import img10 from "../../assests/images/image10.png";
import img11 from "../../assests/images/image11.png";

const ProductsList = () => {
  const productsImage = [
    { id: 1, src: img5, alt: "product 5" },
    { id: 2, src: img6, alt: "product 6" },
    { id: 3, src: img7, alt: "product 7" },
    { id: 4, src: img8, alt: "product 8" },
    { id: 3, src: img9, alt: "product 9" },
    { id: 4, src: img10, alt: "product 10" },
    { id: 1, src: img11, alt: "product 11" },
  ];
  return (
    <>
      {" "}
      <div className="w-full px-2 sm:px-6 md:px-16 lg:px-24 xl:px-48 ">
        <div className="grid grid-cols-1 gap-4">
          {productsImage.map((logo) => (
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              kay={logo.id}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className=" bg-[#F6F7FB]"
                loading="lazy"
              />

              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl text-[#151875]">
                  Accumsan tincidunt
                </p>
                <p className="font-normal text-md text-[#151875] ">
                  $26.00{" "}
                  <span className="font-normal text-md text-[#FB2E86] line-through">
                    $42.00
                  </span>
                </p>

                <p className="font-normal text-xl text-[#151875]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsList;
