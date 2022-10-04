# Report Viewer App

[![Netlify
Status](https://api.netlify.com/api/v1/badges/32d07a94-0683-4adc-bd13-47f48d291bf7/deploy-status)](https://app.netlify.com/sites/bill-report-viewer/deploys)

## Overview

The account manager of a fictional client company needs to view reports on how employees are making phone calls and
using mobile data. The candidate must provide a user interface to the API to allow the account manager to view:
- Available reports.
- Available data for each report for the specified billing period.

## Install Run Test Build
- `yarn`
- `yarn dev`
- `yarn run test`
- `yarn build`

## UI Design

Feel free to come up with your own, but please notice code quality and technical aspects are way more relevant than
design.

## API Responses

API responses can be found in the `/api` directory.
- `/api/reports.json` contains a list of available reports.
- `/api/reports/{reportId}-{billingPeriod}.json` contains data for the report id `reportId` over the billing period
`billingPeriod`.

## Acceptance Criteria

### Report list
- I want to see a list of available reports.
- I want to be able to sort the report list by name and description.
* For each report, I want to see:
* The report's name,
* The report's description,
* A button to navigate to the report result table.
- I want to be able to specify over which billing period a report is run.

### Report view
- I want to see results of the report in a table.
- I want the results of the report to be formatted in a usable manner.
- I want to be able to sort the results by each column.
- The table's columns are defined in the report data JSON.
- When I click on the "Close" button, I want to navigate back to the report list.
- If the API response is not found, malformed or incomplete, I want to be informed accordingly.

Consider best practices, usability and error handling matters.