import { customMarkdown } from '@/lib/utils'
import { type IArticle } from '@/types/interfaces'

interface ArticleArticleProps {
	article: IArticle
}

export function ArticleContent({ article }: ArticleArticleProps) {
	return (
		<div className='mb-12 bg-white rounded-lg shadow-md border border-gray-200'>
			<div
				className='max-w-none text-xl mt-5 border` border-neutral-200 rounded-xl p-6 shadow-lg text-justify [&_a]:text-blue-600 [&_a]:hover:underline'
				style={{ lineHeight: 1.8 }}
				dangerouslySetInnerHTML={{
					__html: customMarkdown(article.content),
				}}
			/>
		</div>
	)
}
