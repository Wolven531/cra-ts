import React, { FC, useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { makeTabRoute } from '../routes'
import { Tab } from '../Tab'
import './Tabs.css'

export interface TabsProps {
	selectedTab: number
	onTabChange?: (selectedTab: number) => void
}

export const Tabs: FC<TabsProps> = ({ onTabChange, selectedTab }) => {
	const history = useHistory()
	const params = useParams<{ tabId?: string }>()

	/**
	 * Handles when tab is clicked; if provided, invokes onTabChange(). Also updates location
	 *
	 * @param tabNum
	 */
	const handleTabClick = useCallback(
		(tabNum: number) => {
			history.push(makeTabRoute(tabNum))
			onTabChange?.(tabNum)
		},
		[history, makeTabRoute, onTabChange]
	)

	/**
	 * Runs on component mount
	 */
	useEffect(() => {
		if (params.tabId === undefined) {
			handleTabClick(selectedTab)
			return
		}

		const paramTab = parseInt(params.tabId)
		handleTabClick(paramTab)
	}, [handleTabClick, params.tabId, selectedTab])

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
