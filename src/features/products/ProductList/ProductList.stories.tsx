import type { Meta, StoryObj } from "@storybook/react";

import { ProductList } from "./ProductList";
import { rest } from "msw";
import {
  API_URL,
  employeesMockData,
  productsMockData,
} from "../../../mocks/handlers";

const meta = {
  title: "Components/ProductList",
  component: ProductList,
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _ProductList: Story = {};
_ProductList.parameters = {
  msw: {
    handlers: [
      rest.get(`${API_URL}/products`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(productsMockData));
      }),
    ],
  },
};

export const _ProductListWith200ButWithoutData: Story = {};
_ProductListWith200ButWithoutData.parameters = {
  msw: {
    handlers: [
      rest.get(`${API_URL}/products`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({}));
      }),
    ],
  },
};

export const _ProductListWith500: Story = {};
_ProductListWith500.parameters = {
  msw: {
    handlers: [
      rest.get(`${API_URL}/products`, (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({}));
      }),
    ],
  },
};
