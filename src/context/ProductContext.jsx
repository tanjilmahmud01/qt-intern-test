import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    setLoading(true);
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((res) => res.json())
      .then((data) => {
        const { Items } = data;
        setData(Items);
      });
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);
  return (
    <ProductContext.Provider value={{ data, setData, loading, setLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
