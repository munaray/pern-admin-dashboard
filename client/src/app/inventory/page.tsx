"use client";

import { DataGrid } from "@mui/x-data-grid";

import { useGetProductsQuery } from "@/utils/api";
import Header from "@/components/page-header";
import { columns } from "@/constants";

const Inventory = () => {
	const { data: products, isError, isLoading } = useGetProductsQuery();

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !products) {
		return (
			<p className="text-center text-red-500 py-4">
				Failed to fetch products
			</p>
		);
	}

	return (
		<div className="flex flex-col">
			<Header title="Inventory" />
			<DataGrid
				rows={products}
				columns={columns}
				getRowId={(row) => row.productId}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
};

export default Inventory;
