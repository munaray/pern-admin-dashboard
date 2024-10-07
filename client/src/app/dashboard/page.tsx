"use client";

import CardPopularProducts from "./(components)/card-popular-products";
import CardSalesSummary from "./(components)/card-sales-summary";
import CardPurchaseSummary from "./(components)/card-purchase-summary";
import CardExpenseSummary from "./(components)/card-expense-summary";
import { STATS_DATA } from "@/constants";
import StatCard from "./(components)/stat-card";

const Dashboard = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
			<CardPopularProducts />
			<CardSalesSummary />
			<CardPurchaseSummary />
			<CardExpenseSummary />
			{STATS_DATA.map((stat, index) => (
				<StatCard
					key={index}
					title={stat.title}
					primaryIcon={stat.primaryIcon}
					details={stat.details}
					dateRange={stat.dateRange}
				/>
			))}
		</div>
	);
};

export default Dashboard;
