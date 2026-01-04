import React from 'react';
import { Event } from '../types';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface EventCardProps {
    event: Event;
    isLiked: boolean;
    onToggleLike: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, isLiked, onToggleLike }) => {
    const imageUrl = event.images.find((img: any) => img.ratio === '16_9' && img.width > 600)?.url || event.images[0].url;
    const venue = event._embedded?.venues?.[0];

    // Format Date for badge
    const dateObj = new Date(event.dates.start.localDate);
    const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    const monthNamesFull = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();

    return (
        <article className="bg-white dark:bg-card-dark rounded-[24px] shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group flex flex-col h-full">
            {/* Image Container with Badges */}
            <div className="relative h-60 overflow-hidden">
                <Link to={`/detail/${event.id}`}>
                    <img
                        alt={event.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        src={imageUrl}
                    />
                </Link>

                {/* Date Badge - White Box Style */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-black/80 backdrop-blur-sm rounded-xl px-3.5 py-1.5 text-center shadow-xl border border-white/20">
                    <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-tighter leading-none mb-0.5">{month}</p>
                    <p className="text-2xl font-black text-primary leading-none">{day < 10 ? `0${day}` : day}</p>
                </div>

                {/* Category Sticker - Vibrant Purple */}
                <div className="absolute top-4 left-4">
                    <span className="bg-[#7C3AED] text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-lg uppercase tracking-wider backdrop-blur-sm">
                        {event.classifications?.[0]?.segment?.name || 'Evento'}
                    </span>
                </div>

                {/* Floating Heart Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onToggleLike(event.id);
                    }}
                    className="absolute bottom-4 right-4 p-2.5 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-all transform active:scale-90 border border-white/20 opacity-0 group-hover:opacity-100"
                >
                    <Heart
                        className="w-5 h-5 transition-colors"
                        fill={isLiked ? "#ef4444" : "none"}
                        color={isLiked ? "#ef4444" : "white"}
                    />
                </button>
            </div>

            <div className="p-7 flex-grow flex flex-col">
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {event.name}
                </h3>

                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-6 font-medium">
                    <span className="material-icons text-primary text-base mr-2">location_on</span>
                    <span className="truncate">{venue?.name || 'TBA'}, {venue?.city?.name || ''}</span>
                </div>

                <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Desde</span>
                        <span className="text-base font-black text-gray-900 dark:text-white">$1,500</span>
                    </div>
                    <Link
                        to={`/detail/${event.id}`}
                        className="inline-flex items-center text-sm font-black text-primary hover:text-violet-700 transition-all group/link"
                    >
                        Ver Detalles
                        <span className="material-icons text-sm ml-1.5 transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </article>
    );
};
