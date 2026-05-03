# E3T — Engagement Estimation & Evaluation Tool

## Overview
E3T is a high-precision resource rates and effort planning workbook designed for business engagement estimation. It enables project managers and lead architects to calculate project costs, revenues, and margins with granularity across a multi-year horizon.

**Creator:** Dr. Ming Chan Tok

---

## Core Logic & Formulas

### 1. Revenue Calculations
The tool calculates revenue based on effective billing rates after applying global commercial terms.

*   **List Price:** The base hourly rate from the Standard Rate Card.
*   **Sell Price:** Calculated as:
    `Sell Price = List Price × (1 − Global Discount %) × (1 + Global Allowance %)`
*   **Gross Revenue:**
    `Revenue = Total Hours × Sell Price`
    *Where Total Hours = Person-Months × Working Hours per Month*

### 2. Cost & Margin
*   **Total Cost:**
    `Cost = Total Hours × Standard Cost Rate`
*   **Gross Margin (MYR):**
    `Margin = Revenue − Cost`
*   **Gross Margin (%):**
    `Margin % = (Revenue − Cost) / Revenue`

### 3. Risk & Commercials
*   **Risk Reserve:** A contingency buffer calculated as a percentage of total revenue.
    `Risk Reserve = Revenue × Risk Reserve %`
*   **TCV (Total Contract Value):** The final estimated value including all resources over the duration.

---

## Technical Features
- **Live Forex Integration:** Automatically fetches real-time exchange rates from `open.er-api.com` on load.
- **Engagement Simulator:** Advance simulation of commercial variables (Discount, Allowance, Risk) with real-time TCV and Margin impact analysis.
- **Role Search & Management:** Quickly filter the rate card and manage resource roles.
- **Multi-Currency Planning:** Separate Cost and Sell currency configuration.
- **5-Year Planning Horizon:** Support for up to 60 months of effort planning.
- **Deep Analytics:** Visual breakdown of revenue distribution, resource yield, and YoY progression.
- **Excel Portability:** Export full data sets to XLSX for executive reporting.
- **Persistence:** All data is automatically saved to local storage with multi-level undo/redo support.
