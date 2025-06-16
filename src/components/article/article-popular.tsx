import { type IArticle } from '@/types/interfaces'
import { useMemo } from 'react'
import ArticleCardSmall from '../shared/article-card/article-card-small'

interface ArticlePopularProps {
	articles: IArticle[] | undefined | null
}

export function ArticlePopular({ articles }: ArticlePopularProps) {
	// Sort latest articles by date
	const sortedPopularArticles = useMemo(() => {
		if (!articles) return []
		return [...articles].sort((a, b) => {
			const commentsA = a.comments?.length || 0
			const commentsB = b.comments?.length || 0
			return commentsB - commentsA
		})
	}, [articles])

	return (
		sortedPopularArticles.length > 0 && (
			<div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
				<h2 className='text-xl font-bold text-gray-900 mb-4'>
					Popular Articles
				</h2>
				<div className='flex flex-col gap-4'>
					{sortedPopularArticles.slice(0, 3).map(article => (
						<ArticleCardSmall key={article.id} article={article} />
					))}
				</div>
			</div>
		)
	)
}
