import axios, { AxiosResponse } from "axios";
import z from "zod";

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

// interface ListResponse<T> {
//   records: T[];
// }

const productsSchema = z.object({
  records: z.array(
    z.object({
      id: z.string(),
      fields: z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
      }),
    })
  ),
});

type ProductsResponse = z.infer<typeof productsSchema>;

export const fetchProducts = async () => {
  const response = await api.get<ProductsResponse>("/products");
  const schema = z.object({
    records: z.array(
      z.object({
        id: z.string(),
        fields: z.object({
          name: z.string(),
          // description: z.string(),
          // price: z.string(),
        }),
      })
    ),
  });

  const validResponse = schema.parse(response.data);

  return validResponse.records;

  // return api.get<ListResponse<ProductDto>>("/products");
};

export const fetchProduct = (id: ProductDto["id"]) => {
  return api.get<ProductDto>(`/products/${id}`);
};
