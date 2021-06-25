var express             = require('express');
var {graphqlHTTP}       = require('express-graphql');
var {buildSchema}       = require('graphql');

var app = express();

/** ###############################
 *  Graphql Schema
 * 
 *  Keys in Query is able to be queried, here 'hello world'.
 */

var schema = buildSchema(`
    type Query {
        helloworld: String
    }
`)


/** ###############################
 *  The following query in graphql produces output below
 *  {
 *     helloworld
 *  }
 * 
 *  Hello Jonathan!
 */

var root = {
    helloworld: () => 'Hello Jonathan!'
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log("Node Server running on localhost:4000/graphql"))
