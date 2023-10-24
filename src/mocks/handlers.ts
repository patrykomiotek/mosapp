import { rest } from "msw";

export const API_URL = "https://api.airtable.com/v0/appuBOY54XBVjs1x9";

export const productsMockData = {
  records: [
    {
      id: "1234",
      fields: {
        name: "Product1",
      },
    },
    {
      id: "456",
      fields: {
        name: "Product2",
      },
    },
  ],
};

export const employeesMockData = {
  results: [
    {
      name: {
        first: "Jan",
        last: "Kowalski",
      },
      email: "jan@kowalski.pl",
      id: {
        name: "123",
      },
    },
    {
      name: {
        first: "Jola",
        last: "Marciniak",
      },
      email: "jola@marciniak.pl",
      id: {
        name: "456",
      },
    },
  ],
};

export const handlers = [
  rest.get(`${API_URL}/products`, (_req, res, ctx) => {
    return res(
      ctx.delay(4000),
      ctx.status(200),
      ctx.json(productsMockData)

      // ctx.status(200),
      // ctx.json({})

      // ctx.status(500),
      // ctx.json({})
    );
  }),

  rest.get(`${API_URL}/products/123`, (_req, res, ctx) => {
    return res(
      // ctx.delay(2000),
      ctx.status(200),
      ctx.json(productsMockData.records[0])
    );
  }),

  // rest.post("/login", (req, res, ctx) => {
  //   // const { username } = req.body

  //   return res(
  //     ctx.json({
  //       id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
  //       email: "patryk@wp.pl",
  //       // username,
  //       // firstName: 'John',
  //       // lastName: 'Maverick',
  //     })
  //   );
  // }),
];
