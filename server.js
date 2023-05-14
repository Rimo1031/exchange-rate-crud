const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const app = express();
const port = 5110;

const schema = require("./schema");
const resolver = require("./resolver");

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://rimo_test:rimo1031@cluster0.w2xccut.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

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
