const ArticleCardMediumSkeleton: React.FC = () => {
	return (
		<div className='block p-6 rounded-lg shadow-lg'>
			<div className='grid sm:grid-cols-3 gap-6 items-start'>
				<div className='sm:col-span-1'>
					<div className='w-full h-40 bg-gray-300 rounded-lg animate-pulse' />
				</div>
				<div className='sm:col-span-2'>
					<span className='inline-block bg-gray-200 text-xs font-semibold px-2 py-1 rounded-full w-16 h-5 animate-pulse'></span>
					<div className='mt-2 bg-gray-200 h-6 w-3/4 rounded animate-pulse'></div>
					<div className='mt-2 bg-gray-200 h-4 w-full rounded animate-pulse'></div>
					<div className='mt-1 bg-gray-200 h-4 w-5/6 rounded animate-pulse'></div>
					<div className='mt-3 bg-gray-200 h-4 w-1/4 rounded animate-pulse'></div>
				</div>
			</div>
		</div>
	)
}

export default ArticleCardMediumSkeleton
