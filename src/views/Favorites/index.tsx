import { useNavigate } from 'react-router-dom';
import { useUIStore } from '../../state/useUIStore';
import { Heart } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { FavoriteCardSkeleton } from '../../components/FavoriteCardSkeleton';


const API_KEY = import.meta.env.VITE_API_KEY;

const fetchMultipleEvents = async (ids: string[]) => {
    if (ids.length === 0) return [];
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&id=${ids.join(',')}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch favorite events');
    const data = await response.json();
    return data._embedded?.events || [];
};

const Favorites = () => {
    const { favorites, toggleFavorite } = useUIStore();
    const navigate = useNavigate();

    const { data: events, isLoading } = useQuery({
        queryKey: ['favorite-events', favorites],
        queryFn: () => fetchMultipleEvents(favorites),
        enabled: favorites.length > 0,
    });

    return (
        <div className="min-h-screen bg-white dark:bg-[#111827]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 dark:border-gray-800 pb-10">
                    <div className="space-y-2">
                        <span className="inline-block py-1 px-3 rounded-lg bg-red-500/10 text-red-500 text-[10px] font-black tracking-widest uppercase mb-2">
                            Tu Selección Personal
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white">Mis Favoritos</h2>
                        <p className="text-gray-500 dark:text-gray-400 font-bold text-lg">Eventos que no te quieres perder por nada del mundo.</p>
                    </div>
                    <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-3xl border border-gray-100 dark:border-gray-700">
                        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-card-dark shadow-sm flex items-center justify-center text-red-500">
                            <Heart className="w-6 h-6 fill-current" />
                        </div>
                        <div>
                            <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">{favorites.length}</p>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Guardados</p>
                        </div>
                    </div>
                </div>

                {favorites.length === 0 ? (
                    <div className="py-32 text-center space-y-8 flex flex-col items-center max-w-lg mx-auto">
                        <div className="w-32 h-32 rounded-[40px] bg-gray-50 dark:bg-gray-800 flex items-center justify-center shadow-inner group">
                            <Heart className="w-16 h-16 text-gray-200 dark:text-gray-700 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-gray-900 dark:text-white font-black text-3xl tracking-tight">Tu lista está vacía</h3>
                            <p className="text-gray-400 dark:text-gray-500 font-bold text-lg leading-relaxed">
                                Explora los mejores eventos en tu ciudad y guárdalos aquí para tenerlos siempre a mano. ¡Tu próxima gran experiencia comienza ahora!
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="btn-primary px-12 !py-4 shadow-xl shadow-primary/20"
                        >
                            Explorar eventos
                        </button>
                    </div>
                ) : isLoading ? (
                    <div className="grid grid-cols-1 gap-8">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <FavoriteCardSkeleton key={index} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8">
                        {events?.map((event: any) => (
                            <div
                                key={event.id}
                                onClick={() => navigate(`/detail/${event.id}`)}
                                className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-[32px] bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all group cursor-pointer shadow-sm hover:shadow-2xl"
                            >
                                <div className="w-full md:w-48 h-48 flex-shrink-0 rounded-[28px] overflow-hidden relative shadow-lg">
                                    <img
                                        src={event.images.find((img: any) => img.ratio === '16_9')?.url || event.images[0].url}
                                        alt={event.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                <div className="flex-grow space-y-4 text-center md:text-left">
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                        <span className="bg-[#7C3AED]/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border border-primary/10">
                                            {event.classifications?.[0]?.segment?.name || 'Evento'}
                                        </span>
                                        <span className="bg-green-500/10 text-green-600 text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest border border-green-500/10">
                                            {event.dates?.start?.localDate}
                                        </span>
                                    </div>
                                    <h3 className="font-black text-2xl md:text-3xl text-gray-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                                        {event.name}
                                    </h3>
                                    <div className="flex items-center justify-center md:justify-start text-sm font-bold text-gray-500">
                                        <span className="material-icons text-primary text-lg mr-2">location_on</span>
                                        {event._embedded?.venues?.[0]?.name}, {event._embedded?.venues?.[0]?.city?.name}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleFavorite(event.id);
                                        }}
                                        className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm border border-transparent text-red-500 hover:bg-red-50 hover:border-red-100 dark:hover:bg-red-900/10 transition-all group/btn"
                                    >
                                        <Heart className="w-6 h-6 fill-current group-hover/btn:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Info Box */}
                <div className="mt-20 p-10 bg-gray-50 dark:bg-card-dark rounded-[40px] border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center gap-8 shadow-inner">
                    <div className="w-20 h-20 rounded-3xl bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-icons text-4xl">security</span>
                    </div>
                    <div className="space-y-2 text-center md:text-left">
                        <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-wider">Tu privacidad es lo primero</h4>
                        <p className="text-gray-500 dark:text-gray-400 font-bold text-sm leading-relaxed max-w-2xl">
                            Esta lista se guarda exclusivamente en tu navegador de forma local. No compartimos tus gustos con terceros y tus favoritos viajarán contigo mientras no borres los datos del sitio.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Favorites;
