import awsExports from '../../aws-exports';

export const AWS_CONFIG = awsExports;




import {
  DYNAMO_DB_STATS_TABLE,
  DYNAMO_DB_LOCATION_TABLE,
  DYNAMO_DB_TOKENS_TABLE,
  DYNAMO_DB_ACTIVITIES_TABLE
} from 'react-native-dotenv';

export const DYNAMO_TABLES = {
  stats: DYNAMO_DB_STATS_TABLE,
  location: DYNAMO_DB_LOCATION_TABLE,
  tokens: DYNAMO_DB_TOKENS_TABLE,
  activities: DYNAMO_DB_ACTIVITIES_TABLE,
};
