import emptyStar from "../assets/empty_star.png"
import filledStar from "../assets/filled_star.png"


export default function Star(props){
    let starIcon = props.isFilled? filledStar: emptyStar
    
    return(
        <button
            onClick = {props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            
            <img
                src={starIcon}
                alt={props.isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>    
    )

}