import gql from "graphql-tag";

export const createSensor = gql`mutation CreateSensor($input: CreateSensorInput!) {
  createSensor(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const updateSensor = gql`mutation UpdateSensor($input: UpdateSensorInput!) {
  updateSensor(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const deleteSensor = gql`mutation DeleteSensor($input: DeleteSensorInput!) {
  deleteSensor(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const createAlarma = gql`mutation CreateAlarma($input: CreateAlarmaInput!) {
  createAlarma(input: $input) {
    Row
    payload
  }
}
`;
export const updateAlarma = gql`mutation UpdateAlarma($input: UpdateAlarmaInput!) {
  updateAlarma(input: $input) {
    Row
    payload
  }
}
`;
export const deleteAlarma = gql`mutation DeleteAlarma($input: DeleteAlarmaInput!) {
  deleteAlarma(input: $input) {
    Row
    payload
  }
}
`;
export const createSensorIot = `mutation CreateSensorIot($input: CreateSensorIOTInput!) {
  createSensorIOT(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const updateSensorIot = gql`mutation UpdateSensorIot($input: UpdateSensorIOTInput!) {
  updateSensorIOT(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const deleteSensorIot = gql`mutation DeleteSensorIot($input: DeleteSensorIOTInput!) {
  deleteSensorIOT(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const createHistoricoSensorIot = gql`mutation CreateHistoricoSensorIot($input: CreateHistoricoSensorIOTInput!) {
  createHistoricoSensorIOT(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const updateHistoricoSensorIot = `mutation UpdateHistoricoSensorIot($input: UpdateHistoricoSensorIOTInput!) {
  updateHistoricoSensorIOT(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
export const deleteHistoricoSensorIot = `mutation DeleteHistoricoSensorIot($input: DeleteHistoricoSensorIOTInput!) {
  deleteHistoricoSensorIOT(input: $input) {
    PositionInRow
    Row
    payload
  }
}
`;
