import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { TicketmasterResponse } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;
const COUNTRY_CODE = import.meta.env.VITE_COUNTRY_CODE || 'MX'; // Default to MX based on screenshots

interface FetchEventsParams {
    searchTerm?: string;
    page: number;
    category?: string;
    startDateTime?: string;
    endDateTime?: string;
}

const fetchEvents = async ({ searchTerm = '', page = 0, category = '', startDateTime, endDateTime }: FetchEventsParams): Promise<TicketmasterResponse> => {
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&page=${page}&size=20&countryCode=${COUNTRY_CODE}`;

    if (searchTerm) url += `&keyword=${encodeURIComponent(searchTerm)}`;
    if (category) url += `&classificationName=${encodeURIComponent(category)}`;
    if (startDateTime) url += `&startDateTime=${startDateTime}`;
    if (endDateTime) url += `&endDateTime=${endDateTime}`;

    // Sort by date as default for better UX
    url += '&sort=date,asc';

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export const useEventsQuery = (searchTerm: string = '', category: string = '', startDateTime?: string, endDateTime?: string) => {
    return useInfiniteQuery({
        queryKey: ['events', searchTerm, category, startDateTime, endDateTime],
        queryFn: ({ pageParam = 0 }) => fetchEvents({ searchTerm, page: pageParam, category, startDateTime, endDateTime }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            const current = lastPage.page?.number ?? 0;
            const total = lastPage.page?.totalPages ?? 0;
            return current + 1 < total ? current + 1 : undefined;
        },
        staleTime: 1000 * 60 * 5,
    });
};

export const useEventDetailQuery = (eventId: string) => {
    return useQuery({
        queryKey: ['event', eventId],
        queryFn: async (): Promise<any> => {
            const url = `https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${API_KEY}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
        enabled: !!eventId,
    });
};
