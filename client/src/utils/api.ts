import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DashboardMetric } from "@/utils/types";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
	}),
	reducerPath: "api",
	tagTypes: ["DashboardMetrics"],
	endpoints: (build) => ({
		getDashboardMetrics: build.query<DashboardMetric, void>({
			query: () => "/dashboard",
			providesTags: ["DashboardMetrics"],
		}),
	}),
});

export const { useGetDashboardMetricsQuery } = api;
