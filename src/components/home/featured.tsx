import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardSmall from '../shared/article-card/article-card-small'
import { useState, useEffect } from 'react'

export function FeaturedArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const [visibleCards, setVisibleCards] = useState<number[]>([])

	useEffect(() => {
		// Stagger animation for article cards
		if (!isLoading && articles) {
			articles.slice(0, 3).forEach((_, index) => {
				setTimeout(() => {
					setVisibleCards(prev => [...prev, index])
				}, index * 200)
			})
		}
	}, [articles, isLoading])

	return (
		<section className='relative py-20 sm:py-28 bg-black overflow-hidden'>
			{/* Dynamic Background Elements */}
			<div className='absolute inset-0'>
				{/* Animated Gradient Mesh */}
				<div className='absolute inset-0 opacity-20'>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/30 via-transparent to-red-600/20'></div>
					<div className='absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse'></div>
					<div className='absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '3s'}}></div>
				</div>

				{/* Geometric Pattern */}
				<div className='absolute inset-0 opacity-5'>
					<svg className='w-full h-full' viewBox='0 0 100 100' preserveAspectRatio='none'>
						<defs>
							<pattern id='featured-pattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'>
								<polygon points='10,0 20,10 10,20 0,10' fill='#EF4444' opacity='0.3'/>
							</pattern>
						</defs>
						<rect width='100%' height='100%' fill='url(#featured-pattern)'/>
					</svg>
				</div>

				{/* Floating Lines */}
				<div className='absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent animate-pulse'></div>
				<div className='absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent animate-pulse' style={{animationDelay: '1s'}}></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Premium Header Section */}
				<div className='text-center mb-16'>
					{/* Status Badge */}
					<div className='inline-flex items-center justify-center px-8 py-3 mb-8 bg-gradient-to-r from-red-600/30 to-red-500/30 border border-red-500/50 rounded-full backdrop-blur-sm'>
						<div className='flex items-center space-x-3'>
							<div className='w-2 h-2 bg-red-500 rounded-full animate-ping'></div>
							<span className='text-red-400 font-bold text-sm uppercase tracking-wider'>Featured Content</span>
							<div className='w-8 h-px bg-gradient-to-r from-red-500 to-transparent'></div>
						</div>
					</div>

					{/* Main Title */}
					<h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight'>
						<span className='block mb-2'>Premium Business</span>
						<span className='bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
							Insights & Articles
						</span>
					</h2>

					{/* Subtitle with animated underline */}
					<div className='relative max-w-4xl mx-auto'>
						<p className='text-xl sm:text-2xl text-gray-300 leading-relaxed mb-4'>
							Discover hand-curated business strategies, market insights, and entrepreneurial wisdom 
							from industry leaders and successful entrepreneurs.
						</p>
						<div className='flex justify-center'>
							<div className='w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-pulse'></div>
						</div>
					</div>
				</div>

				{/* Articles Grid */}
				<div className='grid gap-8 lg:grid-cols-3 mb-16'>
					{isLoading ? (
						Array.from({ length: 3 }).map((_, index) => (
							<div key={index} className='group relative'>
								{/* Enhanced Skeleton */}
								<div className='relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/20 backdrop-blur-sm overflow-hidden'>
									<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent animate-pulse'></div>
									<div className='relative space-y-4'>
										<div className='w-full h-48 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-2xl animate-pulse'></div>
										<div className='space-y-3'>
											<div className='h-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded animate-pulse'></div>
											<div className='h-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded animate-pulse w-3/4'></div>
											<div className='h-3 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded animate-pulse w-1/2'></div>
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						articles?.slice(0, 3).map((article, index) => (
							<div 
								key={article.id} 
								className={`group relative transform transition-all duration-700 ${
									visibleCards.includes(index) 
										? 'opacity-100 translate-y-0' 
										: 'opacity-0 translate-y-8'
								}`}
								style={{ animationDelay: `${index * 200}ms` }}
							>
								{/* Enhanced Article Card Wrapper */}
								<div className='relative p-1 bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-3xl group-hover:from-red-400/40 group-hover:to-red-500/40 transition-all duration-500'>
									<div className='relative p-8 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl backdrop-blur-sm overflow-hidden group-hover:from-gray-900/95 group-hover:to-black/95 transition-all duration-500 h-full'>
										{/* Hover Effects */}
										<div className='absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-500 rounded-3xl'></div>
										<div className='absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
										
										{/* Content */}
										<div className='relative z-10'>
											<ArticleCardSmall article={article} />
										</div>

										{/* Animated Border */}
										<div className='absolute inset-0 rounded-3xl border border-red-500/20 group-hover:border-red-500/40 transition-colors duration-500'></div>
									</div>
								</div>

								{/* Floating Elements */}
								<div className='absolute -top-2 -right-2 w-4 h-4 bg-red-500/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping'></div>
							</div>
						))
					)}
				</div>

				{/* Enhanced CTA Section */}
				<div className='text-center'>
					<div className='relative inline-block'>
						{/* Background Glow */}
						<div className='absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl animate-pulse opacity-75'></div>
						
						{/* CTA Button */}
						<a
							href='/blog'
							className='relative group px-12 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 hover:scale-105 hover:from-red-500 hover:to-red-400 border border-red-400/30 inline-flex items-center space-x-3'
						>
							<span className='relative z-10'>Explore All Business Articles</span>
							<div className='w-5 h-5 border-2 border-white rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300'>
								<div className='w-2 h-2 bg-white rounded-full transform group-hover:scale-150 transition-transform duration-300'></div>
							</div>
							
							{/* Button Glow Effect */}
							<div className='absolute inset-0 bg-gradient-to-r from-red-400/0 to-red-300/0 group-hover:from-red-400/20 group-hover:to-red-300/20 rounded-2xl transition-all duration-500'></div>
						</a>
					</div>

					{/* Stats Row */}
					<div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8'>
						{[
							{ number: '500+', label: 'Business Articles', icon: '📚' },
							{ number: '50K+', label: 'Monthly Readers', icon: '👥' },
							{ number: '200+', label: 'Expert Contributors', icon: '🎯' },
							{ number: '98%', label: 'Success Rate', icon: '🚀' }
						].map((stat, index) => (
							<div key={index} className='group text-center p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm'>
								<div className='text-3xl mb-2 group-hover:scale-110 transition-transform duration-300'>
									{stat.icon}
								</div>
								<div className='text-2xl font-black text-red-500 mb-1 group-hover:text-red-400 transition-colors duration-300'>
									{stat.number}
								</div>
								<div className='text-gray-400 text-sm font-medium'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Custom Styles */}
			<style>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-10px); }
				}
				
				.animate-float {
					animation: float 3s ease-in-out infinite;
				}
			`}</style>
		</section>
	)
}