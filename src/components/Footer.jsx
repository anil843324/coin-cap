import React from "react";

import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <div className=" ">
      <div className=" flex  justify-between    bg-gradient-to-r from-[rgb(63,81,181)] to-[rgb(100,181,246)]  px-52 py-8   ">
        {/* coincap.io */}
        <div>
          <h2>COINCAPI.IO</h2>
          {/* child div */}
          <div className=" flex flex-col text-white     cursor-pointer    ">
            <span className=" opacity-50 hover:opacity-100">Methodology</span>
            <span className="opacity-50 hover:opacity-100e">Support</span>
            <span className="opacity-50 hover:opacity-100">Our API</span>
            <span className="opacity-50 hover:opacity-100">
              Rate Compariosn
            </span>
            <span className="opacity-50 hover:opacity-100">Careers</span>
          </div>
        </div>

        {/* legals && discalmer */}

        <div className=" flex ">
          <div>
            {/* Inner Div */}
            <div className=" flex flex-col gap-2 ">
              {/* inner child 1 */}
              <div>
                <h2>LEGALS</h2>
                {/* child div */}
                <div className="flex flex-col text-white    cursor-pointer">
                  <span className=" opacity-50 hover:opacity-100">
                    Terms of Service
                  </span>
                  <span className=" opacity-50 hover:opacity-100">
                    Privacy Policy
                  </span>
                </div>
              </div>

              {/* inner child 2 */}
              <div>
                <h2>DISCLAIMER</h2>
                {/* child div */}
                <p className=" w-[300px]  text-white  opacity-50 ">
                  Neither ShapeShift AG nor CoinCap are in any way associated
                  with CoinMarketCap, LLC or any of its goods and services.
                </p>
              </div>
            </div>
          </div>
          {/* social media */}
          <div>
            <div className="flex flex-col">
              <h2>FOLLOWS US</h2>
              <div className=" flex gap-2  cursor-pointer  ">
                <span>
                  {" "}
                  <BsTwitter
                    size={25}
                    color="white"
                    className=" opacity-50 hover:opacity-100 "
                  />{" "}
                </span>
                <span>
                  {" "}
                  <AiFillFacebook
                    size={25}
                    color="white"
                    className=" opacity-50 hover:opacity-100 "
                  />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* apllication */}
        <div>
          {/* inner div */}
          <div>
            <h2>COINCAP APP AVAILABLE ON</h2>

            {/* inner child */}

            <div className="flex flex-col gap-2">
              <a href="/" className=" opacity-50 hover:opacity-100 ">
                <img
                  src="	https://coincap.io/static/images/stores/google_play.svg"
                  alt="icon"
                />
              </a>

              <a href="/" className=" opacity-50 hover:opacity-100 ">
                <img
                  src="	https://coincap.io/static/images/stores/apple_store.svg"
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
