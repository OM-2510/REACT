export default function Languages(props){
    const styles = {
        backgroundColor : props.backgroundColor,
        color : props.color
    }
    
    return(
        <div className={`lang-box ${props.isLanguageLost ? "lang-box-lost" : ""}`} style={styles}>
            {props.name}
        </div>
    )
}