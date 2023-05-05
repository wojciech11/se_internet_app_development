var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var rootValue = { hello: () => "Hello world!" }

var source = "{ hello }"

graphql({ schema, source, rootValue }).then(response => {
  console.log(response)
})