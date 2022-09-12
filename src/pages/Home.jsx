import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
const Home = () => {
  const dispatch = useDispatch();

  const currencyData = useSelector((state) => state.productData);

  console.log("Data in Main Component from saga", currencyData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Rank
              </th>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
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
            {currencyData.map((ele) => (
              <>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {ele.rank}
                  </th>
                  <th
                    scope="row"
                    className="py-4 px-6  font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    <img
                      src={`https://assets.coincap.io/assets/icons/${ele.symbol.toLowerCase()}@2x.png`}
                      alt="coinlogo"
                      className=" w-7 h-7 "
                    />
                  </th>
                  <td className="py-4 px-6">
                    ${Number(ele.priceUsd).toFixed(2)}
                  </td>
                  <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    ${(Math.abs(Number(ele.marketCapUsd)) / 1.0e9).toFixed(2)}b
                  </td>
                  <td className="py-4 px-6">
                    $ {Number(ele.vwap24Hr).toFixed(2)}
                  </td>
                  <td className="py-4 px-6">
                    {(Math.abs(Number(ele.supply)) / 1.0e6).toFixed(2)}m
                  </td>
                  <td className="py-4 px-6">
                    {(Math.abs(Number(ele.volumeUsd24Hr)) / 1.0e9).toFixed(2)}b
                  </td>
                  <td className="py-4 px-6">
                    {" "}
                    {Number(ele.changePercent24Hr).toFixed(2)}%
                  </td>
                  {/* (Math.abs(Number(supply)) / 1.0e+6).toFixed(2)*/}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
