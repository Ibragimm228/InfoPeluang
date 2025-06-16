import { useGetArticles } from '@/hooks/useArticles'
import { Link } from 'react-router'
import { Container } from './container'

// Modern Logo Component (from Footer)
function ModernLogo({ variant = 'dark' }) {
	return (
		<div className="flex items-center space-x-3">
			<div className="relative">
				{/* Logo Icon - Modern Geometric Design */}
				<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-2xl shadow-red-500/30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
					<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
						<div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-sm"></div>
					</div>
				</div>
				{/* Glowing Effect */}
				<div className="absolute inset-0 w-12 h-12 bg-red-500 rounded-xl blur-xl opacity-30 animate-pulse"></div>
			</div>
			<div className="flex flex-col">
				<span className={`text-xl font-black tracking-tight ${variant === 'light' ? 'text-white' : 'text-gray-900'}`}>
					InfoPeluang
				</span>
				<span className="text-sm font-bold text-red-500 -mt-1">
					Usaha.com
				</span>
			</div>
		</div>
	)
}

const LINKS = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'Contacts',
		href: '/contacts',
	},
]

export function Header() {
	const { data: articles, isLoading } = useGetArticles()
	const types = [...new Set(articles?.map(article => article.type))]

	return (
		<header className="relative bg-gradient-to-br from-black via-gray-900 to-black border-b border-red-500/20 overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0">
				{/* Top Gradient Line */}
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
				
				{/* Floating Orbs */}
				<div className="absolute top-4 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-6 left-1/3 w-32 h-32 bg-red-600/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
				
				{/* Geometric Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute inset-0" style={{
						backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.3) 1px, transparent 1px),
						                   radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.2) 1px, transparent 1px)`,
						backgroundSize: '100px 100px'
					}}></div>
				</div>
			</div>

			<Container className="relative z-10">
				<div className="py-8">
					<div className="flex flex-col items-center space-y-6">
						{/* Logo */}
						<ModernLogo variant="light" />
						
						{/* Main Navigation */}
						<nav className="w-full">
							<ul className="flex flex-wrap gap-8 justify-center">
								{LINKS.map(item => (
									<li key={item.label}>
										<Link 
											to={item.href}
											className="relative group px-6 py-3 text-white font-semibold tracking-wide hover:text-red-400 transition-all duration-300"
										>
											<span className="relative z-10">{item.label}</span>
											{/* Hover Background */}
											<div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
											{/* Glow Effect */}
											<div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
										</Link>
									</li>
								))}
							</ul>
						</nav>
						
						{/* Categories Navigation */}
						<nav className="w-full border-t border-gray-700/50 pt-6">
							{isLoading ? (
								<div className="flex flex-wrap gap-4 justify-center">
									{Array.from({ length: 5 }).map((_, index) => (
										<div
											key={index}
											className="h-6 w-20 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-md animate-pulse"
										/>
									))}
								</div>
							) : (
								<div className="flex flex-wrap gap-4 justify-center">
									{types.map(item => (
										<Link
											key={item}
											to={`/blog?type=${encodeURIComponent(item || '')}`}
											className="relative group px-4 py-2 text-gray-300 text-sm font-medium hover:text-red-400 transition-all duration-300"
										>
											<span className="relative z-10">{item}</span>
											{/* Animated Underline */}
											<div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-red-600 group-hover:w-full transition-all duration-500"></div>
											{/* Subtle Glow */}
											<div className="absolute inset-0 bg-red-500/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</Link>
									))}
								</div>
							)}
						</nav>
					</div>
				</div>
			</Container>
			
			{/* Bottom Gradient Line */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
		</header>
	)
}