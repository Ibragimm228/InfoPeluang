import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './components/shared/layout'
import {
	AboutPage,
	ArticlePage,
	BlogPage,
	ContactsPage,
	HomePage,
	NotFoundPage,
	PrivacyPolicyPage,
} from './pages'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='contacts' element={<ContactsPage />} />
					<Route path='privacy-policy' element={<PrivacyPolicyPage />} />
					<Route path='blog' element={<BlogPage />} />
					<Route path='articles/:slug' element={<ArticlePage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
