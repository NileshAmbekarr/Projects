import Icon from '../Icon/Icon';
import './Card.css'
function Card({gameEnd , player , onPlay, index}){
    let icon ;
    if (player == 'X') {
        icon = <Icon name="cross"  size={30} />;
    } else if (player == 'O') {
        icon = < Icon name="circle"  size={30}/>;
    } else {
        icon = <Icon />  // Simplified fallback
    }

    return(
        <div className='Cards' onClick ={() => !gameEnd && player == "" && onPlay(index)}>
            {icon}
        </div>
    )
}

export default Card;