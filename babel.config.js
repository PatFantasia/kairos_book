module.exports = function (api) {
  api.cache(true);

  const presets = ["babel-preset-expo"];
  const plugins = [
    [
      "module-resolver",
      {
        root: ["./src/"],
        alias: {
          // assets: "./assets/src",
          constants: "./src/constants",
          screens: "./src/screens",
          components: "./src/components",
          store: "./src/store",
          navigation: "./src/navigation",
          services: "./src/services",
        },
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
