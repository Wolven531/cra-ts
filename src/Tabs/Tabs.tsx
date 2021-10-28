import React, { FC, useMemo } from 'react'
import { Tab } from '../Tab'
import './Tabs.css'

export interface TabsProps {
	selectedTab: number
	onTabChange?: (selectedTab: number) => void
}

export const Tabs: FC<TabsProps> = ({ onTabChange, selectedTab }) => {
	/**
	 * Handles when tab is clicked; if provided, invokes onTabChange(). Also updates location
	 *
	 * @param tabNum
	 */
	const handleTabClick = useMemo(
		() => (tabNum: number) => {
			onTabChange?.(tabNum)
		},
		[onTabChange]
	)

	return (
		<section className="tabs">
			<ul>
				<Tab onClick={handleTabClick} selected={selectedTab === 1} tabNum={1} />
				<Tab onClick={handleTabClick} selected={selectedTab === 2} tabNum={2} />
				<Tab onClick={handleTabClick} selected={selectedTab === 3} tabNum={3} />
			</ul>
		</section>
	)
}
