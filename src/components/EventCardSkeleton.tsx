export const EventCardSkeleton = () => {
    return (
        <article className="bg-white dark:bg-card-dark rounded-[24px] shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col h-full">
            {/* Image Container with Badges */}
            <div className="relative h-60 skeleton">
                {/* Date Badge Skeleton */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-black/80 backdrop-blur-sm rounded-xl px-3.5 py-1.5 w-16 h-16">
                    <div className="skeleton h-2 w-8 mx-auto mb-1"></div>
                    <div className="skeleton h-6 w-10 mx-auto"></div>
                </div>

                {/* Category Badge Skeleton */}
                <div className="absolute top-4 left-4">
                    <div className="skeleton h-6 w-20 rounded-lg"></div>
                </div>
            </div>

            <div className="p-7 flex-grow flex flex-col">
                {/* Title Skeleton */}
                <div className="mb-3 space-y-2">
                    <div className="skeleton h-6 w-full rounded"></div>
                    <div className="skeleton h-6 w-3/4 rounded"></div>
                </div>

                {/* Location Skeleton */}
                <div className="flex items-center mb-6">
                    <div className="skeleton h-4 w-4 rounded-full mr-2"></div>
                    <div className="skeleton h-4 w-48 rounded"></div>
                </div>

                {/* Footer Skeleton */}
                <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                        <div className="skeleton h-3 w-12 rounded"></div>
                        <div className="skeleton h-5 w-16 rounded"></div>
                    </div>
                    <div className="skeleton h-4 w-24 rounded"></div>
                </div>
            </div>
        </article>
    );
};
