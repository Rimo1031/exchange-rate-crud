const resolver = {
  Query: {
    persons: () => {
      return { name: "Hello, world!" };
    },
  },
};

module.exports = resolver;
