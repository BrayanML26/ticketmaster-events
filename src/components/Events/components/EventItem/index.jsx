import styles from './EventItem.module.css';

const EventItem = ({ info, id, name, image, onEventClick }) => {

    const handleSeeMoreClick = (evt) => {
        evt.stopPropagation();
        onEventClick(id);
    };

    return (
        <div onClick={() => console.log('padre clickeado')} className={styles.eventItemContainer}>
            <img src={image} alt={name} width={250} height={250} />
            <div className={styles.eventInfoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
                    {/* <Link to={`/detail/${id}`}>
                        Ver mas
                    </Link> */}
                    Ver mas
                </button>
            </div>
        </div>
    );
};

export default EventItem;