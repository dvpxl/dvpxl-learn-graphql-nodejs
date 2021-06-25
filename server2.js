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
     document(id: Int!): Document
     documents(type: String!): [Document]
 }

 type Document {
     id: Int
     name: String
     type: String
     size: String
     tags: String
     description: String
     url: String
 }
`)


 var documentData = [
    {id: 1, name: 'file1.txt', type: 'text', size:'328', tags:'#notes, #w2', description: 'None', url: 'http://localhost/'},
    {id: 2, name: 'file2.txt', type: 'text', size:'35', tags:'#notes, #w2', description: 'None', url: 'http://localhost/'},
    {id: 3, name: 'photo1.png', type: 'image', size:'81200', tags:'#notes, #w2', description: 'None', url: 'http://localhost/'},
    {id: 4, name: 'photo2.png', type: 'image', size:'42033', tags:'#trip #hawaii' , description: 'None', url: 'http://localhost/'},
    {id: 5, name: 'photo3.png', type: 'image', size:'55235', tags:'#trip #korea', description: 'None', url: 'http://localhost/'}
]

var getDocument = function(args) {
  var id = args.id;
  return documentData.filter(doc => {
      return doc.id == id
  })[0];
}

var getDocuments = function(args) {
    if(args.type) {
        var type = args.type
        return documentData.filter(doc => doc.type === type)
    } else {
        return documentData
    }
}

var root = {
    document: getDocument,
    documents: getDocuments
}

// express server and graphql endpoint
var app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log("Node Server running on localhost:4000/graphql"))
