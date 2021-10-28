import React, { FC, useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Tabs } from '../Tabs'
import './App.css'

export interface AppProps {
	initialTab?: number
}

export const App: FC<AppProps> = ({ initialTab }) => {
	const history = useHistory()
	const params = useParams<{ tabId?: string }>()

	const [selectedTab, setSelectedTab] = useState(
		initialTab !== undefined ? initialTab : 1
	)

	const handleTabChange = useCallback(
		(tabNum: number) => {
			setSelectedTab(tabNum)
			history.push(`/tabs/${tabNum}`)
		},
		[history, setSelectedTab]
	)

	/**
	 * Runs on component mount
	 */
	useEffect(() => {
		if (params.tabId === undefined) {
			handleTabChange(selectedTab)
			return
		}

		const paramTab = parseInt(params.tabId)
		handleTabChange(paramTab)
	}, [handleTabChange, params.tabId, selectedTab])

	return (
		<article className="app" data-testid="app">
			<header>
				<h3>TS Playground</h3>
			</header>
			<Tabs onTabChange={handleTabChange} selectedTab={selectedTab} />
			<section className="content" data-testid="content">
				{selectedTab === 1 && <div>Content 1</div>}
				{selectedTab === 2 && <div>Content 2</div>}
				{selectedTab === 3 && <div>Content 3</div>}
			</section>
			<footer>&copy; 2021 Anthony Williams</footer>
		</article>
	)
}
