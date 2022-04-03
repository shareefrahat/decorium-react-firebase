import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://shareefrahat.github.io/custom-db-json/decorative-products/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return [products, setProducts];
};

export default useProducts;
