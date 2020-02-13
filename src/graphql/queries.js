import gql from "graphql-tag";

export const getSensor = gql`query GetSensor($Row: String!, $PositionInRow: String!) {
  getSensor(Row: $Row, PositionInRow: $PositionInRow) {
    PositionInRow
    Row
    payload
  }
}
`;
export const listSensors = gql`query ListSensors(
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
export const getAlarma = gql`query GetAlarma($Row: String!) {
  getAlarma(Row: $Row) {
    Row
    payload
  }
}
`;
export const listAlarmas = gql`query ListAlarmas(
  $filter: TableAlarmaFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlarmas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      Row
      payload
    }
    nextToken
  }
}
`;
export const getSensorIot = gql`query GetSensorIot($Row: String!, $PositionInRow: Int!) {
  getSensorIOT(Row: $Row, PositionInRow: $PositionInRow) {
    PositionInRow
    Row
    payload
  }
}
`;
export const listSensorIots = gql`query ListSensorIots(
  $filter: TableSensorIOTFilterInput
  $limit: Int
  $nextToken: String
) {
  listSensorIOTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      PositionInRow
      Row
      payload
    }
    nextToken
  }
}
`;
