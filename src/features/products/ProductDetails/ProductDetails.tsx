// import { useEffect, useState } from "react";
import { fetchProduct } from "../../../services/products";
import { useApi } from "../../../hooks/useApi";
import { AxiosResponse } from "axios";

interface ProductDto {
  id: string;
  fields: {
    name: string;
  };
}

export const ProductDetails = ({ id }: { id: string }) => {
  const { data, isLoading, isError } = useApi<AxiosResponse<ProductDto>>(() =>
    fetchProduct(id)
  );
  const product = data?.data;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  console.log({ product });

  return (
    <div>
      <h1>{product && product.fields.name}</h1>
    </div>
  );
};
