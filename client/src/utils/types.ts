import { LucideIcon } from "lucide-react";

export interface Product {
	productId: string;
	name: string;
	stockQuantity: number;
	price: number;
	rating?: number;
}

export interface NewProduct {
	name: string;
	price: number;
	rating?: number;
	stockQuantity: number;
}

export interface SalesSummary {
	saleSummaryId: string;
	totalValue: number;
	changePercentage?: number;
	date: string;
}

export interface PurchaseSummary {
	purchaseSummaryId: string;
	totalPurchased: number;
	changePercentage?: number;
	date: string;
}

export interface ExpenseSummary {
	expenseSummaryId: string;
	totalExpenses: number;
	date: string;
}

export interface ExpenseByCategorySummary {
	category: string;
	totalExpenses: number;
	amount: string;
	date: string;
}

export interface DashboardMetric {
	popularProducts: Product[];
	salesSummary: SalesSummary[];
	purchaseSummary: PurchaseSummary[];
	expenseSummary: ExpenseSummary[];
	expenseByCategorySummary: ExpenseByCategorySummary[];
}

export interface User {
	userId: string;
	name: string;
	email: string;
}

export interface StatDetail {
	title: string;
	amount: string;
	changePercentage: number;
	IconComponent: LucideIcon;
}

export interface StatCardProps {
	title: string;
	primaryIcon: JSX.Element;
	details: StatDetail[];
	dateRange: string;
}
