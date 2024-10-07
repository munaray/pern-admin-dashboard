"use client";

import { SIDEBAR_LIST } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/redux/index";
import { setIsSidebarCollapsed } from "@/utils/state";
import { LucideIcon, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
	href: string;
	icon: LucideIcon;
	name: string;
	isCollapsed: boolean;
}

const SidebarLink = ({
	href,
	icon: Icon,
	name,
	isCollapsed,
}: SidebarLinkProps) => {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname === "/" && href === "/dashboard");

	return (
		<Link href={href}>
			<div
				className={`cursor-pointer flex items-center ${
					isCollapsed
						? "justify-center py-4"
						: "justify-start px-8 py-4"
				}
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
			isActive ? "bg-blue-200 text-white" : ""
		}
      }`}>
				<Icon className="w-6 h-6 !text-gray-700" />

				<span
					className={`${
						isCollapsed ? "hidden" : "block"
					} font-medium text-gray-700`}>
					{name}
				</span>
			</div>
		</Link>
	);
};

const Sidebar = () => {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed
	);

	const toggleSidebar = () => {
		dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
	};

	const sidebarClassNames = `fixed flex flex-col ${
		isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
	} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

	return (
		<section className={sidebarClassNames}>
			{/* TOP LOGO */}
			<figure
				className={`flex justify-between md:justify-normal items-center pt-8 ${
					isSidebarCollapsed ? "px-5" : "px-8"
				}`}>
				<Image
					src="https://res.cloudinary.com/dptczga4t/image/upload/v1728227703/blue.svg_wimutv.png"
					alt="munaray-logo"
					width={843}
					height={596}
					className={`${isSidebarCollapsed ? " w-[100px]" : "block"}`}
				/>
				<h1
					className={`${
						isSidebarCollapsed ? "hidden" : "block"
					} font-extrabold text-2xl`}>
					Munaray
				</h1>

				<button
					className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={toggleSidebar}>
					<Menu className="w-4 h-4" />
				</button>
			</figure>

			{/* LINKS */}
			<div className="flex-grow mt-8">
				{SIDEBAR_LIST.map((link) => (
					<SidebarLink
						key={link.name}
						href={link.href}
						icon={link.icon}
						name={link.name}
						isCollapsed={isSidebarCollapsed}
					/>
				))}
			</div>

			{/* FOOTER */}
			<section
				className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
				<p className="text-center text-xs text-gray-500">
					&copy; 2024 Munaray
				</p>
			</section>
		</section>
	);
};

export default Sidebar;
