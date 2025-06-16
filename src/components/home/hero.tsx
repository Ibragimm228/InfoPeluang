import { Container } from '@/components/shared/container'
import { useState, useEffect } from 'react'

export function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const slides = [
		{
			
		},
		{
			
		},
		{
			
		}
	]

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length)
		}, 4000)
		return () => clearInterval(timer)
	}, [slides.length])

	return (
		<div className='relative min-h-screen bg-black overflow-hidden'>
			{/* Animated Background Elements */}
			<div className='absolute inset-0'>
				{/* Dynamic Grid Pattern */}
				<div className='absolute inset-0 opacity-10'>
					<div className='absolute inset-0' style={{
						backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
						                   linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
						backgroundSize: '50px 50px',
						animation: 'grid-move 20s linear infinite'
					}}></div>
				</div>

				{/* Floating Red Orbs */}
				<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl animate-pulse'></div>
				<div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600 rounded-full opacity-15 blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
				<div className='absolute top-1/2 right-1/3 w-64 h-64 bg-red-400 rounded-full opacity-10 blur-3xl animate-pulse' style={{animationDelay: '4s'}}></div>

				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950 opacity-90'></div>
			</div>

			{/* Main Content */}
			<Container className='relative z-20 min-h-screen flex items-center'>
				<div className='w-full'>
					{/* Header Badge */}
					<div className='mb-8 flex justify-center lg:justify-start'>
						
					</div>

					{/* Main Hero Content */}
					<div className='text-center lg:text-left max-w-5xl mx-auto lg:mx-0'>
						{/* Dynamic Title */}
						<h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-tight'>
							<span className='block mb-2'>
								Welcome to
							</span>
							<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
								InfoPeluangUsaha
							</span>
						</h1>

						{/* Sliding Subtitle */}
						<div className='h-24 mb-8 flex items-center justify-center lg:justify-start'>
							<div className='relative overflow-hidden'>
								{slides.map((_, index) => (
									<div
										key={index}
										className={`transition-all duration-1000 absolute top-0 left-0 w-full ${
											index === currentSlide 
												? 'opacity-100 transform translate-y-0' 
												: 'opacity-0 transform translate-y-8'
										}`}
									>
										
									</div>
								))}
							</div>
						</div>

						{/* Description */}
						<p className='text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-12 leading-relaxed'>
							This premium portal is designed for ambitious entrepreneurs seeking exceptional business opportunities. 
							Register as our member for free and maximize the valuable information available here. You can fill out our 
							web catalog or classified ads, share entrepreneurial knowledge, and connect with agents, distributors, and investors.
						</p>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start'>
							<a
								href='/blog'
								className='group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-400 border border-red-400/30'
							>
								<span className='relative z-10'>Explore Opportunities</span>
								<div className='absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							</a>
							<a
								href='/about'
								className='group px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25'
							>
								Join Our Network
							</a>
						</div>

						{/* Stats Section */}
						<div className='mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8'>
							{[
								{ number: '10K+', label: 'Active Members' },
								{ number: '500+', label: 'Business Opportunities' },
								{ number: '200+', label: 'Success Stories' },
								{ number: '50+', label: 'Investment Partners' }
							].map((stat, index) => (
								<div key={index} className='text-center lg:text-left'>
									<div className='text-3xl lg:text-4xl font-black text-red-500 mb-2'>
										{stat.number}
									</div>
									<div className='text-gray-400 font-medium'>
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
			<style >{`
				@keyframes grid-move {
					0% { transform: translate(0, 0); }
					100% { transform: translate(50px, 50px); }
				}
			`}</style>
		</div>
	)
}