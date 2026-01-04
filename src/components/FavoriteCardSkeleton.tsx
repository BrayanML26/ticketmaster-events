export const FavoriteCardSkeleton = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-[32px] bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm">
            {/* Image Skeleton */}
            <div className="w-full md:w-48 h-48 flex-shrink-0 rounded-[28px] skeleton"></div>

            {/* Content Skeleton */}
            <div className="flex-grow space-y-4 w-full">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <div className="skeleton h-6 w-20 rounded-xl"></div>
                    <div className="skeleton h-6 w-24 rounded-xl"></div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <div className="skeleton h-7 w-full rounded"></div>
                    <div className="skeleton h-7 w-2/3 rounded"></div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center md:justify-start">
                    <div className="skeleton h-4 w-4 rounded-full mr-2"></div>
                    <div className="skeleton h-4 w-48 rounded"></div>
                </div>
            </div>

            {/* Heart Button Skeleton */}
            <div className="flex items-center gap-4">
                <div className="skeleton w-14 h-14 rounded-2xl"></div>
            </div>
        </div>
    );
};
