import React, { useState, useEffect } from 'react'
import { Container } from '../components/shared/container'

export const PrivacyPolicyPage: React.FC = () => {
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
				<Container className={`transition-all duration-1500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`}>
					
					{/* Premium Badge */}
					<div className='mb-8 flex justify-center'>
						<div className='group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-600/30 to-red-500/20 border-2 border-red-500/50 backdrop-blur-xl shadow-2xl hover:border-red-400 transition-all duration-500'>
							<div className='w-3 h-3 bg-red-500 rounded-full mr-4 animate-ping'></div>
							<span className='text-red-400 font-bold text-sm uppercase tracking-widest'>Legal Document</span>
							<div className='w-3 h-3 bg-red-500 rounded-full ml-4 animate-ping' style={{animationDelay: '0.5s'}}></div>
						</div>
					</div>

					{/* Main Headline */}
					<div className='text-center mb-12'>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight'>
							<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
								Privacy Policy
							</span>
						</h1>
						<div className='relative max-w-3xl mx-auto'>
							<p className='text-lg sm:text-xl text-gray-300 font-light leading-relaxed'>
								Your privacy matters to us. Read how we protect and handle your data.
							</p>
						</div>
					</div>

					{/* Content Container */}
					<div className='max-w-4xl mx-auto'>
						<div className='group relative'>
							<div className='absolute -inset-6 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60'></div>
							<div className='relative p-8 lg:p-12 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-3xl border border-red-500/30 group-hover:border-red-400/60 transition-all duration-500 backdrop-blur-sm'>
								<div className='absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
								
								<div className='relative z-10 text-lg text-gray-300 space-y-6 leading-relaxed'>
									{/* Key Highlights Section */}
									<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
										{[
											{ icon: '🔒', title: 'Secure', description: 'Your data is protected' },
											{ icon: '🚫', title: 'No Selling', description: 'We never sell your info' },
											{ icon: '🔄', title: 'Updated', description: 'Policy stays current' }
										].map((highlight, index) => (
											<div key={index} className='group/item relative'>
												<div className='absolute -inset-2 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-2xl blur-lg group-hover/item:blur-xl transition-all duration-300 opacity-0 group-hover/item:opacity-100'></div>
												<div className='relative p-4 bg-gradient-to-br from-gray-800/40 to-gray-700/20 rounded-2xl border border-red-500/20 group-hover/item:border-red-400/40 transition-all duration-300 text-center'>
													<div className='text-2xl mb-2 transform group-hover/item:scale-110 transition-transform duration-300'>
														{highlight.icon}
													</div>
													<div className='text-sm font-bold text-red-400 mb-1'>
														{highlight.title}
													</div>
													<div className='text-xs text-gray-400'>
														{highlight.description}
													</div>
												</div>
											</div>
										))}
									</div>

									{/* Privacy Policy Content */}
									<div className='space-y-6'>
										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												Your privacy is important to us. This Privacy Policy explains how we
												collect, use, disclose, and safeguard your information when you visit
												our website.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												We collect information about you in a variety of ways, including
												personal data you provide directly to us and data collected
												automatically through your use of our site.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												The information we collect may be used to personalize your experience,
												improve our website, and provide customer service. We do not sell or
												rent your personal information to third parties.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												We implement a variety of security measures to maintain the safety of
												your personal information. However, no method of transmission over the
												Internet or method of electronic storage is 100% secure.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												We may update this Privacy Policy from time to time in order to
												reflect changes to our practices or for other operational, legal, or
												regulatory reasons.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												By using our website, you hereby consent to our Privacy Policy and
												agree to its terms.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												We strive to keep your information accurate and up to date. If you
												notice any inaccuracies in your personal data, please let us know so
												we can make the necessary corrections.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												Our website may contain features or services provided by third
												parties. Any information you provide to these third-party services is
												subject to their privacy policies, not ours.
											</p>
										</div>

										<div className='group/para hover:bg-red-500/5 p-4 rounded-2xl transition-all duration-300 border border-transparent hover:border-red-500/20'>
											<p className='group-hover/para:text-gray-200 transition-colors duration-300'>
												We are committed to protecting the privacy of children. Our services
												are not intended for individuals under the age of 13, and we do not
												knowingly collect personal information from children under 13.
											</p>
										</div>
									</div>

									{/* Contact Section */}
									<div className='mt-12 pt-8 border-t border-red-500/20'>
										<div className='text-center'>
											<h3 className='text-xl font-bold text-white mb-4'>
												Questions about our Privacy Policy?
											</h3>
											<p className='text-gray-400 mb-6'>
												If you have any questions or concerns, don't hesitate to reach out to us.
											</p>
											<a
												href='/contacts'
												className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-400'
											>
												Contact Us
												<svg className='ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Trust Indicators */}
					<div className='mt-16 pt-8 border-t border-red-500/20 text-center'>
						<p className='text-gray-500 text-sm mb-4'>Last updated: {new Date().toLocaleDateString()}</p>
						<div className='flex justify-center items-center space-x-8 opacity-60'>
							{['🔒 GDPR Compliant', '🛡️ Data Protected', '📋 Regularly Updated', '⚖️ Legally Verified'].map((trust, index) => (
								<div key={index} className='text-gray-400 text-xs font-medium hover:text-red-400 transition-colors duration-300'>
									{trust}
								</div>
							))}
						</div>
					</div>
				</Container>
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
