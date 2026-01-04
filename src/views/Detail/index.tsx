import { useParams, useNavigate } from 'react-router-dom';
import { useEventDetailQuery, useEventsQuery } from '../../hooks/useEventsQuery';
import { useUIStore } from '../../state/useUIStore';
import { Heart, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { EventCard } from '../../components/EventCard';

const Detail = () => {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const { favorites, toggleFavorite } = useUIStore();
    const { data: event, isLoading, isError } = useEventDetailQuery(eventId || '');

    // Fetch related events based on category
    const category = event?.classifications?.[0]?.segment?.name || '';
    const { data: relatedData } = useEventsQuery('', category);

    // Filter out current event from related
    const relatedEvents = (relatedData?.pages?.[0]?._embedded?.events || [])
        .filter((e: any) => e.id !== eventId)
        .slice(0, 3);

    if (isLoading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    if (isError || !event) return (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
            <h1 className="text-2xl font-bold">Oops! We couldn't find the event.</h1>
            <button onClick={() => navigate('/')} className="btn-primary mx-auto">Back to home</button>
        </div>
    );

    const imageUrl = event.images.find((img: any) => img.ratio === '16_9' && img.width > 600)?.url || event.images[0].url;
    const isLiked = favorites.includes(event.id);
    const date = new Date(event.dates.start.localDate);
    const venue = event._embedded?.venues?.[0];

    return (
        <div className="min-h-screen bg-white dark:bg-[#111827]">
            {/* Header / Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center text-sm font-black text-gray-400 hover:text-primary transition-colors uppercase tracking-widest"
                >
                    <ChevronLeft className="w-5 h-5 mr-1" /> Back
                </button>
            </div>

            <main className="max-w-7xl mx-auto px-4 pb-24 space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Image and Details */}
                    <div className="lg:col-span-8 space-y-10">
                        <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100 dark:border-gray-800">
                            <img src={imageUrl} alt={event.name} className="w-full aspect-video object-cover" />
                            <div className="absolute top-6 left-6">
                                <span className="bg-[#7C3AED] text-white text-xs font-black px-4 py-2 rounded-xl shadow-lg uppercase tracking-wider">
                                    {category}
                                </span>
                            </div>
                            <button
                                onClick={() => toggleFavorite(event.id)}
                                className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white hover:bg-white/20 transition-all"
                            >
                                <Heart fill={isLiked ? "#ef4444" : "none"} color={isLiked ? "#ef4444" : "white"} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
                                {event.name}
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="material-icons text-primary text-base">event</span>
                                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                                        {format(date, "EEEE d MMMM", { locale: enUS })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <span className="material-icons text-primary text-base">location_on</span>
                                    <span className="text-sm font-bold text-gray-600 dark:text-gray-300">
                                        {venue?.name}, {venue?.city?.name}
                                    </span>
                                </div>
                            </div>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                    {event.info || event.pleaseNote || "Enjoy a unique and unforgettable experience with this amazing event in your city. Don't miss the opportunity to be part of this special moment."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Pricing/Booking */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 bg-gray-50 dark:bg-card-dark rounded-[32px] p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-8">
                            <div className="space-y-2">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Ticket Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-gray-900 dark:text-white">$1,500</span>
                                    <span className="text-gray-500 font-bold">MXN</span>
                                </div>
                            </div>

                            <a
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center btn-primary !py-5 !text-base shadow-xl shadow-primary/30"
                            >
                                Book Tickets
                            </a>

                            <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-icons">verified</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400">100% Official Tickets</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                                        <span className="material-icons">confirmation_number</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400">Instant Confirmation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Events Section */}
                {relatedEvents.length > 0 && (
                    <section className="space-y-8 pt-16 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-end justify-between">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">You might also like</h2>
                                <p className="text-gray-500 font-medium">Similar events you might love.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedEvents.map((relatedEvent: any) => (
                                <EventCard
                                    key={relatedEvent.id}
                                    event={relatedEvent}
                                    isLiked={favorites.includes(relatedEvent.id)}
                                    onToggleLike={toggleFavorite}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Detail;
