import styles from './Error.module.css'
import errorImage from '../../assets/error404.jpg';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{error.status} Ops!</h3>
            <p className={styles.description}>{error.data}</p>
            <img src={errorImage} alt='Error 404'></img>
        </div>
    );
};

export default Error;