const sample = [
  {
    src: "usd",
    tgt: "krw",
    rate: "1342.11",
    date: "2022-11-28",
  },
];

const resolver = {
  getExchangeRate: (args) => {
    console.log(args.src);
    return sample[0];
  },
  postExchangeRate: (args) => {
    res = args.info;
    sample.push(res);
    return res;
  },
};

module.exports = resolver;
