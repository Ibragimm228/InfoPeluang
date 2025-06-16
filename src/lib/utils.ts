import type { IArticle } from '@/types/interfaces'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import slugify from 'slugify'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getArticleLink(article: IArticle | null | undefined) {
	if (!article) return ''
	return `/articles/${slugify(article.title)}`
}

export function customMarkdown(content: string) {
	if (!content) return ''

	return content
		.replace(/^# (.*$)/gm, '<h1>$1</h1>')
		.replace(/^## (.*$)/gm, '<h2>$1</h2>')
		.replace(/^### (.*$)/gm, '<h3>$1</h3>')
		.replace(
			/\*\*(.*?)\*\*/g,
			'<strong style="font-size: 30px; font-weight: 700;">$1</strong>'
		)
		.replace(/\*(.*?)\*/g, '<em>$1</em>')
		.replace(
			/\[(.*?)\]\((.*?)\)/g,
			'<a href="$2" target="_blank" rel="noopener">$1</a>'
		)
		.replace(
			/<img>(.*?)<\/img>/g,
			'<img src="$1" style="width: 70%; height: 100 %" loading="lazy" class="article-image-content" />'
		)
		.split('\n')
		.map(line => (line.trim() === '' ? '<br/>' : `<p>${line}</p>`))
		.join('')
}
