// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IReport, IReports } from '../interfaces'

// Define a service using a base URL and expected endpoints
export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '../api/' }),
    endpoints: (builder) => ({
        getReportByName: builder.query<IReport, string>({
            query: () => `reports.json`,
        }),
        getReports: builder.query<IReports, []>({
            query: () => 'reports/*',
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReportByNameQuery, useGetReportsQuery } = reportsApi