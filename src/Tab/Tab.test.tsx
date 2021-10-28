import React from 'react'
import { render, RenderResult, waitFor } from '@testing-library/react'
import { Tab } from './Tab'
import { MemoryRouter, Route } from 'react-router-dom'

describe('Tab', () => {
	const fakeTabNum = 3
	let comp: RenderResult
	let mockOnClick: jest.Mock

	beforeEach(() => {
		mockOnClick = jest.fn()

		comp = render(
			<MemoryRouter initialEntries={['/tabs']} initialIndex={0}>
				<Route path={['/tabs/:tabId', '/tabs']}>
					<Tab onClick={mockOnClick} selected tabNum={fakeTabNum} />
				</Route>
			</MemoryRouter>
		)
	})

	it('matches loading snapshot', () => {
		expect(comp.asFragment()).toMatchSnapshot()
	})

	describe('when loaded and selected', () => {
		beforeEach(async () => {
			await waitFor(() => comp.getByTestId('tab'))
		})

		it('matches snapshot', () => {
			expect(comp.asFragment()).toMatchSnapshot()
		})
	})
})

describe('Tab when loaded and not selected', () => {
	let comp: RenderResult
	let mockOnClick: jest.Mock

	beforeEach(async () => {
		mockOnClick = jest.fn()

		comp = render(
			<MemoryRouter initialEntries={['/tabs/1']} initialIndex={0}>
				<Route path={['/tabs/:tabId', '/tabs']}>
					<Tab onClick={mockOnClick} selected={false} tabNum={2} />
				</Route>
			</MemoryRouter>
		)

		await waitFor(() => comp.getByTestId('tab'))
	})

	it('matches snapshot', () => {
		expect(comp.asFragment()).toMatchSnapshot()
	})
})
