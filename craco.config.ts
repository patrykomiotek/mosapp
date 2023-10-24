const aliases = require("./aliases");

module.exports = {
  webpack: {
    alias: aliases,
  },
  jest: {
    configure: {
      verbose: true,
      moduleNameMapper: {
        "@components(.*)$": "<rootDir>/src/components$1",
        "@hooks(.*)$": "<rootDir>/src/hooks$1",
        "@pages(.*)$": "<rootDir>/src/pages$1",
        "@services(.*)$": "<rootDir>/src/services$1",
        "@stories(.*)$": "<rootDir>/src/stories$1",
        "@apptypes(.*)$": "<rootDir>/src/types$1",
        "@utils(.*)$": "<rootDir>/src/utils$1",
        "@atoms(.*)$": "<rootDir>/src/ui/atoms$1",
        "@molecules(.*)$": "<rootDir>/src/ui/molecules$1",
        "@organisms(.*)$": "<rootDir>/src/ui/organisms$1",
      },
    },
  },
};
