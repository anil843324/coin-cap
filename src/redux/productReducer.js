import { SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      // console.log("Product list ", action);
      return [...action.data.data];
    default:
      // no case matched
      return data;
  }
};
