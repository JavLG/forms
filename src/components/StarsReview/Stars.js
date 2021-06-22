
const Stars = ({score, total, styles, outline, count}) => {

    let qualification = [];
    if(outline === true){
        for (var i = 0; i < total; i++) {
            if(i < score){
                qualification.push(<img className={styles.img} src="./assets/stars.png" alt="stars-review"/>);
            }
            else {
                qualification.push(<img className={[styles.img,'opacity-40'].join(' ')} src="./assets/stars.png" alt="stars-review"/>);
            }
        }
    }
    else {
        for (var j = 0; j < total; j++) {
            if(i < score){
                qualification.push(<img className={styles.img} src="./assets/stars.png" alt="stars-review"/>);
            }

        }
    }


    return (
        <div className={styles.div}>
        {qualification.map(elem => elem)}
        {count && <p className="text-sm text-gray-500 tracking-tight whitespace-nowrap">{score && total ? `${score} / ${total}`: {score}}</p>}
        </div>
    )
}

export default Stars;