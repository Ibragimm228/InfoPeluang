import { useState, useEffect } from 'react'

const TESTIMONIALS = [
	{
		quote: "InfoPeluangUsaha.com transformed my entrepreneurial journey. The verified business opportunities and strategic partnerships I found here generated over $2M in revenue within 18 months.",
		author: 'Marcus Chen',
		title: 'Serial Entrepreneur & CEO',
		company: 'TechVentures International',
		image: 'https://randomuser.me/api/portraits/men/32.jpg',
		rating: 5,
		revenue: '$2M+',
		growth: '340%'
	},
	{
		quote: "The quality of investors and business partners on this platform is unmatched. I secured three major funding rounds and expanded to 15 countries through connections made here.",
		author: 'Sarah Rodriguez',
		title: 'Franchise Operations Director',
		company: 'Global Retail Solutions',
		image: 'https://randomuser.me/api/portraits/women/44.jpg',
		rating: 5,
		revenue: '$5M+',
		growth: '580%'
	},
	{
		quote: "As an investor, I've found the most promising startups and established businesses through InfoPeluangUsaha.com. The due diligence process and verified opportunities save me countless hours.",
		author: 'David Thompson',
		title: 'Investment Portfolio Manager',
		company: 'Capital Growth Partners',
		image: 'https://randomuser.me/api/portraits/men/67.jpg',
		rating: 5,
		revenue: '$15M+',
		growth: '425%'
	}
]

export function TestimonialsSection() {
	const [activeTestimonial, setActiveTestimonial] = useState(0)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
		}, 6000)
		return () => clearInterval(timer)
	}, [])

	useEffect(() => {
		setIsVisible(true)
	}, [])

	return (
		<section className='relative py-24 sm:py-32 bg-black overflow-hidden'>
			{/* Dynamic Background Elements */}
			<div className='absolute inset-0'>
				{/* Animated Grid */}
				<div className='absolute inset-0 opacity-5'>
					<div className='h-full w-full' style={{
						backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
						                   radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.2) 0%, transparent 50%)`,
						backgroundSize: '400px 400px',
						animation: 'float 20s ease-in-out infinite'
					}}></div>
				</div>

				{/* Floating Red Elements */}
				<div className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-600/20 to-red-500/10 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-red-500/15 to-red-600/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '3s'}}></div>
				
				{/* Scanning Lines */}
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse'></div>
					<div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/30 to-transparent animate-pulse' style={{animationDelay: '2s'}}></div>
				</div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-20'>
					<div className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600/30 to-red-500/20 border border-red-500/40 text-red-400 font-bold text-sm uppercase tracking-wider mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
						<div className='flex space-x-1 mr-4'>
							<div className='w-2 h-2 bg-red-500 rounded-full animate-ping'></div>
							<div className='w-2 h-2 bg-red-400 rounded-full animate-ping' style={{animationDelay: '0.5s'}}></div>
							<div className='w-2 h-2 bg-red-600 rounded-full animate-ping' style={{animationDelay: '1s'}}></div>
						</div>
						Success Stories
					</div>
					
					<h2 className={`text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight transition-all duration-1200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
						Real Results from
						<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
							Real Entrepreneurs
						</span>
					</h2>
					
					<p className={`max-w-4xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed transition-all duration-1400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'}`}>
						Discover how InfoPeluangUsaha.com has empowered ambitious business leaders to achieve 
						extraordinary growth and build million-dollar enterprises through our premium network.
					</p>
				</div>

				{/* Main Testimonial Display */}
				<div className='relative mb-20'>
					<div className='relative max-w-6xl mx-auto'>
						{/* Background Glow */}
						<div className='absolute -inset-8 bg-gradient-to-r from-red-600/10 via-red-500/5 to-red-600/10 rounded-3xl blur-2xl'></div>
						
						{/* Main Card */}
						<div className='relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-3xl border border-red-500/30 backdrop-blur-xl overflow-hidden'>
							<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent'></div>
							
							<div className='relative z-10 p-8 sm:p-12 lg:p-16'>
								{/* Quote Icon */}
								<div className='mb-8'>
									<div className='w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/25'>
										<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
											<path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z'/>
										</svg>
									</div>
								</div>

								{/* Testimonial Content */}
								<div className='grid lg:grid-cols-3 gap-12 items-center'>
									<div className='lg:col-span-2'>
										<blockquote className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8'>
											"{TESTIMONIALS[activeTestimonial].quote}"
										</blockquote>
										
										{/* Rating Stars */}
										<div className='flex space-x-1 mb-6'>
											{[...Array(5)].map((_, i) => (
												<svg key={i} className='w-6 h-6 text-red-500' fill='currentColor' viewBox='0 0 24 24'>
													<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
												</svg>
											))}
										</div>
									</div>

									{/* Author Info */}
									<div className='text-center lg:text-left'>
										<div className='relative mb-6'>
											<div className='absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl'></div>
											<img
												className='relative w-24 h-24 rounded-full mx-auto lg:mx-0 border-4 border-red-500/50 shadow-2xl shadow-red-500/25'
												src={TESTIMONIALS[activeTestimonial].image}
												alt={TESTIMONIALS[activeTestimonial].author}
											/>
										</div>
										
										<h4 className='text-2xl font-black text-white mb-2'>
											{TESTIMONIALS[activeTestimonial].author}
										</h4>
										<p className='text-red-400 font-bold text-lg mb-1'>
											{TESTIMONIALS[activeTestimonial].title}
										</p>
										<p className='text-gray-400 font-medium mb-6'>
											{TESTIMONIALS[activeTestimonial].company}
										</p>

										{/* Success Metrics */}
										<div className='grid grid-cols-2 gap-4'>
											<div className='bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl p-4 border border-red-500/30'>
												<div className='text-2xl font-black text-red-400 mb-1'>
													{TESTIMONIALS[activeTestimonial].revenue}
												</div>
												<div className='text-gray-400 text-sm font-medium'>Revenue Generated</div>
											</div>
											<div className='bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl p-4 border border-red-500/30'>
												<div className='text-2xl font-black text-red-400 mb-1'>
													{TESTIMONIALS[activeTestimonial].growth}
												</div>
												<div className='text-gray-400 text-sm font-medium'>Growth Rate</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Testimonial Navigation */}
				<div className='flex justify-center space-x-4 mb-16'>
					{TESTIMONIALS.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveTestimonial(index)}
							className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
								index === activeTestimonial 
									? 'bg-red-500 w-12 shadow-lg shadow-red-500/50' 
									: 'bg-gray-600 hover:bg-red-400'
							}`}
						>
							{index === activeTestimonial && (
								<div className='absolute inset-0 bg-red-500 rounded-full animate-ping opacity-50'></div>
							)}
						</button>
					))}
				</div>

				{/* Bottom Stats */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-8 text-center'>
					{[
						{ number: '98%', label: 'Success Rate', icon: '📈' },
						{ number: '$50M+', label: 'Total Revenue Generated', icon: '💰' },
						{ number: '500+', label: 'Verified Success Stories', icon: '🏆' },
						{ number: '24/7', label: 'Premium Support', icon: '🚀' }
					].map((stat, index) => (
						<div key={index} className='group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm'>
							<div className='text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300'>
								{stat.icon}
							</div>
							<div className='text-3xl lg:text-4xl font-black text-red-500 mb-2'>
								{stat.number}
							</div>
							<div className='text-gray-400 font-medium text-sm'>
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className='text-center mt-20'>
					<div className='inline-flex flex-col sm:flex-row gap-6'>
						<a
							href='/contacts'
							className='group px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-400 border border-red-400/30'
						>
							<span className='relative z-10'>Start Your Success Story</span>
						</a>
						<a
							href='/about'
							className='group px-12 py-5 bg-transparent border-2 border-red-500 text-red-400 font-bold text-xl rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25'
						>
							View All Success Stories
						</a>
					</div>
				</div>
			</div>

			{/* Custom Animations */}
			<style>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px) rotate(0deg); }
					50% { transform: translateY(-20px) rotate(180deg); }
				}
			`}</style>
		</section>
	)
}