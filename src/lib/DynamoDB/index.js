export * from './DynamoDB';

/* Sample Dynamo Requests

BATCHGET REQUEST :

var params = {
  RequestItems: { // required 
    '<TableName>': {
      Keys: [ // required
        {
          '<AttributeName>': someValue, // "str" | 10 | true | false | null | [1, "a"] | {a: "b"}
          // '<AttributeName>': ... 
        },
        // more items 
      ],
      AttributesToGet: [
        'STRING_VALUE',
        // more items 
      ],
      ConsistentRead: true || false,
      ExpressionAttributeNames: {
        '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
        // '<ExpressionAttributeNameVariable>': ... 
      },
      ProjectionExpression: 'STRING_VALUE'
    },
  // '<TableName>': ... 
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE
};

*/