import React, { useRef, useState, useMemo } from 'react';
import { useUIStore } from '../../state/useUIStore';
import { useEventsQuery } from '../../hooks/useEventsQuery';
import { EventCard } from '../../components/EventCard';
import { EventCardSkeleton } from '../../components/EventCardSkeleton';
import { startOfDay, endOfDay, endOfWeek, format } from 'date-fns';


const CATEGORIES = [
    { label: 'Categories', value: '' },
    { label: 'Music', value: 'Music' },
    { label: 'Sports', value: 'Sports' },
    { label: 'Arts & Theatre', value: 'Arts & Theatre' },
    { label: 'Family', value: 'Family' },
];

const Home = () => {
    const { searchTerm, setSearchTerm, favorites, toggleFavorite } = useUIStore();
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [dateFilter, setDateFilter] = useState<'all' | 'today' | 'week'>('all');

    // Calculate date buffers for filters
    const dateParams = useMemo(() => {
        if (dateFilter === 'today') {
            const start = startOfDay(new Date());
            const end = endOfDay(new Date());
            return {
                start: format(start, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
                end: format(end, "yyyy-MM-dd'T'HH:mm:ss'Z'")
            };
        }
        if (dateFilter === 'week') {
            const start = startOfDay(new Date());
            const end = endOfWeek(new Date(), { weekStartsOn: 1 });
            return {
                start: format(start, "yyyy-MM-dd'T'HH:mm:ss'Z'"),
                end: format(end, "yyyy-MM-dd'T'HH:mm:ss'Z'")
            };
        }
        return { start: undefined, end: undefined };
    }, [dateFilter]);

    const {
        data,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useEventsQuery(searchTerm, selectedCategory, dateParams.start, dateParams.end);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchInputRef.current) {
            setSearchTerm(searchInputRef.current.value);
        }
    };

    const allEvents = data?.pages.flatMap(page => page._embedded?.events || []) || [];

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-[#111827]">
            {/* Hero Section */}
            <header className="relative bg-black h-[550px] md:h-[650px] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        alt="Event Background"
                        className="w-full h-full object-cover opacity-50"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBULDwlheQreNT4hq0qdzg3Y9H_B0CGuvDbOYEv_7ko1b2mag6SYn-HH-sR6huaTq4sKaSKIzMv_FMRFnT3CcemOsz9W1IbXHH6empwFmnkXxzjX7yNTW6ZSzGX66tH2dS-ha4cJ3ZmT_EwoFCtf77m3GOgOMz8tcQLsGLx-ANSxNHxKQlhlrksLzaYiqGuwI_YArruwKrI_07b_r8ATF74tdcMoI4lZ1HkuUXtFKjqYYWtWH8elPXZeHLXBHQtJcZksiWhOxNN48"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#111827] via-transparent to-black/20"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
                    <div className="space-y-4">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-[#7C3AED]/20 backdrop-blur-md border border-[#7C3AED]/40 text-white text-[11px] font-black tracking-widest uppercase mb-2">
                            DISCOVER YOUR CITY
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-2xl max-w-4xl mx-auto leading-[1.1]">
                            Experience unforgettable moments.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium opacity-90">
                            Explore the best concerts, festivals, theatre, and sports events near you.
                        </p>
                    </div>

                    {/* Search Box - Categoría Restored */}
                    <div className="max-w-5xl mx-auto mt-12 px-2">
                        <form
                            onSubmit={handleSearch}
                            className="bg-white dark:bg-card-dark rounded-2xl md:rounded-full p-2 md:p-1.5 shadow-2xl flex flex-col md:flex-row items-center border border-gray-100 dark:border-gray-800"
                        >
                            <div className="flex-1 w-full relative group">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                                </div>
                                <input
                                    ref={searchInputRef}
                                    defaultValue={searchTerm}
                                    className="block w-full pl-12 pr-4 py-4 md:py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none text-sm font-medium"
                                    placeholder="Search artist, event or venue"
                                    type="text"
                                    aria-label="Search events"
                                />
                            </div>

                            <div className="search-divider"></div>

                            {/* Category Field - BACK */}
                            <div className="w-full md:w-auto md:min-w-[180px] relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400">category</span>
                                </div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="block w-full pl-11 pr-10 py-4 md:py-3 bg-transparent text-gray-900 dark:text-white focus:outline-none text-sm font-medium appearance-none cursor-pointer"
                                    aria-label="Select category"
                                >
                                    {CATEGORIES.map((cat) => (
                                        <option key={cat.value} className="text-gray-900" value={cat.value}>{cat.label}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400 text-sm">expand_more</span>
                                </div>
                            </div>

                            <div className="search-divider"></div>

                            <div className="w-full md:w-auto md:min-w-[180px] relative">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400">location_on</span>
                                </div>
                                <select
                                    className="block w-full pl-11 pr-10 py-4 md:py-3 bg-transparent text-gray-900 dark:text-white focus:outline-none text-sm font-medium appearance-none cursor-pointer"
                                    aria-label="Select location"
                                >
                                    <option className="text-gray-900">Location</option>
                                    <option className="text-gray-900">Mexico City</option>
                                    <option className="text-gray-900">Guadalajara</option>
                                    <option className="text-gray-900">Monterrey</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <span className="material-icons text-gray-400 text-sm">expand_more</span>
                                </div>
                            </div>

                            <div className="w-full md:w-auto p-1">
                                <button type="submit" className="w-full md:w-auto btn-primary !rounded-xl md:!rounded-full px-10">
                                    Explore
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">Featured Events</h2>
                        <p className="text-gray-500 font-medium">Don't miss the most popular events of this season.</p>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 p-1 rounded-xl border border-gray-100 dark:border-gray-800">
                        <button
                            onClick={() => setDateFilter('today')}
                            className={`px-5 py-2 text-sm font-bold transition-colors rounded-lg ${dateFilter === 'today' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            Today
                        </button>
                        <button
                            onClick={() => setDateFilter('week')}
                            className={`px-5 py-2 text-sm font-bold transition-colors rounded-lg ${dateFilter === 'week' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            This Week
                        </button>
                        <button
                            onClick={() => setDateFilter('all')}
                            className={`px-5 py-2 text-sm font-bold transition-colors rounded-lg ${dateFilter === 'all' ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
                        >
                            View All
                        </button>
                    </div>
                </div>

                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <EventCardSkeleton key={index} />
                        ))}
                    </div>
                ) : isError ? (
                    <div className="text-center py-32 space-y-4">
                        <p className="text-gray-400 font-medium">Could not connect to the database.</p>
                        <button onClick={() => window.location.reload()} className="btn-primary mx-auto">Retry</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {allEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                isLiked={favorites.includes(event.id)}
                                onToggleLike={toggleFavorite}
                            />
                        ))}
                    </div>
                )}

                {hasNextPage && (
                    <div className="text-center pt-16">
                        <button
                            onClick={() => fetchNextPage()}
                            disabled={isFetchingNextPage}
                            className="inline-flex items-center px-10 py-3.5 bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-black rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50"
                        >
                            {isFetchingNextPage ? 'Loading...' : 'Load more events'}
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
