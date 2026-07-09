import {
  getRecoveryPriorityMatrix,
  getRecoverySummary,
  getTierCadence,
} from "./drRegistry";

export function buildDrReport() {
  return {
    summary: getRecoverySummary(),
    priorityMatrix: getRecoveryPriorityMatrix(),
    cadence: getTierCadence(),
  };
}
