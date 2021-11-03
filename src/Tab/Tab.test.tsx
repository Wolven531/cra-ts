import React from 'react'
import { render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

		describe('when clicked', () => {
			beforeEach(() => {
				userEvent.click(comp.getByTestId('tab'))
			})

			it('invokes provided onClick() properly', () => {
				expect(mockOnClick).toHaveBeenCalledTimes(1)
				expect(mockOnClick).toHaveBeenLastCalledWith(fakeTabNum)
			})
		})
	})
})

describe('Tab when loaded and not selected', () => {
	const fakeTabNum = 2
	let comp: RenderResult
	let mockOnClick: jest.Mock

	beforeEach(async () => {
		mockOnClick = jest.fn()

		comp = render(
			<MemoryRouter initialEntries={['/tabs/1']} initialIndex={0}>
				<Route path={['/tabs/:tabId', '/tabs']}>
					<Tab onClick={mockOnClick} selected={false} tabNum={fakeTabNum} />
				</Route>
			</MemoryRouter>
		)

		await waitFor(() => comp.getByTestId('tab'))
	})

	it('matches snapshot', () => {
		expect(comp.asFragment()).toMatchSnapshot()
	})

	describe('when clicked', () => {
		beforeEach(() => {
			userEvent.click(comp.getByTestId('tab'))
		})

		it('invokes provided onClick() properly', () => {
			expect(mockOnClick).toHaveBeenCalledTimes(1)
			expect(mockOnClick).toHaveBeenLastCalledWith(fakeTabNum)
		})
	})
})
