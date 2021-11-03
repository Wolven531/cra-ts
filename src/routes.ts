export const pages = {
	Home: '/',
	Tabs: '/tabs',
	TabSingle: '/tabs/:tabId',
}

export const routes = {
	Home: [pages.Tabs, pages.TabSingle, pages.Home],
	NotFound: ['/*'],
}

export const makeTabRoute = (tabId?: number) => {
	return tabId === undefined
		? pages.Tabs
		: pages.TabSingle.replace(/:tabId/, `${tabId}`)
}
