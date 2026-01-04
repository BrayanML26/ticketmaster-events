import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UIState } from '../types';

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            searchTerm: '',
            favorites: [],
            setSearchTerm: (term) => set({ searchTerm: term }),
            toggleFavorite: (eventId) =>
                set((state) => ({
                    favorites: state.favorites.includes(eventId)
                        ? state.favorites.filter((id) => id !== eventId)
                        : [...state.favorites, eventId],
                })),
        }),
        {
            name: 'ticketmaster-ui-storage',
        }
    )
);
