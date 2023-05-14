const excinfo = require("./schema_mongoose");

const resolver = {
  getExchangeRate: async (args) => {
    const filter = { src: args.src, tgt: args.tgt }
    const result = await excinfo.findOne(filter);
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

    const doc = await excinfo.findOne(filter);
    let result;
    if (doc == null) {    // if no document was found
      const data = {
        src: args.info.src,
        tgt: args.info.tgt,
        rate: args.info.rate,
        date: args.info.date,
      }
      result = new excinfo(data);
      await result.save();
    }
    else {
      result = await excinfo.findOne(filter);
      // return document "before" update.
      await excinfo.updateOne(filter, update);
    }
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
