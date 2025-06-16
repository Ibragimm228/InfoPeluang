import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	if (!isVisible) {
		return null
	}

	return (
		<button
			onClick={scrollToTop}
			className='fixed bottom-8 right-8 p-3 bg-primary text-blue-500 bg-white cursor-pointer rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50'
			aria-label='Scroll to top'
		>
			<ArrowUp className='w-6 h-6' />
		</button>
	)
}
