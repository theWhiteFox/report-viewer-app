/* API responses can be found in the`public/api` directory.
 * `/api/reports.json` contains a list of available reports.
 * `/api/reports/{reportId}-{billingPeriod}.json` contains 
 *  data for the report id `reportId` over the billing period 
 * `billingPeriod`.  If the API response is not found: render error, 
 *  malformed or incomplete, I want to be informed accordingly
 * .no iffec location specified
 */

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IReport, IReports } from '../interfaces'

// Define a service using a base URL and expected endpoints
export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '../api/' }),
    endpoints: (builder) => ({
        getReportList: builder.query<IReport, string>({
            query: () => `reports-list.json`,
        }),
        getReport: builder.query<IReports, { reportId: string, billingPeriod: string }>({
            query: (arg) => {
                const { reportId, billingPeriod } = arg;
                console.log('arg: ', arg);
                return {
                    url: `reports/${reportId}-${billingPeriod}.json`,
                    params: { reportId, billingPeriod },
                }
            },
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReportListQuery, useGetReportQuery } = reportsApi