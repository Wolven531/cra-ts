import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { routes } from './routes'
import './index.css'

render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path={routes.Home}>
					<App />
				</Route>
				<Route path={routes.NotFound}>
					<div>Not found</div>
				</Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
