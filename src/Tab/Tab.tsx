import React, { FC } from 'react'
import './Tab.css'

export interface TabProps {
	onClick: (tabNum: number) => void
	selected: boolean
	tabNum: number
}

export const Tab: FC<TabProps> = ({ onClick, selected, tabNum }) => {
	return (
		<li
			className={selected ? 'selected' : ''}
			onClick={() => {
				onClick(tabNum)
			}}
		>
			tab {tabNum}
		</li>
	)
}
