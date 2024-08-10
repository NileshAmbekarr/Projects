import {Icon } from '../Icon/Icon';

function Card({player}){
    let icon = <Icon />

    if (player == 'X') {
        icon = <Icon name = "cross"/>
    }else if(player == 'O'){
        icon = <Icon name = "circle"/>
    }

    return(
        <div>
            {icon}
        </div>
    )
}

export default Card;