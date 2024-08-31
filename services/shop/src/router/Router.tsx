import React, { Suspense } from 'react';
import { App } from '@/components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyShop } from '@/pages/shop/Shop.lazy';

const routes = [
	{
		path: '/shop',
		element: <App />,
		children: [
			{
				path: '/shop/main',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<LazyShop />
					</Suspense>
				),
			},
			{
				path: '/shop/second',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<div style={{ color: 'red' }}>Second</div>
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;
