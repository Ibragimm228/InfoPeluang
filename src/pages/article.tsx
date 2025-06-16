import {
	ArticleComments,
	ArticleContent,
	ArticleFeatured,
	ArticleHeader,
	ArticleLatest,
	ArticleNavigation,
	ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { Loading } from '@/components/ui/loading'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'
import { useState, useEffect, useMemo, useCallback } from 'react'

export function ArticlePage() {
	const { slug } = useParams()
	const [isVisible, setIsVisible] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
		slug || ''
	)
	const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

	// Мemoized стили для оптимизации производительности
	const mouseGradientStyle = useMemo(() => ({
		background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15) 0%, transparent 50%)`,
		transition: 'background 0.3s ease'
	}), [mousePosition.x, mousePosition.y])

	// Оптимизированный обработчик движения мыши с throttling
	const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
		setMousePosition({ x: e.clientX, y: e.clientY })
	}, [])

	useEffect(() => {
		setIsVisible(true)
		
		// Throttling для оптимизации производительности
		let animationFrameId: number
		const throttledMouseMove = (e: globalThis.MouseEvent) => {
			if (animationFrameId) return
			animationFrameId = requestAnimationFrame(() => {
				handleMouseMove(e)
				animationFrameId = 0
			})
		}
		
		window.addEventListener('mousemove', throttledMouseMove, { passive: true })
		return () => {
			window.removeEventListener('mousemove', throttledMouseMove)
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId)
			}
		}
	}, [handleMouseMove])

	// Мemoized компонент лоадера для предотвращения ненужных ре-рендеров
	const LoadingComponent = useMemo(() => (
		<div className='min-h-screen bg-black flex items-center justify-center'>
			<div className='relative w-full max-w-2xl px-8'> {/* Увеличенная ширина */}
				{/* Анимированный фон лоадера */}
				<div className='absolute -inset-12 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-full blur-xl animate-pulse'></div>
				<div className='relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl p-16 border border-red-500/30 backdrop-blur-sm'> {/* Увеличен padding */}
					<Loading />
				</div>
			</div>
		</div>
	), [])

	// Мemoized фоновые элементы
	const BackgroundElements = useMemo(() => (
		<div className='fixed inset-0 z-0'>
			{/* Mouse-following gradient */}
			<div className='absolute inset-0 opacity-20'>
				<div 
					className='absolute w-full h-full'
					style={mouseGradientStyle}
				></div>
			</div>
			
			{/* Floating Red Elements - оптимизированы с transform3d */}
			<div className='absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-red-500/20 to-red-600/5 rounded-full blur-3xl animate-pulse will-change-transform'></div>
			<div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-red-600/15 to-red-400/5 rounded-full blur-3xl animate-pulse will-change-transform' style={{animationDelay: '2s'}}></div>
			<div className='absolute top-1/2 left-1/3 w-48 h-48 bg-red-500/10 rounded-full blur-2xl animate-pulse will-change-transform' style={{animationDelay: '4s'}}></div>
			
			{/* Animated Lines */}
			<div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent transform -skew-x-12 will-change-transform'></div>
			<div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent transform skew-x-12 will-change-transform'></div>
			
			{/* Grid Pattern - оптимизирован */}
			<div className='absolute inset-0 opacity-5 will-change-transform'>
				<div className='w-full h-full grid-pattern'></div>
			</div>
		</div>
	), [mouseGradientStyle])

	// Оптимизированная CSS-строка
	const optimizedStyles = useMemo(() => `
		.grid-pattern {
			background-image: linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
			                   linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px);
			background-size: 100px 100px;
			animation: grid-drift 30s linear infinite;
		}
		
		@keyframes grid-drift {
			0% { transform: translate3d(0, 0, 0) rotate(0deg); }
			33% { transform: translate3d(30px, -30px, 0) rotate(1deg); }
			66% { transform: translate3d(-20px, 20px, 0) rotate(-1deg); }
			100% { transform: translate3d(0, 0, 0) rotate(0deg); }
		}
		
		@keyframes pulse {
			0%, 100% { opacity: 0.4; }
			50% { opacity: 0.8; }
		}
	`, [])

	if (isArticleLoading || isArticlesLoading) {
		return LoadingComponent
	}

	if (!article) return null

	return (
		<div className='relative min-h-screen bg-black overflow-hidden'>
			{BackgroundElements}

			{/* Main Content */}
			<div className='relative z-10'>
				<Container>
					<div className={`py-12 transition-all duration-1500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
						{/* Article Header with Glass Effect */}
						<div className='relative mb-12'>
							<div className='absolute -inset-4 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-3xl blur-xl'></div>
							<div className='relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl p-8 border border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-500 will-change-transform'>
								<ArticleHeader article={article} />
							</div>
						</div>

						<div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
							{/* Left Column - Article Content */}
							<div className='lg:col-span-8 space-y-8'>
								{/* Article Navigation */}
								<div className='group relative'>
									<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
									<div className='relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 backdrop-blur-sm will-change-transform'>
										<ArticleNavigation currentArticle={article} articles={articles} />
									</div>
								</div>

								{/* Article Content */}
								<div className='group relative'>
									<div className='absolute -inset-4 bg-gradient-to-r from-red-600/15 to-red-500/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
									<div className='relative bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl p-8 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 backdrop-blur-sm will-change-transform'>
										<ArticleContent article={article} />
									</div>
								</div>
							</div>

							{/* Right Column - Articles & Comments */}
							<div className='lg:col-span-4 space-y-8'>
								{/* Comments Section */}
								<div className='group relative'>
									<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
									<div className='relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 backdrop-blur-sm will-change-transform'>
										<div className='flex items-center mb-4'>
											<div className='w-3 h-3 bg-red-500 rounded-full mr-3 animate-ping'></div>
											<h3 className='text-red-400 font-bold text-sm uppercase tracking-widest'>Comments</h3>
										</div>
										<ArticleComments article={article} />
									</div>
								</div>

								{/* Latest Articles */}
								<div className='group relative'>
									<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
									<div className='relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 backdrop-blur-sm will-change-transform'>
										<div className='flex items-center mb-4'>
											<div className='w-3 h-3 bg-red-500 rounded-full mr-3 animate-ping' style={{animationDelay: '0.5s'}}></div>
											<h3 className='text-red-400 font-bold text-sm uppercase tracking-widest'>Latest Articles</h3>
										</div>
										<ArticleLatest articles={articles} />
									</div>
								</div>

								{/* Popular Articles */}
								<div className='group relative'>
									<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
									<div className='relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 backdrop-blur-sm will-change-transform'>
										<div className='flex items-center mb-4'>
											<div className='w-3 h-3 bg-red-500 rounded-full mr-3 animate-ping' style={{animationDelay: '1s'}}></div>
											<h3 className='text-red-400 font-bold text-sm uppercase tracking-widest'>🔥 Popular</h3>
										</div>
										<ArticlePopular articles={articles} />
									</div>
								</div>

								{/* Featured Articles */}
								<div className='group relative'>
									<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
									<div className='relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 backdrop-blur-sm will-change-transform'>
										<div className='flex items-center mb-4'>
											<div className='w-3 h-3 bg-red-500 rounded-full mr-3 animate-ping' style={{animationDelay: '1.5s'}}></div>
											<h3 className='text-red-400 font-bold text-sm uppercase tracking-widest'>⭐ Featured</h3>
										</div>
										<ArticleFeatured articles={articles} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>

			{/* Оптимизированные стили */}
			<style>{optimizedStyles}</style>
		</div>
	)
}
