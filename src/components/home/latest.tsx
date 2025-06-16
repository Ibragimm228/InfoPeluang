import { useGetArticles } from '@/hooks/useArticles'
import ArticleCardMedium from '../shared/article-card/article-card-medium'
import { useState, useEffect } from 'react'

export function LatestArticlesSection() {
	const { data: articles, isLoading } = useGetArticles()
	const [animatedCards, setAnimatedCards] = useState<number[]>([])

	useEffect(() => {
		if (!isLoading && articles) {
			// Stagger the animation of cards
			articles.slice(3, 9).forEach((_, index) => {
				setTimeout(() => {
					setAnimatedCards(prev => [...prev, index])
				}, index * 150)
			})
		}
	}, [articles, isLoading])

	return (
		<section className='relative py-24 sm:py-32 bg-black overflow-hidden'>
			{/* Epic Background Effects */}
			<div className='absolute inset-0'>
				{/* Dynamic Mesh Gradient */}
				<div className='absolute inset-0 opacity-30'>
					<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 via-black to-red-800/20'></div>
					<div className='absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-3xl animate-pulse'></div>
					<div className='absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
					<div className='absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-red-400/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '4s'}}></div>
				</div>

				{/* Geometric Pattern Overlay */}
				<div className='absolute inset-0 opacity-5'>
					<svg className='w-full h-full' viewBox='0 0 100 100' preserveAspectRatio='none'>
						<defs>
							<pattern id='latest-hexagon' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'>
								<polygon points='5,0 9,3 9,7 5,10 1,7 1,3' fill='#EF4444' opacity='0.4'/>
							</pattern>
						</defs>
						<rect width='100%' height='100%' fill='url(#latest-hexagon)'/>
					</svg>
				</div>

				{/* Animated Light Beams */}
				<div className='absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-red-500/40 to-transparent animate-pulse'></div>
				<div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400/30 to-transparent animate-pulse' style={{animationDelay: '1.5s'}}></div>
				<div className='absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-red-600/25 to-transparent animate-pulse' style={{animationDelay: '3s'}}></div>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Revolutionary Header Section */}
				<div className='text-center mb-20'>
					{/* Status Indicator */}
					<div className='inline-flex items-center justify-center mb-8'>
						<div className='relative px-8 py-4 bg-gradient-to-r from-red-600/40 to-red-500/40 border border-red-500/60 rounded-full backdrop-blur-lg'>
							<div className='absolute -inset-1 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full blur-lg animate-pulse'></div>
							<div className='relative flex items-center space-x-4'>
								<div className='flex space-x-1'>
									<div className='w-2 h-2 bg-red-500 rounded-full animate-ping'></div>
									<div className='w-2 h-2 bg-red-400 rounded-full animate-ping' style={{animationDelay: '0.5s'}}></div>
									<div className='w-2 h-2 bg-red-600 rounded-full animate-ping' style={{animationDelay: '1s'}}></div>
								</div>
								<span className='text-red-300 font-bold text-sm uppercase tracking-wider'>Latest Business Intelligence</span>
								<div className='w-12 h-px bg-gradient-to-r from-red-500 to-transparent'></div>
							</div>
						</div>
					</div>

					{/* Main Title with 3D Effect */}
					<div className='relative mb-8'>
						<h2 className='text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight relative z-10'>
							<span className='block mb-3 transform hover:scale-105 transition-transform duration-300'>
								Latest Business
							</span>
							<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300'>
								Articles & Insights
							</span>
						</h2>
						{/* 3D Shadow Effect */}
						<div className='absolute inset-0 text-5xl sm:text-6xl lg:text-7xl font-black text-red-900/20 transform translate-x-2 translate-y-2 -z-10'>
							<span className='block mb-3'>Latest Business</span>
							<span className='block'>Articles & Insights</span>
						</div>
					</div>

					{/* Subtitle with Animated Underline */}
					<div className='relative max-w-4xl mx-auto mb-12'>
						<p className='text-xl sm:text-2xl text-gray-300 leading-relaxed mb-6'>
							Discover cutting-edge business strategies, market insights, and entrepreneurial wisdom 
							from industry leaders. Stay ahead of the competition with our premium content.
						</p>
						<div className='flex justify-center'>
							<div className='relative'>
								<div className='w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full'></div>
								<div className='absolute top-0 left-0 w-8 h-1 bg-white rounded-full animate-ping'></div>
							</div>
						</div>
					</div>
				</div>

				{/* Улучшенная сетка статей с правильными размерами */}
				<div className='mb-20'>
					{isLoading ? (
						<div className='grid gap-6 auto-rows-fr'>
							{/* Адаптивная сетка для скелетонов */}
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{Array.from({ length: 6 }).map((_, index) => (
									<div key={index} className='group relative'>
										{/* Premium Skeleton с одинаковой высотой */}
										<div className='relative p-1 bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-3xl animate-pulse'>
											<div className='relative p-6 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl backdrop-blur-sm overflow-hidden h-96 flex flex-col'>
												<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent animate-pulse'></div>
												<div className='relative flex-1 flex flex-col space-y-4'>
													{/* Изображение скелетон с фиксированной высотой */}
													<div className='w-full h-48 bg-gradient-to-r from-gray-700/60 to-gray-600/60 rounded-2xl animate-pulse flex-shrink-0'></div>
													{/* Контент скелетон */}
													<div className='flex-1 space-y-3'>
														<div className='h-6 bg-gradient-to-r from-gray-700/60 to-gray-600/60 rounded animate-pulse'></div>
														<div className='h-4 bg-gradient-to-r from-gray-700/60 to-gray-600/60 rounded animate-pulse w-4/5'></div>
														<div className='h-4 bg-gradient-to-r from-gray-700/60 to-gray-600/60 rounded animate-pulse w-3/5'></div>
													</div>
													{/* Нижняя часть скелетон */}
													<div className='flex justify-between items-center pt-2 border-t border-gray-700/30'>
														<div className='h-3 w-20 bg-gradient-to-r from-gray-700/60 to-gray-600/60 rounded animate-pulse'></div>
														<div className='h-3 w-16 bg-gradient-to-r from-gray-700/60 to-gray-600/60 rounded animate-pulse'></div>
													</div>
												</div>
												{/* Animated Skeleton Glow */}
												<div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-pulse'></div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className='grid gap-6 auto-rows-fr'>
							{/* Адаптивная сетка для статей */}
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
								{articles?.slice(3, 9).map((article, index) => (
									<div 
										key={article.id} 
										className={`group relative transform transition-all duration-700 hover:scale-105 ${
											animatedCards.includes(index) 
												? 'opacity-100 translate-y-0' 
												: 'opacity-0 translate-y-12'
										}`}
										style={{ 
											animationDelay: `${index * 150}ms`,
											transform: animatedCards.includes(index) ? 'none' : 'translateY(48px)'
										}}
									>
										{/* Контейнер карточки с фиксированной высотой */}
										<div className='relative h-full'>
											{/* Outer Glow */}
											<div className='absolute -inset-4 bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/20 group-hover:to-red-600/20 rounded-3xl blur-xl transition-all duration-700'></div>
											
											{/* Main Card Border */}
											<div className='relative p-1 bg-gradient-to-br from-red-500/40 to-red-600/40 rounded-3xl group-hover:from-red-400/60 group-hover:to-red-500/60 transition-all duration-500 h-full'>
												<div className='relative p-6 bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl backdrop-blur-sm overflow-hidden group-hover:from-gray-900/98 group-hover:to-black/98 transition-all duration-500 h-full flex flex-col'>
													{/* Inner Glow Effects */}
													<div className='absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-500 rounded-3xl'></div>
													<div className='absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
													<div className='absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
													
													{/* Content с улучшенной структурой */}
													<div className='relative z-10 flex-1 flex flex-col'>
														{/* Обертка для ArticleCardMedium с контролем размеров */}
														<div className='flex-1 flex flex-col min-h-0'>
															<ArticleCardMedium article={article} />
														</div>
													</div>

													{/* Animated Border Highlight */}
													<div className='absolute inset-0 rounded-3xl border border-red-500/30 group-hover:border-red-400/60 transition-colors duration-500'></div>
													
													{/* Corner Accents */}
													<div className='absolute top-4 right-4 w-3 h-3 bg-red-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping'></div>
													<div className='absolute bottom-4 left-4 w-2 h-2 bg-red-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping' style={{animationDelay: '0.5s'}}></div>
												</div>
											</div>
										</div>

										{/* Floating Particle Effects */}
										<div className='absolute -top-3 -right-3 w-6 h-6 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce'></div>
										<div className='absolute -bottom-2 -left-2 w-4 h-4 bg-red-400/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce' style={{animationDelay: '0.8s'}}></div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Epic CTA Section */}
				<div className='text-center'>
					<div className='relative inline-block mb-12'>
						{/* Multiple Glow Layers */}
						<div className='absolute -inset-8 bg-gradient-to-r from-red-600/30 to-red-500/30 rounded-3xl blur-2xl animate-pulse opacity-60'></div>
						<div className='absolute -inset-4 bg-gradient-to-r from-red-600/40 to-red-500/40 rounded-3xl blur-xl animate-pulse opacity-80'></div>
						
						{/* Main CTA Button */}
						<a
							href='/blog'
							className='relative group px-16 py-6 bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-red-500/40 transition-all duration-700 hover:scale-110 hover:from-red-500 hover:to-red-400 border-2 border-red-400/50 inline-flex items-center space-x-4 overflow-hidden'
						>
							{/* Button Background Animation */}
							<div className='absolute inset-0 bg-gradient-to-r from-red-400/0 to-red-300/0 group-hover:from-red-400/30 group-hover:to-red-300/30 transition-all duration-700'></div>
							<div className='absolute inset-0 bg-gradient-to-45 from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%]' style={{animation: 'shimmer 2s infinite'}}></div>
							
							<span className='relative z-10 flex items-center space-x-3'>
								<span>Explore All Business Articles</span>
								<div className='flex space-x-1'>
									<div className='w-2 h-2 bg-white rounded-full animate-bounce'></div>
									<div className='w-2 h-2 bg-white rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
									<div className='w-2 h-2 bg-white rounded-full animate-bounce' style={{animationDelay: '0.4s'}}></div>
								</div>
							</span>
						</a>
					</div>

					{/* Premium Stats Grid */}
					<div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{ number: '1000+', label: 'Premium Articles', icon: '📚', color: 'from-red-500 to-red-600' },
							{ number: '100K+', label: 'Monthly Readers', icon: '👥', color: 'from-red-600 to-red-700' },
							{ number: '500+', label: 'Expert Contributors', icon: '🎯', color: 'from-red-400 to-red-500' },
							{ number: '99%', label: 'Success Rate', icon: '🚀', color: 'from-red-500 to-red-400' }
						].map((stat, index) => (
							<div key={index} className='group relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/30 hover:border-red-400/60 transition-all duration-500 hover:transform hover:scale-110 backdrop-blur-sm overflow-hidden'>
								{/* Background Glow */}
								<div className='absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-500 rounded-3xl'></div>
								<div className='absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
								
								<div className='relative z-10 text-center'>
									<div className='text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 filter group-hover:drop-shadow-lg'>
										{stat.icon}
									</div>
									<div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
										{stat.number}
									</div>
									<div className='text-gray-400 font-bold text-sm uppercase tracking-wider group-hover:text-red-300 transition-colors duration-300'>
										{stat.label}
									</div>
								</div>

								{/* Animated Border */}
								<div className='absolute inset-0 rounded-3xl border border-red-500/20 group-hover:border-red-400/50 transition-colors duration-500'></div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Custom Animation Styles */}
			<style>{`
				@keyframes shimmer {
					0% { transform: translateX(-100%) skewX(-12deg); }
					100% { transform: translateX(200%) skewX(-12deg); }
				}
				
				@keyframes float-up {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-15px); }
				}
				
				@keyframes gradient-shift {
					0%, 100% { background-position: 0% 50%; }
					50% { background-position: 100% 50%; }
				}
				
				.animate-float-up {
					animation: float-up 4s ease-in-out infinite;
				}
				
				.animate-gradient-shift {
					background-size: 200% 200%;
					animation: gradient-shift 3s ease infinite;
				}
				
				/* Обеспечиваем равную высоту для всех карточек */
				.grid.auto-rows-fr {
					grid-auto-rows: 1fr;
				}
			`}</style>
		</section>
	)
}