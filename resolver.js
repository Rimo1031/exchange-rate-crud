const model = require("./schema_mongoose");

const resolver = {
  getExchangeRate: (args) => {
    const res = model.findOne({ src: args.src, tgt: args.tgt });
    return res;
  },
  postExchangeRate: (args) => {
    const data = {
      src: args.info.src,
      tgt: args.info.tgt,
      rate: args.info.rate,
      date: args.info.date,
    };
    const newData = new model(data);
    newData.save();
    return data;
  },
};

module.exports = resolver;
