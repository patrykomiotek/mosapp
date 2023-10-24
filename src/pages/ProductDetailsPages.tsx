import { useParams } from "react-router-dom";
import { ProductDetails } from "../features/products/ProductDetails";

export const ProductDetailsPage = () => {
  const params = useParams();

  if (params.id) {
    return <ProductDetails id={params.id} />;
  }
  return <h1>404 Not found</h1>;
};
