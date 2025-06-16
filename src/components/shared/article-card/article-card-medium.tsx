import { getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'

interface ArticleCardMediumProps {
	article: IArticle
}

const ArticleCardMedium: React.FC<ArticleCardMediumProps> = ({ article }) => {
	return (
		<a
			href={getArticleLink(article)}
			className='block group p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'
		>
			<div className='grid sm:grid-cols-3 gap-6 items-start'>
				<div className='sm:col-span-1'>
					<img
						className='w-full h-40 object-cover rounded-lg'
						src={article.image}
						alt={article.title}
					/>
				</div>
				<div className='sm:col-span-2'>
					<span className='inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full'>
						{article.type}
					</span>
					<h3 className='mt-2 text-xl font-bold text-gray-900 group-hover:text-blue-600'>
						{article.title}
					</h3>
					<p className='mt-2 text-base text-gray-600 line-clamp-2'>
						{article.summary}
					</p>
					<p className='mt-3 text-sm text-gray-500'>
						{new Date(article.published_date ?? '').toLocaleDateString()}
					</p>
				</div>
			</div>
		</a>
	)
}

export default ArticleCardMedium
