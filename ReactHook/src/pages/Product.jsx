import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/BaseUrl.js";
import { LoadingComponent } from "../components/LoadingComponent.jsx";
import ProductCardComponent from "../components/Cards/ProductCardComponent.jsx";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      setIsLoading(true);
      const respone = await fetch(BASE_URL + "products");
      const data = await respone.json();
      console.log(data.products);
      setProducts(data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  function handleOnClickCard(product){
    navigate("/product-detail", {state:product})
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="flex flex-wrap gap-7 m-5 justify-center">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        products.map((product) => (
          <ProductCardComponent
            onClickCard={()=>handleOnClickCard(product)}
            key={product.id}
            image={product.images[0]}
            price={product.price}
            title={product.title}
          />
        ))
      )}
    </div>
  );
};

export default Product;
