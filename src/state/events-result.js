import { create } from "zustand";

const useEventsResults = create((set) => ({
    data: [],
    error: null,
    isLoading: false,
    fetchEvents: async (params) => {
        try {
            await set(() => ({ isLoading: true }))

            const response = await fetch(
                `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_API_KEY}&countryCode=${import.meta.env.VITE_COUNTRY_CODE}${params?.length ? params : ''}`
            );
            const data = await response.json();

            await set(() => ({ data, isLoading: false }))
        } catch (error) {
            await set(() => ({ error }))
        }
    },
}));

export default useEventsResults;