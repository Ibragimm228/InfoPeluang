import { useState, useEffect } from 'react'
import { ContactForm } from '../components/shared/contact-form'

export function ContactsPage() {
	const [isVisible, setIsVisible] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	useEffect(() => {
		setIsVisible(true)
		
		const handleMouseMove = (e: globalThis.MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY })
		}
		
		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return (
		<section className='relative min-h-screen bg-black overflow-hidden'>
			{/* Dynamic Background Elements */}
			<div className='absolute inset-0'>
				{/* Animated Geometric Patterns */}
				<div className='absolute inset-0 opacity-20'>
					<div 
						className='absolute w-full h-full'
						style={{
							background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15) 0%, transparent 50%)`,
							transition: 'background 0.3s ease'
						}}
					></div>
				</div>
				
				{/* Floating Red Elements */}
				<div className='absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-red-500/30 to-red-600/10 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-red-600/20 to-red-400/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
				<div className='absolute top-1/2 left-1/3 w-48 h-48 bg-red-500/10 rounded-full blur-2xl animate-pulse' style={{animationDelay: '4s'}}></div>
				
				{/* Animated Lines */}
				<div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/40 to-transparent transform -skew-x-12'></div>
				<div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400/30 to-transparent transform skew-x-12'></div>
				<div className='absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent'></div>
				
				{/* Grid Pattern */}
				<div className='absolute inset-0 opacity-5'>
					<div className='w-full h-full' style={{
						backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.5) 1px, transparent 1px),
						                   linear-gradient(90deg, rgba(239, 68, 68, 0.5) 1px, transparent 1px)`,
						backgroundSize: '100px 100px',
						animation: 'grid-drift 30s linear infinite'
					}}></div>
				</div>
			</div>

			{/* Main Content Container */}
			<div className='relative z-20 py-12'>
				<div className='container mx-auto px-4'>
					<div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
						
						{/* Premium Badge */}
						<div className='mb-8 flex justify-center'>
							<div className='group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600/30 to-red-500/20 border-2 border-red-500/50 backdrop-blur-xl shadow-2xl hover:border-red-400 transition-all duration-500'>
								<div className='w-3 h-3 bg-red-500 rounded-full mr-4 animate-ping'></div>
								<span className='text-red-400 font-bold text-sm uppercase tracking-widest'>Contact Center</span>
								<div className='w-3 h-3 bg-red-500 rounded-full ml-4 animate-ping' style={{animationDelay: '0.5s'}}></div>
							</div>
						</div>

						{/* Main Headline */}
						<div className='text-center mb-12'>
							<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight'>
								<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
									Get in Touch
								</span>
							</h1>
							<div className='relative max-w-3xl mx-auto'>
								<p className='text-lg sm:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed'>
									We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
								</p>
							</div>
						</div>

						{/* Contact Grid */}
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
							
							{/* Image Section */}
							<div className='group relative'>
								<div className='absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60'></div>
								<div className='relative p-2 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-500 backdrop-blur-sm overflow-hidden'>
									<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
									<img
										src='https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400'
										alt='Contact Us'
										className='rounded-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-700 shadow-2xl'
									/>
									<div className='absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors duration-500'></div>
								</div>
							</div>

							{/* Form Section */}
							<div className='group relative'>
								<div className='absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60'></div>
								<div className='relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-500 backdrop-blur-sm'>
									<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
									<div className='relative z-10'>
										<div className='mb-6'>
											<h3 className='text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300'>
												Send us a message
											</h3>
											<p className='text-gray-400 text-sm'>
												Fill out the form and we'll get back to you within 24 hours
											</p>
										</div>
										<ContactForm />
									</div>
								</div>
							</div>
						</div>

						{/* Contact Information */}
						<div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
							{[
								{
									icon: '📧',
									title: 'Email Us',
									description: 'Send us an email anytime',
									info: 'hello@InfoPeluang.com'
								},
								{
									icon: '📞',
									title: 'Call Us',
									description: 'Mon-Fri from 8am to 5pm',
									info: '+1 (555) 123-4567'
								},
								{
									icon: '📍',
									title: 'Visit Us',
									description: 'Come say hello at our office',
									info: '123 Business Ave, City'
								}
							].map((contact, index) => (
								<div key={index} className='group relative'>
									<div className='absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100'></div>
									<div className='relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-500 backdrop-blur-sm text-center'>
										<div className='text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300'>
											{contact.icon}
										</div>
										<h3 className='text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300'>
											{contact.title}
										</h3>
										<p className='text-gray-400 text-sm mb-2'>
											{contact.description}
										</p>
										<p className='text-red-400 font-medium text-sm'>
											{contact.info}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Trust Indicators */}
						<div className='mt-16 pt-8 border-t border-red-500/20 text-center'>
							<p className='text-gray-500 text-sm mb-4'>We respond to all inquiries within 24 hours</p>
							<div className='flex justify-center items-center space-x-8 opacity-60'>
								{['🔒 Secure Communication', '⚡ Fast Response', '🎯 Professional Support', '📊 Trusted by Thousands'].map((trust, index) => (
									<div key={index} className='text-gray-400 text-xs font-medium hover:text-red-400 transition-colors duration-300'>
										{trust}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Custom CSS for Animations */}
			<style>{`
				@keyframes grid-drift {
					0% { transform: translate(0, 0) rotate(0deg); }
					33% { transform: translate(30px, -30px) rotate(1deg); }
					66% { transform: translate(-20px, 20px) rotate(-1deg); }
					100% { transform: translate(0, 0) rotate(0deg); }
				}
				
				@keyframes pulse {
					0%, 100% { opacity: 0.4; }
					50% { opacity: 0.8; }
				}
			`}</style>
		</section>
	)
}
