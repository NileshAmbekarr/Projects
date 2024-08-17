import Icon from '../Icon/Icon';
import './Card.css'
function Card({player}){
    let icon ;
    if (player == 'X') {
        icon = <Icon name="cross" />;
    } else if (player == 'O') {
        icon = <Icon name="circle" />;
    } else {
        icon = <Icon />  // Simplified fallback
    }

    return(
        <div className='Cards'>
            {icon}
        </div>
    )
}

export default Card;