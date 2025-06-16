import { useGetArticles } from '@/hooks/useArticles'
import { useState } from 'react'

export function CategoriesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const categories = [...new Set(articles?.map(article => article.type))]
	const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

	const categoryIcons = {
		'Business Strategy': '🎯',
		'Franchise': '🏢', 
		'Investment': '📈',
		'Marketing': '📊',
		'Tips & Tricks': '💡',
		'Success Stories': '🏆',
		'Partnership': '🤝',
		'Innovation': '🚀'
	}

	const getRandomIcon = (category: keyof typeof categoryIcons | string) => {
		const icons = ['🎯', '🏢', '📈', '📊', '💡', '🏆', '🤝', '🚀', '💼', '⚡']
		return categoryIcons[category as keyof typeof categoryIcons] || icons[Math.floor(Math.random() * icons.length)]
	}

	return (
		<section className='relative py-24 sm:py-32 bg-black overflow-hidden'>
			{/* Advanced Background Effects */}
			<div className='absolute inset-0'>
				{/* Animated Mesh Gradient */}
				<div className='absolute inset-0 opacity-30'>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 via-transparent to-red-800/10'></div>
					<div className='absolute top-1/3 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-red-600/15 via-transparent to-transparent transform rotate-12'></div>
				</div>

				{/* Floating Geometric Shapes */}
				<div className='absolute top-20 left-10 w-20 h-20 border border-red-500/30 rotate-45 animate-spin-slow'></div>
				<div className='absolute bottom-32 right-16 w-16 h-16 bg-red-600/20 rounded-full animate-pulse'></div>
				<div className='absolute top-1/2 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-red-500/40 to-transparent'></div>
				<div className='absolute top-1/3 right-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-red-400/30 to-transparent'></div>

				{/* Dynamic Light Rays */}
				<div className='absolute inset-0'>
					<div className='absolute top-1/4 left-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse'></div>
					<div className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
				</div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-20'>
					<div className='inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 text-red-400 font-bold text-sm uppercase tracking-widest mb-8 backdrop-blur-sm'>
						<div className='w-3 h-3 bg-red-500 rounded-full mr-4 animate-ping'></div>
						<span className='bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent'>
							Business Categories
						</span>
					</div>
					
					<h2 className='text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight'>
						Explore
						<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
							Premium Opportunities
						</span>
					</h2>
					
					<p className='max-w-4xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed'>
						Navigate through our curated collection of business insights, investment opportunities, 
						and entrepreneurial resources tailored for ambitious professionals.
					</p>
				</div>

				{/* Categories Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16'>
					{isLoading
						? Array.from({ length: 8 }).map((_, index) => (
								<div
									key={index}
									className='group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-red-500/20 backdrop-blur-sm'
								>
									<div className='animate-pulse'>
										<div className='w-12 h-12 bg-red-500/30 rounded-xl mb-4'></div>
										<div className='h-6 bg-gray-700/50 rounded-lg mb-2'></div>
										<div className='h-4 bg-gray-800/50 rounded w-2/3'></div>
									</div>
								</div>
						  ))
						: categories.map((category, index) => (
								<a
									key={category}
									href={`/blog?type=${encodeURIComponent(category || '')}`}
									className='group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-red-500/20 hover:border-red-500/60 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm cursor-pointer overflow-hidden'
									onMouseEnter={() => setHoveredCategory(index)}
									onMouseLeave={() => setHoveredCategory(null)}
								>
									{/* Hover Effect Background */}
									<div className={`absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-3xl transition-all duration-500 ${
										hoveredCategory === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
									}`}></div>
									
									{/* Dynamic Border Effect */}
									<div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
										hoveredCategory === index 
											? 'shadow-2xl shadow-red-500/25 ring-2 ring-red-500/30' 
											: 'shadow-lg shadow-black/20'
									}`}></div>

									<div className='relative z-10'>
										{/* Icon Container */}
										<div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600/20 to-red-500/20 border border-red-500/30 mb-6 transition-all duration-500 ${
											hoveredCategory === index ? 'transform scale-110 rotate-6' : ''
										}`}>
											<span className='text-2xl filter drop-shadow-lg'>
												{getRandomIcon(category ?? '')}
											</span>
										</div>

										{/* Category Title */}
										<h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
											hoveredCategory === index ? 'text-red-400' : 'text-white'
										}`}>
											{category}
										</h3>

										{/* Subtitle */}
										<p className='text-gray-400 text-sm leading-relaxed mb-4'>
											Discover exclusive opportunities and insights
										</p>

										{/* Arrow Indicator */}
										<div className={`flex items-center text-red-400 text-sm font-medium transition-all duration-300 ${
											hoveredCategory === index ? 'transform translate-x-2' : ''
										}`}>
											<span className='mr-2'>Explore</span>
											<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
											</svg>
										</div>
									</div>

									{/* Floating Particle Effect */}
									<div className={`absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full transition-all duration-500 ${
										hoveredCategory === index ? 'animate-ping' : 'opacity-30'
									}`}></div>
								</a>
						  ))}
				</div>

				{/* Bottom CTA Section */}
				<div className='text-center'>
					<div className='inline-flex flex-col sm:flex-row gap-6'>
						<a
							href='/blog'
							className='group relative px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 hover:scale-105 hover:from-red-500 hover:to-red-400 border border-red-400/30 overflow-hidden'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
							<span className='relative z-10 flex items-center'>
								View All Articles
								<svg className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
								</svg>
							</span>
						</a>
						<a
							href='/contacts'
							className='group px-10 py-5 bg-transparent border-2 border-red-500 text-red-400 font-bold text-lg rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 relative overflow-hidden'
						>
							<div className='absolute inset-0 bg-red-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100'></div>
							<span className='relative z-10'>Join Premium Network</span>
						</a>
					</div>
				</div>
			</div>

			{/* Custom Animations */}
			<style>{`
				@keyframes spin-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}
			`}</style>
		</section>
	)
}