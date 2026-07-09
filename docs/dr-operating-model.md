# DR Operating Model

## Purpose

The operating model defines how recovery objectives, tests, approvals, and remediation actions are managed.

## Operating Areas

- application criticality
- recovery tiering
- test planning
- approval workflow
- lessons learned
- failover ownership
- validation follow-up

## Operating Questions

- which workloads are critical?
- what recovery tier applies?
- who approves the plan?
- how often is it tested?

## Evidence To Collect

- criticality assessment
- recovery tier assignment
- test schedule
- approval record
- lesson log

## Operating Outcome

The operating model should make it clear who owns recovery, how decisions are approved, and how gaps are closed.

## Operating Table

| Stage | Owner | Output |
| --- | --- | --- |
| Criticality | Application owner | Criticality assessment |
| Tiering | DR lead | Recovery tier assignment |
| Approval | Governance reviewer | Approval record |
| Testing | Recovery team | Test result |
| Improvement | Service owner | Follow-up action |

## Operating Rule

Every recovery plan should have a named owner, a tested objective, and a follow-up path for any failed validation.
