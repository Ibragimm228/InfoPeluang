'use client'

import { commentsService } from '@/services/comments.service'
import type { IArticle, IComment } from '@/types/interfaces'
import { useState } from 'react'

interface ArticleCommentsProps {
	article: IArticle
}

export function ArticleComments({ article }: ArticleCommentsProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [newComment, setNewComment] = useState({ name: '', text: '' })
	const [comments, setComments] = useState<IComment[]>(article.comments || [])

	const handleCommentSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			await commentsService.addComment(article.id, {
				name: newComment.name,
				text: newComment.text,
			})
			setNewComment({ name: '', text: '' })
			setComments(prev => [
				...prev,
				{
					name: newComment.name,
					text: newComment.text,
					date: new Date().toISOString(),
				},
			])
		} catch (error) {
			console.error('Failed to add comment:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<>
			<div className='mb-12 bg-white p-6 rounded-lg shadow-md border border-gray-200'>
				<h2 className='text-2xl font-bold text-gray-900 mb-6'>Comments</h2>

				{/* Comment Form */}
				<form onSubmit={handleCommentSubmit} className='mb-8'>
					<div className='space-y-4'>
						<input
							type='text'
							placeholder='Your name'
							value={newComment.name}
							onChange={e =>
								setNewComment(prev => ({ ...prev, name: e.target.value }))
							}
							className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
							required
						/>
						<textarea
							placeholder='Write a comment...'
							value={newComment.text}
							onChange={e =>
								setNewComment(prev => ({ ...prev, text: e.target.value }))
							}
							className='w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]'
							required
						/>
						<button
							type='submit'
							disabled={isSubmitting}
							className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50'
						>
							{isSubmitting ? 'Posting...' : 'Post Comment'}
						</button>
					</div>
				</form>

				{/* Comments List */}
				<div className='space-y-6'>
					{comments.map((comment: IComment, index: number) => (
						<div key={index} className='bg-gray-50 p-6 rounded-lg'>
							<div className='flex items-center gap-2 mb-2'>
								<span className='font-medium text-gray-900'>
									{comment.name}
								</span>
								<span className='text-gray-500 text-sm'>
									{new Date(comment.date).toLocaleDateString()}
								</span>
							</div>
							<p className='text-gray-700'>{comment.text}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
