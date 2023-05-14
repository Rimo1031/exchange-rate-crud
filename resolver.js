const excinfo = require("./schema_mongoose");

const resolver = {
  getExchangeRate: async (args) => {
    const result = await excinfo.findOne({ src: args.src, tgt: args.tgt });
    return result;
  },
  postExchangeRate: async (args) => {
    const filter = {
      src: args.info.src,
      tgt: args.info.tgt,
      date: args.info.date,
    };
    const update = {
      rate: args.info.rate,
    };
    // if date is not given in the input, set the date to today's date
    if (filter.date == null) {
      dt = new Date();
      let str = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate();
      filter.date = str;
    }
    const result = await excinfo.findOneAndUpdate(filter, update, { upsert: true });
    return result;
  },
  deleteExchangeRate: async (args) => {
    const filter = {
      src: args.info.src,
      tgt: args.info.tgt,
      date: args.info.date,
    };
    const result = await excinfo.findOneAndDelete(filter);
    return result;
  },
};

module.exports = resolver;
