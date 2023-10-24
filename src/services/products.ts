import axios from "axios";

const api = axios.create({
  baseURL: "https://api.airtable.com/v0/appuBOY54XBVjs1x9",
  headers: {
    Authorization: `Bearer patIp7lzrBkvpFrAE.57b62f836b4c41170c8a5273e1bf5c2fd7f627a9346918186d76248b62a386e5`,
  },
});

interface ProductDto {
  id: string;
  fields: {
    name: string;
  };
}

interface ListResponse<T> {
  records: T[];
}

export const fetchProducts = () => {
  return api.get<ListResponse<ProductDto>>("/products");
};
