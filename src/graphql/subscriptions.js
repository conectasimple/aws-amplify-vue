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
export const onCreateAlarma = `subscription OnCreateAlarma($Row: String, $payload: AWSJSON) {
  onCreateAlarma(Row: $Row, payload: $payload) {
    Row
    payload
  }
}
`;
export const onUpdateAlarma = `subscription OnUpdateAlarma($Row: String, $payload: AWSJSON) {
  onUpdateAlarma(Row: $Row, payload: $payload) {
    Row
    payload
  }
}
`;
export const onDeleteAlarma = `subscription OnDeleteAlarma($Row: String) {
  onDeleteAlarma(Row: $Row) {
    Row
    payload
  }
}
`;
export const onCreateSensorIot = `subscription OnCreateSensorIot(
  $PositionInRow: Int
  $Row: String
  $payload: AWSJSON
) {
  onCreateSensorIOT(
    PositionInRow: $PositionInRow
    Row: $Row
    payload: $payload
  ) {
    PositionInRow
    Row
    payload
  }
}
`;
export const onUpdateSensorIot = `subscription OnUpdateSensorIot(
  $PositionInRow: Int
  $Row: String
  $payload: AWSJSON
) {
  onUpdateSensorIOT(
    PositionInRow: $PositionInRow
    Row: $Row
    payload: $payload
  ) {
    PositionInRow
    Row
    payload
  }
}
`;
export const onDeleteSensorIot = `subscription OnDeleteSensorIot(
  $PositionInRow: Int
  $Row: String
  $payload: AWSJSON
) {
  onDeleteSensorIOT(
    PositionInRow: $PositionInRow
    Row: $Row
    payload: $payload
  ) {
    PositionInRow
    Row
    payload
  }
}
`;
export const onCreateHistoricoSensorIot = `subscription OnCreateHistoricoSensorIot(
  $PositionInRow: Int
  $Row: String
  $payload: AWSJSON
) {
  onCreateHistoricoSensorIOT(
    PositionInRow: $PositionInRow
    Row: $Row
    payload: $payload
  ) {
    PositionInRow
    Row
    payload
  }
}
`;
export const onUpdateHistoricoSensorIot = `subscription OnUpdateHistoricoSensorIot(
  $PositionInRow: Int
  $Row: String
  $payload: AWSJSON
) {
  onUpdateHistoricoSensorIOT(
    PositionInRow: $PositionInRow
    Row: $Row
    payload: $payload
  ) {
    PositionInRow
    Row
    payload
  }
}
`;
export const onDeleteHistoricoSensorIot = `subscription OnDeleteHistoricoSensorIot(
  $PositionInRow: Int
  $Row: String
  $payload: AWSJSON
) {
  onDeleteHistoricoSensorIOT(
    PositionInRow: $PositionInRow
    Row: $Row
    payload: $payload
  ) {
    PositionInRow
    Row
    payload
  }
}
`;
