// update to v1.1 api full length activity
export const statsToActivityMapping = {
  'walking': {int: 0.000002, agy: -0.000001, stm: 0.000001},
  'transport': {int: 0.000001, str: 0.000002, stm: -0.000002},
  'plc': {int: 0.000002, str: -0.000001, agy: -0.000001},
  'cycling': {str: 0.000001, agy: 0.000002, stm: 0.000002},
  'idl': {int: -0.000001, str: -0.000002, stm: -0.000002},
  //etc
}

export const localActivityMapping = {
  'run': {stm: 2, agy: 1},
  'dance': {str: 1, agy: 2, int: -1},
  'sleep': {stm: -2, str: -1, int: 3},
  'eat': {stm: 2, agy: -1}
}