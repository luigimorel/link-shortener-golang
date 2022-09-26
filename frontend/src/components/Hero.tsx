import { useState } from "react";

// eslint-disable-next-line sort-imports
import HeroImg from "../assets/connected.svg";
import MainHero from "../assets/Hero.png";
import { MobileNavbar } from "./MobileNavbar";

export const HeroSection = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="relative w-full h-full pb-10">
        <div className="hidden md:block">
          <img
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src={MainHero}
            alt=""
          />
        </div>

        <MobileNavbar menu={menu} setMenu={setMenu} />

        <nav className="f-f-l relative z-10">
          <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
            <div>
              <p className=" sm:text-4xl font-pacifico text-2xl">
                <span className=" text-purple-primary">L</span>
                <span>inkie</span>
              </p>
            </div>
            <div className="flex items-center text-white text-base font-medium">
              <ul className="flex items-center pr-3 xl:pr-12">
                <li className="cursor-pointer hover:text-gray-300 ease-in">
                  <a
                    href="#"
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Home
                  </a>
                </li>

                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                  <a
                    href="#"
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Pricing
                  </a>
                </li>
                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                  <a
                    href="#"
                    className="focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Resources
                  </a>
                </li>
              </ul>
              <button className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                Sign In
                <img
                  className="ml-4"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </nav>

        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 pt-8 lg:pt-20 sm:pt-4 xl:pt-12">
            <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
              Generate short links with a click of a button
              <span className=" text-red-300">...</span>
            </h1>
            <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6 ">
              <h2>
                The next big thing starts here. Start building with Prodify and
                be the first to market with a product that is ready to take on
                the competition and delight your customers
              </h2>
            </div>
            <div className="lg:flex">
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Try it out
              </button>
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
                Get a Quote
              </button>
            </div>
          </div>

          <img
            className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0"
            src={HeroImg}
            alt="sample page"
            role="img"
          />
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
            Start building now
          </button>
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
            Try it out
          </button>
        </div>
      </div>

      <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
    </>
  );
};
