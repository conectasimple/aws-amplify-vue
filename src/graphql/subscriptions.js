/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSensor = `subscription OnCreateSensor(
  $PositionInRow: String
  $Row: String
  $payload: AWSJSON
) {
  onCreateSensor(PositionInRow: $PositionInRow, Row: $Row, payload: $payload) {
    PositionInRow
    Row
    payload
  }
}
`;
export const onUpdateSensor = `subscription OnUpdateSensor(
  $PositionInRow: String
  $Row: String
  $payload: AWSJSON
) {
  onUpdateSensor(PositionInRow: $PositionInRow, Row: $Row, payload: $payload) {
    PositionInRow
    Row
    payload
  }
}
`;
export const onDeleteSensor = `subscription OnDeleteSensor(
  $PositionInRow: String
  $Row: String
  $payload: AWSJSON
) {
  onDeleteSensor(PositionInRow: $PositionInRow, Row: $Row, payload: $payload) {
    PositionInRow
    Row
    payload
  }
}
`;
