import { useState } from 'react'

export function AboutSection() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null)

	const features = [
		{
			icon: "🚀",
			title: "Premium Business Opportunities",
			description: "Access exclusive franchise opportunities and investment prospects from verified business partners."
		},
		{
			icon: "💼",
			title: "Professional Network Hub",
			description: "Connect with successful entrepreneurs, investors, and industry leaders in our exclusive community."
		},
		{
			icon: "📈",
			title: "Proven Success Models",
			description: "Learn from documented case studies and proven business strategies that generate real results."
		},
		{
			icon: "🎯",
			title: "Strategic Partnership",
			description: "Find reliable suppliers, distributors, and business partners to scale your venture effectively."
		}
	]

	return (
		<section className='relative py-24 sm:py-32 bg-black overflow-hidden'>
			{/* Background Elements */}
			<div className='absolute inset-0'>
				{/* Animated Red Lines */}
				<div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent'></div>
				<div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent'></div>
				
				{/* Floating Elements */}
				<div className='absolute top-20 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse'></div>
				<div className='absolute bottom-20 left-20 w-40 h-40 bg-red-600/10 rounded-full blur-xl animate-pulse' style={{animationDelay: '2s'}}></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-20'>
					<div className='inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 text-red-400 font-bold text-sm uppercase tracking-wider mb-6'>
						<div className='w-2 h-2 bg-red-500 rounded-full mr-3 animate-ping'></div>
						About Our Platform
					</div>
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight'>
						Discover
						<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
							InfoPeluangUsaha.com
						</span>
					</h2>
					<p className='max-w-4xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed'>
						Your premier destination for discovering exceptional business opportunities and building strategic partnerships. 
						Our mission is to empower ambitious entrepreneurs with the tools, connections, and insights needed to build 
						successful enterprises.
					</p>
				</div>

				{/* Main Content Grid */}
				<div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-20'>
					{/* Left Content */}
					<div className='mb-12 lg:mb-0'>
						<div className='space-y-8'>
							<div className='p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-red-500/20 backdrop-blur-sm'>
								<h3 className='text-2xl font-bold text-white mb-4'>
									Why Choose Our Platform?
								</h3>
								<p className='text-gray-300 text-lg leading-relaxed mb-6'>
									We provide a comprehensive ecosystem where serious entrepreneurs can discover verified business 
									opportunities, connect with qualified investors, and access proven strategies for sustainable growth.
								</p>
								<div className='flex flex-wrap gap-3'>
									{['Verified Opportunities', 'Expert Network', 'Success Tracking'].map((tag, index) => (
										<span key={index} className='px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30'>
											{tag}
										</span>
									))}
								</div>
							</div>

							<div className='flex items-center space-x-6'>
								<div className='text-center'>
									<div className='text-3xl font-black text-red-500 mb-1'>98%</div>
									<div className='text-gray-400 text-sm'>Success Rate</div>
								</div>
								<div className='text-center'>
									<div className='text-3xl font-black text-red-500 mb-1'>24/7</div>
									<div className='text-gray-400 text-sm'>Support</div>
								</div>
								<div className='text-center'>
									<div className='text-3xl font-black text-red-500 mb-1'>15+</div>
									<div className='text-gray-400 text-sm'>Years Experience</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right Image */}
					<div className='relative group'>
						<div className='absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
						<div className='relative overflow-hidden rounded-3xl border border-red-500/30'>
							<img
								className='w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700'
								src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop'
								alt='Business professionals in modern office environment'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
							<div className='absolute bottom-6 left-6 right-6'>
								<h4 className='text-white font-bold text-xl mb-2'>
									Professional Business Environment
								</h4>
								<p className='text-gray-300 text-sm'>
									Join thousands of successful entrepreneurs in our premium network
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Features Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
					{features.map((feature, index) => (
						<div
							key={index}
							className='group relative p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm cursor-pointer'
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<div className={`absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl transition-opacity duration-300 ${
								hoveredCard === index ? 'opacity-100' : 'opacity-0'
							}`}></div>
							
							<div className='relative z-10'>
								<div className='text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300'>
									{feature.icon}
								</div>
								<h3 className='text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300'>
									{feature.title}
								</h3>
								<p className='text-gray-300 text-sm leading-relaxed'>
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className='text-center'>
					<div className='inline-flex flex-col sm:flex-row gap-6'>
						<a
							href='/about'
							className='group px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-400 border border-red-400/30'
						>
							<span className='relative z-10'>Learn More About Us</span>
						</a>
						<a
							href='/contacts'
							className='group px-10 py-4 bg-transparent border-2 border-red-500 text-red-400 font-bold text-lg rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25'
						>
							Join Our Network
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}