import { Outlet } from 'react-router'
import { Footer } from './footer'
import { Header } from './header'

export function Layout() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
