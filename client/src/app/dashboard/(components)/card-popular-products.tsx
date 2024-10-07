import { useGetDashboardMetricsQuery } from "@/utils/api";
import { ShoppingBag } from "lucide-react";
import React, { Fragment } from "react";
// import Image from "next/image";
import Rating from "@/components/rating";

const CardPopularProducts = () => {
	const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
	console.log(dashboardMetrics);

	return (
		<section className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
			{isLoading ? (
				<p className="m-5">Loading...</p>
			) : (
				<Fragment>
					<h3 className="text-lg font-semibold px-7 pt-5 pb-2">
						Popular Products
					</h3>
					<hr />
					<div className="overflow-auto h-full">
						{dashboardMetrics?.popularProducts.map((product) => (
							<div
								key={product.productId}
								className="flex items-center justify-between gap-3 px-5 py-7 border-b">
								<figure className="flex items-center gap-3">
									{/* <Image
										src={`${
											Math.floor(Math.random() * 3) + 1
										}.png`}
										alt={product.name}
										width={48}
										height={48}
										className="rounded-lg w-14 h-14"
									/> */}
									<div>img</div>
									<article className="flex flex-col justify-between gap-1">
										<p className="font-bold text-gray-700">
											{product.name}
										</p>
										<p className="flex text-sm items-center">
											<span className="font-bold text-blue-500 text-xs">
												${product.price}
											</span>
											<span className="mx-2">|</span>
											<Rating
												rating={product.rating || 0}
											/>
										</p>
									</article>
								</figure>

								<figure className="text-xs flex items-center">
									<button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
										<ShoppingBag className="w-4 h-4" />
									</button>
									{Math.round(product.stockQuantity / 1000)}k
									Sold
								</figure>
							</div>
						))}
					</div>
				</Fragment>
			)}
		</section>
	);
};

export default CardPopularProducts;
