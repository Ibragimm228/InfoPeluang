import { type IArticle } from '@/types/interfaces'
import { Calendar, Clock, MessageCircle, User } from 'lucide-react'

interface ArticleHeaderProps {
	article: IArticle
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
	return (
		<header className='mb-12'>
			<h1 className='text-4xl font-bold text-gray-900 mb-6'>{article.title}</h1>

			<div className='flex items-center gap-6 text-gray-600 mb-8 max-sm:flex-col max-sm:items-start'>
				{article.author && (
					<div className='flex items-center gap-2'>
						<User size={18} />
						<span>{article.author}</span>
					</div>
				)}
				{article.published_date && (
					<div className='flex items-center gap-2'>
						<Calendar size={18} />
						<span>{article.published_date}</span>
					</div>
				)}
				{article.reading_time && (
					<div className='flex items-center gap-2'>
						<Clock size={18} />
						<span>{article.reading_time} read</span>
					</div>
				)}
				{article.comments && (
					<div className='flex items-center gap-2'>
						<MessageCircle size={18} />
						<span>{article.comments.length} comments</span>
					</div>
				)}
			</div>

			{article.image && (
				<div className='relative w-full h-[400px] mb-8 rounded-xl overflow-hidden'>
					<img
						src={article.image}
						alt={article.title}
						className='object-cover w-full h-full'
					/>
				</div>
			)}
		</header>
	)
}
