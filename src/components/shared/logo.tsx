import { cn } from '@/lib/utils'
import { MessageSquare } from 'lucide-react'
import { Link } from 'react-router'

export function Logo({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
	return (
		<Link to='/' className='flex items-center gap-2 no-underline'>
			<MessageSquare size={32} className='text-blue-600' />
			<span
				className={cn(
					'text-2xl font-bold',
					variant === 'dark' ? 'text-black' : 'text-white'
				)}
			>
				Just Ask Kit
			</span>
		</Link>
	)
}
