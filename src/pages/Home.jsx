import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
const Home = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(50);
  const currencyData = useSelector((state) => state.productData);

  console.log("Data in Main Component from saga", currencyData);

  const showMoreItems = () => {
    setVisible((prv) => prv + 50);
  };

// currency covert
function convertToInternationalCurrencySystem (labelValue) {

  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e+9

  ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "b"
  // Six Zeroes for Millions 
  : Math.abs(Number(labelValue)) >= 1.0e+6

  ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "m"
  // Three Zeroes for Thousands
  : Math.abs(Number(labelValue)) >= 1.0e+3

  ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "k"

  : Math.abs(Number(labelValue));

}


// api call after 5 seconds 
useEffect(() => {
	let interval = setInterval(() => {
		dispatch(productList())
	}, 5000);
	return () => {
		clearInterval(interval);
	};
}, []);


  


  return (
    <div>
      <div className="overflow-x-auto relative shadow-md  sm:rounded-lg">
           
           <div className="max-w-[1128px] shadow-lg  dark:shadow-lg  rounded-lg  mx-auto">

          
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Rank
              </th>
              <th scope="col" className="py-3 px-6 ">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Market Cap
              </th>
              <th scope="col" className="py-3 px-6">
                VWAP(24Hr)
              </th>
              <th scope="col" Name="py-3 px-6">
                Supply
              </th>
              <th scope="col" className="py-3 px-6">
                Volume(24Hr)
              </th>
              <th scope="col" className="py-3 px-6">
                Change(24Hr)
              </th>
            </tr>
          </thead>
          <tbody>
            {currencyData.slice(0, visible).map((ele) => (
              <>
                <tr className="border-b border-gray-200 ">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  dark:text-white "
                  >
                    {ele.rank}
                  </th>
                  <th
                    scope="row"
                    className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap  dark:text-white "
                  >
                    <div className=" flex items-center  gap-4">
                      <img
                        src={`https://assets.coincap.io/assets/icons/${ele.symbol.toLowerCase()}@2x.png`}
                        alt="coinlogo"
                        className=" w-7 h-7 "
                      />
                      <div className="flex flex-col">
                        <span>{ele.name} </span>
                        <span className=" text-gray-400  font-normal text-[10px]"  > {ele.symbol}</span>
                      </div>
                    </div>

                   
                  </th>
                  <td className="py-4 px-6">
                    ${Number(ele.priceUsd).toFixed(2)}
                  </td>
                  <td className="py-4 px-6  ">                  
                  ${convertToInternationalCurrencySystem (ele.marketCapUsd)}
                  </td>
                  <td className="py-4 px-6">
                    $ {Number(ele.vwap24Hr).toFixed(2)}
                  </td>
                  <td className="py-4 px-6">                 
                    {convertToInternationalCurrencySystem (ele.supply)}
                  </td>
                  <td className="py-4 px-6">
                  ${convertToInternationalCurrencySystem (ele.volumeUsd24Hr)}                   
                  </td>
                 
                  
                   {
                    
                     
                    ele.changePercent24Hr.slice(0, 1) ==='-' ? <td className="py-4 px-6 text-[#ca3434]   "> 
                    {Number(ele.changePercent24Hr).toFixed(2)}%
                  </td> :<td className="py-4 px-6  text-[#18c683]  "> 
                    {Number(ele.changePercent24Hr).toFixed(2)}%
                  </td>
                     
                   }
             

                </tr>
              </>
            ))}
          </tbody>
        </table>
        </div>
        <div className=" flex justify-center">
          <button
            onClick={showMoreItems}
            type="button"
            className="text-white mt-5   bg-gradient-to-r from-[#18c683] via-[#18c683] to-[#18c683] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#18c683] dark:focus:ring-[#18c683] shadow-lg shadow-[#18c683] dark:shadow-lg dark:shadow-[#18c683] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-5 "
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
