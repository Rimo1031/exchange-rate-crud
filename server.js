const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const app = express();
const port = 5110;

const schema = require("./schema");

const resolver = require("./resolver");

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
