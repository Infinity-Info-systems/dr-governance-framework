# Recovery Validation Matrix

This matrix connects application criticality, recovery objectives, testing, and approval steps into a single operational view.
It is the place where recovery confidence becomes measurable.

## Purpose

Use this matrix to confirm that each workload has a realistic recovery target, a tested recovery path, and a named owner.

## Validation Areas

### 1. Criticality

- business importance
- user impact
- dependency exposure
- regulatory exposure

### 2. Recovery Objectives

- RTO target
- RPO target
- failover duration
- failback tolerance

### 3. Readiness

- runbook completeness
- recovery owner assigned
- infrastructure dependencies identified
- access and permission validated

### 4. Testing

- test type
- test frequency
- successful completion rate
- open remediation items

### 5. Approval

- recovery approval owner
- change approval requirement
- exception approval path
- executive escalation path

## Validation Rule

No recovery target should be treated as trustworthy unless it has been validated against a real test or a clearly documented equivalent.

## Example Matrix

| Workload | Criticality | RTO | RPO | Test Status | Approval Status |
| --- | --- | --- | --- | --- | --- |
| Customer Portal | High | 2 hrs | 15 min | Passed | Approved |
| Internal Reporting | Medium | 8 hrs | 1 hr | Scheduled | Approved |
| Batch Analytics | Low | 24 hrs | 4 hrs | Pending | Exception |

## Figure

```mermaid
flowchart LR
  A[Criticality] --> B[Recovery Objectives]
  B --> C[Readiness]
  C --> D[Testing]
  D --> E[Approval]
  E --> F[Confidence]
```

## Operating Rhythm

Recommended cadence:

1. Monthly recovery readiness review
2. Quarterly failover test review
3. Semiannual executive continuity review
4. After-action review after every real recovery event

## Recommended Actions

- close readiness gaps before approving targets
- align test frequency with criticality tier
- track exceptions with owner and due date
- capture lessons learned in the post-DR template
- keep validation evidence with the recovery record
- keep the same validation logic across criticality tiers

## Related Artifacts

- [DR Readiness Checklist](../templates/dr-readiness-checklist.md)
- [Application Recovery Template](../templates/application-recovery-template.md)
- [Post-DR Lessons Learned](../templates/post-dr-lessons-learned.md)
- [DR Test Execution](../playbooks/dr-test-execution.md)
- [Failover Playbook](../playbooks/failover-playbook.md)
- [Failback Playbook](../playbooks/failback-playbook.md)
