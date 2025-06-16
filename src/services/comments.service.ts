import { supabase } from '@/lib/supabase'
import type { IComment } from '@/types/interfaces'
import { articlesService } from './articles.service'

class CommentsService {
	async addComment(
		articleId: number,
		comment: Omit<IComment, 'date'>
	): Promise<{ data: IComment | null; error: any }> {
		const article = (await articlesService.getAll())?.find(
			a => a.id === articleId
		)

		if (!article) throw new Error()

		const newComment = {
			...comment,
			date: new Date().toISOString(),
			article_id: articleId,
		}

		const comments = [...(article.comments || []), newComment]

		const { error } = await supabase
			.from('justkit_articles')
			.update({ comments })
			.eq('id', articleId)
			.select()
			.single()

		if (error) throw error

		return {
			data: newComment,
			error: null,
		}
	}
}

export const commentsService = new CommentsService()
