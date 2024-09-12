import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';
import { format } from 'date-fns';
import { es } from "date-fns/locale";

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

    if (isLoading && Object.keys(eventData) === 0) {
        return <div>Cargando evento...</div>
    }

    if (Object.keys(error) > 0) {
        return <div>Ha ocurrido un error...</div>
    }

    console.log(eventData);
    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={eventData.images?.[0].url} />
                <h4>{eventData.name}</h4>
                <p>{eventData.info}</p>
                <p> {eventData?.dates?.start?.dateTime && !isNaN(new Date(eventData.dates.start.dateTime).getTime()) 
                    ? format(new Date(eventData.dates.start.dateTime), 'd LLLL yyyy H:mm', { locale: es })
                    : 'Fecha no disponible'}hrs
                </p>

            </div>
        </div>
    );
}

export default Detail;