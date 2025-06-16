import { emailService } from '@/services/email.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderIcon, SendIcon } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Please enter a valid email address'),
	subject: z.string().min(5, 'Subject must be at least 5 characters'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof formSchema>

type ColorVariant =
	| 'amber'
	| 'rose'
	| 'blue'
	| 'green'
	| 'purple'
	| 'pink'
	| 'neutral'

interface ContactFormProps {
	color?: ColorVariant
}

const colorClasses = {
	amber: {
		focus: 'focus:border-amber-500 focus:ring-amber-500',
		button: 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500',
	},
	rose: {
		focus: 'focus:border-rose-500 focus:ring-rose-500',
		button: 'bg-rose-600 hover:bg-rose-700 focus:ring-rose-500',
	},
	blue: {
		focus: 'focus:border-blue-500 focus:ring-blue-500',
		button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
	},
	green: {
		focus: 'focus:border-green-500 focus:ring-green-500',
		button: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
	},
	purple: {
		focus: 'focus:border-purple-500 focus:ring-purple-500',
		button: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500',
	},
	pink: {
		focus: 'focus:border-pink-500 focus:ring-pink-500',
		button: 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500',
	},
	neutral: {
		focus: 'focus:border-neutral-500 focus:ring-neutral-500',
		button: 'bg-neutral-600 hover:bg-neutral-700 focus:ring-neutral-500',
	},
}

export function ContactForm({ color = 'blue' }: ContactFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitSuccess, setSubmitSuccess] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true)
		emailService.sendEmail(data, {
			successCallback: () => {
				setIsSubmitting(false)
				setSubmitSuccess(true)
				reset()
			},
			errorCallback: () => {
				setIsSubmitting(false)
				alert('Oops! Something went wrong. Please try again later')
			},
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-6 p-8'>
			{submitSuccess && (
				<div className='rounded-xl bg-green-50 p-4 mb-6 border border-green-200'>
					<div className='flex'>
						<div className='flex-shrink-0'>
							<svg
								className='h-5 w-5 text-green-500'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
						<div className='ml-3'>
							<p className='text-base font-medium text-green-800'>
								Thank you! Your message has been sent successfully.
							</p>
						</div>
					</div>
				</div>
			)}

			<div>
				{' '}
				<label
					htmlFor='name'
					className='block text-base font-medium text-gray-900 mb-2'
				>
					Your Name
				</label>
				<input
					{...register('name')}
					type='text'
					id='name'
					placeholder='Enter your name'
					className={`mt-1 block w-full rounded-xl border-gray-200 p-3 shadow-sm 
						${colorClasses[color].focus}
						bg-gray-50 hover:bg-white transition-colors`}
				/>{' '}
				{errors.name && (
					<p className='mt-2 text-sm text-red-600'>{errors.name.message}</p>
				)}
			</div>

			<div>
				<label
					htmlFor='email'
					className='block text-base font-medium text-gray-900 mb-2'
				>
					Email Address
				</label>
				<input
					{...register('email')}
					type='email'
					id='email'
					placeholder='Enter your email address'
					className={`mt-1 block w-full rounded-xl border-gray-200 p-3 shadow-sm 
						${colorClasses[color].focus}
						bg-gray-50 hover:bg-white transition-colors`}
				/>{' '}
				{errors.email && (
					<p className='mt-2 text-sm text-red-600'>{errors.email.message}</p>
				)}
			</div>

			<div>
				<label
					htmlFor='subject'
					className='block text-base font-medium text-gray-900 mb-2'
				>
					Subject
				</label>
				<input
					{...register('subject')}
					type='text'
					id='subject'
					placeholder='What would you like to discuss?'
					className={`mt-1 block w-full rounded-xl border-gray-200 p-3 shadow-sm 
						${colorClasses[color].focus}
						bg-gray-50 hover:bg-white transition-colors`}
				/>{' '}
				{errors.subject && (
					<p className='mt-2 text-sm text-red-600'>{errors.subject.message}</p>
				)}
			</div>

			<div>
				<label
					htmlFor='message'
					className='block text-base font-medium text-gray-900 mb-2'
				>
					Message
				</label>
				<textarea
					{...register('message')}
					id='message'
					placeholder='Share your thoughts or questions with us...'
					className={`mt-1 block w-full rounded-xl min-h-[200px] border-gray-200 p-3 shadow-sm 
						${colorClasses[color].focus}
						bg-gray-50 hover:bg-white transition-colors`}
				/>{' '}
				{errors.message && (
					<p className='mt-2 text-sm text-red-600'>{errors.message.message}</p>
				)}
			</div>

			<div className='pt-4'>
				{' '}
				<button
					type='submit'
					disabled={isSubmitting}
					className={`w-full flex justify-center gap-3 items-center py-3 px-4 
						border border-transparent rounded-xl shadow-sm text-base font-medium 
						text-white ${colorClasses[color].button} transition-colors
						focus:outline-none focus:ring-2 focus:ring-offset-2
						disabled:opacity-50 disabled:cursor-not-allowed`}
				>
					{isSubmitting ? (
						<>
							<LoaderIcon className='animate-spin' />
							<span>Sending...</span>
						</>
					) : (
						<>
							<SendIcon />
							<span>Send Message</span>
						</>
					)}
				</button>
			</div>
		</form>
	)
}
