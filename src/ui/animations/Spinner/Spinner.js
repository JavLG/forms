import styles from './Spinner.module.scss';

export const Spinner = () => {
    return (
        <div>
            <div className={styles.container}id="container">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <filter id="shadow">
                            <feDropShadow dx="0" dy="0" stdDeviation="1.5"
                                floodColor="#fc6767" />
                        </filter>
                    </defs>
                    <circle id="spinner" className={styles.spinner} style={{ 
                    "fill": "transparent", 
                    "stroke": "#dd2476", 
                    "stroke-width": "7px", 
                    "stroke-linecap": "round", 
                    "filter": "url(#shadow)" }} 
                    cx="50" cy="50" 
                    r="45" />
                </svg>
            </div>
        </div>
    )
}

export default Spinner;
