import { getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'

interface ArticleCardSmallProps {
	article: IArticle
}

const ArticleCardSmall: React.FC<ArticleCardSmallProps> = ({ article }) => {
	return (
		<a href={getArticleLink(article)} className='block group'>
			<div className='overflow-hidden rounded-lg shadow-lg'>
				<img
					className='w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300'
					src={article.image}
					alt={article.title}
				/>
			</div>
			<div className='mt-4'>
				<span className='inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full'>
					{article.type}
				</span>
				<h3 className='mt-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600'>
					{article.title}
				</h3>
				<p className='mt-2 text-sm text-gray-500'>
					{new Date(article.published_date ?? '').toLocaleDateString()}
				</p>
			</div>
		</a>
	)
}

export default ArticleCardSmall
