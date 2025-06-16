import { Container } from '../components/shared/container'
import { useState } from 'react'

export function AboutPage() {
	const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null)

	const teamMembers = [
		{
			name: "Marcus Chen",
			role: "Business Strategy Expert",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
			description: "With over 15 years in franchise development and business consulting, Marcus specializes in identifying high-potential investment opportunities and strategic partnerships."
		},
		{
			name: "Sarah Williams", 
			role: "Investment Analyst",
			image: "https://assets.unileversolutions.com/v1/134103152.jpg",
			description: "Sarah brings deep expertise in market analysis and venture capital. She helps connect entrepreneurs with the right investors and funding opportunities."
		},
		{
			name: "David Rodriguez",
			role: "Entrepreneurship Mentor",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face", 
			description: "A serial entrepreneur with multiple successful exits, David provides mentorship and guidance to help aspiring business owners navigate their journey to success."
		}
	]

	const features = [
		{
			icon: "🎯",
			title: "Verified Opportunities",
			description: "All business opportunities are thoroughly vetted by our expert team to ensure legitimacy and potential for success."
		},
		{
			icon: "🤝", 
			title: "Strategic Partnerships",
			description: "Connect with reliable suppliers, distributors, and business partners to scale your venture effectively."
		},
		{
			icon: "📊",
			title: "Market Intelligence",
			description: "Access comprehensive market research and industry insights to make informed business decisions."
		},
		{
			icon: "💡",
			title: "Innovation Hub",
			description: "Discover cutting-edge business models and emerging market trends before your competition."
		}
	]

	return (
		<div className='min-h-screen bg-black'>
			{/* Hero Section */}
			<section className='relative py-24 sm:py-32 bg-black overflow-hidden'>
				{/* Background Elements */}
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent'></div>
					<div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent'></div>
					<div className='absolute top-20 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl animate-pulse'></div>
					<div className='absolute bottom-20 left-20 w-40 h-40 bg-red-600/10 rounded-full blur-xl animate-pulse' style={{animationDelay: '2s'}}></div>
				</div>

				<Container className='relative z-10'>
					<div className='text-center mb-16'>
						<div className='inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 text-red-400 font-bold text-sm uppercase tracking-wider mb-6'>
							<div className='w-2 h-2 bg-red-500 rounded-full mr-3 animate-ping'></div>
							About Our Platform
						</div>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight'>
							Welcome to
							<span className='block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent'>
								InfoPeluangUsaha.com
							</span>
						</h1>
						<p className='max-w-4xl mx-auto text-xl sm:text-2xl text-gray-300 leading-relaxed'>
							Your premier destination for discovering exceptional business opportunities and building strategic partnerships. 
							This premium portal is designed for ambitious entrepreneurs seeking verified business prospects.
						</p>
					</div>
				</Container>
			</section>

			{/* Mission Section */}
			<section className='py-20 bg-gradient-to-br from-gray-900/50 to-gray-800/30'>
				<Container>
					<div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'>
						<div className='mb-12 lg:mb-0'>
							<h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
								Our Mission & Vision
							</h2>
							<div className='space-y-6'>
								<p className='text-lg text-gray-300 leading-relaxed'>
									At InfoPeluangUsaha.com, we empower ambitious entrepreneurs by providing access to verified business 
									opportunities, strategic partnerships, and comprehensive market intelligence. Our platform connects 
									serious business minds with the resources they need to succeed.
								</p>
								<p className='text-lg text-gray-300 leading-relaxed'>
									Register as our member for free and maximize the valuable information available here. You can post 
									in our web catalog, share entrepreneurial knowledge through articles, and connect with agents, 
									distributors, and investors who can accelerate your business growth.
								</p>
								<div className='grid grid-cols-2 gap-6 mt-8'>
									<div className='text-center'>
										<div className='text-3xl font-black text-red-500 mb-2'>15+</div>
										<div className='text-gray-400 text-sm'>Years of Excellence</div>
									</div>
									<div className='text-center'>
										<div className='text-3xl font-black text-red-500 mb-2'>10K+</div>
										<div className='text-gray-400 text-sm'>Success Stories</div>
									</div>
								</div>
							</div>
						</div>
						<div className='relative group'>
							<div className='absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
							<div className='relative overflow-hidden rounded-3xl border border-red-500/30'>
								<img
									className='w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700'
									src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
									alt='Business strategy meeting'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'></div>
								<div className='absolute bottom-6 left-6 right-6'>
									<h4 className='text-white font-bold text-xl mb-2'>
										Strategic Business Planning
									</h4>
									<p className='text-gray-300 text-sm'>
										Comprehensive approach to business development and growth
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* Features Section */}
			<section className='py-20 bg-black'>
				<Container>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
							Why Choose Our Platform?
						</h2>
						<p className='max-w-3xl mx-auto text-lg text-gray-300'>
							We provide a comprehensive ecosystem where serious entrepreneurs can discover verified business 
							opportunities and access proven strategies for sustainable growth.
						</p>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{features.map((feature, index) => (
							<div
								key={index}
								className='group p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm'
							>
								<div className='text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300'>
									{feature.icon}
								</div>
								<h3 className='text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300'>
									{feature.title}
								</h3>
								<p className='text-gray-300 text-sm leading-relaxed'>
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Team Section */}
			<section className='py-20 bg-gradient-to-br from-gray-900/30 to-gray-800/10'>
				<Container>
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
							Meet Our Expert Team
						</h2>
						<p className='max-w-3xl mx-auto text-lg text-gray-300'>
							Our dedicated team of business experts, analysts, and mentors brings decades of combined experience 
							in entrepreneurship, investment, and strategic business development.
						</p>
					</div>
					
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className='group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm cursor-pointer'
								onMouseEnter={() => setHoveredTeamMember(index)}
								onMouseLeave={() => setHoveredTeamMember(null)}
							>
								<div className={`absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 rounded-3xl transition-opacity duration-300 ${
									hoveredTeamMember === index ? 'opacity-100' : 'opacity-0'
								}`}></div>
								
								<div className='relative z-10 text-center'>
									<div className='relative mb-6 mx-auto w-24 h-24'>
										<div className={`absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300 ${
											hoveredTeamMember === index ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
										}`}></div>
										<img
											src={member.image}
											alt={member.name}
											className='relative z-10 w-full h-full rounded-full object-cover border-2 border-red-400/50'
										/>
									</div>
									<h3 className='text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300'>
										{member.name}
									</h3>
									<p className='text-red-400 font-semibold mb-4 text-sm uppercase tracking-wider'>
										{member.role}
									</p>
									<p className='text-gray-300 text-sm leading-relaxed'>
										{member.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-black'>
				<Container>
					<div className='text-center'>
						<h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
							Ready to Start Your Business Journey?
						</h2>
						<p className='max-w-3xl mx-auto text-lg text-gray-300 mb-12'>
							Join thousands of successful entrepreneurs who have discovered their next big opportunity through our platform. 
							Register for free and gain access to exclusive business prospects and strategic partnerships.
						</p>
						<div className='inline-flex flex-col sm:flex-row gap-6'>
							<a
								href='/contacts'
								className='group px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 hover:from-red-500 hover:to-red-400 border border-red-400/30'
							>
								<span className='relative z-10'>Join Our Network</span>
							</a>
							<a
								href='/opportunities'
								className='group px-10 py-4 bg-transparent border-2 border-red-500 text-red-400 font-bold text-lg rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25'
							>
								Explore Opportunities
							</a>
						</div>
					</div>
				</Container>
			</section>
		</div>
	)
}