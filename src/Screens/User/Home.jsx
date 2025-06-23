import React from "react";

const Home = () => {
  return (
    <div>
      <div className="w-full h-[600px] bg-[#F2F0FF] content-center grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-7 px-4">
        <div className="col-span-2">
          <div className="flex justify-start items-start">
            <img
              src="light.png"
              className="relative hidden lg:flex object-cover"
              alt="Decorative light"
            />
          </div>
        </div>

        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-start col-span-3">
          <h5 className="text-[#FB2E86] font-bold text-sm sm:text-base sm:mb-4">
            Best Furniture For Your Castle....
          </h5>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[53px] font-bold text-black mb-4 sm:mb-6 leading-tight">
            New Furniture Collection Trends in 2020
          </h1>

          <p className="text-[#8A8FB9] text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>

          <button className="w-[163px] h-[50px] sm:text-center bg-[#FB2E86] text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
            Shop Now
          </button>
        </div>

        <div className="max-w-full h-auto max-h-[400px] col-span-2">
          <img
            src="sofa promotional header.png"
            className="hidden sm:block h-auto sm:max-h-[350px]  lg:w-full lg:h-full"
            alt="Promotional sofa"
          />
        </div>
      </div>

      <div>
        <div>
          <h1 className="flex items-center justify-center p-10 text-[#1A0B5B] font-normal text-2xl sm:font-bold sm:text-3xl md:text-4xl">
            Featured Products
          </h1>
        </div>

        <div className="content-center grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 px-40">
          <div>
            <img src="chair1.png" alt="" className="w-[270px] h-[361px]" />
          </div>

          <div>
            <img
              src="chair2.png"
              alt=""
              className="w-[270px] h-[361px] mt-[40px]"
            />
          </div>

          <div>
            <img
              src="chair3.png"
              alt=""
              className="w-[270px] h-[361px] mt-[40px]"
            />
          </div>

          <div>
            <img
              src="chair4.png"
              alt=""
              className="w-[270px] h-[361px] mt-[40px]"
            />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="flex items-center justify-center p-10 mt-8 text-[#1A0B5B] font-normal text-2xl sm:font-bold sm:text-3xl md:text-4xl">
            Leatest Products
          </h1>
        </div>

        <div className="flex items-center justify-center p-4 text-[#1A0B5B] font-normal text-2xl sm:font-bold sm:text-3xl md:text-4xl">
          <ul className="flex items-center justify-center gap-4">
            <li className="w-[93px] h-[45px] font-normal text-[16px] hover:text-[#FB2E86] cursor-pointer">
              New Arrival
            </li>

            <li className="w-[93px] h-[45px] font-normal text-[16px] hover:text-[#FB2E86] cursor-pointer">
              Best Seller
            </li>

            <li className="w-[93px] h-[45px] font-normal text-[16px] hover:text-[#FB2E86] cursor-pointer">
              Featured
            </li>

            <li className="w-[93px] h-[45px] font-normal text-[16px] hover:text-[#FB2E86] cursor-pointer">
              Special Offer
            </li>
          </ul>
        </div>

        <div className="content-center grid grid-cols-1 place-items-center sm:grid-cols-1 lg:grid-cols-3 px-40">
          <div className="w-[360px] h-[306px]">
            <div className="w-[360px] h-[269.96px] bg-[#F7F7F7]">
              <img src="red sofa.png" className="w-[223px] h-[229px]" />
            </div>
            <p className="w-[156px] h-[16px] mt-[16px] font-normal text-[16px] text-[#151875]">
              Comfort Handy Craft
            </p>

            <p className="w-[43px] h-[14px] ml-[248.89px] mt-[-16px] text-[16px] font-normal text-[#151875]">
              $42.00
            </p>

            <p className="w-[37px] h-[12px] ml-[307.46px] mt-[-16px] text-[16px] font-normal text-[#FB2448]">
              $65.00
            </p>
          </div>

          <div className="w-[360px] h-[306px]">
            <div className="w-[360px] h-[269.96px]">
              <img src="black chair.png" className="w-[223px] h-[229px] mt-4" />
            </div>

            <p className="w-[156px] h-[16px] mt-[16px] font-normal text-[16px] text-[#151875]">
              Comfort Handy Craft
            </p>

            <p className="w-[43px] h-[14px] ml-[248.89px] mt-[-16px] text-[16px] font-normal text-[#151875]">
              $42.00
            </p>

            <p className="w-[37px] h-[12px] ml-[307.46px] mt-[-16px] text-[16px] font-normal text-[#FB2448]">
              $65.00
            </p>
          </div>

          <div className="w-[360px] h-[306px]">
            <div className="w-[360px] h-[269.96px] bg-[#F7F7F7]">
              <img src="white chair.png" className="w-[223px] h-[229px] m-8" />
            </div>

            <p className="w-[156px] h-[16px] font-normal text-[16px] text-[#151875]">
              Comfort Handy Craft
            </p>

            <p className="w-[43px] h-[14px] ml-[248.89px] mt-[-18px]  text-[16px] font-normal text-[#151875]">
              $42.00
            </p>

            <p className="w-[37px] h-[12px] ml-[307.46px] mt-[-15px] text-[16px] font-normal text-[#FB2448]">
              $65.00
            </p>
          </div>
        </div>

        <div className="content-center grid grid-cols-1 place-items-center sm:grid-cols-1 lg:grid-cols-3 px-40 py-">
          <div className="w-[360px] h-[306px]">
            <div className="w-[360px] h-[269.96px] bg-[#F7F7F7]">
              <img
                src="white soffa.png"
                alt=""
                className="w-[223px] h-[229px]"
              />
            </div>
            <p className="w-[156px] h-[16px] mt-[16px] font-normal text-[16px] text-[#151875]">
              Comfort Handy Craft
            </p>

            <p className="w-[43px] h-[14px] ml-[248.89px] mt-[-16px] text-[16px] font-normal text-[#151875]">
              $42.00
            </p>

            <p className="w-[37px] h-[12px] ml-[307.46px] mt-[-16px] text-[16px] font-normal text-[#FB2448]">
              $65.00
            </p>
          </div>

          <div className="w-[360px] h-[306px]">
            <div className="w-[360px] h-[269.96px]">
              <img
                src="yellow chair.png"
                alt=""
                className="w-[223px] h-[229px] mt-4"
              />
            </div>

            <p className="w-[156px] h-[16px] mt-[16px] font-normal text-[16px] text-[#151875]">
              Comfort Handy Craft
            </p>

            <p className="w-[43px] h-[14px] ml-[248.89px] mt-[-16px] text-[16px] font-normal text-[#151875]">
              $42.00
            </p>

            <p className="w-[37px] h-[12px] ml-[307.46px] mt-[-16px] text-[16px] font-normal text-[#FB2448]">
              $65.00
            </p>
          </div>

          <div className="w-[360px] h-[306px]">
            <div className="w-[360px] h-[269.96px] bg-[#F7F7F7]">
              <img
                src="white chair2.png"
                alt=""
                className="w-[223px] h-[229px] m-8"
              />
            </div>

            <p className="w-[156px] h-[16px] font-normal text-[16px] text-[#151875]">
              Comfort Handy Craft
            </p>

            <p className="w-[43px] h-[14px] ml-[248.89px] mt-[-18px]  text-[16px] font-normal text-[#151875]">
              $42.00
            </p>

            <p className="w-[37px] h-[12px] ml-[307.46px] mt-[-15px] text-[16px] font-normal text-[#FB2448]">
              $65.00
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="flex items-center justify-center p-10 mt-[52px] text-[#1A0B5B] font-normal text-2xl sm:font-bold sm:text-3xl md:text-4xl">
          What Shopex Offer!
        </h1>

        <div className="content-center grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 px-40">
          <div className="w-[270px] h-[320px]">
            <img
              src="free-delivery 1.png"
              className="w-[65px] h-[65px] m-auto"
            />

            <p className="w-[132px] h-[22px] m-auto text-[#151875]">
              24/7 Support
            </p>

            <p className="w-[217px] h-[85px] m-auto text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="w-[270px] h-[320px]">
            <img
              src="premium-quality 1.png"
              className="w-[65px] h-[65px] m-auto"
            />

            <p className="w-[132px] h-[22px] m-auto text-[#151875]">
              24/7 Support
            </p>

            <p className="w-[217px] h-[85px] m-auto  text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="w-[270px] h-[320px] ">
            <img src="cashback 1.png" className="w-[65px] h-[65px] m-auto " />

            <p className="w-[132px] h-[22px] m-auto text-[#151875]">
              24/7 Support
            </p>

            <p className="w-[217px] h-[85px] m-auto text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>

          <div className="w-[270px] h-[320px] ">
            <img
              src="24-hours-support 1.png"
              className="w-[65px] h-[65px] m-auto"
            />

            <p className="w-[132px] h-[22px] m-auto text-[#151875] ">
              24/7 Support
            </p>

            <p className="w-[217px] h-[85px] m-auto text-[#1A0B5B4D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
          </div>
        </div>
      </div>

      <div className="w-flex items-center justify-center p-4 text-[#1A0B5B] font-normal text-2xl sm:font-bold sm:text-2xl md:text-2xl">
        <div className="content-center grid grid-cols-1 place-items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-40">
          <div className="w-[350px] h-[450px] md:w-[558px] md:h-[550px]">
            <img src="unique feature sofa.png" alt="" />
          </div>

          <div className="w-[350px] h-[450px]">
            <p className="w-[350px] h-[50px] sm:w-[507px] sm:h-[92px] text-[#151875] sm:font-extrabold">
              Unique Features Of leatest & Trending Poducts
            </p>

            <p className="mt-[4px] text-[16px] sm:w-[427px] sm:h-[21px] sm:font-medium text-[#ACABC3]">
              All frames constructed with hardwood solids and laminates
            </p>

            <p className="mt-[12px] text-[16px] sm:w-[461px] sm:h-[56px] sm:font-medium text-[#ACABC3] sm:mt-[42px]">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </p>

            <p className="mt-[12px] text-[16px] sm:w-[352px] sm:h-[21px] sm:font-medium text-[#ACABC3]">
              Arms, backs and seats are structurally reinforced
            </p>

            <button className="w-[100px] h-[25px] sm:w-[157px] sm:h-[45px]  text-sm sm:text-semibold rounded text-white bg-[#FB2E86] sm:mt-[40px] ml-[64px]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="flex items-center justify-center p-10 text-[#1A0B5B] font-normal text-2xl sm:font-bold sm:text-3xl md:text-4xl">
            Trending Products
          </h1>
        </div>

        <div className="content-center grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 px-40">
          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[12px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="red chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[12px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="tchair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[12px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="black chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[12px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className="flex items-center justify-center p-10 text-[#1A0B5B] font-normal text-2xl sm:font-bold sm:text-3xl md:text-4xl">
            Top Categories
          </h1>
        </div>

        <div className="content-center grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 px-40 rounded-full">
          <div className="w-[270px] h-[350px] flex">
            <div className="w-[270px] h-[350px] flex">
              <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8] rounded-full">
                <img src="black chair.png" className="" />

                <p className="w-[118px] h-[26px] mt-[32px] ml-[79px] text-[16px] font-bold text-[#151875]">
                  Cantilever chair
                </p>

                <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                  $26.00{" "}
                </p>

                <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                  $42.00{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8] rounded-full">
              <img src="black chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[32px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8] rounded-full">
              <img src="black chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[32px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8] rounded-full">
              <img src="black chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[32px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <h1 className="w-[277px] h-[42px] ml-[822px] mt-[135px] font-extrabold text-[42px] text-[#151875]">
          Discount Item
        </h1>

        <div className="w-[1214px] h-[590px] ml-[389px] mt-[52px] ">
          <div className="w-[460px] h-[50px] ml-[392px] flex flex-start mt-[-20px]">
            <a
              href="#"
              className="w-[93px] h-[45px] mt-[20px] font-semibold underline text-[14px] text-[#FB2E86]"
            >
              Wood Chair
            </a>

            <a
              href="#"
              className="w-[93px] h-[45px] ml-[60px] mt-[20px] font-semibold text-[14px]"
            >
              Plastic Chair
            </a>

            <a
              href="#"
              className="w-[93px] h-[45px] ml-[40px] mt-[20px] font-semibold text-[14px]"
            >
              Sofa Colletion
            </a>
          </div>

          <div className="flex">
            <div>
              <p className="w-[509px] h-[46px] ml-[1px] mt-[100px] font-bold text-[35px] text-[#151875]">
                20% Discount Of All Products
              </p>

              <p className="w-[199px] h-[28px] ml-[1px] mt-[10px] text-[#FB2E86] font-normal text-[21px]">
                Eams Sofa Compact
              </p>

              <p className="w-[523px] h-[49px] ml-[1px] mt-[10px] font-normal text-[17px] text-[#B7BACB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
              </p>

              <p className="w-[199px] h-[30px] ml-[23px] mt-[24px] font-normal text-[16px] text-[#B8B8DC]">
                Material expose like metals
              </p>

              <p className="w-[238px] h-[30px] ml-[295px] mt-[-24px] font-normal text-[16px] text-[#B8B8DC]">
                Clear lines and geomatric figures
              </p>

              <p className="w-[167px] h-[30px] ml-[23px] mt-[10px] font-normal text-[16px] text-[#B8B8DC]">
                Simple neutral colours.
              </p>

              <p className="w-[238px] h-[30px] ml-[295px] mt-[-24px] font-normal text-[16px] text-[#B8B8DC]">
                Material expose like metals
              </p>

              <button className="w-[200px] h-[57px] rounded bg-[#FB2E86] font-normal text-[17px] text-[#FFFFFF]">Shop Now</button>
            </div>

            <div>
              <img src="Group 154.png" className="w-[699px] h-[597px] " />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div>
        <h1 className="w-[301px] h-[42px] ml-[810px] mt-[135px] font-extrabold text-[42px] text-[#151875]">
          Top Categories
        </h1>

         <div className="flex gap-4 mt-[52px]">
          <div className="w-[270px] h-[350px] ml-[377px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="chair.png" className=" rounded-full" />

              <p className="w-[118px] h-[26px] mt-[12px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px]  flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="red chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[12px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="tchair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[12px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[350px] flex">
            <div className="w-[247px] h-[244px] mt-[11px] ml-[11px] bg-[#F5F6F8]">
              <img src="black chair.png" className="" />

              <p className="w-[118px] h-[26px] mt-[40px] ml-[79px] text-[16px] font-bold text-[#151875]">
                Cantilever chair
              </p>

              <p className="w-[43px] h-[14px] ml-[91px] font-normal text-[14px] text-[#151875]">
                $26.00{" "}
              </p>

              <p className="w-[37px] h-[12px] ml-[146px] font-normal text-[12px] text-[#1518754D] mt-[-12px]">
                $42.00{" "}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-4 md:p-12 text-center"
        style={{
          backgroundImage: 'url("Rectangle 102.png")',
          height: "clamp(300px, 50vw, 400px)",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
          <div className="flex h-full items-center justify-center">
            <div className="text-white w-full max-w-[574px] h-auto md:h-[185px] py-4 md:py-8 rounded-sm px-4">
              <h2 className="mb-4 text-2xl md:text-3xl lg:text-[35px] font-bold text-[#151875]">
                Get Leatest Update By Subscribe 0ur Newslater
              </h2>
              <button
                type="button"
                className="rounded border-2 bg-[#FB2E86] border-neutral-50 px-4 md:px-7 pb-[8px] pt-[10px] text-sm font-medium"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1920px] lg:px-60 sm:mt-[12px] md:mt-[16px] lg:mt-[83px] sm:px-8 md:px-16">
        <img src="companies.png" alt="partners companies" />
      </div>
    </div>
  );
};

export default Home;
