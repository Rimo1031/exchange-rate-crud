const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const app = express();
const port = 5110;

const schema = graphql.buildSchema(`
    type Query {
        getExchangeRate: ExchangeInfo
    }
    type ExchangeInfo {
        src: String!
        tgt: String!
        rate: Float!
        date: String!
    }
`);

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

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Listening at port ${port}.\n`);
});
