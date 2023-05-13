const sample = {
  src: "usd",
  tgt: "krw",
  rate: "1342.11",
  date: "2022-11-28",
};

const resolver = {
  getExchangeRate: () => {
    return sample;
  },
};

module.exports = resolver;
