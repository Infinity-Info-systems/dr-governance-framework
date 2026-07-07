# DR Governance Framework

## Overview

This repository contains the governance and operating model for disaster recovery across cloud and hybrid environments.

It focuses on recovery tiering, RTO/RPO governance, failover orchestration, business continuity alignment, and resilience testing.
It is intended to help teams govern recovery as a repeatable operating practice, not just a set of documents.

## Why It Matters

Recovery planning often exists in documents without clear governance.

This repository helps teams define and manage:

- disaster recovery governance
- business continuity alignment
- RTO and RPO targets
- failover and failback orchestration
- recovery approvals
- resilience testing
- post-incident learning
- validation discipline
- recovery ownership clarity
- executive continuity reporting

## Content Model

This repository works best when the content is grouped into three layers:

- governance framing and operating model
- recovery validation and orchestration models
- playbooks, templates, and metrics

## How To Use This Repo

1. Read the framework overview.
2. Review the recovery validation matrix.
3. Review the DR operating model and recovery tier model.
4. Use the playbooks and templates to operationalize recovery.
5. Track tests, approvals, and lessons learned over time.
6. Keep terminology consistent across models, playbooks, and templates.

## Core Content

- [Framework Overview](docs/framework-overview.md)
- [DR Operating Model](docs/dr-operating-model.md)
- [Recovery Validation Matrix](docs/recovery-validation-matrix.md)
- [Business Continuity Alignment](docs/business-continuity-alignment.md)
- [RTO/RPO Governance](docs/rto-rpo-governance.md)
- [Failover Orchestration](docs/failover-orchestration.md)
- [Resilience Testing](docs/resilience-testing.md)

## Governance Models

- [DR Governance Structure](governance-models/dr-governance-structure.md)
- [Recovery Approval Workflow](governance-models/recovery-approval-workflow.md)

## Recovery Models

- [Application Criticality Model](recovery-models/application-criticality-model.md)
- [Recovery Tier Model](recovery-models/recovery-tier-model.md)

## Playbooks

- [DR Test Execution](playbooks/dr-test-execution.md)
- [Failover Playbook](playbooks/failover-playbook.md)
- [Failback Playbook](playbooks/failback-playbook.md)

## Templates

- [DR Readiness Checklist](templates/dr-readiness-checklist.md)
- [Application Recovery Template](templates/application-recovery-template.md)
- [Post-DR Lessons Learned](templates/post-dr-lessons-learned.md)

## References

- [Bibliography](references/bibliography.md)
- [Research Links](publications/research-links.md)
- [Impact Metrics](evidence/impact-metrics.md)

## Operating Principle

Recovery governance should make it clear who decides, what gets tested, and how confidence is maintained over time.
