import { type IArticle } from '@/types/interfaces'
import { useMemo } from 'react'
import ArticleCardSmall from '../shared/article-card/article-card-small'

interface ArticleLatestProps {
	articles: IArticle[] | undefined | null
}

export function ArticleLatest({ articles }: ArticleLatestProps) {
	// Sort latest articles by date
	const sortedLatestArticles = useMemo(() => {
		if (!articles) return []
		return [...articles].sort((a, b) => {
			const dateA = new Date(a.published_date || '').getTime()
			const dateB = new Date(b.published_date || '').getTime()
			return dateB - dateA
		})
	}, [articles])

	return (
		sortedLatestArticles.length > 0 && (
			<div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
				<h2 className='text-xl font-bold text-gray-900 mb-4'>
					Latest Articles
				</h2>
				<div className='flex flex-col gap-4'>
					{sortedLatestArticles.slice(0, 3).map(article => (
						<ArticleCardSmall key={article.id} article={article} />
					))}
				</div>
			</div>
		)
	)
}
