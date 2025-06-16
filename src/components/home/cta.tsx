import { useState, useEffect } from 'react'

export function CallToActionSection() {
	const [isVisible, setIsVisible] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		setIsVisible(true)
		
		const handleMouseMove = (e: globalThis.MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}
		
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<section className='relative min-h-screen bg-black overflow-hidden flex items-center justify-center'>
			{/* Dynamic Background Elements */}
			<div className='absolute inset-0'>
				{/* Animated Geometric Patterns */}
				<div className='absolute inset-0 opacity-20'>
					<div 
						className='absolute w-full h-full'
						style={{
							background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15) 0%, transparent 50%)`,
							transition: 'background 0.3s ease'
						}}
					></div>
				</div>
				
				{/* Floating Red Elements */}
				<div className='absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-red-500/30 to-red-600/10 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-red-600/20 to-red-400/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
				<div className='absolute top-1/2 left-1/3 w-48 h-48 bg-red-500/10 rounded-full blur-2xl animate-pulse' style={{animationDelay: '4s'}}></div>
				
				{/* Animated Lines */}
				<div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/40 to-transparent transform -skew-x-12'></div>
				<div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400/30 to-transparent transform skew-x-12'></div>
				<div className='absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent'></div>
				
				{/* Grid Pattern */}
				<div className='absolute inset-0 opacity-5'>
					<div className='w-full h-full' style={{
						backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.5) 1px, transparent 1px),
						                   linear-gradient(90deg, rgba(239, 68, 68, 0.5) 1px, transparent 1px)`,
						backgroundSize: '100px 100px',
						animation: 'grid-drift 30s linear infinite'
					}}></div>
				</div>
			</div>

			{/* Main Content Container */}
			<div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className={`text-center transition-all duration-1500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
					
					{/* Premium Badge */}
					<div className='mb-8 flex justify-center'>
						<div className='group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600/30 to-red-500/20 border-2 border-red-500/50 backdrop-blur-xl shadow-2xl hover:border-red-400 transition-all duration-500'>
							<div className='w-3 h-3 bg-red-500 rounded-full mr-4 animate-ping'></div>
							<span className='text-red-400 font-bold text-sm uppercase tracking-widest'>Premium Business Portal</span>
							<div className='w-3 h-3 bg-red-500 rounded-full ml-4 animate-ping' style={{animationDelay: '0.5s'}}></div>
						</div>
					</div>

					{/* Main Headline */}
					<div className='mb-12'>
						<h1 className='text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight'>
							<span className='block mb-4'>Ready to</span>
							<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
								Transform Your Business? 
							</span>
						</h1>
						<div className='relative max-w-4xl mx-auto'>
							<p className='text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed mb-4'>
								Join thousands of successful entrepreneurs who trust our platform
							</p>
							<p className='text-lg sm:text-xl text-red-400/80 font-medium'>
								Stay ahead with exclusive opportunities, insider insights, and premium business connections
							</p>
						</div>
					</div>

					{/* Interactive Stats */}
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
						{[
							{ number: '15K+', label: 'Active Members', icon: '👥' },
							{ number: '850+', label: 'Success Stories', icon: '🚀' },
							{ number: '200+', label: 'Investment Partners', icon: '💼' },
							{ number: '99.8%', label: 'Satisfaction Rate', icon: '⭐' }
						].map((stat, index) => (
							<div key={index} className='group'>
								<div className='relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-red-500/20 hover:border-red-400/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm'>
									<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
									<div className='relative z-10'>
										<div className='text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300'>
											{stat.icon}
										</div>
										<div className='text-2xl lg:text-3xl font-black text-red-500 mb-1 group-hover:text-red-400 transition-colors duration-300'>
											{stat.number}
										</div>
										<div className='text-gray-400 text-sm font-medium'>
											{stat.label}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Premium CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-8 justify-center items-center mb-16'>
						<a
							href='/contacts'
							className='group relative px-12 py-6 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 hover:scale-110 hover:from-red-500 hover:to-red-400 border-2 border-red-400/30 overflow-hidden'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<div className='absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
							<span className='relative z-10 flex items-center'>
								Subscribe Now
								<svg className='ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M13 7l5 5m0 0l-5 5m5-5H6' />
								</svg>
							</span>
						</a>
						
						<div className='flex flex-col items-center'>
							<div className='text-gray-400 text-sm font-medium mb-2'>Or explore first</div>
							<div className='flex space-x-4'>
								{['Free Trial', 'Demo', 'Learn More'].map((text, index) => (
									<a
										key={index}
										href='/contacts'
										className='px-6 py-3 border-2 border-red-500/50 text-red-400 font-bold rounded-2xl hover:bg-red-500/10 hover:border-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105 text-sm'
									>
										{text}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Premium Features Showcase */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
						{[
							{
								icon: '🎯',
								title: 'Exclusive Opportunities',
								description: 'Access premium business deals available only to our members'
							},
							{
								icon: '📈',
								title: 'Market Insights',
								description: 'Get cutting-edge analysis and trends before your competition'
							},
							{
								icon: '🤝',
								title: 'Elite Network',
								description: 'Connect with top-tier investors and successful entrepreneurs'
							}
						].map((feature, index) => (
							<div key={index} className='group relative'>
								<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
								<div className='relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-500 backdrop-blur-sm'>
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

					{/* Trust Indicators */}
					<div className='mt-16 pt-8 border-t border-red-500/20'>
						<p className='text-gray-500 text-sm mb-4'>Trusted by industry leaders worldwide</p>
						<div className='flex justify-center items-center space-x-8 opacity-60'>
							{['🏆 Award Winner', '🔒 Secure Platform', '⚡ Fast Results', '📊 Proven Track Record'].map((trust, index) => (
								<div key={index} className='text-gray-400 text-xs font-medium hover:text-red-400 transition-colors duration-300'>
									{trust}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Custom CSS for Animations */}
			<style>{`
				@keyframes grid-drift {
					0% { transform: translate(0, 0) rotate(0deg); }
					33% { transform: translate(30px, -30px) rotate(1deg); }
					66% { transform: translate(-20px, 20px) rotate(-1deg); }
					100% { transform: translate(0, 0) rotate(0deg); }
				}
				
				@keyframes pulse {
					0%, 100% { opacity: 0.4; }
					50% { opacity: 0.8; }
				}
			`}</style>
		</section>
	)
}