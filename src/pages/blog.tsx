import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { Search, Filter, X, TrendingUp, Target, Users, DollarSign } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'
import { useState, useEffect } from 'react'
import { type IArticle } from '@/types/interfaces'
import { type LucideIcon } from 'lucide-react'

interface ArticleType {
	name: string
	value: string
	icon: LucideIcon
}

// Динамически генерируемые типы статей на основе данных
function generateArticleTypes(articles: IArticle[]): ArticleType[] {
	const types = [...new Set(articles.map(article => article.type).filter(Boolean))]
	return [
		{ name: "All Categories", value: "", icon: Target },
		...types.map(type => ({
			name: type || "",
			value: type || "",
			icon: getIconForType(type || "")
		}))
	]
}

function getIconForType(type: string): LucideIcon {
	const iconMap: Record<string, LucideIcon> = {
		'Franchise': Users,
		'Digital Business': TrendingUp,
		'E-commerce': DollarSign,
		'Investment': TrendingUp,
		'Startup': Target,
		'F&B': Users
	}
	return iconMap[type] || Target
}

// Loading Component
function LoadingCard() {
	return (
		<div className='bg-gradient-to-br from-gray-900/80 to-gray-800/40 rounded-2xl border border-red-500/30 overflow-hidden backdrop-blur-xl animate-pulse'>
			<div className='h-48 bg-gray-700/50'></div>
			<div className='p-6'>
				<div className='h-6 bg-gray-700/50 rounded mb-3'></div>
				<div className='h-4 bg-gray-700/30 rounded mb-2'></div>
				<div className='h-4 bg-gray-700/30 rounded mb-4 w-3/4'></div>
				<div className='flex justify-between'>
					<div className='h-4 bg-gray-700/30 rounded w-1/3'></div>
					<div className='h-4 bg-gray-700/30 rounded w-1/4'></div>
				</div>
			</div>
		</div>
	)
}

export function BlogPage() {
	const [searchParams, setSearchParams] = useSearchParams()
	const [searchQuery, setSearchQuery] = useState('')
	const [isVisible, setIsVisible] = useState(false)
	
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	useEffect(() => {
		setIsVisible(true)
	}, [])

	const updateType = (newType: string) => {
		if (newType) {
			setSearchParams({ type: newType })
		} else {
			setSearchParams({})
		}
	}

	// Генерируем типы динамически на основе данных
	const ARTICLE_TYPES = articles && articles.length > 0 ? generateArticleTypes(articles) : [
		{ name: "All Categories", value: "", icon: Target }
	]

	const filteredArticles = articles?.filter(article => {
		const matchesType = type ? article.type === type : true
		const matchesSearch = searchQuery ? 
			article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
			(article.summary && article.summary.toLowerCase().includes(searchQuery.toLowerCase())) ||
			(article.type && article.type.toLowerCase().includes(searchQuery.toLowerCase()))
			: true
		return matchesType && matchesSearch
	}) || []

	if (isError) {
		return (
			<div className='min-h-screen bg-black flex items-center justify-center'>
				<div className='text-center'>
					<div className='w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6'>
						<X className='w-12 h-12 text-red-400' />
					</div>
					<h3 className='text-2xl font-bold text-white mb-4'>Error Loading Articles</h3>
					<p className='text-gray-400 mb-8'>Please try again later.</p>
					<button
						onClick={() => window.location.reload()}
						className='px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25'
					>
						Retry
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className='min-h-screen bg-black'>
			{/* Background Effects */}
			<div className='fixed inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-600/10 to-red-500/5 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-red-500/8 to-red-600/3 rounded-full blur-3xl animate-pulse' style={{animationDelay: '3s'}}></div>
				<div className='absolute inset-0 opacity-5'>
					<div className='h-full w-full' style={{
						backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
						                   radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.05) 0%, transparent 50%)`,
						backgroundSize: '600px 600px'
					}}></div>
				</div>
			</div>

			<Container>
				<div className='relative z-10 py-12'>
					{/* Header Section */}
					<div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
						<div className='inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600/30 to-red-500/20 border border-red-500/40 text-red-400 font-bold text-sm uppercase tracking-wider mb-6'>
							<div className='flex space-x-1 mr-3'>
								<div className='w-2 h-2 bg-red-500 rounded-full animate-ping'></div>
								<div className='w-2 h-2 bg-red-400 rounded-full animate-ping' style={{animationDelay: '0.5s'}}></div>
							</div>
							Business Intelligence Hub
						</div>
						
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight'>
							Premium Business 
							<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
								Opportunities & Insights
							</span>
						</h1>
						
						<p className='max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed mb-8'>
							Discover verified business opportunities, investment strategies, and entrepreneurial insights 
							from industry leaders generating millions in revenue.
						</p>
					</div>

					{/* Search and Filter Section */}
					<div className={`mb-12 transition-all duration-1200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
						{/* Search Bar */}
						<div className='relative max-w-2xl mx-auto mb-8'>
							<div className='absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/10 rounded-2xl blur-xl'></div>
							<div className='relative flex items-center'>
								<Search className='absolute left-6 w-6 h-6 text-red-400' />
								<input
									type='text'
									placeholder='Search business opportunities, strategies, investments...'
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className='w-full pl-16 pr-6 py-4 bg-gray-900/80 border border-red-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20 backdrop-blur-xl'
								/>
							</div>
						</div>

						{/* Category Filter */}
						<div className='flex flex-wrap justify-center gap-3'>
							{ARTICLE_TYPES.map((articleType) => {
								const Icon = articleType.icon
								const isActive = type === articleType.value
								return (
									<button
										key={articleType.value}
										onClick={() => updateType(articleType.value)}
										className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
											isActive 
												? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25' 
												: 'bg-gray-900/60 text-gray-300 border border-red-500/20 hover:border-red-500/50 hover:text-red-400 backdrop-blur-sm'
										}`}
									>
										<Icon className='w-4 h-4' />
										{articleType.name}
										{isActive && articleType.value && (
											<button 
												onClick={(e) => {
													e.stopPropagation()
													updateType('')
												}}
												className='ml-2 hover:bg-red-400 rounded-full p-1 transition-colors'
											>
												<X className='w-3 h-3' />
											</button>
										)}
									</button>
								)
							})}
						</div>

						{/* Active Filter Display */}
						{type && (
							<div className='text-center mt-6'>
								<div className='inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 font-medium'>
									<Filter className='w-4 h-4' />
									Showing articles of type: <strong>{type}</strong>
									<Link to='/blog'>
										<X className='w-4 h-4 hover:bg-red-500 rounded-full p-1 transition-colors' />
									</Link>
								</div>
							</div>
						)}
					</div>

					{/* Loading State */}
					{isLoading && (
						<div className='space-y-12'>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
								{[...Array(6)].map((_, i) => (
									<LoadingCard key={i} />
								))}
							</div>
						</div>
					)}

					{/* Results */}
					{!isLoading && filteredArticles.length > 0 ? (
						<div className='space-y-12'>
							<div className={`transition-all duration-1400 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
								<div className='flex items-center gap-3 mb-8'>
									<div className='w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center'>
										<Target className='w-6 h-6 text-white' />
									</div>
									<h2 className='text-2xl font-black text-white'>
										{type ? `${type} Articles` : 'All Business Insights'}
									</h2>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
									{filteredArticles.map(article => (
										<div key={article.id} className='group relative'>
											{/* Wrapper для эффекта свечения */}
											<div className='absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
											<div className='relative transform transition-all duration-300 group-hover:scale-[1.02]'>
												<ArticleCardMedium article={article} />
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					) : !isLoading && (
						<div className='text-center py-16'>
							<div className='w-24 h-24 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6'>
								<Search className='w-12 h-12 text-red-400' />
							</div>
							<h3 className='text-2xl font-bold text-white mb-4'>No Business Opportunities Found</h3>
							<p className='text-gray-400 mb-8 max-w-md mx-auto'>
								{type 
									? `No articles found for type "${type}"`
									: searchQuery 
										? `No articles match your search "${searchQuery}"`
										: 'No articles available at the moment'
								}
							</p>
							{(type || searchQuery) && (
								<button
									onClick={() => {
										updateType('')
										setSearchQuery('')
									}}
									className='px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25'
								>
									View All Articles
								</button>
							)}
						</div>
					)}

					{/* Bottom CTA */}
					{!isLoading && (
						<div className='text-center mt-20 pt-16 border-t border-red-500/20'>
							<div className='max-w-2xl mx-auto mb-8'>
								<h3 className='text-3xl font-black text-white mb-4'>
									Ready to Start Your Business Journey?
								</h3>
								<p className='text-gray-300 text-lg'>
									Join thousands of successful entrepreneurs who've built million-dollar businesses 
									through our premium network and verified opportunities.
								</p>
							</div>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<button className='px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-xl hover:from-red-500 hover:to-red-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/25'>
									Join Premium Network
								</button>
								<button className='px-8 py-4 bg-transparent border-2 border-red-500 text-red-400 font-bold text-lg rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105'>
									Browse Free Content
								</button>
							</div>
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
