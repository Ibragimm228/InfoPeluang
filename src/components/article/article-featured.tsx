import { type IArticle } from '@/types/interfaces'
import { useMemo } from 'react'
import ArticleCardSmall from '../shared/article-card/article-card-small'

interface ArticleFeaturedProps {
	articles: IArticle[] | undefined | null
}

export function ArticleFeatured({ articles }: ArticleFeaturedProps) {
	// Randomize featured articles
	const randomizedFeaturedArticles = useMemo(() => {
		if (!articles) return []
		return [...articles].sort(() => Math.random() - 0.5)
	}, [articles])

	return (
		randomizedFeaturedArticles.length > 0 && (
			<div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
				<h2 className='text-xl font-bold text-gray-900 mb-4'>
					Featured Articles
				</h2>
				<div className='flex flex-col gap-4'>
					{randomizedFeaturedArticles.slice(0, 3).map(article => (
						<ArticleCardSmall key={article.id} article={article} />
					))}
				</div>
			</div>
		)
	)
}
