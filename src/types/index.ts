export interface Event {
    name: string;
    id: string;
    url: string;
    images: Array<{
        url: string;
        width: number;
        height: number;
    }>;
    dates: {
        start: {
            localDate: string;
            localTime?: string;
        };
    };
    classifications: Array<{
        segment?: { name: string };
        genre?: { name: string };
        subGenre?: { name: string };
    }>;
    _embedded?: {
        venues: Array<{
            name: string;
            city?: { name: string };
            country?: { name: string };
        }>;
    };
}

export interface PageInfo {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

export interface TicketmasterResponse {
    _embedded?: {
        events: Event[];
    };
    page: PageInfo;
}

export interface UIState {
    searchTerm: string;
    favorites: string[];
    setSearchTerm: (term: string) => void;
    toggleFavorite: (eventId: string) => void;
}
