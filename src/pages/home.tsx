import {
	Hero,
	AboutSection,
	CategoriesSection,
	TestimonialsSection,
	CallToActionSection,
	LatestArticlesSection,
	FeaturedArticlesSection,
} from '@/components/home'

export function HomePage() {
	return (
		<>
			<Hero />
			<AboutSection />
			<FeaturedArticlesSection />
			<CategoriesSection />
			<TestimonialsSection />
			<CallToActionSection />
			<LatestArticlesSection />
		</>
	)
}
