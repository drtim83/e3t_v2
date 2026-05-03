# E3T v2 - Engagement Estimation & Evaluation Tool

## Overview
**E3T v2** is a comprehensive, scalable web-based application designed to help project managers, delivery leads, and financial planners accurately estimate project man-days, effort allocation, and overall costs. Upgraded with advanced modules, this version includes powerful capabilities like a live business simulator, real-time analytics, governance/approvals workflows, and procurement tracking. 

## Purpose
The primary purpose of the E3T tool is to provide a unified, highly visual dashboard for scoping out commercial engagements. Whether the project is Fixed Price (FP), Time & Materials (T&M), Amortized, or a Retainer, the tool bridges the gap between resource planning and financial profitability. It empowers users to plan resource loading over multi-year timelines and intelligently calculate margins, ensuring engagements are both achievable and profitable before contract sign-off.

## Key Features
* **Project Configuration:** Set contract definitions, global discounts, risk reserves, and monthly hour baselines.
* **Rate Card Management:** Manage standardized job codes, roles, baseline costs, and list prices.
* **Effort Allocation:** Highly granular matrix to define Person-Months (PM) and out-of-pocket expenses (Travel, Per Diem, COLA) on a month-by-month basis.
* **Procurement & Expenses:** Track external vendor costs and markup separately from labor.
* **Simulators & Analytics:** Run scenario analyses and visualize P&L distribution via built-in dashboard charts.
* **Live Forex:** Automated real-time exchange rate fetching to view commercials in dual currencies.
* **Approval & Governance:** Built-in sign-off summaries and downloadable Excel (XLSX) exports for audit trails.

## Core Logics & Formulas
The application relies on several financial accounting formulas calculated dynamically in real-time to drive the P&L summaries:

* **Person-Months (PM):** The user-defined allocation of a resource for a given month (e.g., `0.5` = Half-time).
* **Total Hours:** `Total PM × Configured Hours per Month`
* **Labor Cost:** `Total Hours × Role Standard Rate`
* **Additional Costs (T&E):** Sum of `Per Diem + Travel + Stay + COLA` allocated to that specific resource.
* **Resource Base Cost:** `Labor Cost + Additional Costs`
* **Calculated Resource Cost (with Risk):** `Resource Base Cost × (1 + Global Risk Reserve %)`
* **Resource Revenue:** `(Total Hours × Role List Price) × (1 - Global Discount %) × (1 + Global Allowance %)`
* **Total Project Revenue:** `Sum(Resource Revenues) + Sum(Procurement Sale Prices)`
* **Total Project Cost:** `Sum(Calculated Resource Costs) + Sum(Procurement Costs)`
* **Net Margin Value:** `Total Project Revenue - Total Project Cost`
* **Gross Margin (%) :** `Net Margin Value / Total Project Revenue`

---

**Created by:** Dr. Ming Chan Tok  
**Date:** May 3, 2026
