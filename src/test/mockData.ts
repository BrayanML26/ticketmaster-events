import { Event } from '../types'

export const mockEvent: Event = {
    id: 'test-event-1',
    name: 'Test Concert Event',
    url: 'https://example.com/event',
    dates: {
        start: {
            localDate: '2026-02-15',
            localTime: '20:00:00',
        },
    },
    images: [
        {
            url: 'https://example.com/image.jpg',
            width: 1024,
            height: 576,
        },
    ],
    classifications: [
        {
            segment: {
                name: 'Music',
            },
            genre: {
                name: 'Rock',
            },
        },
    ],
    _embedded: {
        venues: [
            {
                name: 'Test Venue',
                city: {
                    name: 'Mexico City',
                },
                country: {
                    name: 'Mexico',
                },
            },
        ],
    },
}

export const mockEvents: Event[] = [
    mockEvent,
    {
        ...mockEvent,
        id: 'test-event-2',
        name: 'Test Sports Event',
        classifications: [
            {
                segment: {
                    name: 'Sports',
                },
                genre: {
                    name: 'Football',
                },
            },
        ],
    },
    {
        ...mockEvent,
        id: 'test-event-3',
        name: 'Test Theater Event',
        classifications: [
            {
                segment: {
                    name: 'Arts & Theatre',
                },
                genre: {
                    name: 'Musical',
                },
            },
        ],
    },
]
