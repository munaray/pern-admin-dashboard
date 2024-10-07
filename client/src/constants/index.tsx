import {
	Layout,
	Archive,
	Clipboard,
	SlidersHorizontal,
	User,
	CircleDollarSign,
	Package,
	TrendingUp,
	TrendingDown,
	CheckCircle,
	Tag,
} from "lucide-react";

export const SIDEBAR_LIST = [
	{
		name: "Dashboard",
		href: "/dashboard",
		icon: Layout,
	},
	{
		name: "Inventory",
		href: "/inventory",
		icon: Archive,
	},
	{
		name: "Products",
		href: "/products",
		icon: Clipboard,
	},
	{
		name: "Users",
		href: "/users",
		icon: User,
	},
	{
		name: "Settings",
		href: "/settings",
		icon: SlidersHorizontal,
	},
	{
		name: "Expenses",
		href: "/expenses",
		icon: CircleDollarSign,
	},
] as const;

export const STATS_DATA = [
	{
		title: "Customer & Expenses",
		primaryIcon: <Package className="text-blue-600 w-6 h-6" />,
		dateRange: "22 - 29 October 2023",
		details: [
			{
				title: "Customer Growth",
				amount: "175.00",
				changePercentage: 131,
				IconComponent: TrendingUp,
			},
			{
				title: "Expenses",
				amount: "10.00",
				changePercentage: -56,
				IconComponent: TrendingDown,
			},
		],
	},
	{
		title: "Dues & Pending Orders",
		primaryIcon: <CheckCircle className="text-blue-600 w-6 h-6" />,
		dateRange: "22 - 29 October 2023",
		details: [
			{
				title: "Dues",
				amount: "250.00",
				changePercentage: 131,
				IconComponent: TrendingUp,
			},
			{
				title: "Pending Orders",
				amount: "147",
				changePercentage: -56,
				IconComponent: TrendingDown,
			},
		],
	},
	{
		title: "Sales & Discount",
		primaryIcon: <Tag className="text-blue-600 w-6 h-6" />,
		dateRange: "22 - 29 October 2023",
		details: [
			{
				title: "Sales",
				amount: "1000.00",
				changePercentage: 20,
				IconComponent: TrendingUp,
			},
			{
				title: "Discount",
				amount: "200.00",
				changePercentage: -10,
				IconComponent: TrendingDown,
			},
		],
	},
];