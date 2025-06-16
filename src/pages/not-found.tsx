import { useState, useEffect } from 'react'

export function NotFoundPage() {
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
			<div className='relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className={`text-center transition-all duration-1500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
					
					{/* Error Badge */}
					<div className='mb-8 flex justify-center'>
						<div className='group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600/30 to-red-500/20 border-2 border-red-500/50 backdrop-blur-xl shadow-2xl hover:border-red-400 transition-all duration-500'>
							<div className='w-3 h-3 bg-red-500 rounded-full mr-4 animate-ping'></div>
							<span className='text-red-400 font-bold text-sm uppercase tracking-widest'>Error 404</span>
							<div className='w-3 h-3 bg-red-500 rounded-full ml-4 animate-ping' style={{animationDelay: '0.5s'}}></div>
						</div>
					</div>

					{/* 404 Display */}
					<div className='mb-12'>
						<h1 className='text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-white mb-6 leading-none relative'>
							<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700'>
								404
							</span>
							{/* Glowing effect behind 404 */}
							<div className='absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-red-600 opacity-20 blur-3xl transform scale-110 animate-pulse'></div>
						</h1>
						
						<div className='relative max-w-3xl mx-auto'>
							<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4'>
								Page Not Found
							</h2>
							<p className='text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-2'>
								The page you're looking for doesn't exist or has been moved.
							</p>
							<p className='text-red-400/80 font-medium'>
								But don't worry, let's get you back on track
							</p>
						</div>
					</div>

					{/* Interactive Stats */}
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12'>
						{[
							{ icon: '🏠', label: 'Go Home', description: 'Return to homepage' },
							{ icon: '🔍', label: 'Search', description: 'Find what you need' },
							{ icon: '📞', label: 'Contact', description: 'Get help from us' }
						].map((option, index) => (
							<div key={index} className='group'>
								<div className='relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-red-500/20 hover:border-red-400/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm cursor-pointer'>
									<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
									<div className='relative z-10'>
										<div className='text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300'>
											{option.icon}
										</div>
										<div className='text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300'>
											{option.label}
										</div>
										<div className='text-gray-400 text-sm'>
											{option.description}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Premium CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
						<a
							href='/'
							className='group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-lg rounded-3xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 hover:scale-110 hover:from-red-500 hover:to-red-400 border-2 border-red-400/30 overflow-hidden'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<div className='absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>
							<span className='relative z-10 flex items-center'>
								<svg className='mr-3 w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
								</svg>
								Return to Home
							</span>
						</a>
						
						<div className='flex space-x-4'>
							{[
								{ text: 'Go Back', href: 'javascript:history.back()' },
								{ text: 'Contact Us', href: '/contacts' }
							].map((link, index) => (
								<a
									key={index}
									href={link.href}
									className='px-6 py-3 border-2 border-red-500/50 text-red-400 font-bold rounded-2xl hover:bg-red-500/10 hover:border-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105'
								>
									{link.text}
								</a>
							))}
						</div>
					</div>

					{/* Helpful Links */}
					<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
						{[
							{
								icon: '📱',
								title: 'Mobile App',
								description: 'Download our mobile application'
							},
							{
								icon: '💬',
								title: 'Live Chat',
								description: 'Get instant support from our team'
							},
							{
								icon: '📧',
								title: 'Email Support',
								description: 'Send us your questions anytime'
							},
							{
								icon: '📚',
								title: 'Help Center',
								description: 'Browse our knowledge base'
							}
						].map((help, index) => (
							<div key={index} className='group relative'>
								<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
								<div className='relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-500 backdrop-blur-sm'>
									<div className='text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300'>
										{help.icon}
									</div>
									<h3 className='text-sm font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300'>
										{help.title}
									</h3>
									<p className='text-gray-300 text-xs leading-relaxed'>
										{help.description}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Footer Message */}
					<div className='mt-12 pt-6 border-t border-red-500/20'>
						<p className='text-gray-500 text-sm'>
							Lost? No worries, everyone gets lost sometimes. Let's find your way back.
						</p>
						<div className='flex justify-center items-center space-x-6 mt-4 opacity-60'>
							{['🔒 Secure', '⚡ Fast', '💡 Helpful', '🚀 Reliable'].map((trust, index) => (
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
