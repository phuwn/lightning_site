import React, { createContext, useState } from "react";
export const ProductsContext = createContext();
// process.env.REACT_APP_API_ENDPOINT.concat("/product")
const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  fetch("http://localhost:8080/product")
    .then((response) => response.json())
    .then(({ code, data, error }) => {
      console.log(data);
      if (code !== 200) {
        console.log(error);
        return;
      }
      setProducts(data);
    });

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
