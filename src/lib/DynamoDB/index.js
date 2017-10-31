export * from './DynamoDB';

/* Sample Dynamo GET Requests

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



/**
 * Sample DynamoDB Pust Request
 * 
 * {
  RequestItems: {
    [statsTable]: [
      {
        PutRequest: {
          Item: {
            userId: username,
            time: 135235231241,
            strength: 141, 
            intelligence: 124
          }
        }
      },
      {
        PutRequest: {
          Item: {
            userId: username,
            time: 4235351,
            timestamp: 4235351, 
            strength: 3512, 
            intelligence: 1354
          }
        }
      },
      {
        PutRequest: {
          Item: {
            userId: username,
            time: 9867456366,
            timestamp: 9867456366, 
            strength: 462, 
            intelligence: 905
          }
        }
      },
    ]
  }
}
 * 
 * 
 * 
 * 
 */