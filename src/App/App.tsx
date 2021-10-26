import React, { FC, useState } from 'react'
import { Tabs } from '../Tabs'
import './App.css'

export const App: FC<any> = () => {
	const [selectedTab, setSelectedTab] = useState(1)

	// useEffect(() => {}, [])

	return (
		<article className="app" data-testid="app">
			<header>
				<h3>TS Playground</h3>
			</header>
			<Tabs onTabChange={setSelectedTab} selectedTab={selectedTab} />
			<section className="content" data-testid="content">
				{selectedTab === 1 && <div>Content 1</div>}
				{selectedTab === 2 && <div>Content 2</div>}
				{selectedTab === 3 && <div>Content 3</div>}
			</section>
			<footer>&copy; 2021 Anthony Williams</footer>
		</article>
	)
}
