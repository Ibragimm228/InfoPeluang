import { getArticleLink } from '@/lib/utils'
import { type IArticle } from '@/types/interfaces'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'

interface ArticleNavigationProps {
	currentArticle: IArticle
	articles: IArticle[] | undefined | null
}

export function ArticleNavigation({
	currentArticle,
	articles,
}: ArticleNavigationProps) {
	if (!articles) return null

	// Find current article index
	const currentIndex = articles.findIndex(
		article => article.id === currentArticle.id
	)

	// Get previous and next articles
	const prevArticle =
		currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
	const nextArticle = currentIndex > 0 ? articles[currentIndex - 1] : null

	return (
		<div className='flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-8 my-12 pt-8 border-t border-gray-200'>
			{prevArticle ? (
				<Link
					to={getArticleLink(prevArticle)}
					className='flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors flex-1 min-w-0'
				>
					<ChevronLeft size={20} className='shrink-0' />
					<div className='flex flex-col min-w-0'>
						<span className='text-xs sm:text-sm text-gray-500'>
							Previous Article
						</span>
						<span className='font-medium text-sm sm:text-base line-clamp-1'>
							{prevArticle.title}
						</span>
					</div>
				</Link>
			) : (
				<div className='flex-1' />
			)}

			{nextArticle ? (
				<Link
					to={getArticleLink(nextArticle)}
					className='flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors flex-1 min-w-0 text-right max-sm:self-end'
				>
					<div className='flex flex-col min-w-0'>
						<span className='text-xs sm:text-sm text-gray-500'>
							Next Article
						</span>
						<span className='font-medium text-sm sm:text-base line-clamp-1'>
							{nextArticle.title}
						</span>
					</div>
					<ChevronRight size={20} className='shrink-0' />
				</Link>
			) : (
				<div className='flex-1' />
			)}
		</div>
	)
}
