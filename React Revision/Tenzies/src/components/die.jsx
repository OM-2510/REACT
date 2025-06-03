export default function Die(props){
    let styles = {backgroundColor : props.isHeld?"#59E391":"F5F5F5"}    
    
    return(
        <button 
            onClick={()=>props.hold(props.id)} 
            style={styles}
        > {props.value} </button>

    )
}