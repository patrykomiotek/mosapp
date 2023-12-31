// import { useEffect, useState } from "react";
import { fetchProducts } from "../../../services/products";
import { useApi } from "../../../hooks/useApi";
import { Link } from "react-router-dom";

interface ProductDto {
  id: string;
  fields: {
    name: string;
  };
}

export const ProductList = () => {
  const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);

  // const [data, setData] = useState<ProductDto[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // const loadData = async () => {
  //   try {
  //     const response = await fetchProducts();

  //     setData(response);
  //   } catch (error) {
  //     setIsError(true);
  //     console.log({ error });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  // useEffect(() => {
  //   fetch("https://api.airtable.com/v0/appuBOY54XBVjs1x9/products", {
  //     headers: {
  //       Authorization: `Bearer patIp7lzrBkvpFrAE.57b62f836b4c41170c8a5273e1bf5c2fd7f627a9346918186d76248b62a386e5`,
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => setProducts(data.records));
  // }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id}>
          <Link to={`/products/${elem.id}`}>{elem.fields.name}</Link>
        </div>
      ))}
    </div>
  );
};
