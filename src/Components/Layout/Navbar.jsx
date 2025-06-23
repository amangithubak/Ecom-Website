import { React, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  // Header
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navbar
  const [mobileView, setMobileView] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // For close button
  const onClose = () => {
    setMobileView(false);
  };

  // creating a map function item for active menu
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/pages", label: "Pages" },
    { path: "/products", label: "Products" },
    { path: "/shop", label: "Shop" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  // Check if current path matches menu item
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div>
        {/* Main Container */}
        <div className="w-full relative hidden md:block h-[44px] bg-[#7E33E0] justify-center items-center">
          {/* Info container */}
          <div className="w-full max-w-[1177px] h-full mx-auto px-4 flex justify-between items-center">
            {/* Left side */}
            <div className="flex items-center gap-4 md:gap-8 py-2">
              {/* Email */}
              <div className="flex items-center gap-2 px-2">
                <FaEnvelope className="text-[#F1F1F1] text-sm" />
                <span className="text-[#F1F1F1] text-sm hidden sm:inline">
                  mhhasanul@gmail.com
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 px-2">
                <FaPhoneAlt className="text-[#F1F1F1] text-sm" />
                <span className="text-[#F1F1F1] text-sm hidden sm:inline">
                  (12345)67890
                </span>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center py-2">
              <ul className="flex gap-4 lg:gap-6 px-4">
                <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer px-2">
                  English
                </li>
                <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer px-2">
                  USD
                </li>
                <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer px-2">
                  Login
                </li>
                <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer px-2">
                  Wishlist
                </li>
                <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer px-2">
                  Cart🛒
                </li>
              </ul>
            </div>

            {/* Mobile menu button*/}
            <button
              className="md:hidden text-[#F1F1F1] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="text-lg" />
            </button>

            {/* Mobile menu dropdown */}
            {isMobileMenuOpen && (
              <div className="absolute top-[44px] w-1/2 right-0 bg-[#7E33E0] md:hidden z-10">
                <ul className="flex flex-col items-center py-2">
                  <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer py-2 w-full text-center">
                    Home
                  </li>
                  <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer py-2 w-full text-center">
                    USD
                  </li>
                  <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer py-2 w-full text-center">
                    Login
                  </li>
                  <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer py-2 w-full text-center">
                    Wishlist
                  </li>
                  <li className="text-[#F1F1F1] text-sm hover:text-white cursor-pointer py-2 w-full text-center">
                    Cart🛒
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Navbar */}
        <nav className="w-full h-[44px] bg-white flex justify-center items-center py-10 ">
          <div className="w-full max-w-[1177px] h-full mx-auto px-4 flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-[34px] text-[#0D0E43]">
                Hekto
              </a>
            </div>

            <div className="hidden md:flex items-center py-2">
              <ul className="flex gap-4 lg:gap-6 px-4">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <button
                      onClick={() => navigate(item.path)}
                      className={`text-sm hover:text-[#FB2E86] cursor-pointer px-2 transition-colors ${
                        isActive(item.path)
                          ? "text-[#FB2E86] font-medium"
                          : "text-[#0D0E43]"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="relative hidden md:flex items-center justify-center gap-3">
                <CiSearch className="absolute left-1 text-2xl   " />
                <input
                  type="text"
                  placeholder="search..."
                  className="w-full py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
                />
              </div>
            </div>

            {/* Mobile View */}
            <button
              className="md:hidden text-[#0D0E43] p-10"
              onClick={() => setMobileView(!mobileView)}
            >
              <FaBars className="text-lg" />
            </button>

            {mobileView && (
              <div
                className="fixed inset-0 bg-black/70 md:hidden z-10"
                onClick={onClose}
              >
                <div
                  className="fixed top-0 left-0 w-64 h-full shadow-md bg-white  "
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className=" grid grid-cols-2 ">
                    <div>
                      <ul className="flex flex-col items-center py-2 px-4">
                        <li
                          className="text-[#FB2E86] text-xl hover:text-[#FB2E86]  cursor-pointer py-2 w-full text-start font-bold"
                          onClick={() => {
                            navigate("/");
                            onclose();
                          }}
                        >
                          Home
                        </li>
                        <li
                          className="text-[#0D0E43] text-xl hover:text-[#FB2E86]  cursor-pointer py-2 w-full text-start font-bold"
                          onClick={() => {
                            navigate("/pages");
                            onClose();
                          }}
                        >
                          Pages
                        </li>
                        <li
                          className="text-[#0D0E43] text-xl hover:text-[#FB2E86]  cursor-pointer py-2 w-full text-start font-bold"
                          onClick={() => {
                            navigate("/products");
                            onClose();
                          }}
                        >
                          Products
                        </li>
                        <li
                          className="text-[#0D0E43] text-xl hover:text-[#FB2E86]  cursor-pointer py-2 w-full text-start font-bold"
                          onClick={() => {
                            navigate("/shop");
                            onClose();
                          }}
                        >
                          Shop
                        </li>
                        <li className="text-[#0D0E43] text-xl hover:text-[#FB2E86]  cursor-pointer py-2 w-full text-start font-bold">
                          Blog
                        </li>

                        <li className="text-[#0D0E43] text-xl hover:text-[#FB2E86]  cursor-pointer py-2 w-full text-start font-bold">
                          Contact
                        </li>
                      </ul>
                    </div>

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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
