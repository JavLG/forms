import './Waves.module.scss';


const Waves = ({styles}) => {
    return (
        <div className="nada">
            <div className={styles.center}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>
        </div>
    )
}

export default Waves;
