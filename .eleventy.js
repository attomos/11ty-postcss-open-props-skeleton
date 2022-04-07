module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/styles/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
