import { Container } from './container'

// Modern Logo Component
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

export function Footer() {
	const navigation = {
		main: [
			{ name: 'Home', href: '/' },
			{ name: 'About', href: '/about' },
			{ name: 'Blog', href: '/blog' },
			{ name: 'Contacts', href: '/contacts' },
			{ name: 'Privacy Policy', href: '/privacy-policy' },
		],
		business: [
			{ name: 'Business Opportunities', href: '/opportunities' },
			{ name: 'Investment Partners', href: '/investors' },
			{ name: 'Success Stories', href: '/success' },
			{ name: 'Franchise Directory', href: '/franchise' },
		],
		support: [
			{ name: 'Help Center', href: '/help' },
			{ name: 'Documentation', href: '/docs' },
			{ name: 'Community Forum', href: '/forum' },
			{ name: 'Member Support', href: '/support' },
		]
	}



	return (
		<footer className="relative bg-black overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0">
				{/* Red Gradient Waves */}
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
				
				{/* Floating Orbs */}
				<div className="absolute top-20 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
				
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
				{/* Main Footer Content */}
				<div className="py-20">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
						{/* Brand Section */}
						<div className="lg:col-span-5 space-y-8">
							<ModernLogo variant="light" />
							
							<div className="space-y-6">
								<p className="text-gray-300 text-lg leading-relaxed max-w-md">
									Your premier destination for discovering exceptional business opportunities and building strategic partnerships in the entrepreneurial ecosystem.
								</p>
								
								{/* Key Features */}
								<div className="space-y-3">
									{[
										'✨ Premium Business Opportunities',
										'🚀 Verified Investment Partners',
										'💼 Professional Network Hub',
										'📈 Proven Success Models'
									].map((feature, index) => (
										<div key={index} className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer">
											<span className="text-sm">{feature}</span>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* Navigation Links */}
						<div className="lg:col-span-7">
							<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
								{/* Main Navigation */}
								<div className="space-y-6">
									<h3 className="text-white font-bold text-lg mb-4 relative">
										Quick Links
										<div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-600"></div>
									</h3>
									<ul className="space-y-3">
										{navigation.main.map((item) => (
											<li key={item.name}>
												<a 
													href={item.href} 
													className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:translate-x-1 block py-1 font-medium"
												>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Newsletter Section */}
				<div className="border-t border-gray-800/50 py-12">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
						<div className="space-y-2">
							<h3 className="text-2xl font-bold text-white">
								Stay Updated with Premium Opportunities
							</h3>
							<p className="text-gray-400">
								Get exclusive access to the latest business opportunities and investment insights.
							</p>
						</div>
						
						<div className="flex flex-col sm:flex-row gap-4 lg:min-w-96">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
							/>
							<button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 whitespace-nowrap">
								Subscribe Now
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800/50 py-8">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
						{/* Copyright */}
						<div className="flex items-center space-x-4">
							<p className="text-gray-400 text-sm">
								© {new Date().getFullYear()} InfoPeluangUsaha.com. All rights reserved.
							</p>
							<div className="hidden md:flex items-center space-x-2">
								<div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
								<span className="text-red-400 text-xs font-medium">LIVE</span>
							</div>
						</div>

						{/* Status Indicators */}
						<div className="flex items-center space-x-6 text-sm">
							<div className="flex items-center space-x-2">
								<div className="w-2 h-2 bg-green-500 rounded-full"></div>
								<span className="text-gray-400">All Systems Operational</span>
							</div>
							<div className="flex items-center space-x-2">
								<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
								<span className="text-gray-400">24/7 Support Active</span>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	)
}