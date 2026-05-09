# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a collection of SQL Server DBA troubleshooting and administration scripts. The scripts are standalone `.sql` (or occasionally `.txt`) files intended to be run directly against a SQL Server instance. There is no build system, package manager, or test runner — each file is a self-contained query or utility.

## Script Categories

Based on the README, scripts are organized by numbered prefix into these categories:

| Prefix range | Category |
|---|---|
| 1–2 | Server configuration and reporting |
| 10–14 | Performance monitoring (I/O warnings, latency, waits, expensive queries) |
| 15–16 | Index management (missing indexes, fragmentation, duplicates) |
| 25, 34 | Backup and restore |
| 29–30 | Security audits (server-level and database-level) |
| 40–43 | Additional tools (index options, SQL Job owners, cache flushing) |

## Conventions

- **Naming**: Files follow the pattern `<number>_<Description>.<sql|txt>`. The number establishes the category and sort order; keep it consistent when adding scripts.
- **File extension**: Use `.sql` for scripts meant to be run as-is. Use `.txt` for scripts that contain instructions, configuration snippets, or templates that are not directly executable.
- **Scope**: Scripts should be read-only/diagnostic wherever possible. Scripts that modify server state (e.g. cache flush, index rebuild) must include a clear comment at the top indicating that they make changes.
- **Compatibility**: The server report script (`1_1_ServerReport_Universal_v2.1_2005.sql`) targets SQL Server 2005+. Note minimum compatibility level requirements at the top of any script that uses newer DMVs or syntax.

## Adding New Scripts

1. Choose the appropriate numbered category from the table above, or append a new number for a new category.
2. Use `USE [database_name];` or `USE master;` as appropriate, or omit it if the script is database-agnostic.
3. When using DMVs (`sys.dm_*`), note the required SQL Server version/edition.
