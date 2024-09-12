import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';

const Detail = () => {
    const { eventId } = useParams();

    const [eventData, setEvenData] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_API_KEY}`);
                const data = await response.json();

                setEvenData(data);
                setIsLoading(false);
            } catch (error) {
                setEvenData({});
                setError(error);
                setIsLoading(false);
            }
        };

        fetchEventData();
    }, []);

    console.log(eventData);
    return <div>Detail</div>;
}

export default Detail;