import gql from "graphql-tag";

/*
export const listSensors = `query ListSensors(
  $filter: TableSensorFilterInput
  $limit: Int
  $nextToken: String
) {
  listSensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      PositionInRow
      Row
      payload
    }
    nextToken
  }
}
`;
*/

/*
export const listSensors =  gql`query 
{
  listSensors(limit:10){
    items {
      PositionInRow
      Row
      payload
    }
  }
}` 
*/
export const listSensors =  gql`query ListSensors(
  $filter: TableSensorFilterInput
  $limit: Int
  $nextToken: String
) {
  listSensors(filter: $filter, limit: $limit, nextToken: $nextToken,limit:7200) {
    items {
      PositionInRow
      Row
      payload
    }
    nextToken
  }
}` 
 