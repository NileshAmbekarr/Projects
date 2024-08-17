import Icon from '../Icon/Icon';
import './Card.css'
function Card({player , onPlay, index}){
    let icon ;
    if (player == 'X') {
        icon = <Icon name="cross" />;
    } else if (player == 'O') {
        icon = <Icon name="circle" />;
    } else {
        icon = <Icon />  // Simplified fallback
    }

    return(
        <div className='Cards' onClick ={() => onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;