import { articlesService } from '@/services/articles.service'
import { useQuery } from '@tanstack/react-query'
import slugify from 'slugify'

export function useGetArticles() {
	return useQuery({
		queryKey: ['all articles'],
		queryFn: async () => {
			return await articlesService.getAll()
		},
	})
}

export function useGetArticlesByType(type: string) {
	return useQuery({
		queryKey: ['articles', type],
		queryFn: async () => {
			const articles = await articlesService.getAll()
			return articles?.filter(article => article.type === type)
		},
	})
}

export function useGetArticleBySlug(slug: string) {
	return useQuery({
		queryKey: ['article', slug],
		queryFn: async () => {
			const articles = await articlesService.getAll()
			return articles?.find(article => slugify(article.title) === slug) || null
		},
	})
}

export function useGetArticleById(id: number) {
	return useQuery({
		queryKey: ['article', id],
		queryFn: async () => {
			const articles = await articlesService.getAll()
			return articles?.find(article => article.id === id) || null
		},
	})
}
