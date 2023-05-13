graphql = require("graphql");

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

module.exports = schema;
