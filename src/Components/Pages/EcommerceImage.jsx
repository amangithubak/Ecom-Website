import React from "react";
import img1 from "../../assests/images/image1.png";
import img2 from "../../assests/images/image2.png";
import img3 from "../../assests/images/image3.png";
import img4 from "../../assests/images/image4.png";

const EcommerceImage = () => {
  const imageGallary = [
    { id: 1, src: img1, alt: "product 1" },
    { id: 2, src: img2, alt: "product 2" },
    { id: 3, src: img3, alt: "product 3" },
    { id: 4, src: img4, alt: "product 4" },
    { id: 3, src: img3, alt: "product 3" },
    { id: 4, src: img4, alt: "product 4" },
    { id: 1, src: img1, alt: "product 1" },
    { id: 2, src: img2, alt: "product 2" },
    { id: 2, src: img2, alt: "product 2" },
    { id: 3, src: img3, alt: "product 3" },
    { id: 4, src: img4, alt: "product 4" },
    { id: 1, src: img1, alt: "product 1" },
  ];
  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-60 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {imageGallary.map((logo) => (
            <div
              className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              kay={logo.id}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain bg-[#F6F7FB]"
                loading="lazy"
              />

              <div className="flex flex-col items-center">
                <p className="font-bold text-sm text-[#151875]">
                  Vel elit euismod
                </p>
                <p className="font-normal text-xs text-[#151875] ">
                  $26.00{" "}
                  <span className="font-normal text-xs text-[#FB2E86]">
                    $42.00
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EcommerceImage;
