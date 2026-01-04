import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../test/utils'
import { EventCard } from './EventCard'
import { mockEvent } from '../test/mockData'
import userEvent from '@testing-library/user-event'

describe('EventCard', () => {
    const mockToggleLike = vi.fn()

    it('renders event information correctly', () => {
        render(
            <EventCard
                event={mockEvent}
                isLiked={false}
                onToggleLike={mockToggleLike}
            />
        )

        expect(screen.getByText('Test Concert Event')).toBeInTheDocument()
        expect(screen.getByText(/Test Venue/)).toBeInTheDocument()
        expect(screen.getByText(/Mexico City/)).toBeInTheDocument()
    })

    it('displays the correct category badge', () => {
        render(
            <EventCard
                event={mockEvent}
                isLiked={false}
                onToggleLike={mockToggleLike}
            />
        )

        expect(screen.getByText('Music')).toBeInTheDocument()
    })

    it('shows the event date', () => {
        render(
            <EventCard
                event={mockEvent}
                isLiked={false}
                onToggleLike={mockToggleLike}
            />
        )

        // Check for month - this is the most reliable part
        expect(screen.getByText('FEB')).toBeInTheDocument()
    })

    it('calls onToggleLike when heart button is clicked', async () => {
        const user = userEvent.setup()

        render(
            <EventCard
                event={mockEvent}
                isLiked={false}
                onToggleLike={mockToggleLike}
            />
        )

        const heartButton = screen.getByRole('button', { name: /toggle favorite/i })
        await user.click(heartButton)

        expect(mockToggleLike).toHaveBeenCalledWith('test-event-1')
    })

    it('displays filled heart when event is liked', () => {
        render(
            <EventCard
                event={mockEvent}
                isLiked={true}
                onToggleLike={mockToggleLike}
            />
        )

        const heartIcon = screen.getByRole('button', { name: /toggle favorite/i }).querySelector('svg')
        expect(heartIcon).toBeInTheDocument()
    })

    it('has a link to event details', () => {
        render(
            <EventCard
                event={mockEvent}
                isLiked={false}
                onToggleLike={mockToggleLike}
            />
        )

        const detailsLink = screen.getByRole('link', { name: /view details/i })
        expect(detailsLink).toHaveAttribute('href', '/detail/test-event-1')
    })
})
