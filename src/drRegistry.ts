export type RecoveryWorkload = {
  id: string;
  name: string;
  criticality: "High" | "Medium" | "Low";
  rto: string;
  rpo: string;
  owner: string;
  testStatus: "Passed" | "Scheduled" | "Pending" | "Exception";
  approvalStatus: "Approved" | "Pending" | "Exception";
  evidence: string[];
};

export const recoveryWorkloads: RecoveryWorkload[] = [
  {
    id: "customer-portal",
    name: "Customer Portal",
    criticality: "High",
    rto: "2 hrs",
    rpo: "15 min",
    owner: "Application owner",
    testStatus: "Passed",
    approvalStatus: "Approved",
    evidence: ["Failover test", "Recovery runbook", "Approval record"],
  },
  {
    id: "internal-reporting",
    name: "Internal Reporting",
    criticality: "Medium",
    rto: "8 hrs",
    rpo: "1 hr",
    owner: "Service owner",
    testStatus: "Scheduled",
    approvalStatus: "Approved",
    evidence: ["Test schedule", "Recovery objectives", "Readiness checklist"],
  },
  {
    id: "batch-analytics",
    name: "Batch Analytics",
    criticality: "Low",
    rto: "24 hrs",
    rpo: "4 hrs",
    owner: "Platform lead",
    testStatus: "Pending",
    approvalStatus: "Exception",
    evidence: ["Exception log", "Recovery tier model", "Review notes"],
  },
];

export type RecoveryTier = {
  tier: "Tier 1" | "Tier 2" | "Tier 3";
  description: string;
  cadence: string;
  validationExpectation: string;
};

export const recoveryTiers: RecoveryTier[] = [
  {
    tier: "Tier 1",
    description: "Critical workloads with the strongest recovery requirements.",
    cadence: "Quarterly failover test",
    validationExpectation: "Validated against a real test and approved.",
  },
  {
    tier: "Tier 2",
    description: "Important workloads with moderate recovery tolerance.",
    cadence: "Semiannual readiness review",
    validationExpectation: "Validated through documented testing or equivalent.",
  },
  {
    tier: "Tier 3",
    description: "Lower priority workloads with longer recovery tolerance.",
    cadence: "Quarterly readiness check",
    validationExpectation: "Reviewed and accepted with an explicit exception path.",
  },
];

export function getRecoverySummary() {
  return {
    totalWorkloads: recoveryWorkloads.length,
    approvedWorkloads: recoveryWorkloads.filter(
      (workload) => workload.approvalStatus === "Approved"
    ).length,
    passedTests: recoveryWorkloads.filter((workload) => workload.testStatus === "Passed").length,
  };
}

export function getRecoveryPriorityMatrix() {
  return recoveryWorkloads.map((workload) => ({
    workload: workload.name,
    criticality: workload.criticality,
    rto: workload.rto,
    rpo: workload.rpo,
    owner: workload.owner,
  }));
}

export function getTierCadence() {
  return recoveryTiers.map((tier) => ({
    tier: tier.tier,
    cadence: tier.cadence,
    expectation: tier.validationExpectation,
  }));
}
