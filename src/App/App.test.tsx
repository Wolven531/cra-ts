import React from 'react'
import { render, RenderResult, waitFor } from '@testing-library/react'
import { App } from './App'
import { MemoryRouter, Route } from 'react-router-dom'

describe('App', () => {
	let comp: RenderResult

	beforeEach(() => {
		comp = render(
			<MemoryRouter initialEntries={['/']} initialIndex={0}>
				<Route path={['/tabs/:tabId', '/tabs', '/']}>
					<App />
				</Route>
			</MemoryRouter>
		)
	})

	it('matches loading snapshot', () => {
		expect(comp.asFragment()).toMatchSnapshot()
	})

	describe('when loaded', () => {
		beforeEach(async () => {
			await waitFor(() => comp.getByTestId('app'))
		})

		it('displays footer text', () => {
			expect(comp.getByText(/© 2021 Anthony Williams/i)).toBeInTheDocument()
		})

		it('displays header text', () => {
			expect(comp.getByText(/TS Playground/i)).toBeInTheDocument()
		})

		it('matches snapshot', () => {
			expect(comp.asFragment()).toMatchSnapshot()
		})
	})
})
