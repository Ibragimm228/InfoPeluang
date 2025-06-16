const ArticleCardSmallSkeleton: React.FC = () => {
	return (
		<div className='block'>
			<div className='overflow-hidden rounded-lg shadow-lg bg-gray-200 animate-pulse'>
				<div className='w-full h-48 bg-gray-300' />
			</div>
			<div className='mt-4'>
				<span className='inline-block bg-gray-200 text-xs font-semibold px-2 py-1 rounded-full w-16 h-5 animate-pulse'></span>
				<div className='mt-2 bg-gray-200 h-5 w-3/4 rounded animate-pulse'></div>
				<div className='mt-2 bg-gray-200 h-4 w-1/4 rounded animate-pulse'></div>
			</div>
		</div>
	)
}

export default ArticleCardSmallSkeleton
