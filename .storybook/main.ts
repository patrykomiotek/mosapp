import type { StorybookConfig } from "@storybook/react-webpack5";
const aliases = require("../aliases");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  // webpackFinal: (config) => {
  //   if (config) {
  //     config?.resolve?.alias = {
  //       ...config.resolve.alias,
  //       ...aliases,
  //     };
  //     return config;
  //   }
  //   return config;
  // },
};
export default config;
