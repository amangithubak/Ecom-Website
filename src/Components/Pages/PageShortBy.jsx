import React from "react";

const PageShortBy = () => {
  return (
    <div>
      {" "}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-44">
        <div className="w-full  h-auto py-16">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <ul className="flex flex-col">
                <li>
                  <h2 className="font-bold text-lg sm:text-[20px] md:text-[22px] text-[#151875]">
                    Ecommerce Acceories & Fashion items
                  </h2>
                </li>
                <li>
                  <p className="font-normal text-xs sm:text-[12px] text-[#8A8FB9]">
                    About 9,620 results (0.62 seconds)
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-wrap items-center justify-center py-2 gap-2 sm:gap-4">
                <li className="font-normal text-sm text-[#3F509E] flex items-center">
                  Per Page:
                  <input
                    type="text"
                    className="ml-1 py-1 px-2 w-12 sm:w-16 border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 rounded"
                  />
                </li>
                <li className="font-normal text-sm text-[#3F509E] flex items-center">
                  Sort By:
                  <input
                    type="text"
                    placeholder="Best Match"
                    className="ml-1 py-1 px-2 w-20 sm:w-24 border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 rounded"
                  />
                </li>
                <li className="font-normal text-sm text-[#3F509E] flex items-center">
                  View:
                  <input
                    type="text"
                    className="ml-1 py-1 px-2 w-28 sm:w-40 border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500 rounded"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageShortBy;
