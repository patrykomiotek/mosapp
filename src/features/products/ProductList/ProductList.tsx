import { useEffect, useState } from "react";

interface ProductDto {
  id: string;
  fields: {
    name: string;
  };
}

export const ProductList = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);

  const loadData = async () => {
    // try ... catch ...
    const response = await fetch(
      "https://api.airtable.com/v0/appuBOY54XBVjs1x9/products",
      {
        headers: {
          Authorization: `Bearer patIp7lzrBkvpFrAE.57b62f836b4c41170c8a5273e1bf5c2fd7f627a9346918186d76248b62a386e5`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();

      setProducts(data.records);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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

  return (
    <div>
      {products.map((elem) => (
        <div key={elem.id}>{elem.fields.name}</div>
      ))}
    </div>
  );
};
