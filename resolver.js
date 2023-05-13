const sample = [
  {
    src: "usd",
    tgt: "krw",
    rate: "1342.11",
    date: "2022-11-28",
  },
];

const resolver = {
  getExchangeRate: (obj, args, context) => {
    res = {
      src: args.src,
      tgt: args.tgt,
      rate: sample[0].rate,
      date: sample[0].date,
    };
    return res;
  },
  postExchangeRate: (obj, args, context) => {
    res = {
      src: args.src,
      tgt: args.tgt,
      rate: args.rate,
      date: args.date,
    };
    return res;
  },
};

module.exports = resolver;
