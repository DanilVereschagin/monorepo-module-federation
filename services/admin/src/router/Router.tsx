import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { LazyAbout } from '@/pages/about/About.lazy';

const routes = [
	{
		path: '/admin',
		element: <App />,
		children: [
			{
				path: '/admin/about',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<LazyAbout />
					</Suspense>
				),
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;
